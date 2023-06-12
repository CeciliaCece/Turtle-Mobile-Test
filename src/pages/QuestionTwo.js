import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const QuestionTwo = () => {
  const prizeDatas = useSelector((state) => {
    return state.prize;
  });
  const [prizeCal, setPrizeCal] = useState([0, 0, 0, 0, 0]);
  const [history, setHistory] = useState([]);
  const [drawn, setDrawn] = useState([]);
  const [allCount, setAllCount] = useState(0);
  const [allProbability, setAllProbability] = useState([]);
  const [end, setEnd] = useState(false);

  const handleWin = (num) => {
    if (prizeCal[num] >= prizeDatas[num].count) {
      handleDraw();
    } else {
      setPrizeCal((prevPrizeCal) => {
        return prevPrizeCal.map((value, index) => {
          if (num === index) {
            return value + 1;
          }
          return value;
        });
      });
      setHistory([...history, "抽中" + (num + 1) + "獎"]);
      let sum = prizeCal.reduce((temp, value) => temp + value, 0);
      if (sum + 1 === allCount) setEnd(true);
    }
  };
  const handleDraw = () => {
    let random = Math.floor(Math.random() * 1000) + 1;
    if (random > allProbability[4]) {
      setHistory([...history, "銘謝惠顧"]);
    } else {
      if (drawn.includes(random)) {
        handleDraw();
      } else {
        setDrawn([...drawn, random]);
        if (random <= allProbability[4] && random > allProbability[3]) {
          handleWin(4);
        } else if (random <= allProbability[3] && random > allProbability[2]) {
          handleWin(3);
        } else if (random <= allProbability[2] && random > allProbability[1]) {
          handleWin(2);
        } else if (random <= allProbability[1] && random > allProbability[0]) {
          handleWin(1);
        } else {
          handleWin(0);
        }
      }
    }
  };

  const handleClear = (e) => {
    setPrizeCal([0, 0, 0, 0, 0]);
    setDrawn([]);
    setHistory([]);
  };
  useEffect(() => {
    let temp = 0;
    prizeDatas.forEach((e) => (temp += e.count));
    setAllCount(temp);
    temp = 0;
    let tempArr = [];
    prizeDatas.forEach((e) => {
      temp += e.probability;
      tempArr.push(temp);
    });
    setAllProbability(tempArr);
  }, []);

  return (
    <div className="container section">
      <div>
        <h1>Q2</h1>
        <p>
          抽抽樂總共有五種獎項, 1,2 獎各只有一個, 3 獎有 3 個，4 獎有 5 個，5
          獎有 9 個，請寫出一個程式可以「隨機」的取得「不重複」的禮物，
          <br />
          且：
        </p>
        <div className="row">
          <div className="col-12 col-md-4 mb-8">
            <ul>
              <li>1 獎中獎機率為 0.1% </li>
              <li>2 獎中獎機率為 3%</li>
              <li>3 獎中獎機率為 13%</li>
              <li>4 獎中獎機率為 18%</li>
              <li>5 獎中獎機率為 25%</li>
            </ul>
            <div className="me-2 d-flex">
              <div className="me-2">
                <button
                  type="button"
                  className={`btn btn-secondary ${end && "d-none"}`}
                  onClick={handleDraw}
                >
                  抽獎
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClear}
                >
                  重置
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-8">
            <p>尚未抽走的禮物有：</p>
            <p className={`${!end && "d-none"}`}>
              您抽走最後一個獎品了，抽獎結束！
            </p>
            {prizeDatas.map((prize, index) => (
              <div key={index} className="row mb-2">
                {Array.from(
                  { length: prize.count - prizeCal[index] },
                  (i, x) => {
                    return (
                      <div
                        key={prize.name + x}
                        className="col-4 col-sm-6 col-lg-4"
                      >
                        {prize.name}-{x + 1}
                      </div>
                    );
                  }
                )}
              </div>
            ))}
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <p>抽獎紀錄：</p>
            <p>{history[0] === undefined && "尚未開始抽獎"}</p>
            <div className="row">
              {history.map((history, index) => (
                <div key={"h" + index} className="col-6 col-lg-4">
                  {index + 1}. {history}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionTwo;
