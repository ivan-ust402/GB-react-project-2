import ChatMUI from '../ChatMUI/ChatMUI';
import ChatsMUI from '../ChatsMUI/ChatsMUI';
import './App.scss';

function App() {
  return (
    <div className="app center">
      <header className='app__header'>
        <h1 className='app__title'>My GB Homeworks</h1> 
      </header>
      <section className="app__display">
        <div className="app__messenger">
          <ChatsMUI />
          <ChatMUI />
        </div>
      </section>
    </div>
  );
}

export default App;
