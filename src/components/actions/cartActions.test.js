import * as actions from './cartActions'
import * as types from '../actions/action-types/cart-actions'
describe('actions', () => {
  it('should create an action to add to cart', () => {
    const productName = "Apple iPhone X";
    const expectedAction = {
      type: types.ADD_TO_CART,
      productName
    }
    expect(actions.addToCart(productName)).toEqual(expectedAction)
  })

  it('should create an action to remove a product', () => {
    const productName = "Apple iPhone X";
    const expectedAction = {
      type: types.REMOVE_PRODUCT,
      productName
    }
    expect(actions.removeItem(productName)).toEqual(expectedAction)
  })
})
