// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import Profile from "./components/Profile";
import user from "./data/user.json";
import Statistics from "components/Statistics";
import data from "./data/data.json";
import friends from "./data/friends.json";
import FriendList from "./components/FriendList";

const App = () => (
  <>
    <Profile 
    username={user.username} 
    tag={user.tag} 
    location={user.location} 
    avatar={user.avatar} 
    statsFollower={user.stats.followers}
    statsViews={user.stats.views}
    statsLikes={user.stats.likes}
    >
    </Profile>

    <Statistics statistics={data}/>

    <FriendList friendsArr={friends}/>
  </>

);

export default App