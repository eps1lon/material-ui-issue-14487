import * as React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";

const styles = createStyles({});

interface Props extends WithStyles<typeof styles> {
  foo: string;
}

export const MyComponent = withStyles(styles)((props: Props) => (
  <div>{props.foo}</div>
));
