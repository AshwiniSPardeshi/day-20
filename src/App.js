import { useState } from 'react';

export default function App() {
  return (
    <div>
      <h1>Dynamic msg output</h1>
      <div>
        <Component />
      </div>
    </div>
  );
}


function Component() {
  const [username, setUsername] = useState("");
  const [list, setList] = useState([]);

  let userVal = (e) => {
    setUsername(e.target.value);
  };

  const clickme = () => {
    setList([username, ...list]);
    setUsername("");
  };

  return (<div>
    <div>
      <input type="text" placeholder='Entre username...' value={username} onChange={userVal} />
    </div>
    <div>
      <input type='button' value="Click" onClick={clickme} />
    </div>
    <div> {list.map((item) => (<div>{item} </div>))} </div>
  </div>);

}