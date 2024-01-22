import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './header';
import WelcomeModal from './welcome-modal';
import { RootState } from '../redux/store';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  width: 1000px;
`;

function Layout() {
  const signup = useSelector((state: RootState) => state.signup.isComplete);
  const [isOverlay, setOverlay] = useState(false);
  const toggleOverlay = () => {
    setOverlay((prev) => !prev);
  };

  return (
    <Wrapper>
      {isOverlay && <Overlay onClick={toggleOverlay} />}
      {signup && <WelcomeModal />}
      <Header isOverlay={isOverlay} toggleOverlay={toggleOverlay} />
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
}

export default Layout;
