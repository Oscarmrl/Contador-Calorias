import { categories } from "../data/Categori";
import { useState } from "react";
import type { Activity } from "../types";

export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);

    setActivity({
      ...activity,

      [e.target.id]: isNumberField ? parseInt(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  return (
    <form
      className=" space-y-5 bg-white shadow p-10 rounded"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className=" font-bold">
          Categoria:
        </label>
        <select
          name="category"
          id="category"
          className=" border border-slate-300 p-2 rounded-lg"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>

        <input
          type="text"
          name="Actividad"
          id="name"
          className="  border rounded-lg border-slate-300 p-2"
          placeholder="Ej. Comida,Jugo de naranja, Ensalada, Ejercicio,Pesas,Bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>

        <input
          type="number"
          name="Calorias"
          id="calories"
          className="  border rounded-lg border-slate-300 p-2"
          placeholder="Calorias Ej. 300 o 500 "
          value={activity.calories}
          onChange={handleChange}
        />

        <input
          type="submit"
          value={
            activity.category === 1 ? "Guardar comida" : "Guardar ejercicio"
          }
          className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
          disabled={!isValidActivity()}
        />
      </div>
    </form>
  );
}
