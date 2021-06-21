import styles from '../styles/Titles.module.css';
import Title from './Title';

const Titles = (props) => {
    const obj = props.data;
    const ids = Object.keys(obj);
    return (
        <div className={styles.container}>
            {ids.map((id) => (
                <Title key={id} title={obj[id]} />
            ))}
        </div>
    );
};

export default Titles;
