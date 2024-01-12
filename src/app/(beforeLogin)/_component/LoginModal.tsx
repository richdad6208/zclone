"use client";

import style from "./style/loginModal.module.css";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  const modalClose = () => {
    router.back();
  };
  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <form className={style.modalForm}>
          <div className={style.modalFormInner}>
            <h2>로그인하세요.</h2>
            <div className={style.inputDiv}>
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" required />
            </div>

            <div className={style.inputDiv}>
              <label htmlFor="">비밀번호</label>
              <input type="password" required />
            </div>
          </div>
          <button className={style.actionButton}>가입하기</button>
        </form>
        <div className={style.modalClose} onClick={modalClose}>
          <svg width="24" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
