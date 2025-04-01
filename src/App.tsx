import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import Badges from './reusables/Badges';
import Banners from './reusables/Banners';
import Cards from './reusables/Cards';
import Testimonials from './reusables/Testimonials';
import Toasts from './reusables/Toasts';
import Tooltips from './reusables/Tooltips';

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

