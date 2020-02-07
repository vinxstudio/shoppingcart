import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Cart from "./Cart";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Cart Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Cart />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});