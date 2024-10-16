import React from 'react';
import { Button } from 'yxx-component';

export default function App() {
    return (
        <div id="component-demo">
            <Button type="primary" throttle={10} onClick={() => console.log('click')} throttleDom={<div style={{ display: 'inline' }}>你干嘛～～</div>}>
                节流按钮
            </Button>
        </div>
    );
}
