import styles from '../styles/App.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Titles from './Titles';

const App = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState({});
    const [go, setGo] = useState(false);
    const [queryModified, setQueryModified] = useState(false);

    useEffect(() => {
        if (query.length > 2 && go && queryModified) {
            search(query);
        }
        setGo(false);
    }, [go, query, queryModified]);

    useEffect(() => {
        setQueryModified(true);
    }, [query]);

    const clickHandler = () => {
        setGo(true);
        setTimeout(() => {
            setQueryModified(false);
        }, 200);
    };

    const search = (keyword) => {
        if (keyword.length > 2) {
            const head =
                'https://dramacool.lv/wp-json/dooplay/search/?keyword=';
            const tail = '&nonce=dcc0b21e4b';
            const query = keyword.split(' ').join('%20');
            const url = head + query + tail;
            axios
                .get(url)
                .then((resp) => resp.data)
                .then((obj) => {
                    setResult(obj);
                })
                .catch((e) => console.log(e.message));
        }
    };

    return (
        <div className={styles.main}>
            <div>Search</div>
            <input
                type='text'
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                placeholder='Title'
                onKeyUp={(e) => e.key === 'Enter' && clickHandler()}
            />
            {/* <button onClick={clickHandler}>Go</button> */}
            <Titles data={result} />
        </div>
    );
};

export default App;
