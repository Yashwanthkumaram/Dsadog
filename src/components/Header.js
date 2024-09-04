
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header style={styles.header}>
//       <div style={styles.logo}>DSA Guide</div>
//       <nav>
//         <ul style={styles.navList}>
//           <li><Link to="/" style={styles.navItem}>Home</Link></li>
//           <li><Link to="/topics" style={styles.navItem}>Topics</Link></li>
//           <li><Link to="/about" style={styles.navItem}>About</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '1rem',
//     backgroundColor: '#282c34',
//   },
//   logo: {
//     color: '#61dafb',
//     fontSize: '1.5rem',
//   },
//   navList: {
//     display: 'flex',
//     listStyle: 'none',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     color: '#ffffff',
//     textDecoration: 'none',
//     marginLeft: '1rem',
//   },
// };

// export default Header;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>💀💀</div>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navItem}>Home</Link></li>
          <li><Link to="/topics" style={styles.navItem}>Topics</Link></li>
          <li><Link to="/about" style={styles.navItem}>About</Link></li>
        </ul>
      </nav>
      <div style={styles.socialIcons}>
        <a href="https://www.instagram.com/yashwanth_techdevil/" style={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/in/yashwanthkumaram/" style={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/Yashwanthkumaram" style={styles.icon}><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
  },
  navItem: {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'white',
  },
  socialIcons: {
    display: 'flex',
  },
  icon: {
    color: 'white',
    marginLeft: '10px',
    fontSize: '20px',
  }
};

export default Header;

