import styles from "./lists.module.scss";
const Lists = props => {
  return <ul className={styles.list}>{props.children}</ul>;
};

export default Lists;
