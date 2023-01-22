import styles from "./button.module.scss";

const Button = props => {
  //   const color = props.color;
  return (
    <div
      className={styles.btn}
      style={{
        backgroundColor: props?.bgcolor,
        position: props?.positionName,
        top: props?.top,
        left: props?.left,
        right: props?.right,
        bottom: props?.bottom,
      }}
    >
      {props.name}
    </div>
  );
};

export default Button;
