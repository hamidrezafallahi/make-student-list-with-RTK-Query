import React,{useState} from 'react';
import {useCreateStudentMutation} from '../app/services/StudentsApi';
import '../mystyle.scss'
const NewStudent = ()=>{
    const [createStudent , {isLoading}]=useCreateStudentMutation();
    const[name,setName]=useState('')
    const[family,setFamily] = useState('')
    const[studentid,setStudentid] = useState('')
    const[fieldstudy,setFieldstudy] = useState('')
    const[units,setUnits] = useState('')
    function submitstudent(event){
        event.preventDefault();
        createStudent({name,family,fieldstudy,studentid});
        setName('');
        setFamily('');
        setStudentid('');
        setFieldstudy('');
        setUnits([]);
        event.target.reset();
    }
    return(
        <>
        <form onSubmit={(e)=>submitstudent(e)} className='newstudentform'>
        <h3> new student </h3>
        <div>
            name: <input type='text'id='name' value={name} onChange={(event)=>setName(event.target.value)}/><br/>
            family: <input type='text'id='family' value={family} onChange={(event)=>setFamily(event.target.value)}/><br/>
            fieldstudy: <input type='text'id='studyfield' value={fieldstudy} onChange={(event)=>setFieldstudy(event.target.value)}/><br/>
            units: <input type='text'id='units' value={units} onChange={(event)=>setUnits(event.target.value)}/><br/>
            studentid: <input type='text'id='studentid' value={studentid} onChange={(event)=>setStudentid(event.target.value)}/><br/>
        </div><br/>
        <input type='submit' value='add album' disabled={isLoading}/>
        {isLoading && 'loading ...'}
        </form>
        </>
    )
}
export default NewStudent;