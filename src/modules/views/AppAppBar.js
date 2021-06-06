import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
    backgroundColor: '#68674B',
  },
  left: {
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  icon: {
    width: 36,
    height: 36,
    opacity: 0.4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#DBC6AB',
    },
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link to={"/"}>
            <img src="/marca.png" alt="Andrea_Bonotto" style={{ height: '4em' }} />
          </Link>
          <div className={classes.right}>
            <a href="https://www.instagram.com/deiabonotto/" className={classes.icon}>
              <img src="/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
