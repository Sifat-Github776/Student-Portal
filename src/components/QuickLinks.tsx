import styles from '@/components/layout/QuickLinks.module.css';

const QuickLinks = () => {
  return (
    <div className={styles.quickLinksContainer}>
      <h2 className={styles.title}>Quick Links</h2>
      
      <div className={styles.card} style={{ backgroundColor: '#5E57E8' }}>
        <div className={styles.icon}>📚</div>
        <h3 className={styles.text}>Canvas LMS</h3>
        <p className={styles.para}>Click here to access your LMS portal for assignments, class recordings and notes.</p>
      </div>
      
      <div className={styles.card} style={{ backgroundColor: '#EA57C1' }}>
        <div className={styles.icon}>🖥️</div>
        <h3 className={styles.text}>Join Live Class</h3>
        <p className={styles.para}>Class 7 Math is starting in <strong>1 hour, 35 minutes</strong>.</p>
      </div>
      
      <div className={styles.card} style={{ backgroundColor: '#5794E8' }}>
        <div className={styles.icon}>📞</div>
        <h3 className={styles.text}>Contact Teacher</h3>
        <p className={styles.para}>Click here to contact your teacher for any doubts or concerns.</p>
      </div>
    </div>
  );
};

export default QuickLinks;
