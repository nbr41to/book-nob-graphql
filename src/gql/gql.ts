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
    "\n  fragment AuthorTable on author {\n    id\n    name\n    email\n    books {\n      id\n      title\n      description\n    }\n  }\n": types.AuthorTableFragmentDoc,
    "\n  fragment AuthorOption on author {\n    id\n    name\n  }\n": types.AuthorOptionFragmentDoc,
    "\n  fragment BookTable on book {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n": types.BookTableFragmentDoc,
    "\n  mutation DeleteBook($id: Int!) {\n    delete_book(where: { id: { _eq: $id } }) {\n      returning {\n        id\n        title\n        description\n        author_id\n      }\n    }\n  }\n": types.DeleteBookDocument,
    "\n  fragment BookTitle on book {\n    id\n    title\n  }\n": types.BookTitleFragmentDoc,
    "\n  mutation CreateBook(\n    $title: String!\n    $description: String\n    $author_id: uuid!\n  ) {\n    insert_book(\n      objects: {\n        title: $title\n        description: $description\n        author_id: $author_id\n      }\n    ) {\n      returning {\n        id\n        title\n        description\n        author_id\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.CreateBookDocument,
    "\n  mutation UpdateBook(\n    $id: Int!\n    $title: String!\n    $description: String\n    $author_id: uuid!\n  ) {\n    update_book(\n      where: { id: { _eq: $id } }\n      _set: { title: $title, description: $description, author_id: $author_id }\n    ) {\n      returning {\n        id\n        title\n        description\n        author_id\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.UpdateBookDocument,
    "\n  query GetAuthorOptions {\n    author_connection {\n      edges {\n        cursor\n        node {\n          ...AuthorOption\n        }\n      }\n    }\n  }\n": types.GetAuthorOptionsDocument,
    "\n  query GetBookConnections {\n    book_connection {\n      edges {\n        cursor\n        node {\n          ...BookTable\n        }\n      }\n    }\n  }\n": types.GetBookConnectionsDocument,
    "\n  mutation CreateAuthor($name: String!, $email: String!) {\n    insert_author(objects: { name: $name, email: $email }) {\n      returning {\n        id\n        name\n        email\n      }\n    }\n  }\n": types.CreateAuthorDocument,
    "\n  mutation DeleteAuthor($id: uuid!) {\n    delete_author(where: { id: { _eq: $id } }) {\n      returning {\n        id\n      }\n    }\n  }\n": types.DeleteAuthorDocument,
    "\n  query GetAuthorConnections {\n    author_connection {\n      edges {\n        cursor\n        node {\n          ...AuthorTable\n        }\n      }\n    }\n  }\n": types.GetAuthorConnectionsDocument,
    "\n  mutation UpdateAuthor($id: uuid!, $name: String!, $email: String!) {\n    update_author(\n      where: { id: { _eq: $id } }\n      _set: { name: $name, email: $email }\n    ) {\n      returning {\n        id\n        name\n        email\n      }\n    }\n  }\n": types.UpdateAuthorDocument,
    "\n  query GetBookTitles {\n    book_connection {\n      edges {\n        cursor\n        node {\n          ...BookTitle\n        }\n      }\n    }\n  }\n": types.GetBookTitlesDocument,
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
export function graphql(source: "\n  fragment AuthorTable on author {\n    id\n    name\n    email\n    books {\n      id\n      title\n      description\n    }\n  }\n"): (typeof documents)["\n  fragment AuthorTable on author {\n    id\n    name\n    email\n    books {\n      id\n      title\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AuthorOption on author {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment AuthorOption on author {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BookTable on book {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment BookTable on book {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteBook($id: Int!) {\n    delete_book(where: { id: { _eq: $id } }) {\n      returning {\n        id\n        title\n        description\n        author_id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteBook($id: Int!) {\n    delete_book(where: { id: { _eq: $id } }) {\n      returning {\n        id\n        title\n        description\n        author_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BookTitle on book {\n    id\n    title\n  }\n"): (typeof documents)["\n  fragment BookTitle on book {\n    id\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBook(\n    $title: String!\n    $description: String\n    $author_id: uuid!\n  ) {\n    insert_book(\n      objects: {\n        title: $title\n        description: $description\n        author_id: $author_id\n      }\n    ) {\n      returning {\n        id\n        title\n        description\n        author_id\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBook(\n    $title: String!\n    $description: String\n    $author_id: uuid!\n  ) {\n    insert_book(\n      objects: {\n        title: $title\n        description: $description\n        author_id: $author_id\n      }\n    ) {\n      returning {\n        id\n        title\n        description\n        author_id\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBook(\n    $id: Int!\n    $title: String!\n    $description: String\n    $author_id: uuid!\n  ) {\n    update_book(\n      where: { id: { _eq: $id } }\n      _set: { title: $title, description: $description, author_id: $author_id }\n    ) {\n      returning {\n        id\n        title\n        description\n        author_id\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBook(\n    $id: Int!\n    $title: String!\n    $description: String\n    $author_id: uuid!\n  ) {\n    update_book(\n      where: { id: { _eq: $id } }\n      _set: { title: $title, description: $description, author_id: $author_id }\n    ) {\n      returning {\n        id\n        title\n        description\n        author_id\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAuthorOptions {\n    author_connection {\n      edges {\n        cursor\n        node {\n          ...AuthorOption\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAuthorOptions {\n    author_connection {\n      edges {\n        cursor\n        node {\n          ...AuthorOption\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBookConnections {\n    book_connection {\n      edges {\n        cursor\n        node {\n          ...BookTable\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBookConnections {\n    book_connection {\n      edges {\n        cursor\n        node {\n          ...BookTable\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAuthor($name: String!, $email: String!) {\n    insert_author(objects: { name: $name, email: $email }) {\n      returning {\n        id\n        name\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAuthor($name: String!, $email: String!) {\n    insert_author(objects: { name: $name, email: $email }) {\n      returning {\n        id\n        name\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteAuthor($id: uuid!) {\n    delete_author(where: { id: { _eq: $id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAuthor($id: uuid!) {\n    delete_author(where: { id: { _eq: $id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAuthorConnections {\n    author_connection {\n      edges {\n        cursor\n        node {\n          ...AuthorTable\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAuthorConnections {\n    author_connection {\n      edges {\n        cursor\n        node {\n          ...AuthorTable\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAuthor($id: uuid!, $name: String!, $email: String!) {\n    update_author(\n      where: { id: { _eq: $id } }\n      _set: { name: $name, email: $email }\n    ) {\n      returning {\n        id\n        name\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAuthor($id: uuid!, $name: String!, $email: String!) {\n    update_author(\n      where: { id: { _eq: $id } }\n      _set: { name: $name, email: $email }\n    ) {\n      returning {\n        id\n        name\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBookTitles {\n    book_connection {\n      edges {\n        cursor\n        node {\n          ...BookTitle\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBookTitles {\n    book_connection {\n      edges {\n        cursor\n        node {\n          ...BookTitle\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;