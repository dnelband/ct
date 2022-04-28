import styles from '../styles/Home.module.css';
import GJNumberLabel from './GJNumberLabel';

const GjNumbersView = (props) => {
  return (
    <div className={styles.numbersView}>
      {props.list.map((item, index) => (
        <GJNumberLabel
          key={index}
          label={Object.keys(item)[0]}
          number={Object.values(item)[0]}
        />
      ))}
    </div>
  );
};

export default GjNumbersView;
