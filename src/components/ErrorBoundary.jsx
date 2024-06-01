import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" className="error-boundary">
    <h2>Something went wrong.</h2>
    <p>{error?.message}</p>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default ErrorFallback;
