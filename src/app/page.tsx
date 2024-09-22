import ProductFrom from "@/components/ProductFrom";
import { css } from "../../styled-system/css";

export default function Home() {

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

  return (
    <div className={styles.container}>
      <ProductFrom products={suggestions} />
    </div>
  )
}

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  })
}