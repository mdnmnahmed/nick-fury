import { useEffect, useState } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Components/AuthComponents/SignUp/SignUp';
import SignIn from './Components/AuthComponents/SignIn/SignIn';
import UserDetails from './Components/AuthComponents/UserDetails/UserDetails';
import { Auth } from './firebase';
import ErrorNotFound from './Components/ErrorNotFound/ErrorNotFound';
import Journals from './Components/Journals/Journals';
import Therapist from './Components/Therapist/Therapist';
import Chat from './Components/Chat/Chat';

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
                {/* {user && <Header />} */}

                <Switch>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                    <Route path='/signin'>
                        <SignIn />
                    </Route>
                    <Route path='/user-details'>
                        <UserDetails />
                    </Route>
                    <Route path='/' exact>
                        <Journals />
                    </Route>
                    <Route path='/therapist'>
                        <Therapist />
                    </Route>
                    <Route path='/chat'>
                        <Chat />
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