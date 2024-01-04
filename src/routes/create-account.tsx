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
  return (
    <Wrapper>
      <Title>Join 𝕏</Title>
      <Form>
        <Input name='username' type='text' placeholder='Username' required />
        <Input name='email' type='text' placeholder='Email' required />
        <Input name='password' type='text' placeholder='Password' required />
        <Input type='submit' />
      </Form>
      <Error>Error Message</Error>
    </Wrapper>
  );
}

export default CreateAccount;
