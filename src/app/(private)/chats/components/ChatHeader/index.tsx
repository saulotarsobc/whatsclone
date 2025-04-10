"use client";
import style from "./style.module.css";
interface ChatHeaderProps {
  onSearch: () => void;
}

const ChatHeader = ({ onSearch }: ChatHeaderProps) => {
  return (
    <div className={style.ChatHeader}>
      <h1>Conversas</h1>
      <div className={style.actions}>
        <button onClick={onSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default ChatHeader;
