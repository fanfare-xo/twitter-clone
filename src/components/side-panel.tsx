import styled from 'styled-components';
import { Link } from 'react-router-dom';
import avatarImage from '../assets/images/default-profile.png';
import SearchIcon from '../assets/icons/search.svg?react';
import CancelIcon from '../assets/icons/cancel.svg?react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 350px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.$bgColor};
  &:hover {
    opacity: 0.8;
    transition-duration: 0.2s;
  }
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin-top: 5px;
  padding: 0 16px;
  border-radius: 30px;
  background-color: rgba(245, 249, 249, 1);

  svg {
    width: 20px;
  }
  svg:last-child {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    padding: 5px;
    background-color: #1d9bf0;
    fill: white;
  }
  input {
    width: 100%;
    padding: 12px;
    border: none;
    outline-style: none;
    background-color: rgba(0, 0, 0, 0);
    text-align: left;
    font-size: inherit;
  }
`;

const RecommendFollow = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: rgba(247, 249, 249, 1);
  h2 {
    padding: 12px 16px;
    font-size: 18px;
    font-weight: 700;
  }
  img {
    margin-right: 12px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  span {
    font-size: 15px;
    padding: 2px 0;
    &:first-child {
      font-weight: 700;
    }
  }
  .follow-box {
    padding: 15px 16px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
      transition-duration: 0.3s;
    }
  }
`;

const Trend = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: rgba(247, 249, 249, 1);
  font-size: 13px;
  h2 {
    padding: 12px 16px;
    font-size: 18px;
    font-weight: 700;
  }
  svg {
    width: 25px;
    height: 25px;
    padding: 3px;
    border-radius: 50%;
    margin-left: auto;
    &:hover {
      fill: #1d9bf0;
      background-color: rgba(29, 155, 240, 0.1);
    }
  }
  .trend-box {
    padding: 15px 16px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
      transition-duration: 0.3s;
    }
  }
  .trend-title {
    margin-bottom: 6px;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Footer = styled.div`
  padding-left: 16px;
  font-size: 13px;
  color: #536471;
  nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    max-width: 300px;
  }
  svg {
    width: 13px;
  }
`;

function SidePanel() {
  return (
    <Wrapper>
      <Search>
        <SearchIcon />
        <input placeholder='검색' />
        <CancelIcon />
      </Search>
      <RecommendFollow>
        <h2>팔로우 추천</h2>
        <Row className='follow-box'>
          <img src={avatarImage} alt='avatar' />
          <Col style={{ alignItems: 'flex-start' }}>
            <span>이름</span>
            <span>@abcde</span>
          </Col>
          <Button $bgColor='#0f1419'>팔로우</Button>
        </Row>
        <Row className='follow-box'>
          <img src={avatarImage} alt='avatar' />
          <Col>
            <span>이름</span>
            <span>@abcde</span>
          </Col>
          <Button $bgColor='#0f1419'>팔로우</Button>
        </Row>
      </RecommendFollow>
      <Trend>
        <h2>나를 위한 트렌드</h2>
        <Col className='trend-box'>
          <Row>
            <span>대한민국에서 트렌드 중</span>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-ip8ujx r-1p4rafz'
            >
              <g>
                <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' />
              </g>
            </svg>
          </Row>
          <span className='trend-title'>연말정산</span>
          <span>10,000 post</span>
        </Col>
        <Col className='trend-box'>
          <Row>
            <span>대한민국에서 트렌드 중</span>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-ip8ujx r-1p4rafz'
            >
              <g>
                <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' />
              </g>
            </svg>
          </Row>
          <span className='trend-title'>연말정산</span>
          <span>10,000 post</span>
        </Col>
      </Trend>
      <Footer>
        <nav aria-label='바닥글' role='navigation'>
          <Link to='https://twitter.com/tos'>
            <span>이용약관</span>
          </Link>
          <Link to='https://twitter.com/privacy'>
            <span>개인정보 처리방침</span>
          </Link>
          <Link to='https://support.twitter.com/articles/20170514'>
            <span>쿠키 정책</span>
          </Link>
          <Link to='https://help.twitter.com/resources/accessibility'>
            <span>접근성</span>
          </Link>
          <Link to='https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo'>
            <span>광고 정보</span>
          </Link>
          <div role='button' style={{ display: 'flex', flexDirection: 'row' }}>
            <span>더 보기</span>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-ip8ujx r-1p4rafz'
            >
              <g>
                <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' />
              </g>
            </svg>
          </div>
          <div>
            <span>© 2024 X Corp.</span>
          </div>
        </nav>
      </Footer>
    </Wrapper>
  );
}

export default SidePanel;
