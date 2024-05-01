import clsx from 'clsx';
import css from './Friend.module.css';

export default function Friend({ user: { name, isOnline, avatar } }) {
  const statusClass = isOnline ? css.isOnline : css.isOffline;
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt="User photo" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
