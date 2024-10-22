import { useReducer, useEffect, useMemo } from "react";
import { initialState, activityReducer } from "./reducers/activity-reducer";
import Form from "./components/Form.";
import ActivityList from "./components/ActivityList";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const RestartApp = useMemo(
    () => state.activities.length > 0,
    [state.activities]
  );

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <h1 className=" text-center font-bold text-white uppercase">
            Contador de Calorias
          </h1>
          <button
            className=" bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white text-sm rounded-lg disabled:opacity-50"
            disabled={!RestartApp}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar App
          </button>
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
