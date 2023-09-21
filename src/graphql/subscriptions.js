/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContactForm = /* GraphQL */ `
  subscription OnCreateContactForm(
    $filter: ModelSubscriptionContactFormFilterInput
  ) {
    onCreateContactForm(filter: $filter) {
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
export const onUpdateContactForm = /* GraphQL */ `
  subscription OnUpdateContactForm(
    $filter: ModelSubscriptionContactFormFilterInput
  ) {
    onUpdateContactForm(filter: $filter) {
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
export const onDeleteContactForm = /* GraphQL */ `
  subscription OnDeleteContactForm(
    $filter: ModelSubscriptionContactFormFilterInput
  ) {
    onDeleteContactForm(filter: $filter) {
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
export const onCreateTour = /* GraphQL */ `
  subscription OnCreateTour($filter: ModelSubscriptionTourFilterInput) {
    onCreateTour(filter: $filter) {
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
export const onUpdateTour = /* GraphQL */ `
  subscription OnUpdateTour($filter: ModelSubscriptionTourFilterInput) {
    onUpdateTour(filter: $filter) {
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
export const onDeleteTour = /* GraphQL */ `
  subscription OnDeleteTour($filter: ModelSubscriptionTourFilterInput) {
    onDeleteTour(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
