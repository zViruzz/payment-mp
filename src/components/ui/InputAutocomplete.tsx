import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Input } from './Input'
import { css } from '../../../styled-system/css'
import { Product } from '@/types'

interface Props {
  onSuggestion: (event: ChangeEvent<HTMLInputElement>) => void
  suggestions: Product[]
}

export default function InputAutocomplete({onSuggestion , suggestions}: Props) {
  const [selectedItem, setSelectedItem] = useState(-1)


  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (selectedItem < suggestions.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (e.key === "ArrowDown" && selectedItem < suggestions.length - 1) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        // window.open(searchData[selectedItem].show.url);
        console.log('Enter a ', suggestions[selectedItem])
      }
    }
  }



  return (
    <div className={styles.container}>
      <Input
        onChange={onSuggestion}
        placeholder="Search"
        onKeyDown={handleKeyDown}
      />
      <div className={styles.autocompleteContainer}>
        <ul>
          {
            suggestions.map(product => (
              <li key={product.id}>
                {product.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: css({
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
