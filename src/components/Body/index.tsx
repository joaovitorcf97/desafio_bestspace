import Image from 'next/image';
import style from './body.module.css';
export function Body() {
  return (
    <div className={style.body}>
      <div className={style.description}>
        <h2>Compre os melhores equipamentos gamers</h2>
        <div className={style.line}></div>
      </div>

      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.card_image}>
            <Image
              src="/cadeira.png"
              alt="Mouse Gamer"
              fill={true}
              quality={100}
            />
          </div>

          <p>Cadeira Gamer</p>
          <div className={style.card_content}>
            <h3>Cadeira Gamer HyperX Pulsefire Surge RGB</h3>
            <span>R$ 299,90</span>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.card_image}>
            <Image
              src="/cadeira.png"
              alt="Mouse Gamer"
              fill={true}
              quality={100}
            />
          </div>

          <p>Cadeira Gamer</p>
          <div className={style.card_content}>
            <h3>Cadeira Gamer HyperX Pulsefire Surge RGB</h3>
            <span>R$ 299,90</span>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.card_image}>
            <Image
              src="/cadeira.png"
              alt="Mouse Gamer"
              fill={true}
              quality={100}
            />
          </div>

          <p>Cadeira Gamer</p>
          <div className={style.card_content}>
            <h3>Cadeira Gamer HyperX Pulsefire Surge RGB</h3>
            <span>R$ 299,90</span>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.card_image}>
            <Image
              src="/cadeira.png"
              alt="Mouse Gamer"
              fill={true}
              quality={100}
            />
          </div>

          <p>Cadeira Gamer</p>
          <div className={style.card_content}>
            <h3>Cadeira Gamer HyperX Pulsefire Surge RGB</h3>
            <span>R$ 299,90</span>
          </div>
        </div>
      </div>
    </div>
  );
}
