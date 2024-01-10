import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 45vw;
  height: 100vh;
  padding: 70px;
  &:first-child {
    align-items: center;
  }
  &:nth-child(2) {
    flex-direction: column;
    align-items: left;
  }
`;

const Logo = styled.svg`
  width: 380px;
`;

const Text = styled.span`
  font-weight: 700;
  &:first-child {
    font-size: 60px;
  }
  &:nth-child(2) {
    margin-top: 50px;
    font-size: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: 300px;
  height: 40px;
  border: 1px solid #cfd9de;
  border-radius: 20px;
  &:hover {
    background-color: #e6e6e6;
    transition: background-color 0.5s ease;
  }
  &[type='submit'] {
    cursor: pointer;
    background-color: #1d9bf0;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    &:hover {
      opacity: 0.8;
      transition: opacity 0.5s ease;
    }
  }
  &[type='button'] {
    cursor: pointer;
    background-color: #ffffff;
    color: #1d9bf0;
    font-size: 15px;
    font-weight: 700;
    &:hover {
      background-color: #1d9bf01a;
      transition: background-color 0.5s ease;
    }
  }
`;

const Switcher = styled.div`
  p {
    padding-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: #1d96f0;
  }
  span {
    font-size: 12px;
  }
`;

function Login() {
  return (
    <Wrapper>
      <Box>
        <Logo viewBox='328 355 335 276' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#1d9bf0'
            d='
               M 630, 425
               A 195, 195 0 0 1 331, 600
               A 142, 142 0 0 0 428, 570
               A  70,  70 0 0 1 370, 523
               A  70,  70 0 0 0 401, 521
               A  70,  70 0 0 1 344, 455
               A  70,  70 0 0 0 372, 460
               A  70,  70 0 0 1 354, 370
               A 195, 195 0 0 0 495, 442
               A  67,  67 0 0 1 611, 380
               A 117, 117 0 0 0 654, 363
               A  65,  65 0 0 1 623, 401
               A 117, 117 0 0 0 662, 390
               A  65,  65 0 0 1 630, 425
               Z'
          />
        </Logo>
      </Box>
      <Box>
        <Text>지금 일어나고 있는 일</Text>
        <Text>지금 로그인하세요.</Text>
        <Form>
          <Input type='email' placeholder='이메일' required />
          <Input type='password' placeholder='패스워드' required />
          <Input value='로그인' type='submit' />
        </Form>
        <Switcher>
          <p>트위터 계정이 없으신가요?</p>
          <Link to='/create-account'>
            <Input value='계정 만들기' type='button' />
          </Link>
        </Switcher>
      </Box>
    </Wrapper>
  );
}

export default Login;
