import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useDispatch } from 'react-redux';
import {
  Box,
  Error,
  Form,
  Input,
  Logo,
  Switcher,
  Text,
  Wrapper,
} from '../components/auth-component';
import { auth } from '../firebase';
import { completeSignup } from '../redux/modules/signup-slice';

function CreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading || username === '' || email === '' || password === '') return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(credentials.user, {
        displayName: username,
      });
      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) setErrorCode(error.code);
    } finally {
      setLoading(false);
      dispatch(completeSignup());
    }
  };

  const handleError = () => {
    switch (errorCode) {
      case 'auth/user-not-found' || 'auth/wrong-password':
        return '이메일 혹은 비밀번호가 일치하지 않습니다.';
      case 'auth/email-already-in-use':
        return '이미 사용 중인 이메일입니다.';
      case 'auth/weak-password':
        return '비밀번호는 6글자 이상이어야 합니다.';
      case 'auth/network-request-failed':
        return '네트워크 연결에 실패 하였습니다.';
      case 'auth/invalid-email':
        return '잘못된 이메일 형식입니다.';
      case 'auth/internal-error':
        return '잘못된 요청입니다.';
      case 'auth/too-many-requests':
        return '로그인 시도가 너무 많습니다. 잠시 후에 다시 시도해 주세요.';
      default:
        return '회원가입에 실패 하였습니다.';
    }
  };

  return (
    <Wrapper>
      <Box>
        <Logo viewBox='328 355 335 276' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#1d9bf0'
            d='
               M 630, 425
               A 195, 195 0 0 1 331, 600
               A 142, 142 0 0 0 428, 570
               A  70,  70 0 0 1 370, 523
               A  70,  70 0 0 0 401, 521
               A  70,  70 0 0 1 344, 455
               A  70,  70 0 0 0 372, 460
               A  70,  70 0 0 1 354, 370
               A 195, 195 0 0 0 495, 442
               A  67,  67 0 0 1 611, 380
               A 117, 117 0 0 0 654, 363
               A  65,  65 0 0 1 623, 401
               A 117, 117 0 0 0 662, 390
               A  65,  65 0 0 1 630, 425
               Z'
          />
        </Logo>
      </Box>
      <Box>
        <Text>트위터 계정이 없으신가요</Text>
        <Text>지금 가입하세요.</Text>
        <Form onSubmit={onSubmit}>
          <Input
            value={username}
            onChange={onChange}
            name='username'
            type='text'
            placeholder='이름'
            required
          />
          <Input
            value={email}
            onChange={onChange}
            name='email'
            type='email'
            placeholder='이메일'
            required
          />
          <Input
            value={password}
            onChange={onChange}
            name='password'
            type='password'
            placeholder='패스워드'
            required
          />
          <Input value='계정 만들기' type='submit' />
          {errorCode !== '' ? <Error>{handleError()}</Error> : null}
        </Form>
        <Switcher>
          <p>이미 트위터에 가입하셨나요?</p>
          <Link to='/login'>
            <Input value='로그인' type='button' />
          </Link>
        </Switcher>
      </Box>
    </Wrapper>
  );
}

export default CreateAccount;
