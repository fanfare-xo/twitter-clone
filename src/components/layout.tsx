import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Header from './header';

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
  const [isOverlay, setOverlay] = useState(false);
  const toggleOverlay = () => {
    setOverlay((prev) => !prev);
  };

  return (
    <Wrapper>
      {isOverlay && <Overlay onClick={toggleOverlay} />}
      <Header isOverlay={isOverlay} toggleOverlay={toggleOverlay} />
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
}

export default Layout;
