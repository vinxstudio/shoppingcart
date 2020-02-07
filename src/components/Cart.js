import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "./actions/cartActions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

class Cart extends Component {
  handleRemove = productName => {
    this.props.removeItem(productName);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <MenuItem key={item.productName}>
            <img src={item.productImage} alt={item.productName} height="100" />
            <Grid >
              <Typography style={{ paddingLeft: 10 }}>
                {item.productName}
              </Typography>
              <div style={{ whiteSpace: "pre-wrap" }}></div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ paddingLeft: 10 }}
              >
                ${item.price}
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.handleRemove(item.productName);
                }}
                style={{ marginLeft: 10, marginTop: 10, textAlign: "right" }}
              >
                Remove
              </Button>
            </Grid>
          </MenuItem>
        );
      })
    ) : (
      <Typography gutterBottom variant="body2" component="p" color="error">
        There are no items in your shopping cart.
      </Typography>
    );
    return (
      <div style={{ marginTop: 10 }}>
        <Paper elevation={1} style={{ padding: 20 }}>
          <Typography gutterBottom variant="h6" component="h2">
            Shopping Cart
          </Typography>
          <Divider />
          <MenuList>{addedItems} </MenuList>
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
