import React, { useState } from 'react';
import './App.css';
import Tweet from '../lib';

function App() {

  const [nickname, setNickname] = useState("LFC");
  const [name, setName] = useState("Liverpool FC");
  const [avatar, setAvatar] = useState("https://pbs.twimg.com/profile_images/1202545168542511104/sEunL4Iq_400x400.jpg");
  const [verified, setVerified] = useState(true);
  const [locked, setLocked] = useState(false);
  const [display, setDisplay] = useState("default");
  const [text, setText] = useState("🏆 WE’RE CLUB WORLD CHAMPIONS!! 🏆");
  const [image, setImage] = useState("https://pbs.twimg.com/media/EMVe-JgWwAEwrdw?format=jpg&name=small");
  const [date, setDate] = useState("9:06 PM · Dec 21, 2019");
  const [app, setApp] = useState("Twitter Media Studio");
  const [retweets, setRetweets] = useState(47081);
  const [quotedTweets, setQuotedTweets] = useState(5526);
  const [likes, setLikes] = useState(180500);

  return (
    <div className="App">
      <header className="App-header">
        <Tweet config={
          {
            user: {
              nickname: nickname,
              name: name,
              avatar: avatar,
              verified: verified,
              locked: locked
            },
            display: display, // default, dim or light-out
            text: text,
            image: image,
            date: date,
            app: app,
            retweets: retweets,
            quotedTweets: quotedTweets,
            likes: likes
          }
        } />
        <div>
          <form className="config">
            <fieldset>
              <legend>User</legend>
              <div>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" id="nickname" value={nickname} onChange={e => setNickname(e.target.value)} />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="avatar">Avatar</label>
                <input type="text" id="avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
              </div>
              <div>
                <label htmlFor="verified">Verified</label>
                <input type="checkbox" id="verified" checked={verified} onChange={e => {
                  const val = e.target.checked;
                  setVerified(val);
                  if (val && locked) setLocked(false);
                }} />
              </div>
              <div>
                <label htmlFor="locked">Locked</label>
                <input type="checkbox" id="locked" checked={locked} onChange={e => {
                  const val = e.target.checked;
                  setLocked(val);
                  if (val && verified) setVerified(false);
                }} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Tweet</legend>
              <div>
                <label htmlFor="display">Display</label>
                <select name="display" id="display" onChange={e => {setDisplay(e.target.value)}}>
                  <option value="default">Default</option>
                  <option value="dim">Dim</option>
                  <option value="lightsout">Lights out</option>
                </select>
              </div>
              <div>
                <label htmlFor="text">Text</label>
                <textarea id="text" value={text} onChange={e => setText(e.target.value)}
                  maxLength="280"/>
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)} />
              </div>
              <div>
                <label htmlFor="app">App</label>
                <input type="text" id="app" value={app} onChange={e => setApp(e.target.value)} />
              </div>
              <div>
                <label htmlFor="retweets">Retweets</label>
                <input type="number" id="retweets" value={retweets} onChange={e => setRetweets(e.target.value)} />
              </div>
              <div>
                <label htmlFor="quotedTweets">Quotes</label>
                <input type="number" id="quotedTweets" value={quotedTweets} onChange={e => setQuotedTweets(e.target.value)} />
              </div>
              <div>
                <label htmlFor="likes">Likes</label>
                <input type="number" id="likes" value={likes} onChange={e => setLikes(e.target.value)} />
              </div>
            </fieldset>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
