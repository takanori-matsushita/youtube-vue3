/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_END_POINT_ORIGIN: string
  readonly VITE_HASURA_SECRET_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}