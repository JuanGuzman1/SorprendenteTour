/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Float!) {
    createPaymentIntent(amount: $amount) {
      id
      status
      __typename
    }
  }
`;
export const capturePayment = /* GraphQL */ `
  mutation CapturePayment($orderId: String!) {
    capturePayment(orderId: $orderId) {
      data
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createTour4x4 = /* GraphQL */ `
  mutation CreateTour4x4(
    $input: CreateTour4x4Input!
    $condition: ModelTour4x4ConditionInput
  ) {
    createTour4x4(input: $input, condition: $condition) {
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
export const updateTour4x4 = /* GraphQL */ `
  mutation UpdateTour4x4(
    $input: UpdateTour4x4Input!
    $condition: ModelTour4x4ConditionInput
  ) {
    updateTour4x4(input: $input, condition: $condition) {
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
export const deleteTour4x4 = /* GraphQL */ `
  mutation DeleteTour4x4(
    $input: DeleteTour4x4Input!
    $condition: ModelTour4x4ConditionInput
  ) {
    deleteTour4x4(input: $input, condition: $condition) {
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
