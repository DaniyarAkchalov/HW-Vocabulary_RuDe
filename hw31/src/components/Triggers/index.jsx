import React from "react";
import s from "./index.module.css";
import { useContext } from "react";
import { Context } from "../../context";

export default function Triggers() {
  const { change_to_de, change_to_ru } = useContext(Context);

  return (
    <div className={s.triggers_container}>
      <button onClick={change_to_de}>De</button>
      <button onClick={change_to_ru}>Ru</button>
    </div>
  );
}
