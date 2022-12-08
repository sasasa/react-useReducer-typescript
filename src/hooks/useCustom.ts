import { useReducer } from "react";
type State = {
  count: number;
};
type Action =
  | {
      type: "PLUS";
      step: number;
    }
  | {
      type: "MINUS";
      step: number;
    }
  | {
      type: "RESET";
    };

// a. カスタム フック を 定義
export const useCustom = (init: number) => {
  // b. Reducer（ dispatch）、 State を 準備
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "PLUS":
          return {
            count: state.count + action.step
          };
        case "MINUS":
          return {
            count: state.count - action.step
          };
        case "RESET":
          return {
            count: init
          };
        default:
          return state;
      }
    },
    { count: init }
  );
  // Action 呼び出し の ため の 関数
  const increment = () => {
    dispatch({ type: "PLUS", step: 5 });
  };
  const decrement = () => {
    dispatch({ type: "MINUS", step: 5 });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  // c. 呼び出し 元 で 利用 し たい 情報
  return { state, increment, decrement, reset };
};
