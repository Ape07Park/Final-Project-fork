import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ItemList from './pages/item/ItemList';
import NotFound from './pages/NotFound';
import ItemInsert from './pages/admin/ItemInsert';
import ItemDetail from './pages/item/ItemDetail';
import AdminItemList from './pages/admin/AdminItemList';
import ItemUpdate from './pages/admin/ItemUpdate';
import CartPage from './pages/cart/CartPage';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';
import UserInfo from './pages/user/UserInfo';
import UserUpdate from './pages/user/UserUpdate';
import Kakao from './api/kakao';
import WishItemList from './pages/item/WishItemList';
import { useAuthContext } from "./context/AuthContext";
import QnAList from './pages/admin/QnAList';
import { SuccessPage } from './components/toss/Success';
import { FailPage } from './components/toss/Fail';
import { CheckoutPage } from './components/toss/Checkout';
import Order from './pages/order/OrderPage';
import OrderHistoryList from './pages/order/OrderHistoryList';
import ItemListSearch from './pages/item/ItemListSearch';
import MainPage from './pages/MainPage';
import AdminOrderHistoryList from './pages/admin/AdminOrderHistoryList';
import DashboardPage from './pages/admin/DashBoardPage';
import ProductAnalysis from './pages/admin/Productanalysis'
import NonMemberOrderHistory from './pages/order/NonMemberOrderHistory';
import ItemMenuList from './pages/item/ItemMenuList';
import DeveloperPage from './pages/DeveloperPage';

const router = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="itemlist" element={<ItemList />} />
      <Route path="itemlist/:searchQuery" element={<ItemListSearch />} />
      <Route path="item/detail/:iid" element={<ItemDetail />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="userInfo" element={<UserInfo />} />
      <Route path="userUpdate" element={<UserUpdate />} />
      <Route path="callback/kakaotalk" element={<Kakao />} />
      <Route path="wish/list" element={<WishItemList />} />
      <Route path="order" element={<Order />} />
      <Route path="orderHistoryList" element={<OrderHistoryList />} />
      <Route path="success" element={<SuccessPage />} />
      <Route path="fail" element={<FailPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="nonMemberOrderHistory" element={<NonMemberOrderHistory />} />
      <Route path="itemMenuList/:menu" element={<ItemMenuList />} />
      <Route path="developerPage" element={<DeveloperPage />} />
      <Route path="admin/products" element={<ProductAnalysisPage />} />
      <Route path="admin/itemlist" element={<AdminItemLists />} />
      <Route path="admin/item/insert" element={<ItemInsertAdminRoutes />} />
      <Route path="admin/item/update/:iid" element={<ItemUpdateAdminRoutes />} />
      <Route path="admin/QnAlist" element={<AdminQnAList />} />
      <Route path="admin/order/list" element={<AdminOrderLists />} />
      <Route path="admin/chart" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

function AdminItemLists() {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <AdminItemList /> : <MainPage />;
}

function AdminQnAList() {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <QnAList /> : <MainPage />;
}

function ItemInsertAdminRoutes() {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <ItemInsert /> : <MainPage />;
}

function ItemUpdateAdminRoutes() {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <ItemUpdate /> : <MainPage />;
}

function AdminOrderLists() {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <AdminOrderHistoryList /> : <MainPage />;
}

function Dashboard() {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <DashboardPage /> : <MainPage />;
}

function ProductAnalysisPage() {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <ProductAnalysis /> : <MainPage />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/FURNiture">
    {router}
  </BrowserRouter>
);

reportWebVitals();
