import './index.css';
import { Suspense, lazy } from 'react';
import Message from './components/Message';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { messageTextError } from './constants/generalText';
import { SnackbarUtilitiesConfigutator } from './components/Snackbar/snackbar-manager';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const Home = lazy(() => import('./pages/Home'));
  return (
    <Suspense fallback={<Message />}>
      <ErrorBoundary fallback={<Message text={messageTextError} />}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <SnackbarUtilitiesConfigutator />
            <Home />
          </ChakraProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
