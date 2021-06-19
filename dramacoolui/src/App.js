import logo from './logo.svg';
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <img src={logo} className={styles.Applogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
