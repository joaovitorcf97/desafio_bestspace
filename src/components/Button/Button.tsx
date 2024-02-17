'use client';

import { IconProps } from '@phosphor-icons/react';
import styles from './button.module.css';

interface ButtonProps {
  type: 'button' | 'submit';
  title: string;
  icon: React.ForwardRefExoticComponent<IconProps>;
}

export function Button({ title, icon: Icon, type }: ButtonProps) {
  return (
    <button type={type} className={styles.button}>
      <Icon size={20} weight="fill" />
      {title}
    </button>
  );
}
