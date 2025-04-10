import Side from "@/components/AsideContainer";
import ContentContainer from "@/components/ContentContainer";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.page}>
      <Side>Side</Side>
      <ContentContainer>Listar conversas favoritas</ContentContainer>
    </main>
  );
};

export default Page;
