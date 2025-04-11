"use client";
import defaultAvatar from "@/images/avatar.png";
import Image from "next/image";
import style from "./style.module.css";

interface ChatListItemProps {
  chat: {
    id: string | number;
    name: string;
    avatar: string | null;
    message?: string;
    lastMessage?: string;
    created_at?: string;
    timestamp?: string;
    read?: boolean;
    unreadCount?: number;
  };
}

const ChatListItem = ({ chat }: ChatListItemProps) => {
  return (
    <div className={style.ChatListItem}>
      <div className={style.ChatListItem__Item}>
        <div className={style.avatar}>
          <Image
            src={chat.avatar || defaultAvatar.src}
            alt={chat.name}
            width={49}
            height={49}
          />
        </div>

        <div className={style.content}>
          <div className={style.headerRow}>
            <span className={style.name}>{chat.name}</span>
            <span className={style.timestamp}>
              {formatMessageDate(chat.timestamp || chat.created_at)}
            </span>
          </div>

          <div className={style.messageRow}>
            <span className={style.message}>{chat.lastMessage || chat.message}</span>
            {!chat.read && (
              <span className={style.unreadBadge}>1</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const formatMessageDate = (dateString?: string) => {
  if (!dateString) return '';

  const messageDate = new Date(dateString);
  const now = new Date();

  const normalizedNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const normalizedMessageDate = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate());

  const diffTime = normalizedNow.getTime() - normalizedMessageDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return messageDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  if (diffDays === 1) {
    return 'Ontem';
  }

  if (diffDays < 7) {
    return messageDate.toLocaleDateString('pt-BR', { weekday: 'long' });
  }

  return messageDate.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit'
  });
};

export default ChatListItem;
