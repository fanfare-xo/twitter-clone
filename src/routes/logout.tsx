import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TwitterSVG from '../assets/icons/twitter.svg?react';
import { auth } from '../firebase';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  z-index: -999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 340px;
  padding: 30px;
  border-radius: 16px;
  background-color: #ffffff;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  span:first-child {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
  }
  span:last-child {
    font-size: 14px;
    line-height: 1.4;
    color: #536471;
  }
`;

const Button = styled.input<{ bgColor: string; fontColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  min-height: 45px;
  margin-bottom: 10px;
  border: 1px solid #cfd9de;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
    color: #0f1419;
    transition-duration: 0.2s;
  }
`;

function Logout() {
  const navigate = useNavigate();

  const logOut = async () => {
    await auth.signOut();
    navigate('/login');
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Overlay />
      <Container>
        <TwitterSVG width={45} />
        <Text>
          <span>트위터에서 로그아웃할까요? </span>
          <span>
            언제든지 다시 로그인할 수 있습니다. 계정을 전환하려는 경우 이미
            존재하는 계정을 추가하면 전환할 수 있습니다
          </span>
        </Text>
        <Button
          onClick={logOut}
          type='button'
          value='로그아웃'
          bgColor='#0f1419'
          fontColor='#ffffff'
        />
        <Button
          onClick={goBack}
          type='button'
          value='취소'
          bgColor='#ffffff'
          fontColor='#0f1419'
        />
      </Container>
    </Wrapper>
  );
}

export default Logout;
