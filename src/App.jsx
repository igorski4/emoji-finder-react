import React, { useEffect, useMemo, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import axios from "axios";

function App() {
  const [cards, setCard] = useState([]);
  const [uniqueCards, setUniqueCards] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchCard = async () => {
    const response = await axios.get("https://emoji.ymatuhin.workers.dev/");
    setCard(response.data);
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

  return (
    <div>
      <Header />
      <Main cards={uniqueCards} setFilter={setFilter} filter={filter} />
      <Footer />
    </div>
  );
}

export default App;
