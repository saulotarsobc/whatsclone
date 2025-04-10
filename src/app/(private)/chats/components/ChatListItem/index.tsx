"use client";
import style from "./style.module.css";
interface ChatListItemProps {
  chat: {
    name: string;
  };
}

const ChatListItem = ({ chat }: ChatListItemProps) => {
  return (
    <div className={style.ChatListItem}>
      <div className={style.ChatListItem__Item}>{chat.name}</div>
    </div>
  );
};

export default ChatListItem;
