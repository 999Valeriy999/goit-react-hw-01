import FriendsList from '../FriendsList/FriendsList';
import Profile from '../Profile/Profile';
import Table from '../Table/Table';

import css from './App.module.css';
import currentUser from '../../currentUser.json';
import friends from '../../Friends.json';
import transactions from '../../Transactions.json';

function App() {
  return (
    <div className={css.container}>
      <div className={css.userData}>
        <Profile items={currentUser} />
        <Table items={transactions} />
      </div>
      <FriendsList items={friends} />
    </div>
  );
}

export { App };
