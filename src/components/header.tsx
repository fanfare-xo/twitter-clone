import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TwitterSVG from '../assets/icons/twitter.svg?react';
import HomeSVG from '../assets/icons/home.svg?react';
import SearchSVG from '../assets/icons/search.svg?react';
import AlertSVG from '../assets/icons/alert.svg?react';
import MessageSVG from '../assets/icons/message.svg?react';
import ListSVG from '../assets/icons/list.svg?react';
import BookmarkSVG from '../assets/icons/bookmark.svg?react';
import CommunitySVG from '../assets/icons/community.svg?react';
import PremiumSVG from '../assets/icons/premium.svg?react';
import ProfileSVG from '../assets/icons/profile.svg?react';
import SeeMoreSVG from '../assets/icons/seeMore.svg?react';
import MoreSVG from '../assets/icons/more.svg?react';
import { auth } from '../firebase';

const Wrapper = styled.div`
  width: 280px;
`;

const Container = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 100vh;
  padding: 0 5px;
  padding-left: 10px;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-top: 5px;
  border-radius: 50px;
  svg {
    width: 30px;
  }
  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
    transition-duration: 0.2s;
  }
`;

const Navigation = styled.nav`
  font-size: 20px;
  li {
    display: flex;
    align-items: center;
    justify-content: ceter;
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 12px;
    padding-right: 24px;
    width: max-content;
    height: 50px;
    border-radius: 50px;
    &:hover {
      background-color: rgba(15, 20, 25, 0.1);
      transition-duration: 0.2s;
    }
  }
  svg {
    width: 26px;
    margin-right: 20px;
  }
`;

const ComposeTweet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 52px;
  margin-top: 20px;
  border-radius: 50px;
  background-color: #1d9bf0;
  &:hover {
    background-color: #1a8cd8;
    transition-duration: 0.2s;
  }
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
`;

const UserSwitcher = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  padding: 10px;
  border-radius: 50px;
  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
    transition-duration: 0.2s;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    p {
      padding: 3px;
      font-size: 15px;
      &:first-child {
        font-weight: 700;
      }
      &:last-child {
        color: #536471;
      }
    }
  }
  svg {
    width: 20px;
  }
`;

const ToggleUserSwitcher = styled(motion.div)`
  width: 300px;
  height: 110px;
  position: fixed;
  bottom: 85px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 30%) 0px 3px 10px;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  span {
    width: 100%;
    padding: 10px 20px;
  }
  span:hover {
    background-color: rgba(247, 249, 249, 1);
  }
`;
interface HeaderProps {
  isOverlay: boolean;
  toggleOverlay: () => void;
}

function Header({ isOverlay, toggleOverlay }: HeaderProps) {
  const user = auth.currentUser;

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link to='/'>
            <TwitterSVG />
          </Link>
        </Logo>
        <Navigation>
          <ul>
            <li>
              <Link to='/'>
                <HomeSVG />홈
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <SearchSVG />
                탐색하기
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <AlertSVG />
                알림
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <MessageSVG />
                쪽지
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <ListSVG />
                리스트
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <BookmarkSVG />
                북마크
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <CommunitySVG />
                커뮤니티
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <PremiumSVG />
                Premium
              </Link>
            </li>
            <li>
              <Link to='/profile'>
                <ProfileSVG />
                프로필
              </Link>
            </li>
            <li>
              <Link to='/coming-soon'>
                <SeeMoreSVG />더 보기
              </Link>
            </li>
          </ul>
        </Navigation>
        <ComposeTweet>게시하기</ComposeTweet>
        <UserSwitcher onClick={toggleOverlay}>
          <img src={`${user?.photoURL}`} alt='사용자 프로필 이미지' />
          <div>
            <p>{user?.displayName}</p>
            <p>@{user?.uid.slice(0, 10)}</p>
          </div>
          <MoreSVG />
        </UserSwitcher>
      </Container>
      {isOverlay && (
        <ToggleUserSwitcher
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'linear', duration: 0.2 }}
        >
          <Link to='/'>
            <span>기존 계정 추가</span>
          </Link>
          <Link to='/logout'>
            <span>@{user?.uid.slice(0, 10)} 계정에서 로그아웃</span>
          </Link>
        </ToggleUserSwitcher>
      )}
    </Wrapper>
  );
}

export default Header;
