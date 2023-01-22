// import Lists from "./components/Lists";
import Navigation from "./layouts/Navigation";
import Gallery from "./components/Gallery";
import HeadingDesc from "./components/HeadingDesc";
import TextBox from "./components/TextBox";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Navigation />
      <Gallery />
      <HeadingDesc
        top="35vh"
        left="50px"
        h1Styles="width_70 bg_grey_trans_05 color_white size_3"
        pStyles="width_70 size_2 color_white bg_grey_trans_05"
        heading="EDUCATION AND TRAINING ORGANIZATON"
        desc=" University is an advanced solution for education and training
          organization"
      />
      <TextBox
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
    </div>
  );
}

export default App;
