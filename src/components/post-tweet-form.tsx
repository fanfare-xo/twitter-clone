import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { auth, db, storage } from '../firebase';
import defaultAvatar from '../assets/images/default-profile.png';
import MediaIcon from '../assets/icons/media.svg?react';
import GifIcon from '../assets/icons/gif.svg?react';
import EmojiIcon from '../assets/icons/emoji.svg?react';
import VoteIcon from '../assets/icons/vote.svg?react';
import ScheduleIcon from '../assets/icons/schedule.svg?react';
import LocationIcon from '../assets/icons/location.svg?react';
import CancelIcon from '../assets/icons/cancel.svg?react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border-bottom: 1px solid #eff3f4;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const TextArea = styled.textarea`
  width: 500px;
  min-height: 50px;
  overflow-y: hidden;
  border-style: none;
  outline: none;
  resize: none;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
  }
`;

const AlertNotice = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  background-color: rgb(234, 250, 255);
`;

const PreviewFile = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 5px;
  img {
    width: 100%;
    border-radius: 15px;
  }
  svg {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 999;
    width: 30px;
    height: 30px;
    padding: 8px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    fill: white;
    &:hover {
      opacity: 1;
      transition-duration: 0.3s;
      background-color: rgba(0, 0, 0, 0.8);
      fill: white;
    }
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
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;

const AttachFileButton = styled.label`
  cursor: pointer;
`;

const AttachFileInput = styled.input`
  display: none;
`;

const EmojiModal = styled.div<{ y: number }>`
  position: fixed;
  top: ${(props) => props.y + 20}px;
  width: 350px;
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
  cursor: pointer;
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
  const [textLength, setTextLength] = useState<number | null>(0);
  const [isOpenEmoji, setOpenEmoji] = useState(false);
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const avatarURL = auth.currentUser?.photoURL;
  const textarea = useRef<HTMLTextAreaElement | null>(null);
  const previewRef = useRef<HTMLImageElement | null>(null);
  const emojiModalRef = useRef<HTMLDivElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textCount = event.target.value.length;
    setTweet(event.target.value);
    setTextLength(textCount);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length === 1) {
      const fileReader = new FileReader();
      fileReader.onload = (image) => {
        if (previewRef.current) {
          previewRef.current.src = image.target?.result as string;
        }
      };
      fileReader.readAsDataURL(files[0]);
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

  const onResize = () => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onOpenEmojiModal = (event: any) => {
    setOpenEmoji(true);
    setXy({ x: event.clientX, y: event.clientY });
  };

  const onCloseEmojiModal = () => {
    setOpenEmoji(false);
  };

  const onEmojiClick = (data: EmojiClickData) => {
    setTweet((prev) => prev + data.emoji);
  };

  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (
        emojiModalRef.current &&
        !emojiModalRef.current?.contains(event.target as Node) &&
        textarea.current &&
        !textarea.current?.contains(event.target as Node)
      ) {
        onCloseEmojiModal();
      }
    };

    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY !== prevScrollY;
      if (isOpenEmoji) {
        if (scrolled) {
          setOpenEmoji(false);
        }
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', click);

    return () => {
      window.removeEventListener('mousedown', click);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [emojiModalRef, textarea, isOpenEmoji]);

  return (
    <Wrapper>
      <Avatar src={avatarURL || defaultAvatar} alt='기본 프로필 이미지' />
      <Form onSubmit={onSubmit}>
        <TextArea
          value={tweet}
          ref={textarea}
          onInput={onResize}
          onChange={onChange}
          maxLength={280}
          required
          placeholder='무슨 일이 일어나고 있나요?'
        />
        {textLength === null || textLength >= 280 ? (
          <AlertNotice>
            🔔 너무 많은 글자를 입력했어요. 더 간결하게 작성해 주세요.
          </AlertNotice>
        ) : null}
        {file && (
          <PreviewFile>
            <img ref={previewRef} alt='media file preview' />
            <CancelIcon onClick={() => setFile(null)} />
          </PreviewFile>
        )}
        <ButtonArea>
          <AttachFileButton htmlFor='attachFile'>
            <MediaIcon />
          </AttachFileButton>
          <AttachFileInput
            onChange={onFileChange}
            id='attachFile'
            type='file'
            accept='image/*'
          />
          <GifIcon />
          <VoteIcon />
          <EmojiIcon onClick={onOpenEmojiModal} />
          <ScheduleIcon />
          <LocationIcon />
          <SubmitButton
            value={isLoading ? '업로드 중...' : '게시하기'}
            type='submit'
          />
        </ButtonArea>
        {isOpenEmoji && (
          <EmojiModal ref={emojiModalRef} y={xy.y}>
            <EmojiPicker onEmojiClick={onEmojiClick} height={365} />
          </EmojiModal>
        )}
      </Form>
    </Wrapper>
  );
}

export default PostTweetForm;
