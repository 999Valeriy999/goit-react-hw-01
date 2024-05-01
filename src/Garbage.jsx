{
  /* <ul>
  {Object.keys(stats).map(({ label, value }) => {
    return (
      <li key={label}>
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </li>
    );
  })}
  </ul> */
}
{
  /* <ul>
  for (const id in stats)
  {
    <li key={stats.label}>
      <span className="label">{stats.label}</span>
      <span className="value">{stats.value}</span>
    </li>
  }
  </ul> */
}
// {
//   [stats].map(item => {
//     const keys = Object.keys(stats.item);
//     return (
//       <li key={username + '-' + keys}>
//         <span>{stats.item}</span>
//         <span>{stats.item}</span>
//       </li>
//     );
//   });
// }

// function State({ items }) {
//   return (
//     <li key={username + '-' + keys}>
//       <span>{items}</span>
//       <span>{stats.item}</span>
//     </li>
//   );
// }
// <ul><State items={state}</ul>

{
  /* <ul>{Object.Keys(stats).map(key => {
  return (
    <li key={} >
      <span >{}</span>
      <span >{}</span>
    </li>
  )})}</ul> */
}

//
// export default function Profile({ items: { username, tag, location, avatar, stats } }) {
//   return (
//     <div>
//       <img src={avatar} alt="User photo" width="150" height="150" />
//       <p>{username}</p>
//       <p>@{tag}</p>
//       <p>{location}</p>
//       <ul>
//         {Object.Keys(stats).map(keys => {
//           return (
//             <li key={keys}>
//               <span>{keys}</span>
//               <span>{stats.keys}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
//
//-------------------
// export default function Profile({ items: { username, tag, location, avatar, stats } }) {
//   const keys = Object.Keys(stats);
//   return (
//     <div>
//       <img src={avatar} alt="User photo" width="150" height="150" />
//       <p>{username}</p>
//       <p>@{tag}</p>
//       <p>{location}</p>
//       <ul>
//         {keys.map(ke => {
//           <State items={ke} />;
//         })}
//       </ul>
//     </div>
//   );
// }

// function State(items) {
//   return (
//     <li key={items}>
//       <span>{items}</span>
//       <span>{stats.items}</span>
//     </li>
//   );
// }
//--------------------------
// function Transaction({ items: { type, amount, currency } }) {
//   return (
//     <tr>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//   );
// }

// export default Transaction;
