import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  return { form, onChange };
};

export default useForm;
