import React from 'react';
import TweetConfig from '../../types/TweetConfig';
import DropIcon from '../icons/DropIcon';
import VerifiedIcon from '../icons/VerifiedIcon';
import LockIcon from '../icons/LockIcon';
import Twemoji from 'react-twemoji';

function UserInfo({ config }: { config: TweetConfig }) {
  return (
    <div className="user-info">
      <div className="avatar-container">
        <img
          className="avatar"
          src={config.user.avatar}
          alt={config.user.name + ' avatar'}
        />
      </div>
      <div className="user-info-right">
        <div className="drop-button">
          <DropIcon />
        </div>
        <div className="user-name">
          <Twemoji
            options={{ className: 'twemoji-sm' }}
            // @ts-ignore
            className="user-name-txt"
          >
            <span className="fake-link">{config.user.name}</span>
          </Twemoji>
          {config.user.verified && (
            <div className="icon">
              <VerifiedIcon />
            </div>
          )}
          {config.user.locked && !config.user.verified && (
            <div className="icon">
              <LockIcon />
            </div>
          )}
        </div>
        <div className="user-nickname">@{config.user.nickname}</div>
      </div>
    </div>
  );
}

export default UserInfo;
