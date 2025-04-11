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
            <span className={style.timestamp}>{chat.timestamp || chat.created_at}</span>
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

export default ChatListItem;
