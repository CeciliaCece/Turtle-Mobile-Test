import React, { useState, useEffect } from "react";

const QuestionOne = () => {
  const [ans, setAns] = useState();
  const [test, setTest] = useState("");
  const [message, setMessage] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleChange = (e) => {
    setTest(e.target.value);
    setMessage(false);
    setAns();
  };

  const handleSubmit = (e) => {
    if (test === "") setMessage(true);
    else {
      if (test < 2) setAns(test);
      else {
        if (test % 2 === 0) setAns(test / 2 + 2);
        else setAns(-(test / 2 - 1.5));
      }
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="container section q1">
      <h1>Q1</h1>
      <div className="row">
        <div className="mb-8 col-12 col-md-6">
          <div>
            <p className="mb-8">
              寫一個函式計算下列公式之總和：
              <br />
              1+2-3+4-5+6-.....+ 或 - N<br />
              （N一定是正整數）
            </p>
            <div className="d-flex justify-content-evenly ans mb-8">
              <label htmlFor="num" className="form-label">
                N :<div className="invalid-feedback ms-1">此欄位為必填</div>
              </label>
              <div>
                <input
                  id="num"
                  type="number"
                  className={`form-control ${message && "is-invalid"}`}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleSubmit}
                >
                  計算
                </button>
              </div>
            </div>
            <div>
              {ans && "結果 : "}
              {ans}
            </div>
          </div>
        </div>
        <div className="mb-8 col-12 col-md-6">
          <p>將N值代入test</p>
          <code>
            if (test === "") setMessage(true); <br />
            else &#123;
            <br />
            &nbsp;&nbsp;if (test &lt; 2) setAns(test); <br />
            &nbsp;&nbsp;else &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if (test % 2 === 0) setAns(test / 2 + 2);{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;else setAns(-(test / 2 - 1.5)); &nbsp;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </code>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;
