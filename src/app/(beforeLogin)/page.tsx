import Image from "next/image";
import zLogo from "../../../public/zlogo.png";
import style from "./page.module.css";
import cs from "classnames/bind";
import Link from "next/link";
const cx = cs.bind(style);

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.leftSection}>
        <div className={style.logo}>
          <Image src={zLogo} alt="z.com 로고" />
        </div>
      </div>
      <div className={style.rightSection}>
        <p>지금 일어나고 있는 일</p>
        <p>지금 가입하세요.</p>
        <Link href="/i/flow/signup">
          <button className={cx("button", "primary")}>계정 만들기</button>
        </Link>
        <p>이미 트위터에 가입하셨나요?</p>
        <Link href="/login">
          <button className={cx("button")}>로그인</button>
        </Link>
      </div>
    </main>
  );
}
