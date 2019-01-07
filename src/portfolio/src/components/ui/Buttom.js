import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  cssRoot: {
    color: "#4ea9da",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#daedf7"
    }
  }
});

const CustomeButton = props => {
  const { classes, children } = props;
  return <Button variant="contained" className={classes.cssRoot} size="medium" onClick={props.click}>{children}</Button>;
};

export default withStyles(styles)(CustomeButton);