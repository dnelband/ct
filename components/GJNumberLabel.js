import styles from '../styles/Home.module.css';

const GJNumberLabel = (props) => {
  return (
    <div className={styles.GJcontainer}>
      <div className={styles.label}> {props.label}</div>
      <div className={styles.number}>{props.number}</div>
    </div>
  );
};

export default GJNumberLabel;
