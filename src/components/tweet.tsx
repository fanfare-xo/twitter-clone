import styled from 'styled-components';
import defaultAvatar from '../assets/images/default-profile.png';
import CommentIcon from '../assets/icons/comment.svg?react';
import RetweetIcon from '../assets/icons/retweet.svg?react';
import LikeIcon from '../assets/icons/like.svg?react';
import ViewIcon from '../assets/icons/view.svg?react';
import BookmarkIcon from '../assets/icons/bookmark.svg?react';
import ShareIcon from '../assets/icons/share.svg?react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  border-bottom: 1px solid #eff3f4;
  font-size: 14px;
  line-height: normal;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    transition-duration: 0.3s;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.div`
  margin-right: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Writer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  color: #536471;
  span:first-child {
    color: #0f1419;
    font-weight: 700;
  }
  span:last-child {
    margin-left: auto;
  }
`;

const Text = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
`;

const MediaFIle = styled.div`
  img {
    width: 100%;
    border-radius: 15px;
  }
`;

const InteractionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #536471;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  svg {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    fill: #536471;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  div:hover {
    color: #1d9bf0;
    svg {
      fill: #1d9bf0;
    }
    p {
      background-color: rgba(15, 20, 25, 0.1);
    }
  }
`;

function Tweet() {
  return (
    <Wrapper>
      <Avatar>
        <img src={defaultAvatar} alt='기본 프로필 사진' />
      </Avatar>
      <Col>
        <Writer>
          <span>서울시</span>
          <span>@seoul_city</span>
          <span>·</span>
          <span>1시간</span>
          <span>…</span>
        </Writer>
        <Text>
          <p>
            옷이 날개!🪽 취업날개 서비스 이용 꿀팁
            <br />
            면접정장 무료 대여하고 취업 성공해용!🐲
            <br />
            <br />
            취준생의 비용 부담을 덜어주기 위해 면접 정장을 무료로 대여해주는
            #취업날개서비스!
            <br />
            고교졸업 예정자~39세 이하 서울시 거주 청년이라면 정장과 넥타이,
            벨트, 구두까지 대여
            <br />
            가능해요!👉http://dressfree.net
          </p>
        </Text>
        <MediaFIle>
          <img
            src='https://picsum.photos/seed/picsum/550/300'
            alt='첨부한 미디어 파일'
          />
        </MediaFIle>
        <InteractionBar>
          <div>
            <p>
              <CommentIcon />
            </p>
            <span>10</span>
          </div>
          <div>
            <p>
              <RetweetIcon />
            </p>
            <span>10</span>
          </div>
          <div>
            <p>
              <LikeIcon />
            </p>
            <span>10</span>
          </div>
          <div>
            <p>
              <ViewIcon />
            </p>
            <span>10</span>
          </div>
          <div>
            <p>
              <BookmarkIcon />
            </p>
          </div>
          <div>
            <p>
              <ShareIcon />
            </p>
          </div>
        </InteractionBar>
      </Col>
    </Wrapper>
  );
}

export default Tweet;
