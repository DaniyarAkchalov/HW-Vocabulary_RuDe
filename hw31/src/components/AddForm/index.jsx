import React from "react";
import s from "./index.module.css";
import { Context } from "../../context";
import { useContext } from "react";

export default function AddForm() {
  const { add_card } = useContext(Context);

  const submit = (event) => {
    event.preventDefault();
    const { ru, de } = event.target;
    add_card(ru.value, de.value);
    ru.value = "";
    de.value = "";
  };
  return (
    <form className={s.add_word} onSubmit={submit}>
      <input type="text" placeholder="Russisch" name="ru" />
      <input type="text" placeholder="Deutsch" name="de" />
      <button>Add</button>
    </form>
  );
}
