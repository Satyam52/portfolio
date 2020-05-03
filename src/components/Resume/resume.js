import React, { useState, useEffect, Fragment } from "react";
import styles from "./resume.module.css";
import Education from "./EduTemplate/edu";
import axios from "axios";
import {
  Grid,
  div,
  AppBar,
  Typography,
  Toolbar,
  Paper,
} from "@material-ui/core";
import Stats from "./stats/stats";

function App() {
  const [exp, setExp] = useState();
  const [skill, setSkill] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await axios.get(
        "https://api.jsonbin.io/b/5eac0cc14c87c3359a64cf6f/2"
      );
      const resp = await axios.get(
        "https://api.jsonbin.io/b/5eac1c4466e603359fe1d09c/2"
      );

      setExp(res.data);
      setSkill(resp.data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6">Resume</Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.dynamicPadding}>
        <Paper
          square
          style={{ padding: "1px 10px", height: "100%" }}
          elevation={24}
        >
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <div elevation={24}>
                {exp ? (
                  exp.map(({ head, data }, i) => (
                    <Fragment key={i}>
                      <h2 style={{ fontFamily: "Consolas" }}> {head}</h2>
                      <hr />

                      {data.map(({ title, date, post, detail }, i) => (
                        <Education
                          title={title}
                          key={i}
                          date={date}
                          post={post}
                          detail={detail}
                        />
                      ))}
                    </Fragment>
                  ))
                ) : (
                  <h1>Loading....</h1>
                )}
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <div
                style={{
                  padding: "1px 10px",
                  height: "100%",
                }}
                elevation={24}
              >
                {skill &&
                  skill.map(({ field, data }, i) => (
                    <div key={i}>
                      <h3 style={{ fontFamily: "Consolas" }}> {field}</h3>
                      <hr />

                      {data.map(({ lang, percent }, i) => (
                        <Stats key={i} lang={lang} percent={percent} />
                      ))}
                    </div>
                  ))}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default App;
