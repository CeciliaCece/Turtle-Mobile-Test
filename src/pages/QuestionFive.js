import React from "react";
import { Link } from "react-router-dom";

const QuestionFive = () => {
  return (
    <div className="container section">
      <div>
        <h1>Q5</h1>
        <div className="row">
          <div className="col-12 col-md-8 mb-4">
            <p>請製作一個台北市YouBike即時站點資訊</p>
            <ul>
              <li>
                需按照設計稿製作(外觀,RWD, etc.) ：
                <Link to="https://www.figma.com/file/Pr4MLYn1FmYP3YlS25S3g8/%E8%9D%99%E8%9D%A0%E7%A7%BB%E5%8B%95_%E5%89%8D%E7%AB%AF%E8%80%83%E9%A1%8C?type=design&node-id=0-1&t=kPy8TNRe4SNFQy9B-0">
                  Figma
                </Link>
              </li>
              <li>
                串接Open API ：
                <Link to="https://data.gov.tw/dataset/137993">
                  api document
                </Link>
              </li>
              <li>請使用React ( 使用Next.js加分 )</li>
              <li>
                需將程式碼上傳至github,並以live demo方式呈現(codeSandBox,GCP,
                etc.)
              </li>
              <li>
                真實資料只需串接台北市 YouBike API,其餘縣市可用 假資料 or
                空白示意
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            最終成果
            <br />
            <Link to="https://github.com/CeciliaCece/Bicycle-Search">
              GitHub
            </Link>
            &nbsp;&nbsp;
            <Link to="https://ceciliacece.github.io/Bicycle-Search/">連結</Link>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-12 col-sm-6 mb-4">
            <p>功能：</p>
            <ol>
              <li>縣市搜尋Input：</li>
              <ul>
                <li>可透過文字篩選縣市清單</li>
                <li>按鈕點擊,顯示/收合 縣市清單</li>
                <li>具備一鍵清除</li>
                <li>縣市清單及checkbox渲染,需針對縣市搜尋input操作即時反饋</li>
                <li>
                  (ex. 輸入台北市 縣市清單顯示台北市 , checkbox顯示台北市行政區)
                </li>
              </ul>
              <li>行政區checkbox：</li>
              <ul>
                <li>預設為全選</li>
                <li>勾選 / 取消勾選 後其餘checkbox狀態需跟著變動</li>
              </ul>
              <li>Header：</li>
              <ul>
                <li>點擊後需切換路由(頁面內容不需更動,路由可自行規劃)</li>
              </ul>
            </ol>
          </div>
          <div className="col-12 col-sm-6">
            <p>加分區(非必需)：</p>
            <ol>
              <li>表格區效能優化：</li>
              <ul>
                <li>針對表格資料動態渲染</li>
                <li>點擊表頭可進行排序</li>
              </ul>
              <li>站點搜尋Input：</li>
              <ul>
                <li>表格資料渲染需針對input操作即時反饋</li>
                <li>只需針對站點名稱篩選搜尋</li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFive;
