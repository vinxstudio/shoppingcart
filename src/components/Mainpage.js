import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Cart from "./Cart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Mainpage extends Component {
  handleClick = productName => {
    this.props.addToCart(productName);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <Card
          key={item.productName}
          style={{
            marginTop: 18,
            marginBottom: 15,
            width: 250,
            textAlign: "center"
          }}
          elevation={1}
        >
          <CardActionArea style={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              style={{ marginTop: 10 }}
            >
              {item.productName}
            </Typography>
            <img src={item.productImage} alt={item.productName} height="200" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                ${item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                this.handleClick(item.productName);
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      );
    });
    return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper elevation={1} style={{ padding: 20, marginTop:10 }}>
            <div className="box">{itemList}</div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Cart></Cart>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.filter(item => item.isPublished === "true")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: productName => {
      dispatch(addToCart(productName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mainpage);
