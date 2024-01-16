import style from "./style/followRecommend.module.css";
import ProfileImage from "@/app/_component/ProfileImage";
import FollowButton from "../home/_component/FollowButton";
import { user } from "@/lib/mockData";

export default function FollowRecommend() {
  return (
    <div className={style.followItem}>
      <ProfileImage avatarUrl={user.avatarUrl} />
      <div className={style.userInform}>
        <p className={style.followName}>{user.username}</p>
        <p className={style.followUserName}>@{user.userId}</p>
      </div>
      <FollowButton />
    </div>
  );
}
