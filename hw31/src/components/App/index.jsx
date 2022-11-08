import AddForm from "../AddForm";
import WordsContainer from "../WordsContainer";
import { words } from "../../data/words";
import Triggers from "../Triggers";
import { useState } from "react";

function App() {

  const [cards, setCards] = useState(words);

  const change_to_de = () => {
    setCards(
      cards.map((el) => {
        el.lang = "de";
        return el;
      })
    );
  };

  const change_to_ru = () => {
    setCards(
      cards.map((el) => {
        el.lang = "ru";
        return el;
      })
    );
  };

  const change_lang = (id) => {
    setCards(
      cards.map((el) => {
        if (el.id === id) {
          el.lang = el.lang === "ru" ? "de" : "ru";
        }
        return el;
      }));
  };

  const add_card = (de, ru) =>
    setCards([
      ...cards,
      {
        id: Date.now(),
        de,
        ru,
        lang: 'de'
        
      },
    ]);

   

  return (
    <div>
      <AddForm add_card={add_card} />
      <WordsContainer words={cards} change_lang={change_lang} />
      <Triggers change_de={change_to_de} change_ru={change_to_ru} />
    </div>
  );
}

export default App;
