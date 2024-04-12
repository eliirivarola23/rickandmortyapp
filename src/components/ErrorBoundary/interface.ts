export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
