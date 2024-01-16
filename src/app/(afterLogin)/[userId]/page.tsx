import ProfileImage from "@/app/_component/ProfileImage";
import { user } from "@/lib/mockData";
import style from "./page.module.css";

const photoSize = {
  width: 200,
  height: 200,
};

export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.headerDiv}>
        <span>
          <svg width="24" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </g>
          </svg>
        </span>
        <span className={style.nameInHeader}>{user.username}</span>
      </div>
      <div className={style.userInformDiv}>
        <span className={style.userImage}>
          <ProfileImage avatarUrl={user.avatarUrl} width={130} />
        </span>
        <div className={style.userTextDiv}>
          <p>{user.username}</p>
          <p>@{user.userId}</p>
        </div>
      </div>
      <span>0 팔로워 1 팔로우 중</span>
    </div>
  );
}
