"use client";
import { useState } from "react";
import style from "./style/header.module.css";
import cs from "classnames/bind";
const cx = cs.bind(style);
export default function Header() {
  const [tabWord, setTabWord] = useState("following");
  const handleChangeTab = (tabWord: string) => {
    setTabWord(tabWord);
  };
  return (
    <header className={style.header}>
      <h2>홈</h2>
      <div className={style.tabMenuDiv}>
        <ul className={style.tabMenu}>
          <li
            onClick={() => handleChangeTab("recommend")}
            className={cx({ active: tabWord === "recommend" })}
          >
            추천
          </li>
          <li
            onClick={() => handleChangeTab("following")}
            className={cx({ active: tabWord === "following" })}
          >
            팔로우 중
          </li>
        </ul>
      </div>
    </header>
  );
}
