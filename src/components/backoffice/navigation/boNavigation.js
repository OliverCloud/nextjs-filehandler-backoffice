import Link from 'next/link';
import styles from './boNavigation.module.css';
const BoNavigation = () => {
    return (
        <div className={styles.container}>
            
            <Link href="/">Back to the Frontend</Link> | 
            <Link href="/backoffice/affiliates">Edit Affiliates</Link> |
            <Link href="/backoffice/affiliates">Edit Affiliates</Link> |
            <Link href="/backoffice/reviews">Edit Reviews</Link> |
            <Link href="/backoffice/single">Single</Link>

        </div>
    )
};
export default BoNavigation