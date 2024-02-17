import style from './body.module.css';
import { Card } from './components/card';
import { ContactForm } from './components/contactForm';

interface ProductProp {
  id: number;
  product_type: string;
  product_name: string;
  image_url: string;
  price: string;
}

async function getProducts() {
  try {
    const response = await fetch(`https://teste.joaovitor.tech/products`, {
      next: {
        revalidate: 320,
      },
    });

    return response.json();
  } catch (error) {
    throw new Error('Erro ao buscar o jogo do dia');
  }
}

export async function Body() {
  const data: ProductProp[] = await getProducts();

  return (
    <div className={style.body}>
      <div className={style.description}>
        <h2>Compre os melhores equipamentos gamers</h2>
        <div className={style.line}></div>
      </div>

      <div className={style.cards}>
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.product_name}
            productType={item.product_type}
            price={item.price}
            image={item.image_url}
            alt={item.product_name}
          />
        ))}
      </div>

      <ContactForm />
    </div>
  );
}
