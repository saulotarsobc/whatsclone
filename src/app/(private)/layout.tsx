import NavBar from "@/components/NavBar";
import style from "./style.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.Layout}>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
