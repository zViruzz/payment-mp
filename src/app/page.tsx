'use client'
import { css } from "../../styled-system/css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Product } from "@/types";
import InputAutocomplete from "@/components/ui/InputAutocomplete";

export default function Home() {
  const [searchSuggestions, setSearchSuggestions] = useState<Product[]>([])
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
    setSearchSuggestions(filterSearch(event.target.value))
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <div>
          <h1>Hello 🐼!</h1>
        </div>
        <div>
          <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
          }}>
            <InputAutocomplete
              suggestions={searchSuggestions}
              onSuggestion={onSuggestion}
            />
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
  
}
