import React, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();
  const [api, setApi] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await axios.get(
        "https://api.jsonbin.io/b/5eac3d314c87c3359a64e6c2/1"
      );
      setApi(res.data);
    };
    fetchAPI();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="secondary" position="static">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6">Projects</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {api ? (
              api.map(({ url, link, desc, title }, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card elevation={24} className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={url}
                      title={title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {title}
                      </Typography>
                      {desc}
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <a rel="noopener noreferrer" target="_blank" href={link}>
                        <Button variant="contained" color="primary">
                          View
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <h1>Loading....</h1>
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
