import { useState } from 'react';
    import { useAuth } from '../../context/AuthContext';
    import { useRouter } from 'next/router';

    export default function Signup() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { signup } = useAuth();
      const router = useRouter();

      async function handleSubmit(e) {
        e.preventDefault();
        try {
          await signup(email, password);
          router.push('/dashboard');
        } catch (err) {
          setError('Failed to create account');
        }
      }

      return (
        <div>
          <h1>Sign Up</h1>
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    }
