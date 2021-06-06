import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = (theme) => ({
  root: {
    backgroundColor: '#DBC6AB',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    border: '2px solid currentColor',
    borderRadius: 20,
    height: 'auto',
    padding: theme.spacing(1, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Box m={2} />
      <Button className={classes.button} href="mailto:andrea@andreabonotto.com.br" target="_blank" >
        <Typography variant="h6" component="span">
          Quer saber mais?
        </Typography>
      </Button>
      <Typography variant="subtitle1" style={{ padding: '20px 50px 30px 50px', textAlign: 'center' }}>
        {'Meu site está em desenvolvimento! Enquanto isso, você pode mandar um "oi" para saber mais sobre meu trabalho!'}
      </Typography>
    </Container >
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
