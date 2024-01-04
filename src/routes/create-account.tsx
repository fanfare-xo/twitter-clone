import { useState } from 'react';
import styled from 'styled-components';

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
  font-weight: 600;
  color: tomato;
`;

function CreateAccount() {
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // 회원 등록 로직
    } catch (e) {
      // 에러 발생 로직
    } finally {
      setLoading(false);
      console.log(username, email, password);
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
