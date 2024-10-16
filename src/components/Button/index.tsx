import React, { useRef, useState } from 'react';
import { getPrefixCls } from '../utils';
import clsx from 'clsx';
import './index.less';

export type ButtonType =
  | undefined
  | 'primary'
  | 'dashed'
  | 'danger'
  | 'link'
  | 'text';

export type ButtonSize = undefined | 'large' | 'small';

export type ThrottleRender = React.ReactElement

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
  'type'
> &
  Partial<{
    /**
     *  按钮的背景色
     */
    type: ButtonType;
    size: ButtonSize;
    ghost: boolean;
    shape: 'circle';
    disabled: boolean;
    icon: React.ReactNode;
    debounce: number | boolean;
    throttle: number | boolean;
    throttleDom: ThrottleRender
  }>;

const prefixCls = getPrefixCls('btn');

export default function Button({
  type,
  size,
  ghost = false,
  shape,
  children,
  disabled,
  icon,
  debounce,
  throttle,
  onClick,
  throttleDom,
  ...rest
}: ButtonProps) {
  const [disabledToState, setDisabledToState] = useState(disabled);
  /** 防抖、节流计时器 */
  const timer = useRef<ReturnType<typeof setTimeout>>();
  /** 节流 */
  const [count, setCount] = useState(0);

  const handleDebounce = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (timer?.current) {
      clearTimeout(timer?.current);
    }
    timer.current = setTimeout(
      () => {
        if (!disabledToState) {
          onClick && onClick?.(e);
        }
      },
      debounce ? (typeof debounce === 'boolean' ? 1000 : debounce * 1000) : 0,
    );
  };

  /**
   * 节流
   */
  const handleThrottle = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    let time = throttle ? (typeof throttle === 'boolean' ? 1 : throttle) : 0;
    setCount(time);
    setDisabledToState(true);
    timer.current = setInterval(() => {
      if (time > 0) {
        if (!disabledToState) {
          setDisabledToState(true);
        }
        time = time - 1;
        setCount(time);
      }
      if (time <= 0) {
        onClick && onClick?.(e);
        setDisabledToState(false);
        clearInterval(timer.current);
      }
    }, 1000);
  };

  return (
    <button
      {...rest}
      className={clsx(prefixCls, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${type}-ghost`]: ghost,
        [`${prefixCls}-${type}-${shape}`]: shape,
        [`${prefixCls}-${type}-disabled`]: disabledToState,
      })}
      onClick={(e) => {
        if (debounce) {
          handleDebounce(e);
        }
        if (throttle && !disabledToState) {
          handleThrottle(e);
        }
        if (!throttle && !debounce) {
          onClick && onClick?.(e);
        }
      }}
    >
      {icon}
      {throttle && count ? <div>{count}{throttleDom ? throttleDom : `s后可点击`}</div> : null}
      {throttle && count ? null : children}
    </button>
  );
}