import React from 'react';
import './Tweet.css';
import useDisplay from '../../hooks/useDisplay';
import TweetConfig from '../../types/TweetConfig';
import UserInfo from './UserInfo';
import Content from './Content';
import Metadata from './Metadata';
import Impact from './Impact';
import Actions from './Actions';

function Tweet({ config }: { config: TweetConfig }) {
  const display = useDisplay(config.display);

  return (
    <div className={'tweet ' + display}>
      <UserInfo config={config} />
      <Content config={config} />
      <Metadata config={config} />
      <Impact config={config} />
      <Actions />
    </div>
  );
}

export default Tweet;
