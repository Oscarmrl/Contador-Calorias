import { useMemo } from "react";
import type { Activity } from "../types";
import CaloriDisplay from "./CaloriDisplay";

type CaloriTrackerProps = {
  activities: Activity[];
};

export default function CaloriTracker({ activities }: CaloriTrackerProps) {
  const CaloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const CaloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const NetCalories = useMemo(
    () => CaloriesConsumed - CaloriesBurned,
    [activities]
  );

  return (
    <>
      <h2 className=" text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>
      <div className=" flex flex-col items-center md:flex-row md:justify-evenly gap-5 mt-10">
        <CaloriDisplay calories={CaloriesConsumed} text={"Consumidas"} />

        <CaloriDisplay calories={NetCalories} text={"Diferencia"} />

        <CaloriDisplay calories={CaloriesBurned} text={"Quemadas"} />
      </div>
    </>
  );
}
