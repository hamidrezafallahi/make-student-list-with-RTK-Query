import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const AlbumApi = createApi(
    {
    reducerPath:'AlbumApi',     
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3032/'}),
    endpoints:(builder)=>({
        getAlbums:builder.query({
            query:(page)=>`Albums?_page=${page}&_limit=10`,
            providesTags:['Albums']
        }),
        createAlbum:builder.mutation({
            query:(title)=>({
                url:'Albums',
                method:'POST',
                body:{title}
            }),
            invalidatesTags:['Albums']
        }),
        updateAlbum:builder.mutation({
            query:({id,title})=>({
                url:`Albums/${id}`,
                method:'PUT',
                body:{title}
            }),
            invalidatesTags:['Albums']
        }),
        deleteAlbum:builder.mutation({
            query:(id)=>({
                url:`Albums/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['Albums']
        })
    })
})
export const {useGetAlbumsQuery,useCreateAlbumMutation,useUpdateAlbumMutation,useDeleteAlbumMutation}=AlbumApi;