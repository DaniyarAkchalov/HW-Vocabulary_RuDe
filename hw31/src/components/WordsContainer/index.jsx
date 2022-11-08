import React from "react";
import Word from "../Word";
import s from "./index.module.css";

export default function WordsContainer({ words, change_lang }) {
  return (
    <div className={s.words_container}>
      {words.map((el) => (
        <Word key={el.id} {...el} change_lang={change_lang} />
      ))}
    </div>
  );
}
