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
        User {
          id
          name
          email
          phone
        }
      }
      nextToken
      __typename
    }
  }
`;
