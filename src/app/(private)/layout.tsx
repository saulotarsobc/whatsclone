import NavBar from "@/components/NavBar";
import { NavBarItem } from "@/interfaces/NavBarItem";
import {
  IconArchive,
  IconMessage,
  IconPhone,
  IconStar,
} from "@tabler/icons-react";
import style from "./style.module.css";

const Items: NavBarItem = {
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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.Layout}>
          <NavBar Items={Items} />
          {children}
        </div>
      </body>
    </html>
  );
}
