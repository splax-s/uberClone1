/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
      owner
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        createdAt
        updatedAt
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
        }
      }
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
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
        username
        email
        createdAt
        updatedAt
        owner
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      createdAt
      updatedAt
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
      }
      owner
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        createdAt
        updatedAt
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      carId
      updatedAt
      user {
        id
        username
        email
        createdAt
        updatedAt
        owner
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        orders {
          nextToken
        }
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        createdAt
        updatedAt
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
        }
      }
      owner
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
        createdAt
        type
        status
        originLatitude
        oreiginLongitude
        destLatitude
        destLongitude
        userId
        carId
        updatedAt
        user {
          id
          username
          email
          createdAt
          updatedAt
          owner
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
