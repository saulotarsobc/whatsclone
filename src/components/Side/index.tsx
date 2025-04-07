import style from "./style.module.css";

interface SideProps {
  children: React.ReactNode;
}

const Side = ({ children }: SideProps) => {
  return <div className={style.Side}>{children}</div>;
};

export default Side;
