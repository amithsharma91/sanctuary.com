import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message || "An unexpected error occurred." };
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-50 px-6">
          <div className="max-w-lg text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-light text-foreground-950 mb-4">
              Something went wrong.
            </h1>
            <p className="text-sm font-body text-secondary-500 mb-6">
              {this.state.errorMessage}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-luxury inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 whitespace-nowrap"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}