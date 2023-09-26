import React from 'react';
import {useUpdateStudentMutation} from '../app/services/StudentsApi';
const UpdateStudent=({selectedStudent})=>{
    const [updateStudent,{isLoading}]=useUpdateStudentMutation();
    function submitAlbum(event){
        event.preventDefault();
        updateStudent({id:selectedStudent.id,family:event.target['family'].value,name:event.target['name'].value,
        studentid:event.target['studentid'].value,fieldstudy:event.target['fieldstudy'].value});
        event.target.reset();
    }
    return(
        <>
        <form onSubmit={(e)=>submitAlbum(e)} className='updatestudent'>
        <h3>update student ...</h3>
        {selectedStudent ?`${selectedStudent.id} - ${selectedStudent.family}- ${selectedStudent.name}` : 'no selected album'}<br/>
        name: <br/><input type='text' id='name'/><br/>
        family:<br/> <input type='text' id='family'/><br/>
        studentid: <input type='text' id='studentid'/><br/>
        fieldstudy: <input type='text' id='fieldstudy'/><br/>
        <input type='submit' disabled={!selectedStudent || isLoading} value='update album '/>
        {isLoading && 'is loading'}
        </form>
        </>
    )
}
export default UpdateStudent;