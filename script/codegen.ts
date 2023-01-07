import type { CodegenConfig } from "@graphql-codegen/cli"

const END_POINT = process.env.VITE_GRAPHQL_END_POINT_ORIGIN as string
const ADMIN_SECRET = process.env.VITE_HASURA_SECRET_KEY as string

const config: CodegenConfig = {
  schema: {
    [END_POINT]: {
      headers: {
        "x-hasura-admin-secret": ADMIN_SECRET,
      },
    },
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/utils/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-vue-apollo"
      ],
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config