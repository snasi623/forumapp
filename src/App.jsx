import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Boards from './Components/Boards';
import Topics from './Components/Topics';
import Posts from './Components/Posts';
import CreateBoards from './Components/CreateBoards';
import CreateTopics from './Components/CreateTopics';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Boards />} />
          <Route path="login" element={<Login />} />
          <Route path="topics/:boardId" element={<Topics />} />
          <Route path="posts/:topicId" element={<Posts />} />
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="createboards" element={<CreateBoards />} />
          <Route path="createtopics/:boardId" element={<CreateTopics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
