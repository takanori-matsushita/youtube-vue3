import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import type * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "videos" */
  delete_videos?: Maybe<Videos_Mutation_Response>;
  /** delete single row from the table: "videos" */
  delete_videos_by_pk?: Maybe<Videos>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "videos" */
  insert_videos?: Maybe<Videos_Mutation_Response>;
  /** insert a single row into the table: "videos" */
  insert_videos_one?: Maybe<Videos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "videos" */
  update_videos?: Maybe<Videos_Mutation_Response>;
  /** update single row of the table: "videos" */
  update_videos_by_pk?: Maybe<Videos>;
  /** update multiples rows of table: "videos" */
  update_videos_many?: Maybe<Array<Maybe<Videos_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Videos_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VideosArgs = {
  objects: Array<Videos_Insert_Input>;
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Videos_OneArgs = {
  object: Videos_Insert_Input;
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VideosArgs = {
  _inc?: InputMaybe<Videos_Inc_Input>;
  _set?: InputMaybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_By_PkArgs = {
  _inc?: InputMaybe<Videos_Inc_Input>;
  _set?: InputMaybe<Videos_Set_Input>;
  pk_columns: Videos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_ManyArgs = {
  updates: Array<Videos_Updates>;
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
  /** fetch data from the table in a streaming manner: "videos" */
  videos_stream: Array<Videos>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootVideos_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Videos_Stream_Cursor_Input>>;
  where?: InputMaybe<Videos_Bool_Exp>;
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile_photo_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile_photo_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  id: Scalars['String'];
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_id: Scalars['String'];
  thumbnail_url: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  video_url: Scalars['String'];
  views: Scalars['Int'];
};

/** aggregated selection of "videos" */
export type Videos_Aggregate = {
  __typename?: 'videos_aggregate';
  aggregate?: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_Fields = {
  __typename?: 'videos_aggregate_fields';
  avg?: Maybe<Videos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Videos_Max_Fields>;
  min?: Maybe<Videos_Min_Fields>;
  stddev?: Maybe<Videos_Stddev_Fields>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Fields>;
  sum?: Maybe<Videos_Sum_Fields>;
  var_pop?: Maybe<Videos_Var_Pop_Fields>;
  var_samp?: Maybe<Videos_Var_Samp_Fields>;
  variance?: Maybe<Videos_Variance_Fields>;
};


/** aggregate fields of "videos" */
export type Videos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Videos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Videos_Avg_Fields = {
  __typename?: 'videos_avg_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Videos_Bool_Exp>>;
  _not?: InputMaybe<Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Videos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
  thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  video_url?: InputMaybe<String_Comparison_Exp>;
  views?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint on columns "id" */
  VideosPkey = 'videos_pkey'
}

/** input type for incrementing numeric columns in table "videos" */
export type Videos_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['String']>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  video_url?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'videos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'videos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "videos" */
export type Videos_Mutation_Response = {
  __typename?: 'videos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Videos>;
};

/** on_conflict condition type for table "videos" */
export type Videos_On_Conflict = {
  constraint: Videos_Constraint;
  update_columns?: Array<Videos_Update_Column>;
  where?: InputMaybe<Videos_Bool_Exp>;
};

/** Ordering options when selecting data from "videos". */
export type Videos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_url?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** primary key columns input for table: videos */
export type Videos_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url',
  /** column name */
  Views = 'views'
}

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  video_url?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: 'videos_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: 'videos_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: 'videos_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "videos" */
export type Videos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Videos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Videos_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  video_url?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: 'videos_sum_fields';
  duration?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
};

/** update columns of table "videos" */
export enum Videos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url',
  /** column name */
  Views = 'views'
}

export type Videos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Videos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Videos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Videos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: 'videos_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: 'videos_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: 'videos_variance_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

export type InsertUserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: string, name: string, email: string, profile_photo_url?: string | null, created_at: any, updated_at: any } | null };

export type InsertVideoMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  thumbnail_url: Scalars['String'];
  video_url: Scalars['String'];
  owner_id: Scalars['String'];
}>;


export type InsertVideoMutation = { __typename?: 'mutation_root', insert_videos_one?: { __typename?: 'videos', id: string, title: string, description: string, video_url: string, thumbnail_url: string, owner_id: string, duration: number, views: number, updated_at: any, created_at: any } | null };

export type RecommendVideosQueryVariables = Exact<{
  currentVideoId: Scalars['String'];
}>;


export type RecommendVideosQuery = { __typename?: 'query_root', videos: Array<{ __typename?: 'videos', id: string, title: string, description: string, thumbnail_url: string, video_url: string, views: number, duration: number, created_at: any, updated_at: any, owner?: { __typename?: 'users', id: string, name: string, profile_photo_url?: string | null, updated_at: any, email: string, created_at: any } | null }> };

export type UserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, name: string, email: string, profile_photo_url?: string | null, updated_at: any, created_at: any } | null };

export type VideoByPkQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type VideoByPkQuery = { __typename?: 'query_root', videos_by_pk?: { __typename?: 'videos', id: string, title: string, thumbnail_url: string, video_url: string, views: number, duration: number, description: string, updated_at: any, created_at: any, owner?: { __typename?: 'users', id: string, name: string, profile_photo_url?: string | null, email: string, updated_at: any, created_at: any } | null } | null };

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = { __typename?: 'query_root', videos: Array<{ __typename?: 'videos', id: string, title: string, description: string, views: number, duration: number, video_url: string, thumbnail_url: string, created_at: any, updated_at: any, owner?: { __typename?: 'users', id: string, email: string, name: string, profile_photo_url?: string | null, updated_at: any, created_at: any } | null }> };


export const InsertUserDocument = gql`
    mutation InsertUser($id: String!, $name: String!, $email: String!) {
  insert_users_one(
    object: {id: $id, name: $name, email: $email, profile_photo_url: ""}
  ) {
    id
    name
    email
    profile_photo_url
    created_at
    updated_at
  }
}
    `;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertUserMutation({
 *   variables: {
 *     id: // value for 'id'
 *     name: // value for 'name'
 *     email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(options: VueApolloComposable.UseMutationOptions<InsertUserMutation, InsertUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<InsertUserMutation, InsertUserMutationVariables>>) {
  return VueApolloComposable.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
}
export type InsertUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<InsertUserMutation, InsertUserMutationVariables>;
export const InsertVideoDocument = gql`
    mutation InsertVideo($id: String!, $title: String!, $description: String = "", $thumbnail_url: String!, $video_url: String!, $owner_id: String!) {
  insert_videos_one(
    object: {id: $id, title: $title, description: $description, video_url: $video_url, thumbnail_url: $thumbnail_url, owner_id: $owner_id, duration: 0, views: 0}
  ) {
    id
    title
    description
    video_url
    thumbnail_url
    owner_id
    duration
    views
    updated_at
    created_at
  }
}
    `;

/**
 * __useInsertVideoMutation__
 *
 * To run a mutation, you first call `useInsertVideoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertVideoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertVideoMutation({
 *   variables: {
 *     id: // value for 'id'
 *     title: // value for 'title'
 *     description: // value for 'description'
 *     thumbnail_url: // value for 'thumbnail_url'
 *     video_url: // value for 'video_url'
 *     owner_id: // value for 'owner_id'
 *   },
 * });
 */
export function useInsertVideoMutation(options: VueApolloComposable.UseMutationOptions<InsertVideoMutation, InsertVideoMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<InsertVideoMutation, InsertVideoMutationVariables>>) {
  return VueApolloComposable.useMutation<InsertVideoMutation, InsertVideoMutationVariables>(InsertVideoDocument, options);
}
export type InsertVideoMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<InsertVideoMutation, InsertVideoMutationVariables>;
export const RecommendVideosDocument = gql`
    query RecommendVideos($currentVideoId: String!) {
  videos(where: {id: {_neq: $currentVideoId}}) {
    id
    title
    description
    thumbnail_url
    video_url
    views
    duration
    owner {
      id
      name
      profile_photo_url
      updated_at
      email
      created_at
    }
    created_at
    updated_at
  }
}
    `;

/**
 * __useRecommendVideosQuery__
 *
 * To run a query within a Vue component, call `useRecommendVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendVideosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRecommendVideosQuery({
 *   currentVideoId: // value for 'currentVideoId'
 * });
 */
export function useRecommendVideosQuery(variables: RecommendVideosQueryVariables | VueCompositionApi.Ref<RecommendVideosQueryVariables> | ReactiveFunction<RecommendVideosQueryVariables>, options: VueApolloComposable.UseQueryOptions<RecommendVideosQuery, RecommendVideosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecommendVideosQuery, RecommendVideosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecommendVideosQuery, RecommendVideosQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<RecommendVideosQuery, RecommendVideosQueryVariables>(RecommendVideosDocument, variables, options);
}
export function useRecommendVideosLazyQuery(variables: RecommendVideosQueryVariables | VueCompositionApi.Ref<RecommendVideosQueryVariables> | ReactiveFunction<RecommendVideosQueryVariables>, options: VueApolloComposable.UseQueryOptions<RecommendVideosQuery, RecommendVideosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecommendVideosQuery, RecommendVideosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecommendVideosQuery, RecommendVideosQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<RecommendVideosQuery, RecommendVideosQueryVariables>(RecommendVideosDocument, variables, options);
}
export type RecommendVideosQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<RecommendVideosQuery, RecommendVideosQueryVariables>;
export const UserByIdDocument = gql`
    query UserById($id: String!) {
  users_by_pk(id: $id) {
    id
    name
    email
    profile_photo_url
    updated_at
    created_at
  }
}
    `;

/**
 * __useUserByIdQuery__
 *
 * To run a query within a Vue component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserByIdQuery({
 *   id: // value for 'id'
 * });
 */
export function useUserByIdQuery(variables: UserByIdQueryVariables | VueCompositionApi.Ref<UserByIdQueryVariables> | ReactiveFunction<UserByIdQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserByIdQuery, UserByIdQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserByIdQuery, UserByIdQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserByIdQuery, UserByIdQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, variables, options);
}
export function useUserByIdLazyQuery(variables: UserByIdQueryVariables | VueCompositionApi.Ref<UserByIdQueryVariables> | ReactiveFunction<UserByIdQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserByIdQuery, UserByIdQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserByIdQuery, UserByIdQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserByIdQuery, UserByIdQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, variables, options);
}
export type UserByIdQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserByIdQuery, UserByIdQueryVariables>;
export const VideoByPkDocument = gql`
    query VideoByPk($id: String!) {
  videos_by_pk(id: $id) {
    id
    title
    thumbnail_url
    video_url
    views
    duration
    description
    owner {
      id
      name
      profile_photo_url
      email
      updated_at
      created_at
    }
    updated_at
    created_at
  }
}
    `;

/**
 * __useVideoByPkQuery__
 *
 * To run a query within a Vue component, call `useVideoByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoByPkQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useVideoByPkQuery({
 *   id: // value for 'id'
 * });
 */
export function useVideoByPkQuery(variables: VideoByPkQueryVariables | VueCompositionApi.Ref<VideoByPkQueryVariables> | ReactiveFunction<VideoByPkQueryVariables>, options: VueApolloComposable.UseQueryOptions<VideoByPkQuery, VideoByPkQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VideoByPkQuery, VideoByPkQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VideoByPkQuery, VideoByPkQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<VideoByPkQuery, VideoByPkQueryVariables>(VideoByPkDocument, variables, options);
}
export function useVideoByPkLazyQuery(variables: VideoByPkQueryVariables | VueCompositionApi.Ref<VideoByPkQueryVariables> | ReactiveFunction<VideoByPkQueryVariables>, options: VueApolloComposable.UseQueryOptions<VideoByPkQuery, VideoByPkQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VideoByPkQuery, VideoByPkQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VideoByPkQuery, VideoByPkQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<VideoByPkQuery, VideoByPkQueryVariables>(VideoByPkDocument, variables, options);
}
export type VideoByPkQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<VideoByPkQuery, VideoByPkQueryVariables>;
export const VideosDocument = gql`
    query Videos {
  videos {
    id
    title
    description
    views
    duration
    video_url
    thumbnail_url
    created_at
    updated_at
    owner {
      id
      email
      name
      profile_photo_url
      updated_at
      created_at
    }
  }
}
    `;

/**
 * __useVideosQuery__
 *
 * To run a query within a Vue component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useVideosQuery();
 */
export function useVideosQuery(options: VueApolloComposable.UseQueryOptions<VideosQuery, VideosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VideosQuery, VideosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VideosQuery, VideosQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, {}, options);
}
export function useVideosLazyQuery(options: VueApolloComposable.UseQueryOptions<VideosQuery, VideosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VideosQuery, VideosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VideosQuery, VideosQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, {}, options);
}
export type VideosQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<VideosQuery, VideosQueryVariables>;