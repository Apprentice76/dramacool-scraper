import styles from '../styles/Title.module.css';

const Title = (props) => {
    const title = props.title;
    return (
        <div className={styles.item}>
            <img src={title['img']} alt={title['title']} className={styles.itemImg} />
            <p className={styles.itemTitle}>{title['title']}</p>
        </div>
    );
};

export default Title;
