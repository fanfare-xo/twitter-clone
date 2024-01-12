import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default Layout;
