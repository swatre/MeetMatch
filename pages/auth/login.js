import { useState } from 'react';
    import { useAuth } from '../../context/AuthContext';
    import { useRouter } from 'next/router';

    export default function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { login, googleLogin } = useAuth();
      const router = useRouter();

      async function handleSubmit(e) {
        e.preventDefault();
        try {
          await login(email, password);
          router.push('/dashboard');
        } catch (err) {
          setError('Failed to log in');
        }
      }

      async function handleGoogleLogin() {
        try {
          await googleLogin();
          router.push('/dashboard');
        } catch (err) {
          setError('Failed to log in with Google');
        }
      }

      return (
        <div>
          <h1>Login</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
      );
    }
