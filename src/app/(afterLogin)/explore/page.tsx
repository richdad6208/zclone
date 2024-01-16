import style from "./page.module.css";
import SearchBar from "../home/_component/SearchBar";

export default function Page() {
  return (
    <>
      <div className={style.searchDiv}>
        <SearchBar />
      </div>
      <div className={style.contentDiv}>
        <h2>나를 위한 트렌드</h2>
      </div>
    </>
  );
}
