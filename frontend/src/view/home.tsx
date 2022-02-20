import { Card, CardActionArea, CardContent, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import User from "../layout/User";

const theme = createTheme();

export default function Home() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <User title="Home">
      <Grid
        container
        padding={2}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Chip
            label="Balance 30"
            sx={{ width: "100%", textAlign: "center", fontSize: 20 }}
          />
        </Grid>
        <Grid item xs={4} justifyContent="center">
          <Avatar
            src={require("assets/img/user.jpg")}
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardContent sx={{ height: 100 }}>
                <Grid
                  sx={{ height: "100%" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h5">Recharge</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardContent sx={{ height: 100 }}>
                <Grid
                  sx={{ height: "100%" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h5">Payments</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardContent sx={{ height: 100 }}>
                <Grid
                  sx={{ height: "100%" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h5">Dues</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </User>
  );
}
