import {
  IconArchive,
  IconMessage,
  IconPhone,
  IconSettings,
  IconStar,
} from "@tabler/icons-react";
import Link from "next/link";
import Divider from "../Divider";
import ListItemContainer from "../ListItemContainer";
import style from "./style.module.css";

const Items = {
  nav: [
    {
      href: "/chats",
      icon: <IconMessage size={20} />,
    },
    {
      href: "/calls",
      icon: <IconPhone size={20} />,
    },
  ],
  sub: [
    {
      href: "/favorites",
      icon: <IconStar size={20} />,
    },
    {
      href: "/archives",
      icon: <IconArchive size={20} />,
    },
  ],
};

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div>
        {Items.nav.map((item) => (
          <ListItemContainer key={item.href}>
            <Link href={item.href}>{item.icon}</Link>
          </ListItemContainer>
        ))}
        <Divider />
      </div>

      <div>
        {Items.sub.map((item) => (
          <ListItemContainer key={item.href}>
            <Link href={item.href}>{item.icon}</Link>
          </ListItemContainer>
        ))}

        <Divider />

        <ListItemContainer>
          <IconSettings size={20} />
        </ListItemContainer>
      </div>
    </div>
  );
};

export default NavBar;
