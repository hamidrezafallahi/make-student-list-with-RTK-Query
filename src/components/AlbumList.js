import React,{useState} from 'react'
import{useGetAlbumsQuery,useDeleteAlbumMutation} from '../app/services/AlbumApi';

const AlbumList =({setSelectedAlbum})=>{
    const[page,setPage]=useState(1)
    const {data:albums,isLoading,isFetching,isError,error}=useGetAlbumsQuery(page);
    const [deleteAlbum]=useDeleteAlbumMutation();
    if(isLoading || isFetching ) {
        return <div>loading ... </div>;
    }
    if (isError){
        return <div> error is {error.status}</div>;
    }
return(
    <>
    <div>
        <h3>root files ...</h3>
        <ul>
            {albums.map(album=>(
                <>
                <li key={album.id}>{album.title}       
                <button onClick={()=>{setSelectedAlbum(album)}}>edit</button>
                <button onClick={()=>{deleteAlbum(album.id)}}>delete</button></li>
                </>
            ))}
        </ul>
        <div>
            <button disabled={page<=1} onClick={()=>setPage((prev)=>prev-1)} > prev</button>
            <button disabled={albums.length<10} onClick={()=>{setPage((prev)=>prev+1)
            console.log(albums.length)
            }} > next</button>
        </div>
    </div>
    </>
)
}
export default AlbumList;