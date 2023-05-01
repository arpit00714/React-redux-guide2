import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useEffect } from 'react';


function App() {
  // const isAuth = useSelector(state => state.auth.isAuthenticated);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://fir-99cf8-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    // <Counter />
//     <>
//     <Header />
//    {!isAuth && <Auth />}
//    {isAuth && <UserProfile />}
//    <Counter />
//  </>
<Layout>
{showCart && <Cart />}
<Products />
</Layout>

  );
}

export default App;
