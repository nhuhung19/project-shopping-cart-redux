import React from 'react';
import Header from './component/Header'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MessageContainer from './containers/MessageContainer'
import Footer from './component/Footer'
function App() {
    return (
        <div>
            <Header />
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer />
                    <MessageContainer />
                    <CartContainer />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
