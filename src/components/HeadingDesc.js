import styles from "./headingdesc.module.scss";
const HeadingDesc = props => {
  return (
    <div
      className={styles.heading}
      style={{
        position: props?.positionName,
        top: props?.top,
        left: props?.left,
      }}
    >
      <h1 className={props?.h1Styles}>{props.heading}</h1>
      <p className={props.pStyles}>{props.desc}</p>
    </div>
  );
};

export default HeadingDesc;
