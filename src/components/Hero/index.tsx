import style from './hero.module.css';

export function Hero() {
  return (
    <div className={style.hero}>
      <div>
        <h2>
          Produtos
          <br />
          Gamers
          <br />
          <h3>
            Por <span>R$49_</span>
          </h3>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit
          aliquam dolorem recusandae iste, consequatur est totam id, maiores,
          possimus eaque.
        </p>
        <button>Comprar</button>
      </div>
    </div>
  );
}
