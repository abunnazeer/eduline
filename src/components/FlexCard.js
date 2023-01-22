import styles from "./flexcard.module.scss";

const FlexCard = props => {
  return (
    <div
      className={styles.flex}
      style={{ justifyContent: props.value, marginTop: props.mt }}
    >
      {props.children}
    </div>
  );
};

export default FlexCard;
