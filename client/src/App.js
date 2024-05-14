import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/login'
import LogoutButton from './Components/logout'
import {useEffect} from 'react'
import {gapi} from 'gapi-script';

const clientId="824876817471-3el3ao2g80q8ao2497pfqer25u0mtts0.apps.googleusercontent.com";


function App() {

  useEffect(() =>{
    function start() {
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  });
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
