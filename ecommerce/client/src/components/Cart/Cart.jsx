import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import MetaData from '../Layouts/MetaData';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import PriceSidebar from './PriceSidebar';
import SaveForLaterItem from './SaveForLaterItem';
import Policy from '../../Policy/Policy'

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);
    const { saveForLaterItems } = useSelector((state) => state.saveForLater);
    const { user } = useSelector((state) => state.user);
    
    const placeOrderHandler = () => {
        navigate('/login?redirect=shipping');
    };

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <img loading="lazy" src='./cart.png'/>
                <Link to="/login" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Go to Login
                </Link>
            </div>
        );
    }

    return (
        <>
            <MetaData title="Shopping Cart | LocalMart" />
            <main className="w-full mt-20">
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
                    <div className="flex-1">
                        <div className="flex flex-col shadow bg-white">
                            <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                                My Cart ({cartItems.length})
                            </span>
                            {cartItems.length === 0 ? <EmptyCart /> : cartItems.map((item, index) => (
                                <CartItem {...item} inCart={true} key={index} />
                            ))}
                            <div className="flex justify-end">
                                <button 
                                    onClick={placeOrderHandler} 
                                    disabled={cartItems.length < 1} 
                                    className={`w-full sm:w-1/3 mx-2 sm:mx-6 my-4 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm 
                                    ${cartItems.length < 1 ? "bg-primary-grey cursor-not-allowed" : "bg-primary-orange"}`}
                                >
                                    PLACE ORDER
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col mt-5 shadow bg-white">
                            <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                                Saved For Later ({saveForLaterItems.length})
                            </span>
                            {saveForLaterItems.map((item, index) => (
                                <SaveForLaterItem {...item} key={index}/>
                            ))}
                        </div>
                        <Policy/>
                    </div>
                    <PriceSidebar cartItems={cartItems} />
                </div>
            </main>
        </>
    );
};

export default Cart;
