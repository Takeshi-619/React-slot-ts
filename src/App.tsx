import "./App.scss";
import { useState, useRef } from "react";
import ReelBar from "./components/ReelBar";
import Ramp from "./components/Ramp";

import img1 from "/img/number/777.png";
import img2 from "/img/number/budou.png";
import img3 from "/img/number/chery.png";
import img4 from "/img/number/piero_1.png";
import img5 from "/img/number/sai.png";
import img6 from "/img/number/suzu.png";
import img7 from "/img/number/taiger.png";
function App() {
  const [data1, setData1] = useState([3, 2, 1]);
  const [data2, setData2] = useState([3, 2, 1]);
  const [data3, setData3] = useState([3, 2, 1]);
  const data = [data1, data2, data3];
  const [credit, setCredit] = useState(0);
  const timer1 = useRef();
  const timer2 = useRef();
  const timer3 = useRef();
  const leftReel = useRef();
  const centerReel = useRef();
  const rigthReel = useRef();
  const reel = [leftReel, centerReel, rigthReel];
  const [judge1, setJudge1] = useState(false);
  const [judge2, setJudge2] = useState(false);
  const [judge3, setJudge3] = useState(false);
  const [open, setOpen] = useState(false);
  const myLength = 7;

  const imgs = [img1, img2, img3, img4, img5, img6, img7];
  const reelName = ["left", "center", "right"];

  return (
    <div className="slot">
      <div className="slot_content">
        <div className="slot_content_chance">
          <img src="/img/bigChance.png" alt="" />
        </div>

        <div className="slot_content_luckeyNumber">
          <img src="/img/luckyNum@2x.png" alt="" />
        </div>

        <div className="slot_content_reel">
          {reelName.map((names, index) => (
            <div key={index} className={`slot_content_reel_${names}`}>
              <ul>
                {data[index].map((items, index) => (
                  <li key={index}>
                    <img
                      src={imgs[items]}
                      className={`slot_content_reel_${names}_bar_imgs`}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="slot_content_ramp">
          <Ramp open={open} />
        </div>

        <div className="slot_content_credit">{credit}</div>

        <div className="slot_content_btns">
          <div className="slot_content_btns_lever"></div>

          <div className="slot_content_btns_cover">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
