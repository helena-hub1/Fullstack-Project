import LatestModels from "../../components/latestModels/LatestModels";
import car from "../../assets/homepagecar.jpg";
import "./Home.css";
import LatestModels2 from "../../components/latestModels2/LatestModels2";
import ImageSlidder from "../../components/imageSlidder/ImageSlidder";

export default function Home() {
  return (
    <div className="home">
      <div className="image-container">
        <div className="image">
          <img src={car} width="100%" height="500px"></img>
        </div>
      </div>
      <LatestModels />
      <LatestModels2 />
      <ImageSlidder />
    </div>
  );
}
