import { legacy_createStore as createStore } from "redux";

const reducer = (state = [], { type, name, price }) => {
  switch (type) {
    case "add to cart":
      return [...state, { name, price }];
  }
};

export const store = createStore(reducer);
