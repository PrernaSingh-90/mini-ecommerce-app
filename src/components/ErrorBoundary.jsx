import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "50px", textAlign: "center", color: "#333"}}>
                    <h1>⚠️ Something went wrong!</h1>
                    <p>We are sorry for the inconvenience. Please refresh the page.</p>
                    <button onClick={() => window.location.reload()}
                        style={{ padding: "10px 20px", background: "#6200ea", color: "white", border: "none", cursor: "pointer", borderRadius: "5px"}}>
                            Refresh Page
                        </button>
                </div>
            );
        };
        return this.props.children;
    }
}

export default ErrorBoundary;

