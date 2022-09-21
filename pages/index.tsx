import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import type MyComponent from '../components/MyComponent';

const MyDynamicComponentSuspense = dynamic(() => (import('../components/MyComponent')), { suspense: true }) as unknown as typeof MyComponent;
const MyDynamicComponent = dynamic(() => (import('../components/MyComponent'))) as unknown as typeof MyComponent;


/** Add your relevant code here for the issue to reproduce */
export default class Index extends React.Component {
    private myComponentRef: React.RefObject<MyComponent> = React.createRef();
    private myComponentSuspenseRef: React.RefObject<MyComponent> = React.createRef();

    componentDidMount() {
      setTimeout(() => {
        console.log('Component', this.myComponentRef.current);
        console.log('Component with suspense', this.myComponentSuspenseRef.current);
      }, 1000);
        
    }

    render() {
        return (
          <Suspense fallback={`Loading...`}>
            <MyDynamicComponent ref={this.myComponentRef}>Without Suspense Option</MyDynamicComponent>
            <MyDynamicComponentSuspense ref={this.myComponentSuspenseRef}>With Suspense Option</MyDynamicComponentSuspense>
          </Suspense>
        )
    }
}
