import React, { Component } from 'react';

export default class RenderProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme = () => {
        if(this.state.theme === 'light') {
            this.setState({ theme: 'dark' })
        } else {
            this.setState({ theme: 'light' })
        }
    }

    render() {
        return (
            this.props.render(this.state.theme, this.toggleTheme)
        )
    }
}