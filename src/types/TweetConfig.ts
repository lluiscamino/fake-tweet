import UserData from './UserData';

type TweetConfig = {
  user: UserData;
  display: string;
  text: string;
  image?: string | string[];
  date: string;
  app: string;
  retweets: number;
  quotedTweets: number;
  likes: number;
};

export default TweetConfig;
