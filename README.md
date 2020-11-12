# Fake Tweet

Tweet React component. See a [live demo](https://lluiscamino.github.io/fake-tweet/).

## Example

![Fake tweet example](https://github.com/lluiscamino/fake-tweet/blob/master/example.png?raw=true)

## Installation

```bash
npm i fake-tweet
```

## Usage

To use the `fake-tweet` component in your app after having installed it, import the component and its stylesheet:

```javascript
import React from "react";
import FakeTweet from "fake-tweet";
import "fake-tweet/build/index.css";

function App() {
  const config = {
    user: {
      nickname: "twitter",
      name: "Twitter",
      avatar: "avatar.png",
      verified: true,
      locked: false
    },
    display: "default",
    text: "This is a fake tweet",
    image: "",
    date: "3:32 PM · Feb 14, 1997",
    app: "Twitter for iPhone",
    retweets: 32000,
    quotedTweets: 100,
    likes: 12700
  };
  return (
    <div className="App">
      <FakeTweet config={config} />
    </div>
  );
}

export default App;
```

You also need to pass a `config` object to the component with the following properties:

- **User**:
  - **Nickname**: Twitter @username
  - **Name**
  - **Avatar**: Twitter avatar URL
  - **Verified**: Set to true to include the verified icon
  - **Locked**: Set to true to include the private account icon
- **Display**: Twitter theme (``default``, ``dim`` or ``lightsout``)
- **Text**: The text the tweet will display
- **Image (optional)**: You can include an image to the tweet
- **Date**: A string that represents a date
- **App**: For example, "Twitter for iPhone"
- **Retweets**: Number of retweets
- **Quoted Tweets**: Number of quoted tweets
- **Likes**: Number of likes
