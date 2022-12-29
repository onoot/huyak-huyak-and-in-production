import './App.css';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/List/List";
import Form from "./components/Form/Form";
import {useTelegram} from "./components/hook/usTelegram";



function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])
  return (
          <div className="App">
              <Header />
              <Routes>
                  <Route index element={<ProductList  />} />
                  <Route path={'form'} element={<Form />}/>
              </Routes>
          </div>

  );
}

export default App;
