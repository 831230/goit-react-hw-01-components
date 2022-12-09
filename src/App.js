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
  </>

);

export default App