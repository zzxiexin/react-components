import React from 'react';
import { Button } from 'yxhooks';

export default function App() {
  return (
    <div id="component-demo">
      <Button type="primary" size="large">
        Large
      </Button>
      <Button type="danger">Default</Button>
      <Button type="dashed" size="small">
        Small
      </Button>
    </div>
  );
}
