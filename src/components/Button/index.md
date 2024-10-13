# Button

This is an example component.

```jsx
import { Button } from 'react-components';

export default () => (
  <Button
    type="danger"
    ghost
    // shape="circle"
    size="small"
    // disabled
    // icon={<div>icon</div>}
    // debounce={3}
    throttle={3}
    onClick={() => {
      console.log(111);
    }}
  >
    test
  </Button>
);
```