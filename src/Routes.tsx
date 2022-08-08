import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';


export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard />}/>

            </Routes>
        </Router>
    )    
}