"use client";

import { styles } from "../styles";
import useFetchProducts from "../hooks/useFetchProducts";
import SkeletonCard from "../components/common/SkeletonCard";
import React, { Suspense, lazy } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const Card = lazy(() => import("../components/common/Card").then(module => ({ default: module.Card || module.default })));

export default function AllProducts() {
  const { products, error } = useFetchProducts();

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <h1 className="text-2xl font-semibold py-4">All Products</h1>
      <p className="h-[1.5px] md:w-1/2 xs:w-full bg-teal-500"></p>
      {error && <div className="text-red-500">{error}</div>}
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <SkeletonCard key={product.id} />
          ))}
        </div>
      }>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ErrorBoundary key={product.id}>
            <Card key={product.id} product={product} showArrows={true} />
            </ErrorBoundary>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
