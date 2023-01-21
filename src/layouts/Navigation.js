import { Fragment } from "react";
import styles from "./navigation.module.scss";
import logo from "../assets/logo.png";
import Lists from "../components/Lists";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FlexCard from "../components/FlexCard";

const Navigation = () => {
  return (
    <Fragment>
      <div className={styles.heading}>
        <FlexCard>
          <img src={logo} alt="logo" className={styles.logo} />
          <Lists>
            <Link to="#">
              <li>Home</li>
            </Link>
            <Link to="#">
              <li>Courses</li>
            </Link>
            <Link to="#">
              <li>Students</li>
            </Link>
            <Link to="#">
              <li>Centers</li>
            </Link>
            <Link to="#">
              <li>About</li>
            </Link>
          </Lists>
          <div>
            <Button name="Login" />
            <Button name="Register" />
          </div>
        </FlexCard>
      </div>
    </Fragment>
  );
};

export default Navigation;
