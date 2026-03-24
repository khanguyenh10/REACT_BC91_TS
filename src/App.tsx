import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import store from './redux/reducers/store';
import { Routes , unstable_HistoryRouter as HistoryRouter, Route} from 'react-router-dom';
import HomeTemplate from './template/HomeTemplate';
import Home from './page/Home';
import Login from './page/Login';
import  Register from './page/Register';

export const history: any = createBrowserHistory();

function App() {

  return (
    <>
     <Provider store={store}>
      <HistoryRouter history={history}> 
        <Routes>
            <Route path="" element={<HomeTemplate/>} >
               <Route index element={<Home/>} />
               <Route path="login" element={<Login/>} />
               <Route path="register" element={<Register/>} />
               <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Routes>
      </HistoryRouter>
     </Provider>
    </>
  )
}

export default App
