import { Search } from "@mui/icons-material";
import {
  AppBar,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { LocalMallOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeSearch } from "../../../redux/slices/filter";

function Header() {
  const cart = useAppSelector((state) => {
    return state.cart.items;
  });
  const dispatch = useAppDispatch();
  const total = cart.reduce((a, b) => Number(a) + Number(b.price), 0);
  return (
    <AppBar position="relative" elevation={0} sx={{ py: 1 }}>
      <Container
        maxWidth="xl"
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        <Grid
          container
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <Grid item xs={4} sm={4} md={3} xl={2}>
            <Typography
              component={Link}
              to="/"
              sx={{
                color: "inherit",
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              Eteration
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={9} xl={10}>
            <Stack
              direction={{ xs: "column-reverse", sm: "row" }}
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField
                variant="outlined"
                placeholder="Search"
                onChange={(e) => dispatch(changeSearch(e.target.value))}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  sx: (theme) => ({
                    backgroundColor: theme.palette.background.paper,
                  }),
                }}
                size="small"
              />
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={1}>
                  <LocalMallOutlined />
                  <Typography>
                    {new Intl.NumberFormat("tr-TR", {
                      style: "currency",
                      currency: "TRY",
                    }).format(total || 0)}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <PersonOutlineOutlined />
                  <Typography>Kerem</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Header;
