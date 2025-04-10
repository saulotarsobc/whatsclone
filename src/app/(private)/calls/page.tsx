import Side from "@/components/AsideContainer";
import ContentContainer from "@/components/ContentContainer";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.calls}>
      <Side>Side</Side>
      <ContentContainer>Listar chamadas</ContentContainer>
    </main>
  );
};

export default Page;
