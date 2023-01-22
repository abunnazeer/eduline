import styles from "./button.module.scss";

const Button = props => {
  return (
    <div
      className={styles.btn}
      style={{
        backgroundColor: props.bgcolor,
        position: props.positionName,
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
        width: props.width,
        margin: props.margin,
        borderRadius: props.borderRadius,
        color: props.textColor,
      }}
    >
      {props.name}
    </div>
  );
};

export default Button;
