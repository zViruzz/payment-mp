import React from 'react'

interface Props {
  totalSum: number
  quantity: number
}

export default function Detail({ quantity, totalSum }: Props) {
  return (
    <>
      {
        quantity !== 0
          ? <div>
            <p>Total: {totalSum} $</p>
            <p>Cantidad: {quantity}</p>
          </div>
          : null
      }
    </>
  )
}