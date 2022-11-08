import React, { useContext } from "react";
import Word from "../Word";
import s from "./index.module.css";
import { Context } from "../../context";


export default function WordsContainer() {

const { cards } = useContext(Context)

  return (
    <div className={s.words_container}>
      {cards.map((el) => (
        <Word key={el.id} {...el} />
      ))}
    </div>
  );
}
