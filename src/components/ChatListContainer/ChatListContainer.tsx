import style from "./style.module.css";

interface ChatListContainerProps {
  children: React.ReactNode;
}

const ChatListContainer = ({children}:ChatListContainerProps) => {
  return (
    <div className={style.ChatListContainer}>
      {children}
    </div>
  );
};

export default ChatListContainer;