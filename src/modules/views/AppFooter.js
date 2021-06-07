import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
// import { Link } from "react-router-dom";
import Link from '@material-ui/core/Link';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#68674B',
  },
  bodyText: {
    alignItems: 'start',
    fontFamily: 'sans-serif',
    fontSize: '0.9em',
    color: '#E4B996',
    textAlign: 'center',

  },
  contato: {
    height: '35px',
    display: 'flex',
    alignItems: 'start',
    textAlign: 'center',
    color: 'white',
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  Copyright: {
    fontSize: 12,
    fontStyle: 'italic',
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
  logo: {
    maxHeight: '14em',
    maxWidth: '14em',
  },
  title: {
    alignItems: 'start',
    fontFamily: 'serif',
    fontSize: '2em',
    color: '#E4B996',
    textAlign: 'start',
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container} >
        <Grid
          container
          direction="row-reverse"
          justify="space-evenly"
          alignItems="center"
          spacing={9}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.bodyText}>
              <img src={'/marca_AB_transparente.png'} alt='andreabonottologo' className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box >
              <Box className={classes.title}> Contato </Box>
              <Box className={classes.bodyText}> MANDE UM ALÔ </Box>
              <Box m={2} />
              <Box className={classes.contato} >
                <MailOutlineIcon />
                <Link href="mailto:contato@andreabonotto.com.br" target="_blank" variant="inherit" color='inherit' > {'  '}contato@andreabonotto.com.br</Link>
              </Box>
              <Box className={classes.contato} >
                <WhatsAppIcon />
                <Link href="https://wa.me/5551993991414" variant="inherit" color='inherit'> (51) 99399 1414</Link>
              </Box>
              <Box className={classes.contato} >
                <InstagramIcon />
                <Link href="https://www.instagram.com/deiabonotto/" variant="inherit" color='inherit'> @deiabonotto</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.Copyright} textAlign='center' pt={{ xs: 5, sm: 10 }}>
          {'© '}
          <Link href="https://www.andreabonotto.com.br/" color='inherit'>
            Andrea Bonotto
          </Link >
          {' '}
          {new Date().getFullYear()}
        </Box>
      </Container>
    </Typography >
  );
}
