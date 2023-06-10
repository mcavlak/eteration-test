import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CartSidebar from "../components/organisms/CartSidebar";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchProduct } from "../redux/slices/products";
import { addToCart } from "../redux/slices/cart";

function ProductDetail() {
  let { productId } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => {
    return state.products.selected;
  });

  useEffect(() => {
    dispatch(fetchProduct(productId));
    return () => {
      dispatch(fetchProduct(null));
    };
  }, []);

  return (
    product && (
      <Grid container spacing={4}>
        <Grid component="main" item xs={12} md={10}>
          <Card sx={{ p: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <img
                  src={product.image}
                  style={{
                    aspectRatio: "4/3",
                    width: "100%",
                  }}
                  alt={product.name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={6} mt={1}>
                  <Stack spacing={1}>
                    <Typography component="h2" fontSize={24}>
                      {product.name}
                    </Typography>
                    <Typography color="primary" fontWeight={500} fontSize={24}>
                      {product.price}₺
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </Button>
                    <Typography>{product.description}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <CartSidebar />
        </Grid>
      </Grid>
    )
  );
}

export default ProductDetail;
