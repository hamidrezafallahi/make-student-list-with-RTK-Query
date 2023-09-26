import { useState } from 'react';
import StudentList from './components/StudentList'
import NewStudent from './components/NewStudent'
import UpdateStudent from './components/UpdateStudent'
import { Provider } from 'react-redux';
import { store } from './app/store'
import './mystyle.scss'
function App() {
const [selectedStudent, setSelectedStudent] = useState(null)
  return (
    <Provider store={store}>
    <div className='studentscontainer'>
      <StudentList setSelectedStudent={setSelectedStudent}/>
      <div className='studentoptions'>
      <UpdateStudent selectedStudent={selectedStudent}/>
      <NewStudent/>
      </div>

    </div>
    </Provider>
  )
}
export default App;