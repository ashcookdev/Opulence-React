/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateBookings = /* GraphQL */ `
  subscription OnCreateBookings($filter: ModelSubscriptionBookingsFilterInput) {
    onCreateBookings(filter: $filter) {
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
export const onUpdateBookings = /* GraphQL */ `
  subscription OnUpdateBookings($filter: ModelSubscriptionBookingsFilterInput) {
    onUpdateBookings(filter: $filter) {
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
export const onDeleteBookings = /* GraphQL */ `
  subscription OnDeleteBookings($filter: ModelSubscriptionBookingsFilterInput) {
    onDeleteBookings(filter: $filter) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
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
