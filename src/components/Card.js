import styles from "./card.module.scss";
const Card = props => {
  return (
    <div
      className={styles.card}
      style={{
        width: props.width,
        backgroundColor: props.bgcolor,
        position: props.positionName,
        marginTop: props.mt,
        boxShadow: props.boxShowdow,
      }}
    >
      <div className={props.customClass}>{props.children}</div>
    </div>
  );
};

export default Card;
