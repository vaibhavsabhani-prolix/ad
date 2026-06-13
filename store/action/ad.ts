import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adPlacementApi = createApi({
  reducerPath: "adPlacementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  tagTypes: ["AdPlacement"],
  endpoints: (builder) => ({
    getAdPlacements: builder.query({
      query: () => "/ad-placement",
      providesTags: ["AdPlacement"],
    }),

    getAdPlacementById: builder.query({
      query: (id) => `/ad-placement/${id}`,
      providesTags: (result, error, id) => [
        { type: "AdPlacement", id },
      ],
    }),

    createAdPlacement: builder.mutation({
      query: (body) => ({
        url: "/ad-placement",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AdPlacement"],
    }),

    updateAdPlacement: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/ad-placement/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "AdPlacement", id },
        "AdPlacement",
      ],
    }),

    deleteAdPlacement: builder.mutation({
      query: (id) => ({
        url: `/ad-placement/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdPlacement"],
    }),
  }),
});

export const {
  useGetAdPlacementsQuery,
  useGetAdPlacementByIdQuery,
  useCreateAdPlacementMutation,
  useUpdateAdPlacementMutation,
  useDeleteAdPlacementMutation,
} = adPlacementApi;