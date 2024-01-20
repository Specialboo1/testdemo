import Data from './components/data';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
 <div id="wrapper">
   <div class="container-fluid">
   <Routes>
   <Route exact path="/" element={<Data/>}/>
   </Routes>
   </div>
   </div>
   </Router>
  );
}

export default App;