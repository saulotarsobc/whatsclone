"use client";
import { MockChats } from "@/app/mock/MockChats";
import AsideContainer from "@/components/AsideContainer";
import ContentContainer from "@/components/ContentContainer";
import ChatSearch from "./ChatSearch/ChatSearch";
import ChatHeader from "./components/ChatHeader";
import ChatListItem from "./components/ChatListItem";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.chats}>
      <AsideContainer>
        <ChatHeader />
        <ChatSearch onSearch={() => {}} />
        <div>
          {MockChats.map((chat) => (
            <ChatListItem key={chat.id} chat={chat} />
          ))}
        </div>
      </AsideContainer>
      <ContentContainer>
        <p>conteudo do chat</p>
      </ContentContainer>
    </main>
  );
};

export default Page;
