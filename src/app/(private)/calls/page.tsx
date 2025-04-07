import ContentContainer from "@/components/ContentContainer";
import Side from "@/components/Side";
import style from "./page.module.css";

interface PageProps {}

const Page = ({}: PageProps) => {
  return (
    <main className={style.page}>
      <Side>Side</Side>
      <ContentContainer>Listar chamadas</ContentContainer>
    </main>
  );
};

export default Page;
