const KEY = "mini-habits";

export const loadHabits = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? [];
  } catch {
    return [];
  }
};

export const saveHabits = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};
