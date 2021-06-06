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
    backgroundColor: theme.palette.secondary.light,
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
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
                {'Arquitetura com o objetivo é de mostrar formas de morar bem, viver melhor. '}
                {'Integrando a casa corpo e casa alma em projetos arquitetônicos voltados para o bem-estar.'}
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
                {'Drops de conteúdo postados no meu perfil do Instagram @AndreaBonotto, trazendo informações e reflexões de como o ambiente nos afetam '}
                {'Muito conhecimento baseado em fatos e literatura para trazer um novo olhar para a arquitetura'}
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
                {'Momentos de encontro com a Deia para falar sobre a casa corpo casa alma .'}
                {'Com um grupo limitado de pessoas onde existe trocas e libertação.'}
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
