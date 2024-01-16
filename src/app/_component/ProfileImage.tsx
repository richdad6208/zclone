import Image from "next/image";
import style from "./style/profileImage.module.css";
type Props = {
  avatarUrl: string;
  width?: number;
};

export default function ProfileImage({ avatarUrl, width = 40 }: Props) {
  return (
    <div className={style.logoutPhoto} style={{ width }}>
      <Image
        src={avatarUrl}
        alt="user profile image"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
