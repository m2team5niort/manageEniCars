/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      name
      description
      modele
      places
      createdAt
      updatedAt
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      name
      description
      modele
      places
      createdAt
      updatedAt
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      name
      description
      modele
      places
      createdAt
      updatedAt
    }
  }
`;
export const createModel = /* GraphQL */ `
  mutation CreateModel(
    $input: CreateModelInput!
    $condition: ModelModelConditionInput
  ) {
    createModel(input: $input, condition: $condition) {
      id
      name
      brand
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateModel = /* GraphQL */ `
  mutation UpdateModel(
    $input: UpdateModelInput!
    $condition: ModelModelConditionInput
  ) {
    updateModel(input: $input, condition: $condition) {
      id
      name
      brand
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteModel = /* GraphQL */ `
  mutation DeleteModel(
    $input: DeleteModelInput!
    $condition: ModelModelConditionInput
  ) {
    deleteModel(input: $input, condition: $condition) {
      id
      name
      brand
      image
      description
      createdAt
      updatedAt
    }
  }
`;
