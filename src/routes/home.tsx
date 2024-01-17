import styled from 'styled-components';
import PostTweetForm from '../components/post-tweet-form';
import Timeline from '../components/timeline';
import SidePanel from '../components/side-panel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const PrimaryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border-left: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
`;

function Home() {
  return (
    <Wrapper>
      <PrimaryContent>
        <PostTweetForm />
        <Timeline />
      </PrimaryContent>
      <SidePanel />
    </Wrapper>
  );
}

export default Home;
