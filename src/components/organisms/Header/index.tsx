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

function Header() {
  return (
    <AppBar position="relative" elevation={0} sx={{ height: 50 }}>
      <Container sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Typography
              component="a"
              href="/"
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
          <Grid item xs={12} md={10}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={(theme) => ({
                  backgroundColor: theme.palette.background.paper,
                })}
                size="small"
              />
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={1}>
                  <LocalMallOutlined />
                  <Typography>117.000₺</Typography>
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
