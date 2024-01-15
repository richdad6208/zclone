import style from "./style/profileImage.module.css";

export default function ProfileImage({ avatarUrl }: { avatarUrl: string }) {
  return (
    <span className={style.logoutPhoto}>
      <img src={avatarUrl} alt="user profile image" />
    </span>
  );
}
