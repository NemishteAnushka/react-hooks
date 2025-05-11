import React from "react";
import ParentUIComponent from "./components/useContextAPI/provider/ParentUIComponent";
import ProviderComponent from "./components/useContextAPI/provider/ProviderComponent";
// import MyApp from "./components/useContextAPI/MyApp";
// import TodoProjectUsingUseReducer from "./components/useReducer()/TodoProjectUsingUseReducer";
// import ExampleUseReducer from "./components/useReducer()/ExampleUseReducer";
// import AbortNetworkRequest from "./components/useEffect()/AbortNetworkRequest";
// import CleanUpFunctions from "./components/useEffect()/CleanUpFunctions";
// import AddEventListner from "./components/useEffect()/AddEventListner";
// import FetchDataUsingAsync from "./components/useEffect()/FetchDataUsingAsync";
// import ExampleUseEffect1 from "./components/useEffect()/ExampleUseEffect1";
// import FetchDataUsingPromise from "./components/useEffect()/FetchDataUsingPromise";
// import ExampleUseRef from "./components/useRef()/ExampleUseRef";
// import FormUseRef from "./components/useRef()/FormUseRef";
// import SimpleForm from "./components/simple useState project/SimpleForm";
// import RecordKeeping from "./components/simple useState project/RecordKeeping";
// import UseStateExample1 from "./components/useState()/UseStateExample1";
// import StateExampleObject from "./components/useState()/StateExampleObject";
// import ArrayInState from "./components/useState()/ArrayInState";
// import StateUsingCallBack from "./components/useState()/StateUsingCallBack";
// import CounterApplication from "./components/useState()/CounterApplication";
// import ReactUseState1 from "./components/useState()/ReactUseState1";
function App() {
  // const [show, setShow] = useState(true);
  // const handleCheckBox = () => {
  //   setShow(() => setShow(!show));
  // };
  return (
    <>
      {/* clean up function */}
      {/* <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={show}
        onChange={handleCheckBox}
      /> */}
      <div>
        {/* <ReactUseState1 /> */}
        {/* <CounterApplication /> */}
        {/* <StateUsingCallBack /> */}
        {/* <ArrayInState /> */}
        {/* <StateExampleObject /> */}
        {/* <UseStateExample1 /> */}

        {/* project 1 */}
        {/* <RecordKeeping /> */}
        {/* <SimpleForm /> */}

        {/* useRef */}
        {/* <ExampleUseRef /> */}
        {/* <FormUseRef /> */}

        {/* useEffect */}
        {/* <ExampleUseEffect1 /> */}
        {/* <FetchDataUsingPromise /> */}
        {/* <FetchDataUsingAsync /> */}
        {/* {show && <CleanUpFunctions />} */}
        {/* {show && <AddEventListner />} */}
        {/* {show && <AbortNetworkRequest />} */}

        {/* useReducer hook */}
        {/* <ExampleUseReducer /> */}
        {/* {<TodoProjectUsingUseReducer />} */}

        {/* use context */}
        {/* <MyApp /> */}
        <ProviderComponent>
          <ParentUIComponent />
        </ProviderComponent>
      </div>
    </>
  );
}

export default App;
