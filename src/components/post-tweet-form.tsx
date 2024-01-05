import styled from 'styled-components';

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
  return (
    <Form>
      <TextArea placeholder='What is happening?!' />
      <AttachFileButton htmlFor='attachFile'>Add photo</AttachFileButton>
      <AttachFileInput id='attachFile' accept='image/*' type='file' />
      <SubmitButton type='submit' />
    </Form>
  );
}

export default PostTweetForm;
