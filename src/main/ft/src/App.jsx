import React from "react";
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import RecentItems from "./components/Item/RecentItems";
import AITest from "./pages/AITest";

export default function App() {
  return (
    <AuthContextProvider>
        <NavigationBar/>
        <RecentItems/>
        <AITest/>
        <Outlet />
        <Footer />
    </AuthContextProvider>
  );
}