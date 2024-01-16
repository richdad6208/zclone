import style from "./page.module.css";

export default function Page() {
  return (
    <div className={style.messagesDiv}>
      <h2>쪽지</h2>
      <p>다른 사람의 프로필에서 쪽지를 보낼 수 있습니다.</p>
    </div>
  );
}
