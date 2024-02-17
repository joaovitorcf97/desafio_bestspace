import style from './hero.module.css';

export function Hero() {
  return (
    <div className={style.hero}>
      <div>
        <h2 className={style.hero_title}>
          Produtos
          <br />
          Gamers
          <br />
          <p>
            Por <span>R$49_</span>
          </p>
        </h2>
        <p className={style.hero_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit
          aliquam dolorem recusandae iste, consequatur est totam id, maiores,
          possimus eaque.
        </p>
        <button>Comprar</button>
      </div>
    </div>
  );
}
