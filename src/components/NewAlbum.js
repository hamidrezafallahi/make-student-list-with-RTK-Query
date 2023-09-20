import React from 'react';
import {useCreateAlbumMutation} from '../app/services/AlbumApi';
const NewAlbum = ()=>{
    const [createAlbum , {isLoading}]=useCreateAlbumMutation();
    function submitalbum(event){
        event.preventDefault();
        createAlbum(event.target['title'].value);
        event.target.reset();
    }
    return(
        <>
        <form onSubmit={(e)=>submitalbum(e)}>
        <h3> new album </h3>
        <div>
            title: <input type='text'id='title'/>
        </div><br/>
        <input type='submit' value='add album' disabled={isLoading}/>
        {isLoading && 'loading ...'}
        </form>
        </>
    )
}
export default NewAlbum;