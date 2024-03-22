import Reviews from '@/components/backoffice/reviews/reviews';
import styles from './page.module.css';
export default function ReviewsPage() {

    return (
        <div className={styles.page}>

            <h1>Edit Reviews</h1>

            <Reviews />

        </div>
    )
    
}