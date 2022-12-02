import React, { useEffect, useState } from 'react';
// @ts-ignore
import processString from 'react-process-string';
import Twemoji from 'react-twemoji';

function useText(rawText: any) {
  const [text, setText] = useState(rawText);
  useEffect(() => {
    setText(
      processString([
        {
          regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/,
          fn: handleMention,
        },
        {
          regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,
          fn: handleHashtag,
        },
        {
          regex: /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
          fn: handleEmoji,
        },
        {
          regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:https?:\/\/)(\S+\.\S+)/,
          fn: handleUrl,
        },
      ])(rawText)
    );
  }, [rawText]);

  return text;
}

function handleMention(key: string, result: string[]) {
  return (
    <span key={key}>
      {' '}
      <span className="fake-link mention">@{result[1]}</span>
    </span>
  );
}

function handleHashtag(key: string, result: string[]) {
  return (
    <span key={key}>
      {' '}
      <span className="fake-link mention"> #{result[1]}</span>
    </span>
  );
}

function handleUrl(key: string, result: string[]) {
  return (
    <span key={key}>
      {' '}
      <span className="fake-link mention"> {result[1]}</span>
    </span>
  );
}

function handleEmoji(key: string, result: string[]) {
  return (
    <Twemoji
      key={key}
      options={{ className: 'twemoji-bg' }}
      // @ts-ignore
      style={{ display: 'inline' }}
    >
      {result[1]}
    </Twemoji>
  );
}

export default useText;
