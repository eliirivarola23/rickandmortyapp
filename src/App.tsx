import { Suspense, lazy } from 'react';
import './App.css';
import Message from './components/Message';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { messageTextError } from './constants/generalText';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './components/Snackbar/snackbar-manager';

function App() {
  const Home = lazy(() => import('./pages/Home'));
  return (
    <Suspense fallback={<Message />}>
      <ErrorBoundary fallback={<Message text={messageTextError} />}>
        <SnackbarProvider>
          <SnackbarUtilitiesConfigutator />
          <Home />
        </SnackbarProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
