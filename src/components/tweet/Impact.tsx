import React from 'react';
import TweetConfig from '../../types/TweetConfig';

function Impact({ config }: { config: TweetConfig }) {
  if (
    config.retweets === 0 &&
    config.quotedTweets === 0 &&
    config.likes === 0
  ) {
    return <></>;
  }
  return (
    <div className="rt-likes">
      {config.retweets !== 0 && (
        <span className="fake-link num-rts">
          <strong>{styleNumber(config.retweets)}</strong>{' '}
          {getText('Retweet', config.retweets)}
        </span>
      )}
      {config.quotedTweets !== 0 && (
        <span className="fake-link num-quotes">
          <strong>{styleNumber(config.quotedTweets)}</strong>{' '}
          {getText('Quoted Tweet', config.quotedTweets)}
        </span>
      )}
      {config.likes !== 0 && (
        <span className="fake-link num-likes">
          <strong>{styleNumber(config.likes)}</strong>{' '}
          {getText('Like', config.likes)}
        </span>
      )}
    </div>
  );

  function styleNumber(num: number) {
    let div = num / 1000000;
    if (div >= 1) {
      return (
        div.toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1') + 'M'
      );
    }
    div = num / 1000;
    if (div >= 1) {
      return (
        div.toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1') + 'K'
      );
    }
    return num;
  }

  function getText(text: string, count: number) {
    return count === 1 ? text : text + 's';
  }
}

export default Impact;
