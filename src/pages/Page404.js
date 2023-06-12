import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    /* scss在others */
    <div className="section container page404-layout">
      <div className="d-flex align-items-center">
        <h2>找不到該網址இдஇ</h2>
      </div>

      <div>
        <img src="../not_found.gif" alt="找不到該網址" />
      </div>
      <Link to="/">
        <button className="btn btn-secondary btn-lg">← 返回首頁</button>
      </Link>
    </div>
  );
};

export default Page404;
