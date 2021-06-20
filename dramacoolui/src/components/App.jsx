import styles from '../styles/App.module.css'
import { useState } from 'react';

const App = () => {
    const [query, setQuery] = useState('');

    const updateQuery = (event) => {
        if (event.target.value.length > 2) 		console.log(event.target.value);
        setQuery(event.target.value);
    };

    return (
        <div className={styles.main}>
            <div>Search</div>
            <input type='text' onChange={updateQuery} value={query} placeholder='Title'/>
            <button onClick={() => {setQuery('')}}>Go</button>
            <div>
                
            </div>
        </div>
    );
};

export default App;
