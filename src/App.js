import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const {REACT_APP_APP_NAME , REACT_APP_ENV, REACT_APP_BASE_URL} = process.env;
  return (
    <div className="App container mt-5 col-md-5 col-12 bg-light p-5">
      <p>Hello All,</p>
      <p>To create multiple environment files, we have used <b>"env-cmd"</b> node module.</p>
      <p>This solution is giving for apps got created using <b>create-react-app</b>.</p>
      <p className="mt-4">We have created 3 environment files here : </p>
      <ul>
        <li>Development</li>
        <li>Staging</li>
        <li>Production</li>
      </ul>
      <ol>
        <li>Head: <b>{REACT_APP_APP_NAME}</b> </li>
        <li>I am coming from <b>"{REACT_APP_ENV}"</b> env file: <b>"{REACT_APP_BASE_URL}"</b> </li>
      </ol>
    </div>
  );
}

export default App;