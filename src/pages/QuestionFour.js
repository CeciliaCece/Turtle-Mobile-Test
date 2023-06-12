import React from "react";

const QuestionFour = () => {
  return (
    <div className="container section">
      <div>
        <h1>Q4</h1>
        <p>
          請根據下方示意圖，假設您要起一個專案，請規劃下方聊天室的 component
          會有幾個，然後元件的上下層關係...etc
          <br />
          舉例來說，我們會將人物的頭像視為一個 component。
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 mt-4">
          Layout
          <ul>
            <li>導覽列</li>
            <ul>
              <li>導覽列選單</li>
            </ul>
            <li>聊天室</li>
            <ul>
              <li>下方輸入區</li>
              <ul>
                <li>輸入框</li>
                <li>+ 按鈕跳出的選單</li>
              </ul>
              <li>訊息群組</li>
              <ul>
                <li>頭像</li>
                <li>左邊訊息框</li>
                <li>右邊訊息框</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="col col-sm-6 mt-4">
          <div className="d-flex justify-content-center">
            <img src="../q4.png" alt="question4Picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFour;
