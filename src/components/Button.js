import styles from "./button.module.scss";

const Button = props => {
  return <div className={styles.btn}>{props.name}</div>;
};

export default Button;
