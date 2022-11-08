import React from "react";
import s from "./index.module.css";

export default function Word({ id, de, ru, lang, change_lang }) {
  const text = lang === "ru" ? ru : de;

  const word_style = {
    backgroundColor: lang === "ru" ? "white" : "blue",
    color: lang === "ru" ? "blue" : "white",
  };

  return (
    <div
      className={s.word_item}
      style={word_style}
      onClick={() => change_lang(id)}
    >
      {text}
    </div>
  );
}
