import { useReducer } from "react";
import { initialState, activityReducer } from "./reducers/activity-reducer";
import Form from "./components/Form.";
import ActivityList from "./components/ActivityList";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <h1 className=" text-center font-bold text-white uppercase">
            Contador de Calorias
          </h1>
        </div>
      </header>

      <section className=" bg-lime-500 py-20 px-5">
        <div className=" max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
