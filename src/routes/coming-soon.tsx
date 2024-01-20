import styled from 'styled-components';
import SidePanel from '../components/side-panel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const PrimaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 600px;
  padding: 0 16px;
  border-left: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
  font-size: 24px;
  text-align: center;
  line-height: normal;
`;

const Subject = styled.div`
  padding-top: 5px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  p:first-child {
    font-size: 30px;
    font-weight: bold;
  }
  p:last-child {
    font-size: 15px;
    color: #536471;
  }
`;

function ComingSoon() {
  return (
    <Wrapper>
      <PrimaryContent>
        <Subject>준비중</Subject>
        <Content>
          <p>커밍쑨!</p>
          <p>서비스가 준비 중입니다. 곧 여러분을 찾아갑니다.</p>
        </Content>
      </PrimaryContent>

      <SidePanel />
    </Wrapper>
  );
}

export default ComingSoon;
