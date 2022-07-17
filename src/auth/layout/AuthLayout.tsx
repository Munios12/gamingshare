import { Grid, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({
  children,
  authMethod,
}: {
  children: JSX.Element;
  authMethod: string;
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "#262254", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { md: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {authMethod}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
