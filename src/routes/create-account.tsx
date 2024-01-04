import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { auth } from '../firebase';
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from '../components/auth-component';

function CreateAccount() {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (isLoading || username === '' || email === '' || password === '') return;
    try {
      // 1. 계정 생성
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(credentials.user);
      // 2. 사용자 이름 설정
      await updateProfile(credentials.user, {
        displayName: username,
      });
      // 3. 홈 경로 이동
      navigate('/');
    } catch (e) {
      // 에러 발생 로직
      if (e instanceof FirebaseError) setError(e.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Join 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input
          value={username}
          onChange={onChange}
          name='username'
          type='text'
          placeholder='username'
          required
        />
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
        <Input
          value={isLoading ? 'Loading...' : 'Create Account'}
          type='submit'
        />
      </Form>
      {error !== '' ? <Error>Error Message</Error> : null}
      <Switcher>
        Already have an account? <Link to='/login'>Login</Link>
      </Switcher>
    </Wrapper>
  );
}

export default CreateAccount;
