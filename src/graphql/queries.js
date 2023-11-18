/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cart
        total
        status
        createdAt
        updatedAt
        orderUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBundle = /* GraphQL */ `
  query GetBundle($id: ID!) {
    getBundle(id: $id) {
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
export const listBundles = /* GraphQL */ `
  query ListBundles(
    $filter: ModelBundleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBundles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getContactForm = /* GraphQL */ `
  query GetContactForm($id: ID!) {
    getContactForm(id: $id) {
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
export const listContactForms = /* GraphQL */ `
  query ListContactForms(
    $filter: ModelContactFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTour = /* GraphQL */ `
  query GetTour($id: ID!) {
    getTour(id: $id) {
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
export const listTours = /* GraphQL */ `
  query ListTours(
    $filter: ModelTourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pppValles
        pppXilitla
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTour4x4 = /* GraphQL */ `
  query GetTour4x4($id: ID!) {
    getTour4x4(id: $id) {
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
export const listTour4x4s = /* GraphQL */ `
  query ListTour4x4s(
    $filter: ModelTour4x4FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTour4x4s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        phone
        role
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
