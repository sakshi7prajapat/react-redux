import './App.css';
import UserDeatails from './components/UserDetails';
// import { useDispatch , useSelector } from 'react-redux';
// import {incNumber , decNumber} from './action/index'
function App() {
  // const myState = useSelector((state)=>state.numberChange)
  // const dispatch = useDispatch();
  return (
    // <div className="App">
    //   <div style={{
    //     display : 'flex',
    //     justifyContent:'space-around'
    //   }}><button 
    //   // onClick={()=>dispatch(incNumber())}
    //   >+</button>
    //   <text style={{
    //     fontSize: '20px',
    //     fontWeight : 'bold'
    //   }}>0</text>
    //   <button
    //   //  onClick={()=>dispatch(decNumber())}
    //   >-</button></div>
     
    // </div>
    <>
    <UserDeatails/>
    </>
  );
}

export default App;
