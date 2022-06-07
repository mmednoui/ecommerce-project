import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./Slider.css";
import { sliderItems } from "../../data";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider">
      <div
        className="slider_arrow arrow_left "
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className={
          slideIndex === 0
            ? "slider_content"
            : slideIndex === 1
            ? "slider_content one"
            : "slider_content two "
        }
      >
        {sliderItems.map((item) => (
          <div
            className="slide"
            style={{
              backgroundColor: item.bg,
            }}
            key={item.id}
          >
            <div className="image_container">
              <img src={item.img} alt="" />
            </div>
            <div className="info_container">
              <h1>{item.title} </h1>
              <p>{item.desc}</p>
              <button>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="slider_arrow arrow_right"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
export default Slider;
