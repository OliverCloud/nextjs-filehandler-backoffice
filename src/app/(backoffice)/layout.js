
import BoNavigation from '@/components/backoffice/navigation/boNavigation';
import styles from './layout.module.css';

export const metadata = {
    title: 'FILEHANDLER BACKOFFICE',
    description: 'Backoffice for foodera.dk',
  }
  
export default function backofficeLayout({ children }) {
    return <div className={styles.layout}>
        <BoNavigation></BoNavigation>
        {children}

    </div>
}