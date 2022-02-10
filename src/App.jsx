import './App.css';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Boards from './Components/Boards';
import Topics from './Components/Topics';
import Posts from './Components/Posts';
import CreateBoards from './Components/CreateBoards';
import CreateTopics from './Components/CreateTopics';

function App() {
  return (
    <div className="App">
      <Login />
      <CreateAccount />
      <Boards />
      <CreateBoards />
      <Topics />
      <CreateTopics />
      <Posts />
    </div>
  );
}

export default App;
