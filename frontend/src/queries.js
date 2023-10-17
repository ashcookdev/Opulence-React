/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Location
        Time
        Date
        Available
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookings = /* GraphQL */ `
  query GetBookings($id: ID!) {
    getBookings(id: $id) {
      id
      Name
      Email
      Location
      Time
      Paid
      Price
      Treatment
      Telephone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Email
        Location
        Time
        Paid
        Price
        Treatment
        Telephone
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;


export const CreateLocation = /* GraphQL */ `
  mutation CreateLocation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      id
      Location
      Time
      Date
      Available
    }
  }
`;

export const UpdateLocation = /* GraphQL */ `
  mutation UpdateLocation($input: UpdateLocationInput!) {
    updateLocation(input: $input) {
      id
      Location
      Time
      Date
      Available
    }
  }
`;

export const DeleteLocation = /* GraphQL */ `
  mutation DeleteLocation($input: DeleteLocationInput!) {
    deleteLocation(input: $input) {
      id
      Location
      Time
      Date
      Available
    }
  }
`;

export const CreateBookings = /* GraphQL */ `
  mutation CreateBookings($input: CreateBookingsInput!) {
    createBookings(input: $input) {
      id
      Name
      Email
      Location
      Time
      Paid
      Price
      Treatment
    }
  }
`;

export const UpdateBookings = /* GraphQL */ `
  mutation UpdateBookings($input: UpdateBookingsInput!) {
    updateBookings(input: $input) {
      id
      Name
      Email
      Location
      Time
      Paid
      Price
      Treatment
    }
  }
`;

export const DeleteBookings = /* GraphQL */ `
  mutation DeleteBookings($input: DeleteBookingsInput!) {
    deleteBookings(input: $input) {
      id
      Name
      Email
      Location
      Time
      Paid
      Price
      Treatment
    }
  }
`;

export const CreateProducts = /* GraphQL */ `
  mutation CreateProducts($input: CreateProductsInput!) {
    createProducts(input: $input) {
      id
      Category
      Name
      Price
      StripeID
      ImageSrc
      href
    }
  }
`;

export const UpdateProducts = /* GraphQL */ `
  mutation UpdateProducts($input: UpdateProductsInput!) {
    updateProducts(input: $input) {
      id
      Category
      Name
      Price
      StripeID
      ImageSrc
      href
    }
  }
`;

export const DeleteProducts = /* GraphQL */ `
  mutation DeleteProducts($input: DeleteProductsInput!) {
    deleteProducts(input: $input) {
      id
      Category
      Name
      Price
      StripeID
      ImageSrc
      href
    }
  }
`;



