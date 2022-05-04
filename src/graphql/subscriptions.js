/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
