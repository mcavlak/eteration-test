import React from "react";
import { Product } from "../../../types/Product";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { addToCart } from "../../../redux/slices/cart";

function ProductCard(props: Product) {
  const distpatch = useAppDispatch();
  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <CardMedia
        sx={{ aspectRatio: "1" }}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <Typography color="primary" fontWeight={500}>
          {props.price + " ₺"}
        </Typography>
        <Tooltip title={props.name}>
          <Link
            to={`/product/${props.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {props.name}
            </Typography>
          </Link>
        </Tooltip>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => distpatch(addToCart(props))}
          variant="contained"
          fullWidth
          size="small"
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
