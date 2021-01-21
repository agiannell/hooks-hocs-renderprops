import React from 'react'

export default function(BaseComponent) {
    return class WithToggle extends React.Component {
        state = {
            theme: 'light'
        }

        toggleTheme = () => {
            if(this.state.theme === 'light') {
                this.setState({ theme: 'dark' })
            } else {
                this.setState({ theme: 'light' })
            }
        }

        render() {
            const themeObj = {
                theme: this.state.theme,
                toggleFn: this.toggleTheme
            }

            return (
                <BaseComponent themeObj={ themeObj } { ...this.props } />
            )
        }
    }
}