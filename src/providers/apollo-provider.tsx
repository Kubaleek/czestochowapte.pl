"use client"

import client from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";

export default function ApollosProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>
    <div>{children}</div>
  </ApolloProvider>;
}
