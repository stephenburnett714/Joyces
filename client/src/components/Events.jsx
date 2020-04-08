import React from 'react';
import artist from '../images/event-artist.jpg'

export default function Events(props) {
  return (
    <div className="event-background">
      <div className="event-title">Events</div>
       <img className="event-picture" src={artist} alt="Photo Credit Antoine Julien"/>
     
        <h1 className="event-text-color">Next Up</h1>
        <h2 className="event-text-color">Steel Pan Boyz</h2>
        <h1 className="event-text-color">When</h1>
        <h2 className="event-text-color">Friday October 15th</h2>
        <h3 className="event-text-color">@ 8:30 p.m.</h3>
    </div>
  );
}