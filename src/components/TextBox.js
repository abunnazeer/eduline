import styles from "./textbox.module.scss";

const TextBox = props => {
  return (
    <div
      className={styles.textbox}
      style={{
        top: props?.top,
        left: props.left,
        position: props.positionName,
      }}
    >
      <input
        style={{ width: props?.width, height: props?.height }}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextBox;
