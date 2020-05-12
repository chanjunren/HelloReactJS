import React from 'react';
import './App.css';
import Stylesheet from './components/Stylesheets'
import Inline from './components/Inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true}></Stylesheet>
      <Inline></Inline>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
