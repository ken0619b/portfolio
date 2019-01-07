import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  }
});

const CustomeTextField = props => {
  const { classes,label } = props;
  return (
    <TextField
      id="standard-name"
      type="text"
      name="text"
      value={props.value}
      label={label}
      onChange={props.change}
      className={classes.textField}
      margin="normal"
      variant="outlined"
    />
  );
}

export default withStyles(styles)(CustomeTextField);

