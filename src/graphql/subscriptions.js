/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateBookId = /* GraphQL */ `
  subscription OnUpdateBookId($id: ID) {
    onUpdateBookId(id: $id) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($username: String) {
    onCreateBook(username: $username) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($username: String) {
    onUpdateBook(username: $username) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($username: String) {
    onDeleteBook(username: $username) {
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
