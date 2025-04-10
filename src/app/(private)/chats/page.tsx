import { MockChats } from "@/app/mock/MockChats";
import AsideContainer from "@/components/AsideContainer";
import ChatListItem from "@/components/ChatListItem";
import ContentContainer from "@/components/ContentContainer";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.chats}>
      <AsideContainer>
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
