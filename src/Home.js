import React from "react";

const Home = ({
  twothousand,
  setTwoThousand,
  fivehundred,
  setFiveHundred,
  twohundred,
  setTwoHundred,
  hundred,
  setHundred,
  fifty,
  setFifty,
  twenty,
  setTwenty,
  ten,
  setTen,
  totalamount,

  handleHistory,
}) => {
  return (
    <main className="mainpage">
      <form>
        <div>
          <label className=" lab">2000 RS</label>
          <label>
            <button
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (twothousand > 0) {
                  setTwoThousand(twothousand - 1);
                }
              }}
            >
              -
            </button>
          </label>
          <input
            className="input"
            placeholder="Please give input"
            onChange={(e) => setTwoThousand(Number(e.target.value))}
            value={twothousand}
          ></input>
          <label>
            <button
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                setTwoThousand(twothousand + 1);
              }}
            >
              +
            </button>
          </label>
        </div>
        <br></br>
        <div>
          <label className=" lab">500 RS</label>
          <label>
            <button
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (fivehundred > 0) {
                  setFiveHundred(fivehundred - 1);
                }
              }}
            >
              -
            </button>
          </label>
          <input
            className="input"
            placeholder="Please give input"
            onChange={(e) => setFiveHundred(Number(e.target.value))}
            value={fivehundred}
          ></input>
          <label>
            <button
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                setFiveHundred(fivehundred + 1);
              }}
            >
              +
            </button>
          </label>
        </div>
        <br></br>
        <div>
          <label className=" lab">200 RS</label>
          <label>
            <button
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (twohundred > 0) {
                  setTwoHundred(twohundred - 1);
                }
              }}
            >
              -
            </button>
          </label>
          <input
            className="input"
            placeholder="Please give input"
            onChange={(e) => setTwoHundred(Number(e.target.value))}
            value={twohundred}
          ></input>
          <label>
            <button
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                setTwoHundred(twohundred + 1);
              }}
            >
              +
            </button>
          </label>
        </div>
        <br></br>
        <div>
          <label className=" lab">100 RS</label>
          <label>
            <button
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (hundred > 0) {
                  setHundred(hundred - 1);
                }
              }}
            >
              -
            </button>
          </label>
          <input
            className="input"
            placeholder="Please give input"
            onChange={(e) => setHundred(Number(e.target.value))}
            value={hundred}
          ></input>
          <label>
            <button
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                setHundred(hundred + 1);
              }}
            >
              +
            </button>
          </label>
        </div>
        <br></br>
        <div>
          <label className=" lab">50 RS</label>
          <label>
            <button
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (fifty > 0) {
                  setFifty(fifty - 1);
                }
              }}
            >
              -
            </button>
          </label>
          <input
            className="input"
            placeholder="Please give input"
            onChange={(e) => setFifty(Number(e.target.value))}
            value={fifty}
          ></input>
          <label>
            <button
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                setFifty(fifty + 1);
              }}
            >
              +
            </button>
          </label>
        </div>
        <br></br>
        <div>
          <label className=" lab">20 RS</label>
          <label>
            <button
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (twenty > 0) {
                  setTwenty(twenty - 1);
                }
              }}
            >
              -
            </button>
          </label>
          <input
            className="input"
            placeholder="Please give input"
            onChange={(e) => setTwenty(Number(e.target.value))}
            value={twenty}
          ></input>
          <label>
            <button
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                setTwenty(twenty + 1);
              }}
            >
              +
            </button>
          </label>
        </div>
        <br></br>
        <div>
          <label className=" lab">10 RS</label>
          <label>
            <button
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (ten > 0) {
                  setTen(ten - 1);
                }
              }}
            >
              -
            </button>
          </label>
          <input
            className="input"
            placeholder="Please give input"
            onChange={(e) => setTen(Number(e.target.value))}
            value={ten}
          ></input>
          <label>
            <button
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                setTen(ten + 1);
              }}
            >
              +
            </button>
          </label>
        </div>
        <br></br>
        <label className=" lab">Total Amount</label>

        <input
          className="input"
          placeholder="Please give input"
          readOnly
          value={totalamount}
        ></input>
        <label></label>
        <br></br>
        <button onClick={handleHistory} className="buttonhistory">
          Complete
        </button>
      </form>
    </main>
  );
};

export default Home;
