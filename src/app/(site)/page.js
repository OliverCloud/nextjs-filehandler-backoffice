import styles from './page.module.css'
import Reviews from '@/components/reviews/reviews'
import Affiliates from '@/components/affiliates/affiliates'

export default function Home() {

  return (

    <main className={styles.page} >

        <section id={'section-affiliates'}>
            <Affiliates></Affiliates>
        </section>

        <section id={'section-reviews'}>
            <Reviews></Reviews>
        </section>

    </main>
  )
}
