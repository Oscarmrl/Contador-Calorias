export type Category = {
  id: number;
  name: string;
};

export type Activity = {
  category: number;
  name: string;
  calories: number;
};
