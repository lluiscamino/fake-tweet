import React from 'react';
import CommentIcon from '../icons/CommentIcon';
import RetweetIcon from '../icons/RetweetIcon';
import LikeIcon from '../icons/LikeIcon';
import ShareIcon from '../icons/ShareIcon';

function Actions() {
  const actions = [
    {
      color: 'blue',
      icon: <CommentIcon />,
    },
    {
      color: 'green',
      icon: <RetweetIcon />,
    },
    {
      color: 'red',
      icon: <LikeIcon />,
    },
    {
      color: 'blue',
      icon: <ShareIcon />,
    },
  ];
  return (
    <div className="bottom-buttons">
      {actions.map((action, key) => (
        <div key={key} className={`bottom-button ${action.color}`}>
          <div>{action.icon}</div>
        </div>
      ))}
    </div>
  );
}

export default Actions;
