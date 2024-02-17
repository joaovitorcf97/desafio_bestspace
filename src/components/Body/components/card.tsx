'use client';

import { ShoppingCart } from '@phosphor-icons/react';
import Image from 'next/image';
import { Button } from '../../Button/Button';
import style from './card.module.css';

interface CardProps {
  title: string;
  productType: string;
  price: string;
  image: string;
  alt: string;
}

export function Card({ title, price, productType, image, alt }: CardProps) {
  return (
    <div className={style.card}>
      <div className={style.card_image}>
        <Image src={image} alt={alt} fill={true} quality={100} />
      </div>

      <p>{productType}</p>
      <div className={style.card_content}>
        <h3>{title}</h3>
        <span>R$ {price}</span>
      </div>

      <Button title="Comprar" icon={ShoppingCart} type="button" />
    </div>
  );
}
