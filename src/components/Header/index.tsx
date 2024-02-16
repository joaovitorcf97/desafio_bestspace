import { Logo } from '../logo';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={`${styles.header}`}>
      <div>
        <Logo />
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PRODUCTS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
