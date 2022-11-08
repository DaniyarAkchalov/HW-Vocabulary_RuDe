import React from "react";
import s from "./index.module.css";

export default function Triggers({ change_de, change_ru }) {
  return (
    <div className={s.triggers_container}>
      <button onClick={change_de}>De</button>
      <button onClick={change_ru}>Ru</button>
    </div>
  );
}
