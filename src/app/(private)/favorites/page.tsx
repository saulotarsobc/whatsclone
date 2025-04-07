import style from "./page.module.css";

interface PageProps {}

const Page = ({}: PageProps) => {
  return <main className={style.page}>Favorites</main>;
};

export default Page;
