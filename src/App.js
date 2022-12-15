import Profile from './components/profile/Profile';
import user from './data/user.json';
import Statistics from 'components/statistics/Statistics';
import data from './data/data.json';
import friends from './data/friends.json';
import FriendList from './components/friends-list/FriendList';

// import friendListStyles from "./components/friends-list-item/FriendList.module.css";
import transactions from './data/transactions.json';
import TransactionHistory from './components/transactions/TransactionHistory';

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
    ></Profile>

    <Statistics statistics={data} />

    <FriendList friendsArr={friends}></FriendList>

    <TransactionHistory items={transactions} />
  </>
);

export default App;
