import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#E4B996',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    fontFamily: 'serif',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/wellness.png"
                alt="Well Places"
              />
              <Typography variant="h6" className={classes.title}>
                Well Places
              </Typography>
              <Typography variant="h5">
                {'Pela arquitetura, crio experiências de bem estar, fazendo a conexão entre a Casa Alma e '}
                {'Casa Ambiente. Assim é possível proporcionar uma vivência leve, positiva e autêntica para pessoas '}
                {'que buscam intenção e equilíbrio onde vivem e trabalham, como indivíduos ou comunidade.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/casacoracao.svg"
                alt="em casa com a deia"
              />
              <Typography variant="h6" className={classes.title}>
                Em casa com a Déia
              </Typography>
              <Typography variant="h5">
                {'Com drops de conteúdo postados no meu perfil do Instagram @deiabonotto, trazendo conteudo e reflexões '}
                {'sobre a arquitetura como ponte para o bem estar.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/workshop.svg"
                alt="workshop"
              />
              <Typography variant="h6" className={classes.title}>
                Workshops
              </Typography>
              <Typography variant="h5">
                {'Meu objetivo é sempre mostrar formas de se viver bem, morar melhor. Palestras e woprkshops '}
                {'fazem parte desse compartilhamento de conhecimentos.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
