import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state to render fallback UI
        return { hasError: true };
    }

    // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //     // You can log the error or send it to an error reporting service here
    //     console.error("Error caught by ErrorBoundary:", error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            return (
                <main>
                    <div className="sm-alert errmsg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Something went wrong.</span>
                    </div>
                </main>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
