import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/UseStateAndUseEffect/ClassCounter";
import HookCounter from "./components/UseStateAndUseEffect/HookCounter";
import HookCounterThree from "./components/UseStateAndUseEffect/HookCounterThree";
import HookCounterTow from "./components/UseStateAndUseEffect/HookCounterTow";
import HookCounterFour from "./components/UseStateAndUseEffect/HookCounterFour";
import HookCounterFive from "./components/UseStateAndUseEffect/HookCounterFive";
import HookSixth from "./components/UseStateAndUseEffect/HookSixth";
import HooksMouse from "./components/UseStateAndUseEffect/HooksMouse";
import MouseContainer from "./components/UseStateAndUseEffect/MouseContainer";
import IntervalHookCounters from "./components/UseStateAndUseEffect/IntervalHookCounters";
import DataFetch from "./components/DataFetching/DataFetch";
import DataFetchTow from "./components/DataFetching/DataFetchTow";
import DataFetchThree from "./components/DataFetching/DataFetchThree";
import CompoC from "./components/Context/CompoC";
import CounterOne from "./components/Reducer/CounterOne";
import CounterTow from "./components/Reducer/CounterTow";
import CounterThree from "./components/Reducer/CounterThree";
import ComponentA from "./components/ReducerAndEffect/ComponentA";
import ComponentB from "./components/ReducerAndEffect/ComponentB";
import ComponentC from "./components/ReducerAndEffect/ComponentC";
import DataFetchingOne from "./components/DataFetchingUsingReducer/DataFetchingOne";
import DataFetchingTow from "./components/DataFetchingUsingReducer/DataFetchingTow";
import ParentComponent from "./components/UseCallback/ParentComponent";
import Counter from "./components/UseMemoHook/Counter";
import FoucsInput from "./components/UseRef/FoucsInput";
import ClassTImer from "./components/UseRef/ClassTImer";
import HookTimer from "./components/UseRef/HookTimer";
import DocTitleOne from "./components/CustomHooks/Hooks/useDocTitle/DocTitleOne";
import DocTitleTow from "./components/CustomHooks/Hooks/useDocTitle/DocTitleTow";
import CustoumCounterOne from "./components/CustomHooks/Hooks/useCounter/CustoumCounterOne";
import CustoumCounterTow from "./components/CustomHooks/Hooks/useCounter/CustoumCounterTow";
import UserForm from "./components/CustomHooks/Hooks/useInput/UserForm";

export const CountContext = React.createContext();
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        useState and useEffect part
        <br />
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTow/> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterFive /> */}
        {/* <HookSixth /> */}
        {/* <HooksMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalHookCounters /> */}
        <hr />
        DataFetching with useState
        <br />
        {/* <DataFetch /> */}
        {/* <DataFetchTow /> */}
        {/* <DataFetchThree /> */}
        <hr />
        useContext
        <br />
        {/* <UserContext.Provider value={"Khaled"}>
        <ChannelContext.Provider value={"Abousheikh"}>
          <CompoC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        <hr />
        useReducer <br />
        {/* <CounterOne /> */}
        {/* <CounterTow /> */}
        {/* <CounterThree /> */}
        <hr />
        useReducer with useContext
        <br />
        {/* Count- {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        <hr />
        DataFetching with useReducer <br />
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTow /> */}
        <hr />
        usecallback <br />
        {/* <ParentComponent /> */}
        <hr />
        UseMemoHook <br />
        {/* <Counter /> */}
        <hr />
        UseRef <br />
        {/* <FoucsInput /> */}
        {/* <ClassTImer /> */}
        {/* <HookTimer /> */}
        <hr />
        Custom Hook <br />
        useDocTitle
        <br />
        {/* <DocTitleOne /> */}
        {/* <DocTitleTow /> */}
        <hr />
        useCounter
        <br />
        {/* <CustoumCounterOne /> */}
        {/* <CustoumCounterTow /> */}
        <hr />
        usenput
        <br />
        <UserForm />
      </div>
    </CountContext.Provider>
  );
}

export default App;
