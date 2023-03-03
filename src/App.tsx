import "./App.scss";
import { useState, useRef } from "react";
import ReelBar from "./components/ReelBar";

function App() {
  const [data1, setData1] = useState([3, 2, 1]);
  const [data2, setData2] = useState([3, 2, 1]);
  const [data3, setData3] = useState([3, 2, 1]);
  // const [credit, setCredit] = useState(0);
  // const timer1 = useRef();
  // const timer2 = useRef();
  // const timer3 = useRef();
  const leftReel = useRef();
  const centerReel = useRef();
  const rigthReel = useRef();
  // const [judge1, setJudge1] = useState(false);
  // const [judge2, setJudge2] = useState(false);
  // const [judge3, setJudge3] = useState(false);
  // const [open, setOpen] = useState(false);
  // const myLength = 7;
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
          <ReelBar />
          <ReelBar />
          <ReelBar />
        </div>

        <div className="slot_content_ramp"></div>

        <div className="slot_content_credit"></div>

        <div className="slot_content_btns">
          <button className="slot_content_btns_lever"></button>

          <div className="slot_content_btns_cover">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
