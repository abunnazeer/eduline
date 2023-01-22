// import Lists from "./components/Lists";
import Navigation from "./layouts/Navigation";
import Gallery from "./components/Gallery";
import HeadingDesc from "./components/HeadingDesc";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Card from "./components/Card";
import FlexCard from "./components/FlexCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faPersonChalkboard,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import globe from "./assets/globe.png";

function App() {
  return (
    <div>
      <Navigation />
      <Gallery />
      <HeadingDesc
        positionName="absolute"
        top="35vh"
        left="50px"
        h1Styles="width_70 bg_grey_trans_05 color_white size_3"
        pStyles="width_70 size_2 color_white bg_grey_trans_05"
        heading="EDUCATION AND TRAINING ORGANIZATON"
        desc=" University is an advanced solution for education and training
          organization"
      />
      <TextBox
        positionName="absolute"
        top="70vh"
        left="5rem"
        height="4.5rem"
        width="47.5rem"
        placeholder="Email Address"
        type="text"
      />

      <Button
        positionName="absolute"
        top="70.6vh"
        left="42.3rem"
        bgcolor="#de9e00"
        name="search"
      />
      <FlexCard value="center" mt="5rem">
        <Card width="25%" bgcolor="#DED7C5">
          <FlexCard value="flex-start">
            <FontAwesomeIcon
              icon={faBookOpenReader}
              size="4x"
              className="pd_1"
            />
            <h1>Students</h1>
          </FlexCard>
          <HeadingDesc
            h1Styles="  size_2"
            pStyles=" size_1_5 pd_1"
            desc="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi amet possimus fuga voluptas dignissimos fugit a libero dicta"
          />
          <Button
            textColor="#fff"
            bgcolor="#2F3430"
            name="Read more"
            width="100%"
            margin="0px"
            borderRadius="0px"
          />
        </Card>
        <Card width="25%">
          <FlexCard value="flex-start">
            <FontAwesomeIcon
              icon={faPersonChalkboard}
              size="4x"
              className="pd_1"
            />
            <h1>Teachers</h1>
          </FlexCard>

          <HeadingDesc
            h1Styles="  size_2"
            pStyles=" size_1_5 pd_1"
            desc="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi amet possimus fuga voluptas dignissimos fugit a libero dicta"
          />
          <Button
            textColor="#fff"
            bgcolor="#de9e00"
            name="Read more"
            width="100%"
            margin="0px"
            borderRadius="0px"
          />
        </Card>
        <Card width="25%">
          <FlexCard value="flex-start">
            <FontAwesomeIcon icon={faCalendarDays} size="4x" className="pd_1" />
            <h1>Calendar</h1>
          </FlexCard>
          <HeadingDesc
            h1Styles="  size_2"
            pStyles=" size_1_5 pd_1"
            desc="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi amet possimus fuga voluptas dignissimos fugit a libero dicta"
          />
          <Button
            textColor="#fff"
            bgcolor="#2F3430"
            name="Read more"
            width="100%"
            margin="0px"
            borderRadius="0px"
          />
        </Card>
      </FlexCard>
      <Card
        bgcolor="#EFEFEF"
        positionName="relative"
        customClass="pdr_13"
        mt="5rem"
        boxShowdow="none"
      >
        <FlexCard value="flex-start">
          <div>
            <h1>
              WE ARE TESTED & TRUSTED BY <br />
              OVER 15 COUNTRIES AROUND THE GLOBE
            </h1>
            <HeadingDesc
              pStyles=" width_70 size_1_5 mt_1 "
              desc="University is an adavanced solution for Education and Training Organization"
            />
            <div className="prelative mt_3">
              <TextBox
                // positionName="absolute"
                height="4.5rem"
                width="40rem"
                placeholder="Email Address"
                type="text"
              />

              <Button
                positionName="absolute"
                top="0.4rem"
                left="29.8rem"
                bgcolor="#de9e00"
                name="search"
              />
            </div>
          </div>

          <img
            src={globe}
            alt="glcobe"
            className="width_25 ml_10 bgwhite br_10 pd_1"
          />
        </FlexCard>
      </Card>

      <HeadingDesc
        h1Styles="center  size_2 mt_5"
        pStyles="center size_1_5"
        heading="MEET OUR INTELLIGENT AND VERY EFFECTIVE MEMBERS"
        desc="University is an adavanced solution for Education and Training Organization"
      />
    </div>
  );
}

export default App;
