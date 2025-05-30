"use client";
import { ICON_SIZE_SM } from "@/constants";
import { IconSearch } from "@tabler/icons-react";
import style from "./style.module.css";

interface ChatSearchProps {
  onSearch: () => void;
}

const ChatSearch = ({ }: ChatSearchProps) => {
  return (
    <div className={style.ChatSearch}>
      <IconSearch size={ICON_SIZE_SM} />

      <input type="text" placeholder="Pesquisar ou começar uma nova conversa" />
    </div>
  );
};

export default ChatSearch;
