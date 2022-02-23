import { useState } from "react";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://invest.yeniistiklal.com/wp-content/uploads/2021/12/mobile-banking-app.jpg"
            alt=""
            width="250px"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://invest.yeniistiklal.com/wp-content/uploads/2021/12/mobile-banking-app.jpg"
            alt=""
            width="250px"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://invest.yeniistiklal.com/wp-content/uploads/2021/12/mobile-banking-app.jpg"
            alt=""
            width="250px"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://invest.yeniistiklal.com/wp-content/uploads/2021/12/mobile-banking-app.jpg"
            alt=""
            width="250px"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://invest.yeniistiklal.com/wp-content/uploads/2021/12/mobile-banking-app.jpg"
            alt=""
            width="250px"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
