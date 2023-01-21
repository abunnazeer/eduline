import styles from "./topheader.module.scss";
const TopHeader = props => {
  return <div className={styles.top}>{props.children}</div>;
};
export default TopHeader;
