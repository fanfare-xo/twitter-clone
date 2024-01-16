import styled from 'styled-components';
import { deleteDoc, doc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { useState } from 'react';
import CommentIcon from '../assets/icons/comment.svg?react';
import RetweetIcon from '../assets/icons/retweet.svg?react';
import LikeIcon from '../assets/icons/like.svg?react';
import ViewIcon from '../assets/icons/view.svg?react';
import BookmarkIcon from '../assets/icons/bookmark.svg?react';
import ShareIcon from '../assets/icons/share.svg?react';
import { ITweet } from './timeline';
import { auth, db, storage } from '../firebase';

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
  width: 100%;
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
  button {
    all: unset;
    margin-left: auto;
    cursor: pointer;
    font: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    &:hover {
      background-color: #1d9bf01a;
    }
  }
`;

const Text = styled.div`
  padding-bottom: 10px;
`;

const MediaFIle = styled.div`
  margin-bottom: 5px;
  img {
    width: 100%;
    border: 1px solid rgb(207, 217, 222);
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

function Tweet({ id, userId, username, tweet, photo, createdAt }: ITweet) {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState<string>('');

  const formatDate = (timestamp: number) => {
    const dateObject = new Date(timestamp);
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    return `${month}월 ${date}일`;
  };

  const onDelete = async () => {
    const ok = window.confirm('Are you sure you want to delete this tweet?');
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, 'tweets', id));
    } catch (error) {
      //
    }
  };

  const userAvatarSample = async (userUid: string) => {
    const locationRef = ref(storage, `avatar/${userUid}`);
    const avatarURL = await getDownloadURL(locationRef);
    await setAvatar(avatarURL);
  };

  userAvatarSample(userId);

  return (
    <Wrapper>
      <Avatar>
        <img src={avatar} alt='사용자 프로필 이미지' />
      </Avatar>
      <Col>
        <Writer>
          <span>{username}</span>
          <span>@{userId.slice(0, 10)}</span>
          <span>·</span>
          <span>{formatDate(createdAt)}</span>
          <button onClick={onDelete} type='button'>
            …
          </button>
        </Writer>
        <Text>
          <p>{tweet}</p>
        </Text>
        <MediaFIle>
          {photo ? <img src={photo} alt='첨부한 미디어 파일' /> : null}
        </MediaFIle>
        <InteractionBar>
          <div>
            <p>
              <CommentIcon />
            </p>
            <span />
          </div>
          <div>
            <p>
              <RetweetIcon />
            </p>
            <span />
          </div>
          <div>
            <p>
              <LikeIcon />
            </p>
            <span />
          </div>
          <div>
            <p>
              <ViewIcon />
            </p>
            <span />
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
