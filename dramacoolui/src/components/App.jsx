import styles from '../styles/App.module.css'
import { useState } from 'react';
import JSSoup from "jssoup";
import axios from 'axios';
// const JSSoup = require('jssoup').default;

const App = () => {
    const [query, setQuery] = useState('');

    const updateQuery = (event) => {
        setQuery(event.target.value);
    };

    const fetchQuery = async (keyword) => {
        const head = 'https://dramacool.lv/wp-json/dooplay/search/?keyword';
        const tail = '&nonce=dcc0b21e4b';
        const query = keyword.split(' ').join('%20');
        const url = head + query + tail;
        const res = await axios.get(url);
        const data = res.data;
        const soup = new JSSoup(data);
        let x = soup.find()
    }

    // const soupify = ()
    

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
