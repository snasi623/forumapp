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
import sessionProvider from './Components/SessionProvider';
import UpdateAccount from './Components/UpdateAccount';
import Logout from './Components/Logout';


function App() {
  const { getSessionId, setSessionId, clearSessionId, getMe } = sessionProvider();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation getSessionId={getSessionId} getMe={getMe} />}>
          <Route index element={<Boards />} />
          <Route path="login" element={<Login setSessionId={setSessionId} getMe={getMe} />} />
          <Route path="topics/:boardId" element={<Topics />} />
          <Route path="posts/:topicId" element={<Posts getSessionId={getSessionId} getMe={getMe} />} />
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="createboards" element={<CreateBoards getSessionId={getSessionId} />} />
          <Route path="createtopics/:boardId" element={<CreateTopics getSessionId={getSessionId} />} />
          <Route path="logout" element={<Logout getSessionId={getSessionId} clearSessionId={clearSessionId} />} />
          <Route path="updateaccount" element={<UpdateAccount getMe={getMe}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
