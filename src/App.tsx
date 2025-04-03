import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import Badges from './pages/Badges';
import Banners from './pages/Banners';
import Cards from './pages/Cards';
import Testimonials from './pages/Testimonials';
import Toasts from './pages/Toasts';
import Tooltips from './pages/Tooltips';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path='badges' element={<Badges />}/>
                    <Route path='banners' element={<Banners />}/>
                    <Route path='cards' element={<Cards />}/>
                    <Route path='testimonials' element={<Testimonials />}/>
                    <Route path='toasts' element={<Toasts />}/>
                    <Route path='tooltips' element={<Tooltips />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

