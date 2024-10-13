import React from 'react';
import { Button } from '@zzxiexin/react-components';

export default function App() {
  return (
    <div id="component-demo">
      <Button type="primary" disabled onClick={() => console.log('click')}>
        Primary disabled
      </Button>
      <Button type="dashed" size="small" disabled>
        Dashed disabled
      </Button>
    </div>
  );
}
