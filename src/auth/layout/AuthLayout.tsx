import { Grid, Typography } from "@mui/material";

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
      sx={{
        minHeight: "100vh",
        backgroundColor: "#262254",
        backgroundImage:
          "url('https://media.istockphoto.com/vectors/vector-seamless-pattern-background-icon-vector-id1170275727?k=20&m=1170275727&s=170667a&w=0&h=UQBYoBErmAd51y_o_zAztRWJoQR_7kBQBfjfhQC8ZM4=')",
        padding: 4,
      }}
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
