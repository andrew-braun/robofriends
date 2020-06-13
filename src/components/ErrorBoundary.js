import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
componentDidCatch(error, info) {
    this.setState({
        hasError: true
    })
}

    render () {
        if (this.state.hasError) {
            return(
                <p>The site is broken, and it's all your fault.
                    Just kidding. We know whose fault it is, and that 
                    person has made a public apology. We'll do better next time.
                </p>
            )
        }
        return (this.props.children)
    }
}

export default ErrorBoundary;