import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <Outlet /> {/* 여기서 하위 경로 컴포넌트 렌더링됨 */}
    </main>
    <Footer />
  </div>
  );
}
