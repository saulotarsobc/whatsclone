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

interface NavBarProps {}

const Items = {
  nav: [
    {
      href: "/chats",
      icon: <IconMessage />,
    },
    {
      href: "/calls",
      icon: <IconPhone />,
    },
  ],
  sub: [
    {
      href: "/favorites",
      icon: <IconStar />,
    },
    {
      href: "/archives",
      icon: <IconArchive />,
    },
  ],
};

const NavBar = ({}: NavBarProps) => {
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
          <IconSettings />
        </ListItemContainer>
      </div>
    </div>
  );
};

export default NavBar;
