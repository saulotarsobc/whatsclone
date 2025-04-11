"use client";
import { MockChats } from "@/app/mock/MockChats";
import AsideContainer from "@/components/AsideContainer";
import ContentContainer from "@/components/ContentContainer";
import ChatHeader from "./components/ChatHeader";
import ChatListContainer from "./components/ChatListContainer/ChatListContainer";
import ChatListItem from "./components/ChatListItem";
import ChatSearch from "./components/ChatSearch/ChatSearch";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.chats}>
      <AsideContainer>
        <ChatHeader />
        <ChatSearch onSearch={() => {}} />
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
