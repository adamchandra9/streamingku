import React from 'react';
import backgroundImage from '../../../Assets/Images/bgActivate.png';

export default function UserComponent() {
  return (
    <div className="containerContent">
      <div
        className="contentLeft"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <iframe
          className="youtube"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
          title="liveStreaming"
        ></iframe>
      </div>
      <div className="contentRight">
        <div className="containerParticipant">
          <div className="iconOnline" />
          <span style={{ fontWeight: 'bold' }}>Alim</span>
        </div>
        <div className="containerParticipant">
          <div className="iconOffline" />
          <span style={{ fontWeight: 'bold' }}>Hamal</span>
        </div>
        <div className="containerParticipant">
          <div className="iconOnline" />
          <span style={{ fontWeight: 'bold' }}>Khilmi</span>
        </div>
      </div>
    </div>
  );
}
