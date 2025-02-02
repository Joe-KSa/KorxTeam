import { useState } from "react";
import MemberProfile from "../widget/MemberProfile";
import { useMembers } from "@/hooks/useMembers";
import ResizeBar from "../common/ResizeBar";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const { selectedMember } = useMembers();
  const [contentWidth, setContentWidth] = useState(420);

  const handleResize = (width: number) => {
    setContentWidth(Math.max(280, Math.min(width, 420)));
  };

  if (!selectedMember) return null;

  return (
    <div className={styles.sidebarRight}>
      <ResizeBar onResize={handleResize} />
      <MemberProfile member={selectedMember} width={contentWidth} />
    </div>
  );
};

export default SideBar;
