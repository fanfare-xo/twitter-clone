import { useState } from 'react';
import styled from 'styled-components';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from '../firebase';
import defaultAvatar from '../assets/images/default-profile.png';
import MediaIcon from '../assets/icons/media.svg?react';
import GifIcon from '../assets/icons/gif.svg?react';
import EmojiIcon from '../assets/icons/emoji.svg?react';
import VoteIcon from '../assets/icons/vote.svg?react';
import ScheduleIcon from '../assets/icons/schedule.svg?react';
import LocationIcon from '../assets/icons/location.svg?react';

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid lightgray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const TextArea = styled.textarea`
  height: 50px;
  line-height: 2;
  background-color: transparent;
  border-style: none;
  outline: none;
  resize: none;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
  }
`;

const ButtonArea = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  input {
    margin-left: auto;
  }
  svg {
    margin-left: 5px;
    margin-right: 12px;
    width: 16px;
    height: 16px;
    fill: #1d9bf0;
  }
`;

const SubmitButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 35px;
  border-style: none;
  border-radius: 50px;
  background-color: #1d9bf0;
  &:hover {
    background-color: #1a8cd8;
    transition-duration: 0.2s;
  }
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;

function PostTweetForm() {
  const [isLoading, setLoading] = useState(false);
  const [tweet, setTweet] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(event.target.value);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = auth.currentUser;
    if (!user || isLoading || tweet === '' || tweet.length > 180) return;
    try {
      setLoading(true);
      const doc = await addDoc(collection(db, 'tweets'), {
        tweet,
        createdAt: Date.now(),
        userId: user.uid,
        username: user.displayName || 'Anonymous',
      });
      if (file) {
        const locationRef = ref(storage, `tweets/${user.uid}/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          photo: url,
        });
      }
      setTweet('');
      setFile(null);
    } catch (error) {
      // Error
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Avatar src={defaultAvatar} alt='기본 프로필 이미지' />
      <Form onSubmit={onSubmit}>
        <TextArea
          value={tweet}
          onChange={onChange}
          maxLength={280}
          required
          placeholder='무슨 일이 일어나고 있나요?'
        />
        <ButtonArea>
          <MediaIcon />
          <GifIcon />
          <VoteIcon />
          <EmojiIcon />
          <ScheduleIcon />
          <LocationIcon />
          <SubmitButton
            value={isLoading ? '업로드 중...' : '게시하기'}
            type='submit'
          />
        </ButtonArea>
      </Form>
    </Wrapper>
  );
}

export default PostTweetForm;
