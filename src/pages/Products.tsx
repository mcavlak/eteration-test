import { Alert, AlertTitle, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { fetchProducts } from "../redux/slices/products";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { usePagination } from "../utils/Pagination";
import { Product } from "../types/Product";
import ProductCard from "../components/molecules/ProductCard";
import FilterSidebar from "../components/organisms/FilterSidebar";
import CartSidebar from "../components/organisms/CartSidebar";

function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => {
    return state.products.all;
  });

  const filter = useAppSelector((state) => {
    return state.filter;
  });

  const filterProducts = () => {
    const sorted = [...products].sort((a, b) => {
      switch (filter.sort) {
        case "Old to new":
          return Date.parse(b.createdAt) - Date.parse(a.createdAt);
        case "New to old":
          return Date.parse(a.createdAt) - Date.parse(b.createdAt);
        case "Price hight to low":
          return Number(b.price) - Number(a.price);
        case "Price low to High":
          return Number(a.price) - Number(b.price);
        default:
          return 0;
      }
    });

    const filtered = sorted.filter(
      (v) =>
        v.name
          .toLocaleUpperCase()
          .includes(filter.search.toLocaleUpperCase()) &&
        (filter.brand.length > 0 ? filter.brand.includes(v.brand) : true) &&
        (filter.model.length > 0 ? filter.model.includes(v.model) : true)
    );

    return filtered;
  };

  const { paginationData, count, onChange, page } = usePagination(
    filterProducts(),
    12
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={2}>
        <FilterSidebar products={products} filterData={filter} />
      </Grid>
      <Grid component="main" item xs={8}>
        <Stack spacing={4}>
          <Grid container spacing={4}>
            {paginationData.length > 0 ? (
              paginationData.map((v: Product, i) => (
                <Grid key={i} item xs={12} md={3}>
                  <ProductCard {...v} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Alert severity="warning">
                  <AlertTitle>Sorry!</AlertTitle>
                  We couldn't find the product you were looking for
                </Alert>
              </Grid>
            )}
          </Grid>
          {paginationData.length > 0 && (
            <Pagination
              sx={{ display: "flex", justifyContent: "center", pb: 4 }}
              count={count}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={onChange}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <CartSidebar />
      </Grid>
    </Grid>
  );
}

export default Products;
