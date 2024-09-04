import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import TopicCard from '../components/TopicCard';

const HomePage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/topics.json')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error loading topics:', error));
  }, []);

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1>I HATE MY LIFE TOO!</h1>
        <p>Hey there, this page is just help me stay consistent. I try cover most<strong> common patterns</strong> that help to  solve DSA based Questions Hope it helps
        <br></br> and btw SearchBar doesnt work  </p>
        <SearchBar />
      </section>
      <section style={styles.topicGrid}>
        <h2>Explore Topics</h2>
        <div style={styles.grid}>
          {topics.map(topic => (
            <TopicCard key={topic.id} id={topic.title} title={topic.title} description={topic.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  topicGrid: {
    marginTop: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
  },
};

export default HomePage;
