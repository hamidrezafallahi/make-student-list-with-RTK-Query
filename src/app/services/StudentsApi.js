import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const StudentsApi = createApi(
    {
    reducerPath:'StudentsApi',     
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3032/'}),
    endpoints:(builder)=>({
        getStudents:builder.query({
            query:(page)=>`students?_page=${page}&_limit=10`,
            providesTags:['students']
        }),
        createStudent:builder.mutation({
            query:({name,family,fieldstudy,studentid})=>({
                url:'students',
                method:'POST',
                body:{name,family,fieldstudy,studentid}
            }),
            invalidatesTags:['students']
        }),
        updateStudent:builder.mutation({
            query:({id,family,name,studentid,fieldstudy})=>({
                url:`students/${id}`,
                method:'PUT',
                body:{family,name,studentid,fieldstudy}
            }),
            invalidatesTags:['students']
        }),
        deleteStudent:builder.mutation({
            query:(id)=>({
                url:`students/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['students']
        })
    })
})
export const {useGetStudentsQuery,useCreateStudentMutation,useUpdateStudentMutation,useDeleteStudentMutation}=StudentsApi;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// export const StudentsApi = createApi(
//     {
//     reducerPath:'StudentsApi',     
//     baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3032/'}),
//     endpoints:(builder)=>({
//         getStudents:builder.query({
//             query:(page)=>"students",
//             providesTags:['univercity']
//         }),
//         createStudent:builder.mutation({
//             query:({name,family,studentid,fieldstudy,units})=>({
//                 url:'students',
//                 method:'POST',
//                 body:{name,family,studentid,fieldstudy,units}
//             }),
//             invalidatesTags:['univercity']
//         }),
//         updateStudent:builder.mutation({
//             query:({id,name})=>({
//                 url:"students",
//                 method:'PUT',
//                 body:{name}
//             }),
//             invalidatesTags:['univercity']
//         }),
//         deleteStudent:builder.mutation({
//             query:(id)=>({
//                 url:"students",
//                 method:'DELETE',
//             }),
//             invalidatesTags:['univercity']
//         })
//     })
// })
// export const {useGetStudentsQuery,useCreateStudentMutation,useUpdateStudentMutation,useDeleteStudentMutation}=StudentsApi;