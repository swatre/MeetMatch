import { AuthProvider } from '../context/AuthContext';
    import ErrorBoundary from '../components/ErrorBoundary';
    import '../styles/globals.css';

    function MyApp({ Component, pageProps }) {
      return (
        <ErrorBoundary>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ErrorBoundary>
      );
    }

    export default MyApp;
