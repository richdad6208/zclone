import ProfileImage from "@/app/_component/ProfileImage";
import style from "./style/post.module.css";
import { post, user } from "@/lib/mockData";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import InterActions from "./InterActions";
dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Post() {
  return (
    <article className={style.postArticle}>
      <div className={style.postDiv}>
        <span className={style.userAvatarSpan}>
          <ProfileImage avatarUrl={user.avatarUrl} />
        </span>
        <div className={style.postTextPhoto}>
          <span>{user.username}</span>
          <span>@{user.userId}</span>
          <span>{dayjs(post.createdAt).fromNow()}</span>
          <p>{post.content}</p>
          <div className={style.contentPhotoDiv}>
            <img src={post.photoUrl} alt="" />
          </div>
          <InterActions />
        </div>
      </div>
    </article>
  );
}
