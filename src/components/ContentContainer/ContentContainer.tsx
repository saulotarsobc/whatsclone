import style from "./style.module.css";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return <div className={style.ContentContainer}>{children}</div>;
};

export default ContentContainer;
