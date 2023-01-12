import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from "./components/NotFound/NotFound";
import Products from "./components/Products/Products";
import Help from "./components/Help/Help";
import Legal from "./components/Legal/Legal";
import About from "./components/About/About";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={''} element={
                  <div>
                      <Header/>
                      <Main/>
                      <Footer/>
                  </div>
              }/>
              <Route path={'/products'} element={<Products/>}/>
              <Route path={'/help'} element={<Help/>}/>
              <Route path={'/legal'} element={<Legal/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'*'} element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
