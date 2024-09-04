
// import React from 'react';

// const TopicCard = ({ title, description }) => {
//   return (
//     <div style={styles.card}>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     padding: '1rem',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     backgroundColor: '#fff',
//     textAlign: 'center',
//   },
// };

// export default TopicCard;


import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ id, title, description }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/topic/${id}`} style={styles.link}>Learn More</Link>
    </div>
  );
};

const styles = {
  card: {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  link: {
    marginTop: '1rem',
    display: 'inline-block',
    color: '#61dafb',
    textDecoration: 'none',
  },
};

export default TopicCard;
