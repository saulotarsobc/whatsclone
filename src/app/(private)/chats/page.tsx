import ContentContainer from "@/components/ContentContainer";
import Side from "@/components/Side";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.page}>
      <Side>Side</Side>
      <ContentContainer>Listagem de chats</ContentContainer>
    </main>
  );
};

export default Page;
