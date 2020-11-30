import './App.css';
import ChatArea from './components/ChatArea/ChatArea';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  
  return (
    <div className="App">
      <Sidebar/>
      <ChatArea />
    </div>
  );
}

export default App;
