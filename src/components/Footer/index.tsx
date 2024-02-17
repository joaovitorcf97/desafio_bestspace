'use client';

import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import Link from 'next/link';
import { Logo } from '../logo';
import style from './footer.module.css';

export function Footer() {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer}>
        <div className={style.footer_logo}>
          <Logo />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <ul className={style.menu_social}>
          <li>
            <Link href="#">
              <InstagramLogo size={28} weight="fill" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LinkedinLogo size={28} weight="fill" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <GithubLogo size={28} weight="fill" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.footer_bottom}>
        <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
}
