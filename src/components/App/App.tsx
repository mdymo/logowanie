import * as React from 'react';
import styles from './App.scss';
import Log from '../Log/Log';

const App: React.FC = (props) => {

  return (
    <div className={styles.app}>
      <header>
        <h1>Logowanie</h1>
      </header>
      <Log {...props}/>
    </div>
  );
};

export default App;
