/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** An object with globally unique ID */
export type Node = {
  /** A globally unique identifier */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** 本の著者 */
export type Author = Node & {
  __typename?: 'author';
  /** An array relationship */
  books: Array<Book>;
  /** An aggregate relationship */
  books_aggregate: Book_Aggregate;
  /** An array relationship connection */
  books_connection: BookConnection;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};


/** 本の著者 */
export type AuthorBooksArgs = {
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


/** 本の著者 */
export type AuthorBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


/** 本の著者 */
export type AuthorBooks_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};

/** A Relay connection object on "author" */
export type AuthorConnection = {
  __typename?: 'authorConnection';
  edges: Array<AuthorEdge>;
  pageInfo: PageInfo;
};

export type AuthorEdge = {
  __typename?: 'authorEdge';
  cursor: Scalars['String'];
  node: Author;
};

/** Boolean expression to filter rows from the table "author". All fields are combined with a logical 'AND'. */
export type Author_Bool_Exp = {
  _and?: InputMaybe<Array<Author_Bool_Exp>>;
  _not?: InputMaybe<Author_Bool_Exp>;
  _or?: InputMaybe<Array<Author_Bool_Exp>>;
  books?: InputMaybe<Book_Bool_Exp>;
  books_aggregate?: InputMaybe<Book_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "author" */
export enum Author_Constraint {
  /** unique or primary key constraint on columns "email" */
  AuthorDescriptionKey = 'author_description_key',
  /** unique or primary key constraint on columns "id" */
  AuthorPkey = 'author_pkey'
}

/** input type for inserting data into table "author" */
export type Author_Insert_Input = {
  books?: InputMaybe<Book_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "author" */
export type Author_Mutation_Response = {
  __typename?: 'author_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Author>;
};

/** input type for inserting object relation for remote table "author" */
export type Author_Obj_Rel_Insert_Input = {
  data: Author_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Author_On_Conflict>;
};

/** on_conflict condition type for table "author" */
export type Author_On_Conflict = {
  constraint: Author_Constraint;
  update_columns?: Array<Author_Update_Column>;
  where?: InputMaybe<Author_Bool_Exp>;
};

/** Ordering options when selecting data from "author". */
export type Author_Order_By = {
  books_aggregate?: InputMaybe<Book_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: author */
export type Author_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "author" */
export enum Author_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "author" */
export type Author_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "author" */
export enum Author_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Author_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Author_Set_Input>;
  /** filter the rows which have to be updated */
  where: Author_Bool_Exp;
};

/** 本 */
export type Book = Node & {
  __typename?: 'book';
  /** An object relationship */
  author: Author;
  author_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** A Relay connection object on "book" */
export type BookConnection = {
  __typename?: 'bookConnection';
  edges: Array<BookEdge>;
  pageInfo: PageInfo;
};

export type BookEdge = {
  __typename?: 'bookEdge';
  cursor: Scalars['String'];
  node: Book;
};

/** aggregated selection of "book" */
export type Book_Aggregate = {
  __typename?: 'book_aggregate';
  aggregate?: Maybe<Book_Aggregate_Fields>;
  nodes: Array<Book>;
};

export type Book_Aggregate_Bool_Exp = {
  count?: InputMaybe<Book_Aggregate_Bool_Exp_Count>;
};

export type Book_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Book_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Book_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "book" */
export type Book_Aggregate_Fields = {
  __typename?: 'book_aggregate_fields';
  avg?: Maybe<Book_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Book_Max_Fields>;
  min?: Maybe<Book_Min_Fields>;
  stddev?: Maybe<Book_Stddev_Fields>;
  stddev_pop?: Maybe<Book_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Book_Stddev_Samp_Fields>;
  sum?: Maybe<Book_Sum_Fields>;
  var_pop?: Maybe<Book_Var_Pop_Fields>;
  var_samp?: Maybe<Book_Var_Samp_Fields>;
  variance?: Maybe<Book_Variance_Fields>;
};


/** aggregate fields of "book" */
export type Book_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "book" */
export type Book_Aggregate_Order_By = {
  avg?: InputMaybe<Book_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Book_Max_Order_By>;
  min?: InputMaybe<Book_Min_Order_By>;
  stddev?: InputMaybe<Book_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Book_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Book_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Book_Sum_Order_By>;
  var_pop?: InputMaybe<Book_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Book_Var_Samp_Order_By>;
  variance?: InputMaybe<Book_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "book" */
export type Book_Arr_Rel_Insert_Input = {
  data: Array<Book_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Book_On_Conflict>;
};

/** aggregate avg on columns */
export type Book_Avg_Fields = {
  __typename?: 'book_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "book" */
export type Book_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "book". All fields are combined with a logical 'AND'. */
export type Book_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Bool_Exp>>;
  _not?: InputMaybe<Book_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Bool_Exp>>;
  author?: InputMaybe<Author_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "book" */
export enum Book_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookPkey = 'book_pkey'
}

/** input type for incrementing numeric columns in table "book" */
export type Book_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "book" */
export type Book_Insert_Input = {
  author?: InputMaybe<Author_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Book_Max_Fields = {
  __typename?: 'book_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "book" */
export type Book_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Book_Min_Fields = {
  __typename?: 'book_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "book" */
export type Book_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "book" */
export type Book_Mutation_Response = {
  __typename?: 'book_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Book>;
};

/** on_conflict condition type for table "book" */
export type Book_On_Conflict = {
  constraint: Book_Constraint;
  update_columns?: Array<Book_Update_Column>;
  where?: InputMaybe<Book_Bool_Exp>;
};

/** Ordering options when selecting data from "book". */
export type Book_Order_By = {
  author?: InputMaybe<Author_Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: book */
export type Book_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "book" */
export enum Book_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "book" */
export type Book_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Book_Stddev_Fields = {
  __typename?: 'book_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "book" */
export type Book_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Book_Stddev_Pop_Fields = {
  __typename?: 'book_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "book" */
export type Book_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Book_Stddev_Samp_Fields = {
  __typename?: 'book_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "book" */
export type Book_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Book_Sum_Fields = {
  __typename?: 'book_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "book" */
export type Book_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "book" */
export enum Book_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Book_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Book_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Book_Set_Input>;
  /** filter the rows which have to be updated */
  where: Book_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Book_Var_Pop_Fields = {
  __typename?: 'book_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "book" */
export type Book_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Book_Var_Samp_Fields = {
  __typename?: 'book_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "book" */
export type Book_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Book_Variance_Fields = {
  __typename?: 'book_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "book" */
export type Book_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "author" */
  delete_author?: Maybe<Author_Mutation_Response>;
  /** delete single row from the table: "author" */
  delete_author_by_pk?: Maybe<Author>;
  /** delete data from the table: "book" */
  delete_book?: Maybe<Book_Mutation_Response>;
  /** delete single row from the table: "book" */
  delete_book_by_pk?: Maybe<Book>;
  /** insert data into the table: "author" */
  insert_author?: Maybe<Author_Mutation_Response>;
  /** insert a single row into the table: "author" */
  insert_author_one?: Maybe<Author>;
  /** insert data into the table: "book" */
  insert_book?: Maybe<Book_Mutation_Response>;
  /** insert a single row into the table: "book" */
  insert_book_one?: Maybe<Book>;
  /** update data of the table: "author" */
  update_author?: Maybe<Author_Mutation_Response>;
  /** update single row of the table: "author" */
  update_author_by_pk?: Maybe<Author>;
  /** update multiples rows of table: "author" */
  update_author_many?: Maybe<Array<Maybe<Author_Mutation_Response>>>;
  /** update data of the table: "book" */
  update_book?: Maybe<Book_Mutation_Response>;
  /** update single row of the table: "book" */
  update_book_by_pk?: Maybe<Book>;
  /** update multiples rows of table: "book" */
  update_book_many?: Maybe<Array<Maybe<Book_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AuthorArgs = {
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Author_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BookArgs = {
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Book_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AuthorArgs = {
  objects: Array<Author_Insert_Input>;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Author_OneArgs = {
  object: Author_Insert_Input;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BookArgs = {
  objects: Array<Book_Insert_Input>;
  on_conflict?: InputMaybe<Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_OneArgs = {
  object: Book_Insert_Input;
  on_conflict?: InputMaybe<Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorArgs = {
  _set?: InputMaybe<Author_Set_Input>;
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_By_PkArgs = {
  _set?: InputMaybe<Author_Set_Input>;
  pk_columns: Author_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Author_ManyArgs = {
  updates: Array<Author_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BookArgs = {
  _inc?: InputMaybe<Book_Inc_Input>;
  _set?: InputMaybe<Book_Set_Input>;
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Book_By_PkArgs = {
  _inc?: InputMaybe<Book_Inc_Input>;
  _set?: InputMaybe<Book_Set_Input>;
  pk_columns: Book_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Book_ManyArgs = {
  updates: Array<Book_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "author" */
  author_connection: AuthorConnection;
  /** fetch data from the table: "book" */
  book_connection: BookConnection;
  node?: Maybe<Node>;
};


export type Query_RootAuthor_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Query_RootBook_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "author" */
  author_connection: AuthorConnection;
  /** fetch data from the table: "book" */
  book_connection: BookConnection;
  node?: Maybe<Node>;
};


export type Subscription_RootAuthor_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Subscription_RootBook_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


export type Subscription_RootNodeArgs = {
  id: Scalars['ID'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAuthorConnectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorConnectionsQuery = { __typename?: 'query_root', author_connection: { __typename?: 'authorConnection', edges: Array<{ __typename?: 'authorEdge', cursor: string, node: { __typename?: 'author', email: string, id: string, name: string, books: Array<{ __typename?: 'book', description?: string | null, id: string, title: string }> } }> } };

export type CreateAuthorMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateAuthorMutation = { __typename?: 'mutation_root', insert_author?: { __typename?: 'author_mutation_response', returning: Array<{ __typename?: 'author', id: string, name: string, email: string }> } | null };

export type UpdateAuthorMutationVariables = Exact<{
  id: Scalars['uuid'];
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type UpdateAuthorMutation = { __typename?: 'mutation_root', update_author?: { __typename?: 'author_mutation_response', returning: Array<{ __typename?: 'author', id: string, name: string, email: string }> } | null };

export type GetBookConnectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookConnectionsQuery = { __typename?: 'query_root', book_connection: { __typename?: 'bookConnection', edges: Array<{ __typename?: 'bookEdge', cursor: string, node: { __typename?: 'book', author_id: any, created_at: any, description?: string | null, id: string, title: string, updated_at?: any | null, author: { __typename?: 'author', name: string, id: string, email: string } } }> } };


export const GetAuthorConnectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthorConnections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author_connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAuthorConnectionsQuery, GetAuthorConnectionsQueryVariables>;
export const CreateAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const UpdateAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAuthorMutation, UpdateAuthorMutationVariables>;
export const GetBookConnectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBookConnections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book_connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBookConnectionsQuery, GetBookConnectionsQueryVariables>;