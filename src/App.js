import { useState } from 'react';
import AlbumList from './components/AlbumList'
import NewAlbum from './components/NewAlbum'
import UpdateAlbum from './components/UpdateAlbum'
// import 'bootstrap/dist/css/bootstrap.css'
// import './mystyle.scss'
import { Provider } from 'react-redux';
import { store } from './app/store'

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  // const [name, setName] = useState(null)
  // const showbuttons = () => {

  // }

  return (
    <Provider store={store}>

      <AlbumList setSelectedAlbum={setSelectedAlbum}/>
      <UpdateAlbum selectedAlbum={selectedAlbum}/>
      <NewAlbum/>
      {/* <div className='container'>
        <button className='btn btn-primary'>
          <input type="text" value={name}
            onChange={(e) => { setName(e.target.value);
            if(e.keycode === 13){document.getElementById('name').blur()
              console.log(e.keycode)
            } }}
            placeholder='Root'
            onFocus={() => { showbuttons() }}
            id='name'
             />

        </button>
          <button className='alternative btn btn-outline-primary m-2'><span class="fa fa-folder"></span></button>
          <button className='alternative btn btn-outline-primary m-2'><span class="fa fa-file"></span></button>
          <button className='alternative btn btn-outline-primary m-2'><span class="fa fa-trash"></span></button>
      </div> */}








    </Provider>
  )
}

export default App;