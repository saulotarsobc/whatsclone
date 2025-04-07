import { MockChats } from "@/app/mock/MockChats";
import ContentContainer from "@/components/ContentContainer";
import Side from "@/components/Side";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.page}>
      <Side>
        <div style={{ height: "50px" }}>Header</div>
        <div>
          {MockChats.map((chat) => (
            <div key={chat.id}>
              <p>{chat.created_at}</p>
              <p>{chat.name}</p>
              <p>{chat.message}</p>
              <hr />
            </div>
          ))}
        </div>
      </Side>
      <ContentContainer>
        <p>conteudo do chat</p>
      </ContentContainer>
    </main>
  );
};

export default Page;
