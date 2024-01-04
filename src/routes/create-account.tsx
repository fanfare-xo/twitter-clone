import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FirebaseError } from 'firebase/app';
import { auth } from '../firebase';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 100%;
  padding: 50px 0px;
`;

const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  &[type='submit'] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Error = styled.span`
  margin-top: 15px;
  text-align: center;
  font-weight: 600;
  color: tomato;
`;

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
          type='text'
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
    </Wrapper>
  );
}

export default CreateAccount;
