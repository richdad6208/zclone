"use client";
import { useState } from "react";
import style from "./page.module.css"; // Import the style object
import cs from "classnames/bind";
import Header from "@/app/_component/Header";
const cx = cs.bind(style);

export default function Page() {
  return (
    <section className={style.content}>
      <Header />

      <article></article>
    </section>
  );
}
