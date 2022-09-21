import React from 'react';

export default class MyComponent extends React.Component<{ children?: any }> {
    render () {
        return (
            <p>{this.props.children}</p>
        )
    }
}
