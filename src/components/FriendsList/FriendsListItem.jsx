import Friend from '../Friend/Friend';
import css from './FriendsListItem.module.css';

export default function FriendsList({ items }) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <Friend user={item} />
        </li>
      ))}
    </ul>
  );
}
