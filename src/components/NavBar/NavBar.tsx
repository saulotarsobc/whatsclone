import { NavBarItem } from "@/interfaces/NavBarItem";
import { IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import Divider from "../Divider/Divider";
import ListItemContainer from "./ListItemContainer";
import style from "./style.module.css";

interface NavBarProps {
  Items: NavBarItem;
}

const NavBar = ({ Items }: NavBarProps) => {
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
