import React from "react";

const History = ({ history, handleDeleteHistory }) => {
  console.log(history);
  return (
    <div className="history-container">
      {history.length === 0 ? (
        <p className="history-message">No history available.</p>
      ) : (
        history.map((item, index) => (
          <div className="history-item" key={item.id}>
            <p className="history-date">
              {index + 1}. {item.date}
            </p>
            <p className="history-entry">
              2000 * {item[2000]} = {2000 * item[2000]}
            </p>
            <p className="history-entry">
              500 * {item[500]} = {500 * item[500]}
            </p>
            <p className="history-entry">
              200 * {item[200]} = {200 * item[200]}
            </p>
            <p className="history-entry">
              100 * {item[100]} = {100 * item[100]}
            </p>
            <p className="history-entry">
              50 * {item[50]} = {50 * item[50]}
            </p>
            <p className="history-entry">
              20 * {item[20]} = {20 * item[20]}
            </p>
            <p className="history-entry">
              10 * {item[10]} = {10 * item[10]}
            </p>
            <p className="history-total">Total Amount = {item.total}</p>
            <hr className="history-divider" />
            <button
              className="history-button"
              onClick={() => handleDeleteHistory(item.id)}
            >
              Delete History
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
