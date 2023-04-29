/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetAuthorConnections {\n  author_connection {\n    edges {\n      cursor\n      node {\n        email\n        id\n        name\n        books {\n          description\n          id\n          title\n        }\n      }\n    }\n  }\n}\n\nmutation CreateAuthor($name: String!, $email: String!) {\n  insert_author(objects: {name: $name, email: $email}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation UpdateAuthor($id: uuid!, $name: String!, $email: String!) {\n  update_author(where: {id: {_eq: $id}}, _set: {name: $name, email: $email}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation DeleteAuthor($id: uuid!) {\n  delete_author(where: {id: {_eq: $id}}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}": types.GetAuthorConnectionsDocument,
    "query GetBookConnections {\n  book_connection {\n    edges {\n      cursor\n      node {\n        author_id\n        created_at\n        description\n        id\n        title\n        updated_at\n        author {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n\nmutation CreateBook($title: String!, $description: String, $author_id: uuid!) {\n  insert_book(\n    objects: {title: $title, description: $description, author_id: $author_id}\n  ) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}\n\nmutation UpdateBook($id: Int!, $title: String!, $description: String, $author_id: uuid!) {\n  update_book(\n    where: {id: {_eq: $id}}\n    _set: {title: $title, description: $description, author_id: $author_id}\n  ) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}\n\nmutation DeleteBook($id: Int!) {\n  delete_book(where: {id: {_eq: $id}}) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}": types.GetBookConnectionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAuthorConnections {\n  author_connection {\n    edges {\n      cursor\n      node {\n        email\n        id\n        name\n        books {\n          description\n          id\n          title\n        }\n      }\n    }\n  }\n}\n\nmutation CreateAuthor($name: String!, $email: String!) {\n  insert_author(objects: {name: $name, email: $email}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation UpdateAuthor($id: uuid!, $name: String!, $email: String!) {\n  update_author(where: {id: {_eq: $id}}, _set: {name: $name, email: $email}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation DeleteAuthor($id: uuid!) {\n  delete_author(where: {id: {_eq: $id}}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}"): (typeof documents)["query GetAuthorConnections {\n  author_connection {\n    edges {\n      cursor\n      node {\n        email\n        id\n        name\n        books {\n          description\n          id\n          title\n        }\n      }\n    }\n  }\n}\n\nmutation CreateAuthor($name: String!, $email: String!) {\n  insert_author(objects: {name: $name, email: $email}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation UpdateAuthor($id: uuid!, $name: String!, $email: String!) {\n  update_author(where: {id: {_eq: $id}}, _set: {name: $name, email: $email}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation DeleteAuthor($id: uuid!) {\n  delete_author(where: {id: {_eq: $id}}) {\n    returning {\n      id\n      name\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetBookConnections {\n  book_connection {\n    edges {\n      cursor\n      node {\n        author_id\n        created_at\n        description\n        id\n        title\n        updated_at\n        author {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n\nmutation CreateBook($title: String!, $description: String, $author_id: uuid!) {\n  insert_book(\n    objects: {title: $title, description: $description, author_id: $author_id}\n  ) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}\n\nmutation UpdateBook($id: Int!, $title: String!, $description: String, $author_id: uuid!) {\n  update_book(\n    where: {id: {_eq: $id}}\n    _set: {title: $title, description: $description, author_id: $author_id}\n  ) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}\n\nmutation DeleteBook($id: Int!) {\n  delete_book(where: {id: {_eq: $id}}) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query GetBookConnections {\n  book_connection {\n    edges {\n      cursor\n      node {\n        author_id\n        created_at\n        description\n        id\n        title\n        updated_at\n        author {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n\nmutation CreateBook($title: String!, $description: String, $author_id: uuid!) {\n  insert_book(\n    objects: {title: $title, description: $description, author_id: $author_id}\n  ) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}\n\nmutation UpdateBook($id: Int!, $title: String!, $description: String, $author_id: uuid!) {\n  update_book(\n    where: {id: {_eq: $id}}\n    _set: {title: $title, description: $description, author_id: $author_id}\n  ) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}\n\nmutation DeleteBook($id: Int!) {\n  delete_book(where: {id: {_eq: $id}}) {\n    returning {\n      id\n      title\n      description\n      author_id\n      author {\n        id\n        name\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;