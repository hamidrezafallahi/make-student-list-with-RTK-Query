import React, { useState } from 'react'
import { useGetStudentsQuery, useDeleteStudentMutation } from '../app/services/StudentsApi';
import '../mystyle.scss'
const StudentList = ({ setSelectedStudent }) => {
    const [page, setPage] = useState(1)
    const { data: students, isLoading, isFetching, isError, error } = useGetStudentsQuery(page);
    const [deleteStudent] = useDeleteStudentMutation();
    if (isLoading || isFetching) {
        return <div>loading ... </div>;
    }
    if (isError) {
        return <div> error is {error.status}</div>;
    }
    return (
        <>
            <div className='studentlist'>
                <h3>students ...</h3>
                <ul>
                    {students.map(student => (
                        <>
                            <li key={student.id}>{student.name} - {student.family} - {student.fieldstudy} - {student.studentid} - {student.id}
                                <button onClick={() => { setSelectedStudent(student) }}>edit</button>
                                <button onClick={() => { deleteStudent(student.id) }}>delete</button></li>
                        </>
                    ))}
                </ul>
                <div>
                    <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)} > prev</button>
                    <button disabled={students.length < 10} onClick={() => {
                        setPage((prev) => prev + 1)
                    }} > next</button>
                </div>
            </div>
        </>
    )
}
export default StudentList;