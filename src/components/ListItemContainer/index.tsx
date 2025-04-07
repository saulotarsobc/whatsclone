import style from "./style.module.css";
interface ListItemContainerProps {
  children: React.ReactNode;
}

const ListItemContainer = ({ children }: ListItemContainerProps) => {
  return <div className={style.ListItemContainer}>{children}</div>;
};

export default ListItemContainer;
