
import { Link } from 'react-router-dom';

const styles = {
  card: {
    padding: '20px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit'
  }
};

const TopicCard = ({ id, title, description }) => {
  return (
    <Link to={`/topic/${id}`} style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default TopicCard;
