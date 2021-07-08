import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, useFormState } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

import Button from "../Button";

type SearchFieldType = {
  onFormSubmit: (value: number) => void;
  isLoading: boolean;
};

const schema = yup.object().shape({
  numberToSearch: yup.number().positive().integer().required(),
});

const SearchField = ({ onFormSubmit, isLoading }: SearchFieldType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: { numberToSearch: number }) => {
    const { numberToSearch } = data;

    onFormSubmit(numberToSearch);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        {...register("numberToSearch")}
        maxLength={10}
        placeholder="Enter any number"
      />
      <Button type="submit" disabled={isLoading} title="Search" />
      {errors.numberToSearch && <Error>Please, input number to search</Error>}
    </Form>
  );
};

const Form = styled.form`
  margin: 10px;
`;

const InputField = styled.input`
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    #56ab2f 0%,
    rgb(168, 224, 99) 51%,
    #56ab2f 100%
  );
  background-repeat: no-repeat;
  background-position: 0 calc(100% + 3px), 0 0;
  background-size: 100% 3px;
  box-shadow: none;
  border: 0;
  border-bottom: 2px solid #575757;
  color: #333;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  line-height: 1.5;
  outline: 0 none;
  padding: 0.25rem 0;
  transition: border-color 0.2s linear;
  width: 300px;

  &:hover,
  &:focus {
    border-color: transparent;
  }

  &::placeholder {
    color: #6194499b;
    font-style: italic;
  }
`;

const Error = styled.p`
  color: #b60201;
  font-size: 12px;
`;

export default SearchField;
