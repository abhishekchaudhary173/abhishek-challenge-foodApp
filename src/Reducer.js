export const initialState = {
  basket: [],
  user: null,
  data: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_DATA":
      //Logic for adding item to cart
      const data = action.item;
      return {
        ...state,
        data: data,
      };

    case "ADD_TO_BASKET": {
      console.log("ADD_TO_BASKET");
      //Logic for adding item to cart
      const data = action.item;
      const basket = state.basket;

      if (basket.length > 0) {
        for (let i = 0; i < basket.length; i++) {
          if (basket[i].name === data.name) {
            let temp = basket;
            temp[i] = { ...temp[i], value: temp[i].value + 1 };
            // console.log("temp", temp);
            return {
              ...state,
              basket: temp,
            };
          }
        }
        let tempObj = { ...data, value: 1 };
        return {
          ...state,
          basket: [...state.basket, tempObj],
        };
      } else {
        let tempObj = { ...data, value: 1 };
        return {
          ...state,
          basket: [...state.basket, tempObj],
        };
      }
    }

    case "REMOVE_FROM_BASKET": {
      // Logic for removing item from cart
      const data = action.item;
      const basket = state.basket;

      if (basket.length > 0) {
        for (let i = 0; i < basket.length; i++) {
          if (basket[i].name === data.name) {
            let temp = basket;
            temp[i] = { ...temp[i], value: temp[i].value - 1 };
            if (temp[i].value <= 0) {
              console.log("arr1 =", temp);
              const arr = temp.filter((item) => item.name !== temp[i].name);
              console.log("arr2 =", arr);
              return {
                ...state,
                basket: arr,
              };
            } else {
              return {
                ...state,
                basket: temp,
              };
            }
          }
        }
        alert("Item is not added to the cart");
        // let tempObj = { ...data, value: 1 };
        // return {
        //   ...state,
        //   basket: [...state.basket, tempObj],
        // };
      } else {
        alert("Cart is empty");
      }
      return;
    }

    default:
      return state;
  }
};

export default reducer;
