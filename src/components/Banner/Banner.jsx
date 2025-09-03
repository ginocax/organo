import "./Banner.css";
import banner from "/src/assets/banner.png";

function Banner() {
  return (
    <header className="banner">
      <img src={banner} alt="O banner principal da página do Organo" />
    </header>
  );
}

export default Banner;
