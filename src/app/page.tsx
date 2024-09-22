'use client'
import { css } from "../../styled-system/css";
import { FormEvent, useEffect, useState } from "react";
import { Product } from "@/types";
import InputAutocomplete from "@/components/InputAutocomplete";
import CloseIcon from "@/components/icons/CloseIcon";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [card, setCard] = useState<Product[]>([])
  const [buttonSize, setButtonSize] = useState('normal')

  const addProduct = (product: Product) => {
    setCard(prev => {
      return product ? [...prev, product] : prev;
    })
  }

  useEffect(() => {
    const suggestions = [
      { id: 1, name: "Iphone", price: 10 },
      { id: 2, name: "Mac", price: 20 },
      { id: 3, name: "Asus Rog", price: 30 },
      { id: 4, name: "Xiaomi mi 6", price: 40 },
      { id: 5, name: "Samsung a32", price: 50 },
      { id: 6, name: "Samsung a42", price: 50 },
      { id: 7, name: "Samsung s20", price: 50 },
      { id: 8, name: "Iphone 12 Pro", price: 50 },
      { id: 9, name: "Xiaomi redmit 8", price: 50 },
    ];
    setProducts(suggestions)
  }, [])


  const removeProduct = (index: number) => {
    const newCard = [...card]
    newCard.splice(index, 1)
    setCard(newCard)
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <div>
          <h1 className={styles.h1}>Products</h1>
        </div>
        <div>
          <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
          }}>
            <InputAutocomplete
              data={products}
              onProductSelect={addProduct}
            />
          </form>
        </div>

        {
          card.length !== 0
            ? <div className={styles.productList}>
              {
                card.map((product, index) => (
                  <div key={index} className={styles.productItem}>
                    <div>
                      {`${product?.id} - ${product?.name}`}
                    </div>
                    <div className={css({
                      display: 'flex',
                      gap: '20px'
                    })}>
                      <div>
                        {`${product?.id} $`}
                      </div>
                      <button
                        onClick={() => removeProduct(index)}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
            : null
        }

        <div>
          <button
            className={css(styles.getLink, {
              scale: buttonSize === 'normal' ? '1' : '0.99',
            })}
            onMouseDown={() => setButtonSize('small')}
            onMouseUp={() => setButtonSize('normal')}
          >
            Get
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  h1: css({
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: 'none',
    marginBottom: '13px'
  }),
  container: css({
    display: "flex",
    flexDirection: "column",
    background: 'transparent',
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  }),
  containerForm: css({
    border: "1px solid",
    borderColor: "gray.500",
    borderRadius: "xl",
    padding: "30px",
    width: '30rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  }),
  productItem: css({
    border: '1px solid #ffffff',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between'
  }),
  productList: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }),
  getLink: css.raw({
    width: '100%',
    background: '#176fee',
    padding: '10px',
    borderRadius: '.45rem',
    transition: 'all 0.1s  ease',
    _hover: {
      cursor: 'pointer',
      background: '#1965CEFF',
    },
    _active: {
      background: '#1F7CFFFF',
    },
  })
}
