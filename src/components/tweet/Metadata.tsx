import React from 'react';
import TweetConfig from '../../types/TweetConfig';

function Metadata({ config }: { config: TweetConfig }) {
  return (
    <div className="metadata">
      {config.date} · <span className="fake-link app">{config.app}</span>
    </div>
  );
}

export default Metadata;
