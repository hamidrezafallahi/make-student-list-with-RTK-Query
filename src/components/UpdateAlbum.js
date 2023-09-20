import React from 'react';
import {useUpdateAlbumMutation} from '../app/services/AlbumApi';

const UpdateAlbum=({selectedAlbum})=>{
    const [updateAlbum,{isLoading}]=useUpdateAlbumMutation();
    function submitAlbum(event){
        event.preventDefault();
        updateAlbum({id:selectedAlbum.id,title:event.target['title'].value});
        event.target.reset();
    }
    return(
        <>
        <form onSubmit={(e)=>submitAlbum(e)}>
        <h3>update album ...</h3>
        {selectedAlbum ?`${selectedAlbum.id} - ${selectedAlbum.title}` : 'no selected album'}
        title: <input type='text' id='title'/><br/>
        <input type='submit' disabled={!selectedAlbum || isLoading} value='update album '/>
        {isLoading && 'is loading'}
        </form>
        </>
    )
}
export default UpdateAlbum;