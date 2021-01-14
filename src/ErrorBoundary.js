import React from 'react';
import { Link } from 'react-router-dom'

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }



    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log("ErrorBoundy catch an error", error, info)
    }
    render() {
        if (this.state.hasError) {
            return (
                <h1>
                    There is a Error with this listing.<Link to="/" >Click here</Link>
                    {""}
                    to go back to the home page or wait five seconds
                </h1>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundry;