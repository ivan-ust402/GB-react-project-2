import { Container } from '@mui/material';
import './App.scss';
import { Chat } from '../Chat/Chat';
import { Chats } from '../Chats/Chats';

function App() {
  return (
    <div style={stylesApp.container}>
      <header className='app__header'>
        <h1 className='app__title'>My GB Homeworks</h1> 
      </header>
      <section className="app__display">
        <div className="app__messenger">
          <Chats />
          <Chat />
        </div>
      </section>
    </div>
  );
}

const stylesApp = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  }
}

export default App;
