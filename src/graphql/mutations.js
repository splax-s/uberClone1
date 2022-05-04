/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
