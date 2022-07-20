import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
  // return <button onClick={() => console.log('Tehee!')}>Tickle Me!</button>
}

export default Tickler;
