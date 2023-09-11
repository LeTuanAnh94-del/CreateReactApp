import Footer from '../footer/footer';
import Header from '../header';

function defaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default defaultLayout;
