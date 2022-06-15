import logo from './logo.svg';
import './App.css';
import MessagePage from './Pages/MessagePage';
import Chatting from './Pages/Chatting';

function App() {
  return (
    <div class=" grid lg:grid-cols-3  gap-4">
      <div>  <MessagePage /></div>
      <div> <Chatting /></div>
      <div> <h2>hi</h2></div>

    </div>
  );
}

export default App;
