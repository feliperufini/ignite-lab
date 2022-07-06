import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oevbl425zp01z23q4a8hou/master',
  cache: new InMemoryCache()
})