/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBundle = /* GraphQL */ `
  mutation CreateBundle(
    $input: CreateBundleInput!
    $condition: ModelBundleConditionInput
  ) {
    createBundle(input: $input, condition: $condition) {
      id
      name
      p2pXilitla
      p3pXilitla
      p4pXilitla
      p5pXilitla
      p2pValles
      p3pValles
      p4pValles
      p5pValles
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBundle = /* GraphQL */ `
  mutation UpdateBundle(
    $input: UpdateBundleInput!
    $condition: ModelBundleConditionInput
  ) {
    updateBundle(input: $input, condition: $condition) {
      id
      name
      p2pXilitla
      p3pXilitla
      p4pXilitla
      p5pXilitla
      p2pValles
      p3pValles
      p4pValles
      p5pValles
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBundle = /* GraphQL */ `
  mutation DeleteBundle(
    $input: DeleteBundleInput!
    $condition: ModelBundleConditionInput
  ) {
    deleteBundle(input: $input, condition: $condition) {
      id
      name
      p2pXilitla
      p3pXilitla
      p4pXilitla
      p5pXilitla
      p2pValles
      p3pValles
      p4pValles
      p5pValles
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContactForm = /* GraphQL */ `
  mutation CreateContactForm(
    $input: CreateContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    createContactForm(input: $input, condition: $condition) {
      id
      name
      email
      phone
      phoneType
      subject
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContactForm = /* GraphQL */ `
  mutation UpdateContactForm(
    $input: UpdateContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    updateContactForm(input: $input, condition: $condition) {
      id
      name
      email
      phone
      phoneType
      subject
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContactForm = /* GraphQL */ `
  mutation DeleteContactForm(
    $input: DeleteContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    deleteContactForm(input: $input, condition: $condition) {
      id
      name
      email
      phone
      phoneType
      subject
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTour = /* GraphQL */ `
  mutation CreateTour(
    $input: CreateTourInput!
    $condition: ModelTourConditionInput
  ) {
    createTour(input: $input, condition: $condition) {
      id
      name
      pppValles
      pppXilitla
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTour = /* GraphQL */ `
  mutation UpdateTour(
    $input: UpdateTourInput!
    $condition: ModelTourConditionInput
  ) {
    updateTour(input: $input, condition: $condition) {
      id
      name
      pppValles
      pppXilitla
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTour = /* GraphQL */ `
  mutation DeleteTour(
    $input: DeleteTourInput!
    $condition: ModelTourConditionInput
  ) {
    deleteTour(input: $input, condition: $condition) {
      id
      name
      pppValles
      pppXilitla
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      phone
      role
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      phone
      role
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      phone
      role
      createdAt
      updatedAt
      __typename
    }
  }
`;
