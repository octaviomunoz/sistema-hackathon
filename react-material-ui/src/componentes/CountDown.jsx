import React from 'react'
import ReactDOM from 'react-dom';

function CountDown(){
  var distanceTime = new Date("Jan 5, 2021 15:37:25").getTime() - new Date().getTime();

  var days = Math.floor(distanceTime/(1000*60*60*24));
  var hours = Math.floor((distanceTime%(1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((distanceTime%(1000*60*60))/(1000*60));
  var seconds = Math.floor(distanceTime%(1000*60)/1000);

  return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}


function tick(){
  const element = (<p> {CountDown()} </p>);

  ReactDOM.render(
    element,
    document.getElementById('root2')
  );
}

setInterval(tick, 1000);
