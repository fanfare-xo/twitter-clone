/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
import profileIMG from '../assets/images/default-profile.png';

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
    a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
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

const UserSwitcher = styled.div`
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

function Header() {
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
              <Link to='/'>
                <SearchSVG />
                탐색하기
              </Link>
            </li>
            <li>
              <Link to='/'>
                <AlertSVG />
                알림
              </Link>
            </li>
            <li>
              <Link to='/'>
                <MessageSVG />
                쪽지
              </Link>
            </li>
            <li>
              <Link to='/'>
                <ListSVG />
                리스트
              </Link>
            </li>
            <li>
              <Link to='/'>
                <BookmarkSVG />
                북마크
              </Link>
            </li>
            <li>
              <Link to='/'>
                <CommunitySVG />
                커뮤니티
              </Link>
            </li>
            <li>
              <Link to='/'>
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
              <Link to='/'>
                <SeeMoreSVG />더 보기
              </Link>
            </li>
          </ul>
        </Navigation>
        <ComposeTweet>게시하기</ComposeTweet>
        <UserSwitcher>
          <img src={profileIMG} alt='기본 프로필' />
          <div>
            <p>팡파르</p>
            <p>@fanfare_xo</p>
          </div>
          <MoreSVG />
        </UserSwitcher>
      </Container>
    </Wrapper>
  );
}

export default Header;
