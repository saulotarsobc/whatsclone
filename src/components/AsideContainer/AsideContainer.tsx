import style from "./style.module.css";

interface AsideContainerProps {
  children: React.ReactNode;
}

const AsideContainer = ({ children }: AsideContainerProps) => {
  return <div className={style.AsideContainer}>{children}</div>;
};

export default AsideContainer;
