import { ProfileUser } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


import user from "../../src/user.json"
import data from '../../src/data.json'
import friends from '../../src/friends.json'
import transactions from "../../src/transactions.json"


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        fontSize: 20,
        padding: "10px",
        color: '#010101',
        backgroundColor: 'gainsboro'
      }}
    >
      {/* React homework template */}
      <ProfileUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        stats={data}
        title = "Upload stats"
      />
      <FriendList
        friends = {friends}
      />
      <TransactionHistory
        items = {transactions}
      />
      
    </div>
  );
};
