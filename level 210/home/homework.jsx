import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    if (this.props.onError) this.props.onError(error, info);
  }

  reset = () => {
    this.setState({ hasError: false, error: null, info: null });
  };

  renderFallback() {
    if (this.props.fallback) return this.props.fallback;

    return (
      <div className="min-h-[40vh] flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Something went wrong.</h2>
        <p className="mb-4 text-sm">An unexpected error occurred. Try refreshing or contact support.</p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded-lg border hover:shadow-md"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
          <button
            className="px-4 py-2 rounded-lg border hover:shadow-md"
            onClick={this.reset}
          >
            Try again
          </button>
        </div>
        {this.state.error && (
          <details className="mt-4 text-xs max-w-prose text-left break-words">
            <summary className="cursor-pointer">Error details</summary>
            <pre className="whitespace-pre-wrap">{String(this.state.error?.stack || this.state.error)}</pre>
            {this.state.info && (
              <pre className="whitespace-pre-wrap">{JSON.stringify(this.state.info, null, 2)}</pre>
            )}
          </details>
        )}
      </div>
    );
  }

  render() {
    if (this.state.hasError) return this.renderFallback();
    return this.props.children;
  }
}