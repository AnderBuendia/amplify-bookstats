/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      name
      author
      pages
      status
      read_pages
      rating
      image
      review
      username
      updatedAt
      createdAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        author
        pages
        status
        read_pages
        rating
        image
        review
        username
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const booksByUsername = /* GraphQL */ `
  query BooksByUsername(
    $username: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByUsername(
      username: $username
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        author
        pages
        status
        read_pages
        rating
        image
        review
        username
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
