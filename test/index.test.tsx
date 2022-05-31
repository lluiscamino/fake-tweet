import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tweet from '../src';

describe('it', () => {
  const config = {
    user: {
      nickname: 'twitter',
      name: 'Twitter',
      avatar: 'avatar.png',
      verified: true,
      locked: false,
    },
    display: 'default',
    text: 'This is a fake tweet',
    image: '',
    date: '3:32 PM · Feb 14, 1997',
    app: 'Twitter for iPhone',
    retweets: 32000,
    quotedTweets: 100,
    likes: 12700,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tweet config={config} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
