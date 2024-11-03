import Header from "./Views/Header";
import ProductList from "./Views/ProductList"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductList />
    </main>
  );
}
