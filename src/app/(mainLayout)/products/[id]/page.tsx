import { prisma } from '@server/db/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ObjectId } from 'mongodb'

import styles from './page.module.scss';
import AdvantagesList from '@components/UI/AdvantagesList';
import { Metadata } from 'next';

type Props = {
    params: {id: string}
}

export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
  
        const product = await prisma.item.findUnique({
            where: {
                id: params.id
            }
        })
    return {
      title: `${product?.title} - PCstar`,
    };
  }


export default async function Product({params} : Props) {
  

    if(!ObjectId.isValid(params.id)) notFound();

    const product = await prisma.item.findUnique({
        where: {
            id: params.id
        }
    })

    if(!product) notFound();

  
    return (
      <main className={`${styles.main}`}>
        <section className={`container ${styles.productContainer}`}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.productInfo}>
                <div className={styles.imageContainer}>
                    <Image priority={true} src={product.imageSrc} alt={product.title} fill={true} sizes='500px'/>
                </div>
                <div className={styles.productContent}>
                    <div className={styles.productDescriptionContainer}>
                        <div>
                            <h2>Описание:</h2>
                            <span>{product.description}</span>
                        </div>
                    </div>
                    <div className={styles.productBuySpecsContainer}>
                        <div className={styles.productSpecsContainer}>
                            <h2>Характеристики:</h2>
                            <ul>
                                {product.specs.map((spec, idx) => {
                                    return <li key={idx}>{`${spec}`}</li>
                                })}    
                            </ul>
                        </div>
                        <div className={styles.productBuyContainer}>
                            <div className={styles.productPrice}>
                                {(product.prevPrice !== undefined && product.prevPrice !== null) && <span className={styles.prevPrice}>{product.prevPrice.toFixed(2)} лв.</span>}
                                <span>{product.price.toFixed(2)} лв.</span>
                            </div>
                            <div className={styles.productBuy}>
                                <button className={styles.cartButton}>Добави в количка</button>
                                <button className={styles.buyButton}>Купи</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <AdvantagesList />

      </main>
    )
  }
  