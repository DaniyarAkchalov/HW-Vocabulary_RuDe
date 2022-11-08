import React from "react";
import s from "./index.module.css";
import { useContext } from "react";
import { Context } from '../../context'


export default function Word 
({ id, de, ru, lang }) {

const { change_lang, delete_card } = useContext(Context)

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
      onDoubleClick={() => delete_card}
    >
      {text}
    </div>
  );
}
