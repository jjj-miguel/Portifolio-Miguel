import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from './pages/Page1/page1';
import Page2 from './pages/Page2/page2';
import Home from './pages/Home/Home';

function AppRoutes(){
    return(

        <BrowserRouter>
<Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/page1" element={<Page1/>}></Route>
    <Route path="/page2" element={<Page2/>}></Route>

</Routes>
</BrowserRouter>
)
}
export default AppRoutes

