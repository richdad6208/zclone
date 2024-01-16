"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import SearchBar from "../home/_component/SearchBar";
import FollowRecommend from "./FollowRecommend";
import style from "./style/rightSection.module.css";
import cs from "classnames/bind";
const cx = cs.bind(style);
import { useEffect, useState } from "react";

export default function RightSection() {
  const segment = useSelectedLayoutSegment();
  const [isExplore, setIsExplore] = useState(false);
  useEffect(() => {
    if (segment === "explore") {
      setIsExplore(true);
    }
    return () => setIsExplore(false);
  }, [segment]);

  return (
    <>
      <div className={cx({ hide: isExplore })}>
        <SearchBar />
      </div>
      <div className={cx({ hide: isExplore })}>
        <div className={style.trendDiv}>
          <h2>나를 위한 트렌드</h2>
        </div>
      </div>
      <div className={style.followDiv}>
        <h2>팔로우 추천</h2>
        <FollowRecommend />
        <FollowRecommend />
        <FollowRecommend />
        <FollowRecommend />
        <FollowRecommend />
      </div>
    </>
  );
}
