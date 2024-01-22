import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { completeSignup } from '../redux/modules/signup-slice';

const Wrapper = styled.div`
  position: fixed;
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
  justify-content: center;
  gap: 20px;
  width: 600px;
  height: 300px;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 16px;
  background-color: #ffffff;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  span:first-child {
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 700;
  }
  span:last-child {
    font-size: 14px;
    line-height: normal;
    color: #536471;
  }
`;

const Button = styled.input<{ bgColor: string; fontColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
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

function WelcomeModal() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Overlay />
      <Container>
        <Text>
          <span>회원가입이 완료되었습니다!</span>
          <span>
            환영합니다! 이제 트위터 커뮤니티에 참여하실 수 있습니다.
            <br />
            다양한 트윗을 작성하고 다른 사용자들과 소통해보세요. 또한, 프로필을
            설정하여 자신을 소개해보세요.
          </span>
        </Text>
        <Button
          onClick={() => dispatch(completeSignup())}
          type='button'
          value='알았어요'
          bgColor='#0f1419'
          fontColor='#ffffff'
        />
      </Container>
    </Wrapper>
  );
}

export default WelcomeModal;
