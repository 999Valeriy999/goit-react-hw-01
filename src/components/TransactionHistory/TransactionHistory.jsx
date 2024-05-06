import css from './Table.module.css';

export default function Table({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr className={css.tHead}>
          <th className={css.tItem}>Type</th>
          <th className={css.tItem}>Amount</th>
          <th className={css.tItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tbody} key={id}>
            <td className={css.tbItem}>{type}</td>
            <td className={css.tbItem}>{amount}</td>
            <td className={css.tbItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
