'use client';

import style from './style.module.css';

export default function Home() {
  return (
    <main className={style.Home}>
      <button className={style.Button} onClick={() => window.location.href = '/chats'}>Logar</button>
    </main>
  );
}
