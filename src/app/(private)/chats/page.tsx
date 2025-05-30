"use client";
import AsideContainer from "@/components/AsideContainer";
import ChatHeader from "@/components/ChatHeader";
import ChatListContainer from "@/components/ChatListContainer/ChatListContainer";
import ChatListItem from "@/components/ChatListItem";
import ChatSearchContainer from "@/components/ChatSearchContainer/ChatSearchContainer";
import ContentContainer from "@/components/ContentContainer";
import { MockChats } from "@/mock/MockChats";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.chats}>
      <AsideContainer>
        <ChatHeader />
        <ChatSearchContainer onSearch={() => {}} />
        <ChatListContainer>
          {MockChats.map((chat) => (
            <ChatListItem key={chat.id} chat={chat} />
          ))}
        </ChatListContainer>
      </AsideContainer>

      <ContentContainer>
        <p>conteudo do chat</p>
      </ContentContainer>
    </main>
  );
};

export default Page;
