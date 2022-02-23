import "./works.scss";
import { useState } from "react";
import {
  PhoneIphone,
  ArrowBackIos,
  ArrowForwardIos,
  Language,
} from "@mui/icons-material";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Mobile Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minima magnam error inventore nihil modi qui soluta accusamus nam",
      img: "https://i.pinimg.com/originals/b5/4d/3d/b54d3dfee1f677582f2fe556f84d3a23.png",
    },
    {
      id: "2",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minima magnam error inventore nihil modi qui soluta accusamus nam",
      img: "https://i.pinimg.com/originals/b5/4d/3d/b54d3dfee1f677582f2fe556f84d3a23.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <PhoneIphone fontSize="large" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos
        onClick={() => handleClick("left")}
        sx={{ fontSize: 80 }}
        className="arrow left"
      />
      <ArrowForwardIos
        onClick={() => handleClick("right")}
        sx={{ fontSize: 80 }}
        className="arrow right"
      />
    </div>
  );
}
