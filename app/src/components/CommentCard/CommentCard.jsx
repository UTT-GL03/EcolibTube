import styles from './CommentCard.module.css';

import { getRandomCreatorPP } from '@/services/mediaService';


function CommentCard({comment}) {
    // RENDER
    return <li className={styles.cardContainer}>
        <figure className={styles.creatorInfoContainer}>
            <img className={styles.creatorPP} src={getRandomCreatorPP()} alt="creator of this comment photo profil"/>
            <figcaption className={styles.creatorName}>{comment.creator}</figcaption>
        </figure>

        <p className={styles.commentText}>{comment.content}</p>
    </li>
}


export default CommentCard;
