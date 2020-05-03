import React from "react";
import {
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Button,
} from "@material-ui/core";
import styles from "./profile.module.css";
import {
  GitHub,
  LinkedIn,
  Email,
  PhoneAndroid,
  Language,
} from "@material-ui/icons";

const Profile = () => {
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6">Profile</Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.dynamicPadding}>
        <Paper square elevation={10} className={styles.pad}>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <div>
                <div className={styles.neonBorder}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt="profile"
                    title="Abhishek Kumar Gupta"
                    src={`https://avatars3.githubusercontent.com/u/45595749?s=460&v=4`}
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={8} xs={12}>
              <div style={{ paddingLeft: "20px", height: "100%" }}>
                <h2 style={{ marginBottom: "0", marginTop: "0" }}>
                  Abhishek Kumar Gupta
                </h2>
                <h4 style={{ marginTop: "0", marginLeft: "10px" }}>
                  Developer | Engineer
                </h4>
                <span>
                  A Developer with strong passion for self-improvement. I have
                  strong Problem Solving skills & bring energy, patience,
                  positivity and cultural values to the team.
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "28px",
                  }}
                >
                  <Button
                    style={{ marginRight: "20px" }}
                    variant="contained"
                    color="secondary"
                    startIcon={<GitHub />}
                  >
                    Github
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LinkedIn />}
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
          <div elevation={24}>
            <h2 className={styles.center} style={{ marginBottom: "0px" }}>
              Contact Info
            </h2>
            <hr />

            <div className={styles.center}>
              <Email />{" "}
              <span style={{ marginLeft: "5px" }}>
                {" "}
                <Typography> Email ---> Gsatyam52@gmail.com</Typography>
              </span>
            </div>

            <div className={styles.center}>
              <PhoneAndroid />{" "}
              <span style={{ marginLeft: "5px" }}>
                {" "}
                <Typography> Phone ---> +919852XXXXX</Typography>
              </span>
            </div>
            <div className={styles.center}>
              <Language />{" "}
              <span style={{ marginLeft: "5px" }}>
                <Typography>
                  Website --->{"  "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "red" }}
                    href="http://www.abhishekiittp.com/"
                  >
                    www.abhishekiittp.com
                  </a>{" "}
                </Typography>
              </span>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Profile;
