import { Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  total: string | number;
}

function Checkout({ total }: Props) {
  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography>
          Total Price:{" "}
          <Typography color="primary" fontWeight={500} component="span">
            {total}
          </Typography>
        </Typography>
        <Button variant="contained" fullWidth>
          Checkout
        </Button>
      </Stack>
    </Card>
  );
}

export default Checkout;
