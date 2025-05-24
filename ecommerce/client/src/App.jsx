import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import WebFont from 'webfontloader';
import { loadUser } from './actions/userAction';

const Footer = React.lazy(() => import('./components/Layouts/Footer/Footer'));
const Header = React.lazy(() => import('./components/Layouts/Header/Header'));
const Login = React.lazy(() => import('./components/User/Login'));
const Register = React.lazy(() => import('./components/User/Register'));
const UpdateProfile = React.lazy(() => import('./components/User/UpdateProfile'));
const UpdatePassword = React.lazy(() => import('./components/User/UpdatePassword'));
const ForgotPassword = React.lazy(() => import('./components/User/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./components/User/ResetPassword'));
const Account = React.lazy(() => import('./components/User/Account'));
const ProtectedRoute = React.lazy(() => import('./Routes/ProtectedRoute'));
const Home = React.lazy(() => import('./components/Home/Home'));
const ProductDetails = React.lazy(() => import('./components/ProductDetails/ProductDetails'));
const Products = React.lazy(() => import('./components/Products/Products'));
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const Shipping = React.lazy(() => import('./components/Cart/Shipping'));
const OrderConfirm = React.lazy(() => import('./components/Cart/OrderConfirm'));
const Payment = React.lazy(() => import('./components/Cart/Payment'));
const OrderStatus = React.lazy(() => import('./components/Cart/OrderStatus'));
const OrderSuccess = React.lazy(() => import('./components/Cart/OrderSuccess'));
const MyOrders = React.lazy(() => import('./components/Order/MyOrders'));
const OrderDetails = React.lazy(() => import('./components/Order/OrderDetails'));
const Wishlist = React.lazy(() => import('./components/Wishlist/Wishlist'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Terms = React.lazy(() => import('./Policy/Terms'));
const Privacy = React.lazy(() => import('./Policy/Privacy'));
const ShippingPolicy = React.lazy(() => import('./Policy/ShippingPolicy'));
const Contact = React.lazy(() => import('./Policy/Contact'));
const Refunds = React.lazy(() => import('./Policy/Refunds'));

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,600,700"]
      },
    });
  });

  useEffect(() => {
    dispatch(loadUser());
  
  }, [dispatch]);

  // always scroll to top on route/path change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname])
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      </Suspense>
      <Routes>
        <Route path="/" element={  <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="/login" element={
           <Suspense fallback={<div>Loading...</div>}>
        <Login />
        </Suspense>
        } />
        <Route path="/register" element={<Suspense fallback={<div>Loading...</div>}><Register /> </Suspense>} />

        <Route path="/product/:id" element={
        <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails />    </Suspense>} 
       
        />
        <Route path="/products" element={
          <Suspense fallback={<div>Loading...</div>}>
        <Products />
        </Suspense>
        } />
        <Route path="/products/:keyword" element={
          <Suspense fallback={<div>Loading...</div>}> 
        <Products />
        </Suspense>
        } />

        <Route path="/cart" element={
         <Suspense fallback={<div>Loading...</div>}>
        <Cart />
        </Suspense>
        } />

        {/* order process */}
        <Route path="/shipping" element={
           <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <Shipping />
          </ProtectedRoute>
          </Suspense>
        } ></Route>

        <Route path="/order/confirm" element={
           <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <OrderConfirm />
          </ProtectedRoute>
          </Suspense>
        } ></Route>

        <Route path="/process/payment" element={
            <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
          </Suspense>
        } ></Route>

        <Route path="/orders/success" element={
         <Suspense fallback={<div>Loading...</div>}> 
        <OrderSuccess success={true} />
        </Suspense>
        } />
        <Route path="/orders/failed" element={
           <Suspense fallback={<div>Loading...</div>}>  <OrderSuccess success={false} />  </Suspense>
       } />
        {/* order process */}

        <Route path="/order/:id" element={
          <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <OrderStatus />
          </ProtectedRoute>
          </Suspense>
        } ></Route>

        <Route path="/orders" element={
          <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
          </Suspense>
        }></Route>

        <Route path="/order_details/:id" element={
          <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
          </Suspense>
        }></Route>

        <Route path="/account" element={
          <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <Account />
           </ProtectedRoute>
           </Suspense>
        } ></Route>

        <Route path="/account/update" element={
          <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
          </Suspense>
        } ></Route>

        <Route path="/password/update" element={
          <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
          </Suspense>
        } ></Route>

        <Route path="/password/forgot" element={
        <Suspense fallback={<div>Loading...</div>}> 
        <ForgotPassword />
        </Suspense>
        } />

        <Route path="/password/reset/:token" element={
        <Suspense fallback={<div>Loading...</div>}> 
        <ResetPassword />
        </Suspense> 
        } />

        <Route path="/wishlist" element={
          <Suspense fallback={<div>Loading...</div>}> 
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
          </Suspense>
        } ></Route>
        <Route path="/terms" element={<Suspense fallback={<div>Loading...</div>}><Terms /></Suspense>} />
        <Route path="/privacy" element={<Suspense fallback={<div>Loading...</div>}><Privacy /></Suspense>} />
        <Route path="/shippingpolicy" element={<Suspense fallback={<div>Loading...</div>}><ShippingPolicy /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
        <Route path="/refunds" element={<Suspense fallback={<div>Loading...</div>}><Refunds /></Suspense>} />
        <Route path="*" element=  {<Suspense fallback={<div>Loading...</div>}> <NotFound />  </Suspense>}></Route>
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
      <Footer />
      </Suspense>
    </>
  );
}

export default App;
