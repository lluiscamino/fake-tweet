import 'react-app-polyfill/ie11';
import * as React from 'react';
import {useState} from 'react';
import * as ReactDOM from 'react-dom';
import Tweet from '../src';
import './index.css';

const App = () => {
  const [nickname, setNickname] = useState('SpaceX');
  const [name, setName] = useState('SpaceX');
  const [avatar, setAvatar] = useState('https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg');
  const [verified, setVerified] = useState(true);
  const [locked, setLocked] = useState(false);
  const [display, setDisplay] = useState('default');
  const [text, setText] = useState('Falcon 9 launches Starlink to orbit – the eighth launch and landing of this booster 🚀');
  const [image, setImage] = useState([
    'https://pbs.twimg.com/media/EsL2cuZUwAEIM-N?format=jpg&name=small',
    'https://pbs.twimg.com/media/EsL2cuyVQAA8j4D?format=jpg&name=small',
    'https://pbs.twimg.com/media/EsL2cvxUYAAvdih?format=jpg&name=small',
    'https://pbs.twimg.com/media/EsL2cwGVcAIKGq3?format=jpg&name=small'
  ]);
  const [date, setDate] = useState('4:26 PM · Jan 20, 2021');
  const [app, setApp] = useState('Twitter Web App');
  const [retweets, setRetweets] = useState(5703);
  const [quotedTweets, setQuotedTweets] = useState(379);
  const [likes, setLikes] = useState(68900);

  return (
    <div className="App">
      <a href="https://github.com/lluiscamino/fake-tweet" target="_blank" rel="noopener noreferrer"
         id="gh-ribbon">
        <img width="149"
             height="149"
             src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
             className="attachment-full size-full" alt="Fork me on GitHub"
             data-recalc-dims="1"
        />
      </a>
      <Tweet config={
        {
          user: {
            nickname: nickname,
            name: name,
            avatar: avatar,
            verified: verified,
            locked: locked
          },
          display: display, // default, dim or lights-out
          text: text,
          image: image,
          date: date,
          app: app,
          retweets: retweets,
          quotedTweets: quotedTweets,
          likes: likes
        }
      }/>
      <div id="content">
        <form className="config">
          <fieldset>
            <legend>User</legend>
            <div>
              <label htmlFor="nickname">Nickname</label>
              <input type="text" id="nickname" value={nickname}
                     onChange={e => setNickname(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="avatar">Avatar</label>
              <input type="text" id="avatar" value={avatar}
                     onChange={e => setAvatar(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="verified">Verified</label>
              <input type="checkbox" id="verified" checked={verified} onChange={e => {
                const val = e.target.checked;
                setVerified(val);
                if (val && locked) setLocked(false);
              }}/>
            </div>
            <div>
              <label htmlFor="locked">Locked</label>
              <input type="checkbox" id="locked" checked={locked} onChange={e => {
                const val = e.target.checked;
                setLocked(val);
                if (val && verified) setVerified(false);
              }}/>
            </div>
          </fieldset>
          <fieldset>
            <legend>Tweet</legend>
            <div>
              <label htmlFor="display">Display</label>
              <select name="display" id="display" onChange={e => {
                setDisplay(e.target.value)
              }}>
                <option value="default" selected>Default</option>
                <option value="dim">Dim</option>
                <option value="lightsout">Lights out</option>
              </select>
            </div>
            <div>
              <label htmlFor="text">Text</label>
              <textarea id="text" value={text} onChange={e => setText(e.target.value)}
                        maxLength={280}/>
            </div>
            <div>
              <label htmlFor="image">Images</label>
              <textarea id="image" value={image} placeholder="Comma separated"
                        onChange={e => {
                          const value = e.target.value;
                          setImage(value ? value.split(',') : []);
                        }}/><br/>
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="app">App</label>
              <input type="text" id="app" value={app} onChange={e => setApp(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="retweets">Retweets</label>
              <input type="number" id="retweets" value={retweets}
                     onChange={e => setRetweets(parseInt(e.target.value))}/>
            </div>
            <div>
              <label htmlFor="retweetsWithComments">RTs w/ comments</label>
              <input type="number" id="retweetsWithComments" value={quotedTweets}
                     onChange={e => setQuotedTweets(parseInt(e.target.value))}/>
            </div>
            <div>
              <label htmlFor="likes">Likes</label>
              <input type="number" id="likes" value={likes} onChange={e => setLikes(parseInt(e.target.value))}/>
            </div>
          </fieldset>
        </form>
      </div>
      <footer>
        <span id="copyright">Lluís Camino © {new Date().getFullYear()}</span>
        <span id="footer-links">
                <a href="https://github.com/lluiscamino/fake-tweet"
                   title="View on GitHub">
                    <img src={require('./images/github-icon.png')} alt="GitHub icon" className="footer-icon"/>
                </a>
                <a href="https://www.npmjs.com/package/fake-tweet"
                   title="View on NPM">
                    <img src={require('./images/npm-icon.png')} alt="NPM icon" className="footer-icon"/>
                </a>
              </span>
      </footer>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
