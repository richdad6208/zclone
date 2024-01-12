import style from "./page.module.css";

export default function Page() {
  return (
    <section className={style.content}>
      <header>
        <h2>홈</h2>
        <div className={style.tabMenu}>
          <ul>
            <li>추천</li>
            <li>팔로우 중</li>
          </ul>
        </div>
      </header>
    </section>
  );
}
