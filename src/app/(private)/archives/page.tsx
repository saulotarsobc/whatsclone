"use client";
import Side from "@/components/AsideContainer/AsideContainer";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import style from "./page.module.css";

const Page = () => {
  return (
    <main className={style.page}>
      <Side>Side</Side>
      <ContentContainer>Listar chats archivados</ContentContainer>
    </main>
  );
};

export default Page;
