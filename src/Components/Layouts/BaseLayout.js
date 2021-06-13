import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BigLoader from '../Layouts/BigLoader';
import { getCookie } from '../../helpers/CookiesHelper';
import Journals from '../Journals/Journals';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BaseLayout = ({ children }) => {
    const history = useHistory();
    const [componentLoader, setComponentLoader] = useState(true);

    /**
     * Check User's Authorization & Redirection
     */
    useEffect(() => {
        if (getCookie('db_access_token')) {
            setComponentLoader(false);
        } else {
            history.push('/signup');
        }
    }, []);

    return (
        <>
            {
                componentLoader ? (
                    <BigLoader />
                ) : (
                    <>
                        <Header />
                        {children}
                        <Footer />
                    </>
                )
            }
        </>
    );

}

export default BaseLayout;
