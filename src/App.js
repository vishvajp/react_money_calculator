import "./App.css";
import React, { useState, useEffect } from "react";
import About from "./About";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import History from "./History";
import api from "./api/historydata";
import { format } from "date-fns";
import { Route, Routes } from "react-router-dom";

function App() {
  const [twothousand, setTwoThousand] = useState(0);
  const [fivehundred, setFiveHundred] = useState(0);
  const [twohundred, setTwoHundred] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await api.get("/history");
        console.log(response.data);
        setHistory(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchpost();
  }, []);

  useEffect(() => {
    const total =
      twothousand * 2000 +
      fivehundred * 500 +
      twohundred * 200 +
      hundred * 100 +
      fifty * 50 +
      twenty * 20 +
      ten * 10;
    setTotalAmount(total);
  }, [
    twothousand,
    fivehundred,
    twohundred,
    hundred,
    fifty,
    twenty,
    ten,
    setTotalAmount,
  ]);

  const handleHistory = async function (e) {
    e.preventDefault();
    const currentDate = new Date();
    const isoDate = format(currentDate, "yyyy-MM-dd' & 'HH:mm:ss");
    console.log(isoDate);
    console.log(currentDate);
    const jd = history.length ? Number(history[history.length - 1].id) + 1 : 1;
    const id = jd.toString();

    const addNewItem = {
      id,
      date: isoDate,
      2000: twothousand,
      500: fivehundred,
      200: twohundred,
      100: hundred,
      50: fifty,
      20: twenty,
      10: ten,
      total: totalamount,
    };

    try {
      const response = await api.post("/history", addNewItem);
      const listitems = [...history, response.data];
      setHistory(listitems);
      setTwoThousand(0);
      setFiveHundred(0);
      setTwoHundred(0);
      setHundred(0);
      setFifty(0);
      setTwenty(0);
      setTen(0);
      window.alert("Please Check The History Page For More Detail");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDeleteHistory = async (item) => {
    try {
      await api.delete(`/history/${item}`);
      const filterhistory = history.filter((his) => his.id !== item);
      setHistory(filterhistory);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="App">
      <Header title="EASY WAY TO CALCULATE MONEY" />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              twothousand={twothousand}
              setTwoThousand={setTwoThousand}
              fivehundred={fivehundred}
              setFiveHundred={setFiveHundred}
              twohundred={twohundred}
              setTwoHundred={setTwoHundred}
              hundred={hundred}
              setHundred={setHundred}
              fifty={fifty}
              setFifty={setFifty}
              twenty={twenty}
              setTwenty={setTwenty}
              ten={ten}
              setTen={setTen}
              totalamount={totalamount}
              setTotalAmount={setTotalAmount}
              handleHistory={handleHistory}
            />
          }
        />
        <Route
          path="/History"
          element={
            <History
              history={history}
              setHistory={setHistory}
              handleDeleteHistory={handleDeleteHistory}
            />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
