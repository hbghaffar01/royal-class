import SalesCard from "../components/SalesCard";
import CategoryCard from "../components/CategoryCard";
import BestSelling from "../components/BestSelling";
import ExploreProduct from "../components/ExploreProduct";
import NewArrival from "../components/NewArrival";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function ProductList() {
  return (
    <section>
      <SalesCard />
      <CategoryCard />
      <BestSelling />
      <ExploreProduct />
      <NewArrival />
      <Services />
      <Footer />
    </section>
  );
}
