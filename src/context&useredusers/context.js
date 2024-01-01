import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state,{...action.itemdata}];
    case "REMOVE":
      let newarr=[...state];
      newarr.splice(action.index,1);
      return newarr;
    case "UPDATE":
      let arr=[...state];
      arr.find((food,index)=>{
        if(food._id===action.id){
          arr[index]={...food,qty:action.qty,finalprice:action.finalprice}
        }
      })
      return arr;
    case "DROP":
      //make cart empty
      return [];
    default:
      console.log("Error in reducer");
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);
