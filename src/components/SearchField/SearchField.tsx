import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CharacterService from "../../services/CharacterService";

const schema = yup.object().shape({
  numberToSearch: yup.number().positive().integer().required(),
});

const SearchField = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: { numberToSearch: number }) => {
    const { numberToSearch } = data;
    CharacterService.getById(numberToSearch);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("numberToSearch")} />
      {errors.numberToSearch && "Please, input number to search"}

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchField;
