"use client"

import { GET_ALL_PAGES } from "@/graphql/query";
import { useQuery } from "@apollo/client";

export const usePageData = (slug: string) => {
    const {data, loading, error} = useQuery<GetContentPagesResponse>(GET_ALL_PAGES, {
        variables: { slug },
    })

    return { data, loading, error };
}

