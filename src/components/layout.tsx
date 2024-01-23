import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Header from './header';
import WelcomeModal from './welcome-modal';
import { RootState } from '../redux/store';
import { toggleOverlay } from '../redux/modules/overlay-slice';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Body = styled.div`
  width: 1000px;
`;

function Layout() {
  const dispatch = useDispatch();
  const overlay = useSelector((state: RootState) => state.overlay.isActive);
  const signup = useSelector((state: RootState) => state.signup.isComplete);

  return (
    <Wrapper>
      {overlay && <Overlay onClick={() => dispatch(toggleOverlay())} />}
      {signup && <WelcomeModal />}
      <Header />
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
}

export default Layout;
