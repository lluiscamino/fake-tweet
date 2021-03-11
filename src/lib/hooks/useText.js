import React, { useState, useEffect } from "react";
import processString from "react-process-string";
import Twemoji from "react-twemoji";

function useText(rawText) {
    const [text, setText] = useState(rawText);
    useEffect(() => {
        setText(processString(
            [
                {
                    regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/,
                    fn: handleMention
                },
                {
                    regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,
                    fn: handleHashtag
                },
                {
                    regex: /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
                    fn: handleEmoji
                }
            ]
        )(rawText));
    }, [rawText]);

    return text;
}

function handleMention(key, result) {
    return <span key={key}> <span className="fake-link mention">@{result[1]}</span></span>;
}

function handleHashtag(key, result) {
    return <span key={key}> <span className="fake-link mention"> #{result[1]}</span></span>;
}

function handleEmoji(key, result) {
    return (
        <Twemoji key={key} options={{className: "twemoji-bg"}} style={{display: "inline"}}>
            {result[1]}
        </Twemoji>
    );
}

export default useText;