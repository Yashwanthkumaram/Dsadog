import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Fastandslowpointers from './pages/Twopointer';
import Footer from './components/Footer';

function App() {
  return (
    <div style={styles.appContainer}>
      <Router>
        <Header />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topic/:id" element={<Fastandslowpointers />} />
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
