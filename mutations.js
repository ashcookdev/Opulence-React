/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      Location
      Time
      Date
      Available
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      Location
      Time
      Date
      Available
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      Location
      Time
      Date
      Available
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBookings = /* GraphQL */ `
  mutation CreateBookings(
    $input: CreateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    createBookings(input: $input, condition: $condition) {
      id
      Name
      Email
      Location
      Time
      Paid
      Price
      Treatment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBookings = /* GraphQL */ `
  mutation UpdateBookings(
    $input: UpdateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    updateBookings(input: $input, condition: $condition) {
      id
      Name
      Email
      Location
      Time
      Paid
      Price
      Treatment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBookings = /* GraphQL */ `
  mutation DeleteBookings(
    $input: DeleteBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    deleteBookings(input: $input, condition: $condition) {
      id
      Name
      Email
      Location
      Time
      Paid
      Price
      Treatment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      Category
      Name
      Price
      StripeID
      ImageSrc
      href
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      Category
      Name
      Price
      StripeID
      ImageSrc
      href
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      Category
      Name
      Price
      StripeID
      ImageSrc
      href
      createdAt
      updatedAt
      __typename
    }
  }
`;
