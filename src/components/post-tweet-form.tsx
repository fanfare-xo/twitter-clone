import { useState } from 'react';
import styled from 'styled-components';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from '../firebase';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  width: 100%;
  border: 2px solid white;
  border-radius: 20px;
  resize: none;
  background-color: black;
  color: white;
  font-size: 16px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;

const AttachFileButton = styled.label`
  padding: 10px 0px;
  border: 1px solid #1d9bf0;
  border-radius: 20px;
  color: #1d9bf0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.input`
  padding: 10px 0px;
  border: none;
  border-radius: 20px;
  background-color: #1d9bf0;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        value={tweet}
        onChange={onChange}
        rows={5}
        maxLength={180}
        placeholder='What is happening?!'
        required
      />
      <AttachFileButton htmlFor='attachFile'>
        {file ? 'Photo added ✅' : 'Add photo'}
      </AttachFileButton>
      <AttachFileInput
        onChange={onFileChange}
        id='attachFile'
        accept='image/*'
        type='file'
      />
      <SubmitButton
        value={isLoading ? 'Posting...' : 'Post Tweet'}
        type='submit'
      />
    </Form>
  );
}

export default PostTweetForm;
