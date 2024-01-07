import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import Tweet from './tweet';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export interface ITweet {
  id: string;
  tweet: string;
  photo?: string;
  userId: string;
  username: string;
  createdAt: number;
}

function Timeline() {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  // Firestore에 포스팅 데이터 요청
  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, 'tweets'),
      orderBy('createdAt', 'desc'),
    );
    await onSnapshot(tweetsQuery, (sanpshot) => {
      const allTweet = sanpshot.docs.map((doc) => {
        const { tweet, photo, userId, username, createdAt } = doc.data();
        return { id: doc.id, tweet, photo, userId, username, createdAt };
      });
      setTweets(allTweet);
    });
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}

export default Timeline;
