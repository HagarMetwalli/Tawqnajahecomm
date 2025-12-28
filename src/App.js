import './App.css';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Login from './component/Login/Login';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import ChangePassword from './component/ChangePassword/ChangePassword';
import ResetPassword from './component/ResetPassword/ResetPassword';
import ForgetPassword from './component/ForgetPassword/ForgetPassword';
import AccountType from './component/AccountType/AccountType';
import Admin from './component/Admin/Admin';

import Services from './component/Services/Services';
import RelatedProducts from './component/RelatedProducts/RelatedProducts';
import RelatedActivites from './component/RelatedActivites/RelatedActivites';
import SidebarFilters from './component/SidebarFilters/SidebarFilters';
import ProductList from './component/ProductList/ProductList';
import ProductCard from './component/ProductCard/ProductCard';
import MyStore from './component/MyStore/MyStore';
import NewOrders from './component/NewOrders/NewOrders';
import NewOrders2 from './component/NewOrders2/NewOrders2';
import NewordersDetails from './component/NewordersDetails/NewordersDetails';
import CanceledOrders from './component/CanceledOrders/CanceledOrders';
import CanceledOrdersDetails from './component/CanceledOrdersDetails/CanceledOrdersDetails';
import ProductDetails from './component/ProductDetails/ProductDetails';
import AddAdvertisement from './component/AddAdvertisement/AddAdvertisement';
import FinancialReports from './component/FinancialReports/FinancialReports';
import MysecodStore from './component/MysecodStore/MysecodStore';
import AddverisementDetails from './component/AdvertisementDetails/AdvertisementDetails';
import MyOrders from './component/MyOrders/MyOrders';
import ConfirmedOrders from './component/ConfirmedOrders/ConfirmedOrders';
import OrderDetails from './component/OrderDetails/OrderDetails';
import ShippedOrders from './component/ShippedOrders/ShippedOrders';
import OrdersDetails2 from './component/OrdersDetails2/OrdersDetails2';
import MyemptydeiveredOrders from './component/MyemptydeiveredOrders/MyemptydeiveredOrders';
import MydeliveredOrders from './component/MydeliveredOrders/MydeliveredOrders';
import Marketing from './component/Marketing/Marketing';
import ProfileAccount from './component/ProfileAccount/ProfileAccount';
import MarketingReferral from './component/MarketingReferral/MarketingReferral';
import LogoutConfirm from './component/LogoutConfirm/LogoutConfirm';
import ContractPage from './component/ContractPage/ContractPage';
import SecondContract from './component/SecondContract/SecondContract';
import BankAccount from './component/BankAccount/BankAccount';
import EmptyAdvertisement from './component/EmptyAdvertisement/EmptyAdvertisement';
import MoreRelated from './component/MoreRelated/MoreRelated'
import ChooseSupport from './component/ChooseSupport/ChooseSupport';
// import MaddiSupport from './component/MaddiSupport/MaddiSupport';
import MyOrdDetails from './component/MyOrdDetails/MyOrdDetails'
import Categories from './component/Categories/Categories';
import ProductsSection from './component/ProductsSection/ProductsSection';
import CategoryFilter from './component/CategoryFilter/CategoryFilter';
import CategoryPage from './component/CategoryPage/CategoryPage';
import Shopping from './component/Shopping/Shopping';
import ConfirmOrdersDetails from './component/ConfirmOrdersDetails/ConfirmOrdersDetails';
import Orders from './component/Orders/Orders';
import PaymentPage from './component/PaymentPage/PaymentPage';
import EyeSupport from './component/EyeSupport/EyeSupport';
import FinancialSupport from './component/FinancialSupport/FinancialSupport';
import EyeSuccess from './component/EyeSuccess/EyeSuccess';
import FinancialSuccess from './component/FinancialSuccess/FinancialSuccess';
import Favorites from './component/Favorites/Favorites';
import CategoryDetails from './component/CategoryDetails/CategoryDetails';
//  import OfferTawq from './component/OfferTawq/OfferTawq';
import FSuccess from './component/FSuccess/FSuccess';
import ProductsElectronics  from './component/ProductsElectronics/ProductsElectronics';
import ProductsFurniture from './component/ProductsFurniture/ProductsFurniture';
import ProductsKitchen from './component/ProductsKitchen/ProductsKitchen';
import CategoriesSlider from './component/CategoriesSlider/CategoriesSlider';
import Abouttawq from './component/Abouttawq/Abouttawq';
//saller//
import SellerLogin from './component/SellerLogin/SellerLogin';
import SellerLayout from './component/SellerLayout/SellerLayout';
import SellerHome from './component/SellerHome/SellerHome';
import SellerRegister from './component/SellerrRegister/SellerrRegister';
import SellerChangePassword from './component/SellerChangePassword/SellerChangePassword';
import SellerResetPassword from './component/SellerResetPassword/SellerResetPassword';
import SellerForgetPassword from './component/SellerForgetPassword/SellerForgetPassword';
import SellerAccountType from './component/SellerAccountType/SellerAccountType';
import SellerAdmin from './component/SellerAdmin/SellerAdmin';
import SellerServices from './component/SellerServices/SellerServices';
import SellerRelatedProducts from './component/RelatedProducts/RelatedProducts';
import SellerRelatedActivites from './component/RelatedActivites/RelatedActivites';
import SellerSidebarFilters from './component/SidebarFilters/SidebarFilters';
import SellerProductList from './component/ProductList/ProductList';
import SellerProductCard from './component/ProductCard/ProductCard';
import SellerNewOrders from './component/SellerNewOrders/SellerNewOrders';
import SellerNewOrders2 from './component/SellerNewOrders2/SellerNewOrders2';
import SellerNewordersDetails from './component/SellerNewordersDetails/SellerNewordersDetails';
import SellerCanceledOrders from './component/SellerCanceledOrders/SellerCanceledOrders';
import SellerCanceledOrdersDetails from './component/SellerCanceledOrdersDetails/SellerCanceledOrdersDetails';
import SellerProductDetails from './component/SellerProductDetails/SellerProductDetails';
import SellerAddAdvertisement from './component/SellerAddAdvertisement/SellerAddAdvertisement';
import SellerFinancialReports from './component/SellerFinancialReports/SellerFinancialReports';
import SellerMysecodStore from './component/SellerMysecodStore/SellerMysecodStore';
import SellerAddverisementDetails from './component/SellerAdvertisementDetails/SellerAdvertisementDetails';
import SellerMyOrders from './component/SellerMyOrders/SellerMyOrders';
import SellerConfirmedOrders from './component/SellerConfirmedOrders/SellerConfirmedOrders';
import SellerOrderDetails from './component/SellerOrderDetails/SellerOrderDetails';
import SellerShippedOrders from './component/SellerShippedOrders/SellerShippedOrders';
import SellerOrdersDetails2 from './component/SellerOrdersDetails2/SellerOrdersDetails2';
import SellerMyemptydeiveredOrders from './component/SellerMyemptydeiveredOrders/SellerMyemptydeiveredOrders';
import SellerMydeliveredOrders from './component/SellerMydeliveredOrders/SellerMydeliveredOrders';
import SellerMarketing from './component/SellerMarketing/SellerMarketing';
import SellerProfileAccount from './component/SellerProfileAccount/SellerProfileAccount';
import SellerMarketingReferral from './component/SellerMarketingReferral/SellerMarketingReferral';
import SellerLogoutConfirm from './component/SellerLogoutConfirm/SellerLogoutConfirm';
import SellerContractPage from './component/SellerContractPage/SellerContractPage';
import SellerSecondContract from './component/SellerSecondContract/SellerSecondContract';
import SellerBankAccount from './component/SellerBankAccount/SellerBankAccount';
import SellerEmptyAdvertisement from './component/SellerEmptyAdvertisement/SellerEmptyAdvertisement';
import SellerMoreRelated from './component/SellerMoreRelated/SellerMoreRelated';
import SellerChooseSupport from './component/SellerChooseSupport/SellerChooseSupport';
import SellerAyniSupport from './component/SellerAyniSupport/SellerAyniSupport';
import SellerMaddiSupport from './component/SellerMaddiSupport/SellerMaddiSupport';
import SellerMyOrdDetails from './component/SellerMyOrdDetails/SellerMyOrdDetails';
import SellerFinancialDashboard from './component/SellerFinancialDashboard/SellerFinancialDashboard';
import SellerProductsSection from './component/SellerProductsSection/SellerProductsSection';
import SellerAbouttawq from './component/SellerAbouttawq/SellerAbouttawq';
import Offerstawqnajah from './component/Offerstawqnajah/Offerstawqnajah';
import CommunityPartnerships from './component/CommunityPartnerships/CommunityPartnerships';
import Marketers from './component/Marketers/Marketers';
import SuccessPartners from './component/SuccessPartners/SuccessPartners';
import Sellers from './component/Sellers/Sellers';
import SellersDetails from './component/SellersDetails/SellersDetails';
import AllOffers from './component/AllOffers/AllOffers';
import AllProductsByCategory from './component/AllProductsByCategory/AllProductsByCategory';
import Privacy from './component/Privacy/Privacy';
import ScrollTop from './component/ScrollTop/ScrollTop'
import ConfirmOrderDetails from './component/ConfirmOrdersDetails/ConfirmOrdersDetails';
import ShippedOrderDetails from './component/ShippedOrdersDetails/ShippedOrdersDetails';
import SellerConfirmdOrdersDetails from './component/SellerConfirmedOrdersDetails/SellerConfirmedOrdersDetails';
import SellerShippedOrderDetails from './component/SellerShippedOrdersDetails/SellerShippedOrdersDetails';
import SellerDiscountsDetails from './component/SellerDiscountsDetails/SellerDiscountsDetails';
import WinterjacketDetails from './component/WinterjacketDetails/WinterjacketDetails';
import SellerBurgerOffer from './component/SellerBurgerOffer/SellerBurgerOffer';
import SellerMobileOffer from './component/SellerMobileOffer/SellerMobileOffer';
import SellerMyStore from './component/SellerMyStore/SellerMyStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

{
  index: true,
  element: localStorage.getItem("token")
    ? <Navigate to="/accounttype" />
    : <Navigate to="/login" />
},
{ path: 'login', element: <Login /> },
{ path: 'home', element: <Home /> },
{ path: 'neworders2', element: <NewOrders2 /> },
{ path: 'newordersdetails', element: <NewordersDetails /> },
{ path: 'changepassword', element: <ChangePassword /> },
{ path: 'forgetpassword', element: <ForgetPassword /> },
{ path: 'resetpassword', element: <ResetPassword /> },
{ path: 'register', element: <Register /> },
{ path: '/accounttype', element: <AccountType /> },
{ path: 'admin', element: <Admin /> },
{ path: 'services', element: <Services /> },
{ path: 'relatedproducts', element: <RelatedProducts /> },
{ path: 'relatedactivites', element: <RelatedActivites /> },
{ path: 'sidebarfilters', element: <SidebarFilters /> },
{ path: 'productlist', element: <ProductList /> },
{ path: 'productcard', element: <ProductCard /> },
{ path: 'sellerproductdetails/:id', element: <ProductDetails /> },
{ path: 'canceledorders', element: <CanceledOrders /> },
{ path: 'mystore', element: <MyStore /> },
{ path: 'neworders', element: <NewOrders /> },
{ path: 'canceledordersdetails', element: <CanceledOrdersDetails /> },
{ path: 'addadvertisement', element: <AddAdvertisement /> },
{ path: 'financialreports', element: <FinancialReports /> },
{ path: 'mysecondstore', element: <MysecodStore /> },
{ path: 'advertisementdetails', element: <AddverisementDetails /> },
{ path: 'myorders', element: <MyOrders /> },
{ path: 'confirmedorders', element: <ConfirmedOrders /> },
{path:'confirmordersdetails',element:<ConfirmOrderDetails/>},
{ path: 'orderdetails', element: <OrderDetails /> },
{ path: 'shippedorders', element: <ShippedOrders /> },
{path:'shippedordersdetails',element:<ShippedOrderDetails/>},
{ path: 'ordersdetails2', element: <OrdersDetails2 /> },
{ path: 'myemptydeiveredorders', element: <MyemptydeiveredOrders /> },
{ path: 'mydeliveredorders', element: <MydeliveredOrders /> },
{ path: 'marketing', element: <Marketing /> },
{ path: 'profileaccount', element: <ProfileAccount /> },
{ path: 'marketingreferral', element: <MarketingReferral /> },
{ path: 'logoutconfirm', element: <LogoutConfirm /> },
{ path: 'contractpage', element: <ContractPage /> },
{ path: 'secondcontract', element: <SecondContract /> },
{ path: 'bankaccount', element: <BankAccount /> },
{ path: 'emptyadvertisement', element: <EmptyAdvertisement /> },
{ path: 'choosesupport', element: <ChooseSupport /> },
{path:'communitypartnerships',element:<CommunityPartnerships/>},
// { path: 'maddisupport', element: <MaddiSupport /> },      // ← مصححة
{path:'marketers',element:<Marketers/>},
{ path: 'eyesupport', element: <EyeSupport /> },
{ path: 'myorddetails', element: <MyOrdDetails /> },
{ path: 'categories', element: <Categories /> },
{ path: 'productssection', element: <ProductsSection /> },
{ path: 'categoryfilter', element: <CategoryFilter /> },
{ path: 'categorypage', element: <CategoryPage /> },
{ path: 'shopping', element: <Shopping /> },
{ path: 'orders', element: <Orders /> },
{ path: 'paymentpage', element: <PaymentPage /> },
{ path: 'financialsupport', element: <FinancialSupport /> },
{ path: 'eyesuccess', element: <EyeSuccess /> },
{ path: 'financialsuccess', element: <FinancialSuccess /> },
{ path: 'morerelated', element: <MoreRelated /> },
{ path: 'favorites', element: <Favorites /> },
{path:'categorydetails',element:<CategoryDetails/>},
//  {path:'offertawq',element:<OfferTawq/>},
// { path:"register", element:<Register />} ,
{path:'productselectronis',element:<ProductsElectronics/>},
{path:'productsfurniture',element:<ProductsFurniture/>},
{path:'productskitchen',element:<ProductsKitchen/>},
{path:'fsuccess',element:<FSuccess/>},
{path:'categoriesslider',element:<CategoriesSlider/>},
{path:'abouttawq' ,element:<Abouttawq/>},
//  {path:"offerstwq",element:<OffersTawq/>},
{path:"offerstawqnajah",element:<Offerstawqnajah/>},
{path:"successpartners",element:<SuccessPartners/>},
{path:'sellers',element:<Sellers/>},
{ path:'sellersdetails/:id', element:<SellersDetails/> },
{path:'scrolltop',element:<ScrollTop/>},
{path:'alloffers',element:<AllOffers/>},
{path:'/products/:category',element:<AllProductsByCategory/>},
{path:'privacy',element:<Privacy/>}

    ],
  },
{
  path: "/seller",
  element: <SellerLayout />,
  children: [

{ index: true, element: <SellerHome /> },
{ path:'/seller/sellerhome', element: <SellerHome /> },
 {path:'/seller/sellerlayout',element:<SellerLayout/>},
      { path: '/seller/sellerlogin', element: <SellerLogin /> },
      { path: '/seller/sellerneworders2', element: <SellerNewOrders2 /> },
      { path: '/seller/sellernewordersdetails', element: <SellerNewordersDetails /> },
      { path: '/seller/sellerchangepassword', element: <SellerChangePassword /> },
      { path: '/seller/sellerforgetpassword', element: <SellerForgetPassword /> },
      { path: '/seller/sellerresetpassword', element: <SellerResetPassword /> },
      { path: '/seller/sellerregister', element: <SellerRegister /> },
      { path: '/seller/selleraccounttype', element: <SellerAccountType /> },
      { path: '/seller/sellerselleradmin', element: <SellerAdmin /> },
      { path: '/seller/sellerservices', element: <SellerServices /> },
      { path: '/seller/sellerrelatedproducts', element: <SellerRelatedProducts /> },
      { path: '/seller/sellerrelatedactivites', element: <SellerRelatedActivites /> },
      { path: '/seller/sellersidebarfilters', element: <SellerSidebarFilters /> },
      { path: '/seller/sellerproductlist', element: <SellerProductList /> },
      { path: '/seller/sellerproductcard', element: <SellerProductCard /> },
      { path: '/seller/sellerproductdetails', element: <SellerProductDetails /> },
      { path: '/seller/sellercanceledorders', element: <SellerCanceledOrders /> },
      { path: '/seller/sellerneworders', element: <SellerNewOrders /> },
      { path: '/seller/sellercanceledordersdetails', element: <SellerCanceledOrdersDetails /> },
      { path: '/seller/selleraddadvertisement', element: <SellerAddAdvertisement /> },
      { path: '/seller/sellerfinancialreports', element: <SellerFinancialReports /> },
      { path: '/seller/sellermysecondstore', element: <SellerMysecodStore /> },
      { path: '/seller/selleradvertisementdetails', element: <SellerAddverisementDetails /> },
      { path: '/seller/sellermyorders', element: <SellerMyOrders /> },
      { path: '/seller/sellerconfirmedorders', element: <SellerConfirmedOrders /> },
      { path: '/seller/sellerorderdetails', element: <SellerOrderDetails /> },
      { path: '/seller/sellershippedorders', element: <SellerShippedOrders /> },
      { path: '/seller/sellerordersdetails2', element: <SellerOrdersDetails2 /> },
      { path: '/seller/sellermyemptydeiveredorders', element: <SellerMyemptydeiveredOrders /> },
      { path: '/seller/sellermydeliveredorders', element: <SellerMydeliveredOrders /> },
      { path: '/seller/sellermarketing', element: <SellerMarketing /> },
      { path: '/seller/sellerprofileaccount', element: <SellerProfileAccount /> },
      { path: '/seller/sellermarketingreferral', element: <SellerMarketingReferral /> },
      { path: '/seller/sellerlogoutconfirm', element: <SellerLogoutConfirm /> },
      { path: '/seller/sellercontractpage', element: <SellerContractPage /> },
      { path: '/seller/sellersecondcontract', element: <SellerSecondContract /> },
      {path:'/seller/sellerconfirmedordersdetails', element:<SellerConfirmdOrdersDetails/>},
      { path: '/seller/sellerbankaccount', element: <SellerBankAccount /> },
      { path:'/seller/selleremptyadvertisement',element:<SellerEmptyAdvertisement/> },
      { path:'/seller/sellerchoosesupport',element:<SellerChooseSupport/> },
     {path:'/seller/sellershippedordersdetails',element:<SellerShippedOrderDetails/>},
      { path:'sellerproduct/:id', element:<SellerProductDetails /> },
      { path:'/seller/sellermaddisupport', element:<SellerMaddiSupport /> },
      { path:'/seller/selleraynisupport', element:<SellerAyniSupport /> },
      {path:'/seller/sellermystore',element:<SellerMyStore/>},
   {
       path: "sellerrelatedproductsdetails/:id",
       element: <SellerRelatedProducts/>
     },

     {path:'/seller/sellerdiscountsdetails',element:<SellerDiscountsDetails/>},
      { path:'/seller/sellermyorddetails',element:<SellerMyOrdDetails/> },
      { path:'/seller/sellerfinancialdashboard',element:<SellerFinancialDashboard/> },
      { path:'/seller/sellerproductsSection',element:<SellerProductsSection/> },
      { path: '/seller/sellermorerelated', element: <SellerMoreRelated /> },
      { path:'/seller/sellerabouttawq',element:<SellerAbouttawq/> },
      {path:'seller/winterjacketdetails',element:<WinterjacketDetails/>},
      {path:'seller/sellerburgeroffer',element:<SellerBurgerOffer/>},
      {path:'seller/sellermobileoffer',element:<SellerMobileOffer/>},
      {path:'seller/sellerdiscountsdetails',element:<SellerDiscountsDetails/>},
{ path: "/seller/sellerburgeroffer", element: <SellerBurgerOffer /> },
{ path: "/seller/winterjacketdetails", element: <WinterjacketDetails /> },
{ path: "/seller/sellermobileoffer", element: <SellerMobileOffer /> },
    ],
    },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
