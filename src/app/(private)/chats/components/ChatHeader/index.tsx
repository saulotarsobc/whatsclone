"use client";
import { ICON_SIZE } from "@/constants";
import { IconEdit, IconLabel, IconMenu4 } from "@tabler/icons-react";
import style from "./style.module.css";
interface ChatHeaderProps {
  onSearch: () => void;
}

const ChatHeader = ({ onSearch }: ChatHeaderProps) => {
  return (
    <div className={style.ChatHeader}>
      <h1 className={style.Title}>Conversas</h1>

      <div className={style.actions}>
        <div className={style.Icons}>
          <IconEdit size={ICON_SIZE} />
        </div>

        <div className={style.Icons}>
          <IconLabel size={ICON_SIZE} />
        </div>

        <div className={style.Icons}>
          <IconMenu4 size={ICON_SIZE} />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
