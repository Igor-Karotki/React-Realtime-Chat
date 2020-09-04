import React, { useState } from 'react';
import { Link } from "react-router-dom";
import clone from '../../img/clone.png';
import join from '../../img/join.png';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO</h2>
      <div className="joinBlock">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
            <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className={'button mt-20'} type="submit">Sign In</button>
          </Link>
        </div>
        <div className="joinManualContainer">
          <div>
          </div>
          <h2>Try it right now by completing these steps</h2>
          <p>Step 1: Make a copy of the tab or share the link with a friend</p>
          <img src={clone} alt="clone tab" />
          <p>Step 2: Choose the same room name as on the second tab or the one chosen by a friend</p>
          <img src={join} alt="clone tab" />
        </div>
      </div>
    </div>
  );
}
