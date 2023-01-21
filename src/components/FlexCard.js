import styles from "./flexcard.module.scss";

const FlexCard = props => {
  return <div className={styles.flex}>{props.children}</div>;
};

export default FlexCard;
