/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      cart
      total
      status
      User {
        id
        email
        name
        phone
        role
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      orderUserId
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      cart
      total
      status
      User {
        id
        email
        name
        phone
        role
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      orderUserId
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      cart
      total
      status
      User {
        id
        email
        name
        phone
        role
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      orderUserId
      __typename
    }
  }
`;
export const onCreateBundle = /* GraphQL */ `
  subscription OnCreateBundle($filter: ModelSubscriptionBundleFilterInput) {
    onCreateBundle(filter: $filter) {
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
export const onUpdateBundle = /* GraphQL */ `
  subscription OnUpdateBundle($filter: ModelSubscriptionBundleFilterInput) {
    onUpdateBundle(filter: $filter) {
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
export const onDeleteBundle = /* GraphQL */ `
  subscription OnDeleteBundle($filter: ModelSubscriptionBundleFilterInput) {
    onDeleteBundle(filter: $filter) {
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
export const onCreateTour4x4 = /* GraphQL */ `
  subscription OnCreateTour4x4($filter: ModelSubscriptionTour4x4FilterInput) {
    onCreateTour4x4(filter: $filter) {
      id
      name
      quad
      u2p
      rzr900
      maverickX3
      defender
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTour4x4 = /* GraphQL */ `
  subscription OnUpdateTour4x4($filter: ModelSubscriptionTour4x4FilterInput) {
    onUpdateTour4x4(filter: $filter) {
      id
      name
      quad
      u2p
      rzr900
      maverickX3
      defender
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTour4x4 = /* GraphQL */ `
  subscription OnDeleteTour4x4($filter: ModelSubscriptionTour4x4FilterInput) {
    onDeleteTour4x4(filter: $filter) {
      id
      name
      quad
      u2p
      rzr900
      maverickX3
      defender
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
