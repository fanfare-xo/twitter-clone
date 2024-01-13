import styled from 'styled-components';
import PostTweetForm from '../components/post-tweet-form';
import Timeline from '../components/timeline';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

const PrimaryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;

const Sidebar = styled.div`
  width: 400px;
  background-color: #b6e1ff60;
`;

function Home() {
  return (
    <Wrapper>
      <PrimaryContent>
        <PostTweetForm />
        <Timeline />
      </PrimaryContent>
      <Sidebar />
    </Wrapper>
  );
}

export default Home;
