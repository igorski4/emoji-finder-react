import React, { useEffect, useMemo, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import axios from "axios";

function App() {
  const [cards, setCard] = useState([]);
  const [uniqueCards, setUniqueCards] = useState([]);
  const [filter, setFilter] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState(12);
  const [tempPage, setTempPage] = useState(0);
  const [arrPage, setArrPage] = useState([]);

  const fetchCard = async () => {
    setCard((await axios.get("https://emoji.ymatuhin.workers.dev/")).data);
  };

  useEffect(() => {
    fetchCard();
  }, []);

  useMemo(
    () =>
      setUniqueCards(
        cards.map((card) => ({
          ...card,
          keywords: [...new Set(card.keywords.split(" "))].join(" "),
        }))
      ),
    [cards]
  );

  useEffect(() => {
    let firstIndex;
    if (tempPage === 0 || tempPage === 1 || pageCount <= 5) firstIndex = 0;
    else if (tempPage === pageCount - 2 || tempPage === pageCount - 1) firstIndex = pageCount - 5;
    else if (tempPage > 1 && tempPage < pageCount - 2) firstIndex = tempPage - 2;

    setArrPage(new Array(pageCount > 5 ? 5 : pageCount).fill(firstIndex).map((el, i) => el + i));
  }, [tempPage, pageCount]);

  useEffect(() => {
    setPageCount(
      Math.ceil(
        uniqueCards.filter((card) =>
          `${card.title} ${card.keywords}`.toLowerCase().trim().includes(filter.toLowerCase().trim())
        ).length / limit
      )
    );
    setTempPage(0);
  }, [uniqueCards, limit, filter]);

  return (
    <>
      <Header />
      <Main
        cards={uniqueCards}
        setFilter={setFilter}
        filter={filter}
        limit={limit}
        tempPage={tempPage}
        pageCount={pageCount}
      />
      <Footer
        pageCount={pageCount}
        setLimit={setLimit}
        setTempPage={setTempPage}
        arrPage={arrPage}
        tempPage={tempPage}
      />
    </>
  );
}

export default App;
