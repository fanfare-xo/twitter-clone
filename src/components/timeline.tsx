import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

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
    const snapshot = await getDocs(tweetsQuery);
    const allTweet = snapshot.docs.map((doc) => {
      const { tweet, photo, userId, username, createdAt } = doc.data();
      return { id: doc.id, tweet, photo, userId, username, createdAt };
    });
    setTweets(allTweet);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return <div>{JSON.stringify(tweets)}</div>;
}

export default Timeline;
