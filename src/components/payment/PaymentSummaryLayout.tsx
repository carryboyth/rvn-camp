
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PaymentSummaryLayoutProps {
  children: React.ReactNode;
}

const PaymentSummaryLayout = ({ children }: PaymentSummaryLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50" style={{ fontFamily: 'Kanit, sans-serif' }}>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSummaryLayout;
