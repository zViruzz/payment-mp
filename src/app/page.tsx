'use client'
import { Input } from "@/components/ui/Input";
import { css } from "../../styled-system/css";
import { ChangeEvent, useEffect, useState } from "react";

interface Product {
  id: number
  name: string
  price: number
}

export default function Home() {
  const [searchSuggestions, setSearchSearchSuggestions] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    const suggestions = [
      { id: 1, name: "Iphone", price: 10 },
      { id: 2, name: "Mac", price: 20 },
      { id: 3, name: "Asus Rog", price: 30 },
      { id: 4, name: "Xiaomi mi 6", price: 40 },
      { id: 5, name: "Samsung a32", price: 50 },
    ];
    setProducts(suggestions)
  }, [])

  const filterSearch = (value: string): Product[] => {    
    if (products === null) {
      return []
    }
    const filteredSuggestions = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log('filteredSuggestions', filteredSuggestions)
    return filteredSuggestions;
  }

  const onSuggestion = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    
    setSearchSearchSuggestions(filterSearch(event.target.value))
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <div>
          <h1>Hello 🐼!</h1>
        </div>
        <div>
          <form className={styles.form}>
            <Input
              onChange={onSuggestion}
              placeholder="Search"
            />
            <div className={styles.autocompleteContainer}>
              <ul>
                {
                  searchSuggestions.map(product => (
                    <li key={product.id}>
                      {product.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
  }),
  form: css({
    position: 'relative'
  }),
  autocompleteContainer: css({
    width: '100%',
    marginTop: '5px',
    padding: '.6rem',
    position: 'absolute',
    border: '1px solid #333333FF',
    borderRadius: 'xl',
    background: '#141414FF'
  })
}
