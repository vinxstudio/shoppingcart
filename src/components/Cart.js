import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "./actions/cartActions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";

class Cart extends Component {
  handleRemove = productName => {
    this.props.removeItem(productName);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <Grid container spacing={2} key={item.productName}>
            <Grid item>
              <ButtonBase>
                <img
                  height="100"
                  src={item.productImage}
                  alt={item.productName}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ marginTop: 10, marginLeft: 1 }}
              >
                <Typography>{item.productName} </Typography>

                <Typography variant="body2" color="textSecondary">
                  ${item.price}
                </Typography>

                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      this.handleRemove(item.productName);
                    }}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })
    ) : (
      <Typography gutterBottom variant="body2" component="p" color="error">
        There are no items in your shopping cart.
      </Typography>
    );

    return (
      <div style={{ marginTop: 10 }}>
        <Paper elevation={1} style={{ padding: 10 }}>
          <Typography gutterBottom variant="h6" component="h2">
            Shopping Cart
          </Typography>
          <Divider />
          <div style={{ flexGrow: 1, marginTop: 5 }}>{addedItems} </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: productName => {
      dispatch(removeItem(productName));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
