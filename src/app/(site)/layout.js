import Navigation from "@/components/navigation/navigation";
import styles from './layout.module.css';
export default function siteLayout({ children }) {
    return <div className={styles.layout}>
        <Navigation></Navigation>
        {children}
    </div>
}