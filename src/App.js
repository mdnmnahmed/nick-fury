import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Components/AuthComponents/SignUp/SignUp';
import SignIn from './Components/AuthComponents/SignIn/SignIn';
import Header from './Components/Header/Header';
import { Auth } from './firebase';
import Home from './Components/Home/Home';
import ErrorNotFound from './Components/ErrorNotFound/ErrorNotFound';

const App = () => {
    const [user, setUser] = useState(null);

    /**
     * Checking user's Authorization
     */
    useEffect(() => {
        Auth.onAuthStateChanged(user => user ? setUser(user) : setUser(null));
    }, []);

    return (
        <>
            <BrowserRouter >
                {user && <Header />}

                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                    <Route path='/signin'>
                        <SignIn />
                    </Route>
                    <Route>
                        <ErrorNotFound />
                    </Route>
                </Switch>
            </BrowserRouter>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
            />
        </>
    );
}

export default App;