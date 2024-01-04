import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from '../components/auth-component';

function Login() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (isLoading || email === '' || password === '') return;
    try {
      setLoading(true);
      // 파이어베이스 로그인 요청
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e) {
      if (e instanceof FirebaseError) setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Log into 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input
          value={email}
          onChange={onChange}
          name='email'
          type='email'
          placeholder='email'
          required
        />
        <Input
          value={password}
          onChange={onChange}
          name='password'
          type='password'
          placeholder='password'
          required
        />
        <Input value={isLoading ? 'Loading...' : 'Login'} type='submit' />
      </Form>
      {error !== '' ? <Error>Error Message</Error> : null}
      <Switcher>
        Don&apos;t you have an account?{' '}
        <Link to='/create-account'>Create account</Link>
      </Switcher>
    </Wrapper>
  );
}

export default Login;
