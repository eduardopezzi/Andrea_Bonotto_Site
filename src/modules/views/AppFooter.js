import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import { Link } from "react-router-dom";
import { typography } from 'material-ui/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        Andrea Bonotto
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#DBC6AB',
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={3}
            >
              <Grid item className={classes.icons}>
                <a href="https://www.instagram.com/deiabonotto/" className={classes.icon}>
                  <img src="/instagram.svg" alt="Instagram" />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Box m={1} />
            <Typography variant='h6'> Contato </Typography>
            <Box m={2} />
            <MailOutlineIcon />
            <Link href="mailto:andrea@andreabonotto.com.br" target="_blank" variant="inherit" > andrea@andreabonotto.com.br</Link>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
