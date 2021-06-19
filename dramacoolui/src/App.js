// import styles from './App.module.css'
import { useState } from 'react';

const App = () => {
    const [query, setQuery] = useState('');

    const updateQuery = (event) => {
        if (event.target.value.length > 2) 		console.log(event.target.value);
        setQuery(event.target.value);
    };

    return (
        <div className=''>
            <div>Search</div>
            <input type='text' onChange={updateQuery} value={query} />
        </div>
    );
};

export default App;
