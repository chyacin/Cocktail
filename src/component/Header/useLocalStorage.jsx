import { useState } from 'react';

const useLocalStorage = (itemName, initialValue) => {
  const stored = localStorage.getItem(itemName);
  const initial = stored ? JSON.parse(stored) : initialValue;
  const [value, setValue] = useState(initial);
  return [value, (newValue) => {
    localStorage.setItem(itemName, JSON.stringify(newValue));
    setValue(newValue);
  }];
};

export default useLocalStorage;
