import './App.css';
import Profile from './components/Profile/Profile.jsx';
import userData from './userData.json';
import friends from './components/FriendList/Friends.json';
import FriendList from './components/FriendList/FriendList.jsx';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
