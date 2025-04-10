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
      <h1>Conversas</h1>

      <div className={style.actions}>
        <div>
          <IconEdit size={ICON_SIZE} />
        </div>

        <div>
          <IconLabel size={ICON_SIZE} />
        </div>

        <div>
          <IconMenu4 size={ICON_SIZE} />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
