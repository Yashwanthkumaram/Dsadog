import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Fastandslowpointers from './pages/Twopointer';
import SQLCheatSheet from './pages/SQLCheatsheet';
import CPlusPlusCheatSheet from './pages/c++CheatSheet';
import Download from './pages/downloads';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';




function App() {

  function TopicPage() {
    const { id } = useParams();
    console.log(id);
    switch (id) {
      
      case 'Algorithms for DSA':
        return <Fastandslowpointers />;
      case 'SQL Cheatsheet':
        return <SQLCheatSheet />;
        case 'C++ Cheat sheet':
          return <CPlusPlusCheatSheet />;

        
      default:
        return <h2>Topic not found</h2>;
    }
  }



  return (
  
    <div style={styles.appContainer}>
      <Router>
        <Header />
        <div style={styles.content}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:id" element={<TopicPage />} />
        <Route path="/Downloads" element={<Download />} />
       
        </Routes>

        </div>
        <Footer />
      </Router>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1, 
    padding: '2rem',
  },
};

export default App;
