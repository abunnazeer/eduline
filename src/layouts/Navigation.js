import { Fragment } from "react";
import styles from "./navigation.module.scss";
import logo from "../assets/logo.png";
import Lists from "../components/Lists";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FlexCard from "../components/FlexCard";
import TopHeader from "../components/TopHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Fragment className={styles.heading}>
      <TopHeader>
        <p>
          <FontAwesomeIcon icon={faLocationDot} className="mr" />
          No. 5 Dr, Bukar House Custom area
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="mr" /> 07066543434
        </p>
      </TopHeader>
      <div className={styles.nav}>
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
            <Button name="Register" bgcolor="#de9e00" />
          </div>
        </FlexCard>
      </div>
    </Fragment>
  );
};

export default Navigation;
