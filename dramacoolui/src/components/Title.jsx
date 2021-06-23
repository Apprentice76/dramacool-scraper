import styles from '../styles/Title.module.css'
import { Link } from 'react-router-dom'

const Title = props => {
	const title = props.title
	const uid = title['url'].split('/')[4]
	return (
		<Link to={`/drama/${uid}`} onClick={() => props.setter(title)}>
			<div className={styles.item}>
				<img
					src={title['img']}
					alt={title['title']}
					className={styles.itemImg}
				/>
				<p className={styles.itemTitle}>{title['title']}</p>
			</div>
		</Link>
	)
}

export default Title
