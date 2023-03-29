import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "my-slider",
    arrows: false,
  };

  const [sliders, setSliders] = useState([1, 2, 3, 4]);
  const [styleThumb, setStyleThumb] = useState({
    transform: "translateX(-100%)",
  });
  const addSlider = () => {
    setSliders([...sliders, sliders.length + 1]);
  };

  const startLoader = () => {
    setStyleThumb({ ...styleThumb, transform: "translateX(0%)" });
  };

  const thumbRef = useRef();

  useEffect(() => {
    console.log(thumbRef);
  }, []);

  return (
    <>
      <div className='App'>
        <h2> Single Item</h2>
        <h2>{sliders}</h2>
        <button onClick={addSlider}>Add slider</button>
        <button onClick={startLoader}>Start loader</button>

        <div>
          <Slider {...settings}>
            {sliders.map((value, index) => (
              <div className='alalalalalal' key={`${value}-${index}`}>
                <h3>{value}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='progress-container'>
        <div className='progressbar'>
          <div className='progressbar-thumb' style={styleThumb} ref={"thumbRef"}></div>
        </div>
        <div className='progressbar'>
          <div className='progressbar-thumb' style={styleThumb}></div>
        </div>
        <div className='progressbar'>
          <div className='progressbar-thumb' style={styleThumb}></div>
        </div>
      </div>
    </>
  );
}

export default App;
