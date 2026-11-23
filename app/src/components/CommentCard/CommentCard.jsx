import styles from './CommentCard.module.css';

import { getRandomCreatorPP } from '@/services/mediaService';


function CommentCard({comment}) {
    // RENDER
    if (comment.content.length <= 560) {
        return <li className={styles.cardContainer}>
            <figure className={styles.creatorInfoContainer}>
                <img className={styles.creatorPP} src={getRandomCreatorPP()} alt="creator of this comment photo profil"/>
                <figcaption className={styles.creatorName}>{comment.creator}</figcaption>
            </figure>

            <p className={styles.commentText}>{comment.content}</p>
        </li>
    }

    return <details className={styles.cardContainer}>
        <summary className={styles.summaryContainer}>
            <img className={styles.creatorPP} src={getRandomCreatorPP()} alt="creator of this comment photo profil"/>
            <span className={styles.creatorName}>{comment.creator}</span>

            <p className={styles.commentTextSummary}>{comment.content.slice(0, 560)} ...</p>
        </summary>

        <p className={styles.commentText}>{comment.content}</p>
    </details>
}


export default CommentCard;
