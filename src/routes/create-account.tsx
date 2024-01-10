import { Link } from 'react-router-dom';
import {
  Box,
  Form,
  Input,
  Logo,
  Switcher,
  Text,
  Wrapper,
} from '../components/auth-component';

function CreateAccount() {
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
        <Form>
          <Input type='username' placeholder='이름' required />
          <Input type='email' placeholder='이메일' required />
          <Input type='password' placeholder='패스워드' required />
          <Input value='계정 만들기' type='submit' />
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
