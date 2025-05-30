import ChatSearch from "./ChatSearch";
import style from "./style.module.css";

interface ChatSearchContainerProps {
  onSearch: () => void;
}
const ChatSearchContainer = ({ onSearch }: ChatSearchContainerProps) => {
  return (
    <div className={style.ChatSearchContainer}>
      <ChatSearch onSearch={onSearch} />
    </div>
  );
};

export default ChatSearchContainer;
