
import React, { useEffect, useState } from 'react';
import { fetchTripData } from './api';
import { TripData } from './types';
import DayCard from './components/DayCard';
import SavingsChart from './components/SavingsChart';
import InfoSection from './components/InfoSection';
import BookingWidget from './components/BookingWidget';
import CurrencyConverter from './components/CurrencyConverter';
import WeatherWidget from './components/WeatherWidget';
import BudgetEstimator from './components/BudgetEstimator';
import { Plane, CalendarRange, Wallet, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [data, setData] = useState<TripData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTripData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  const scrollToDay = (id: number) => {
    const element = document.getElementById(`day-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <Loader2 className="animate-spin text-busan-blue mb-4" size={48} />
        <p className="text-slate-500 font-medium animate-pulse">正在為您規劃釜山行程...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans pb-20 bg-slate-50">
      
      {/* Hero Section */}
      <div className="relative bg-busan-blue text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-90 z-0"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-400 opacity-20"></div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4 bg-blue-800/50 w-fit px-3 py-1 rounded-full border border-blue-400/30 backdrop-blur-sm">
                <CalendarRange size={16} className="text-blue-200" />
                <span className="text-sm font-medium text-blue-100">{data.tripDates}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                釜山 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  旅遊規劃
                </span>
              </h1>
              <p className="text-lg text-blue-100 max-w-lg leading-relaxed">
                專為 2025/26 跨年設計的 8 天 7 夜行程。
                結合 <span className="font-bold text-white">Visit Busan Pass (48H)</span>              </p>
            </div>
            {/* Savings display removed from here as requested */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl -mt-20 relative z-20">
        
        {/* Info Grid */}
        <InfoSection />

        <div className="grid lg:grid-cols-12 gap-8">
            
          {/* Main Content - Itinerary */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Plane className="text-busan-blue" />
                    每日行程
                </h2>
                <span className="text-xs text-slate-400 font-medium bg-white px-2 py-1 rounded border">點擊項目展開地圖</span>
            </div>

            {/* Sticky Day Navigator (Mobile) */}
            <div className="sticky top-0 z-30 bg-slate-50/95 backdrop-blur-sm py-4 mb-4 -mx-4 px-4 overflow-x-auto border-b border-slate-200 sm:hidden">
                 <div className="flex gap-2">
                    {data.itinerary.map((day) => (
                        <button 
                            key={day.id}
                            onClick={() => scrollToDay(day.id)}
                            className="flex-shrink-0 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 shadow-sm whitespace-nowrap active:bg-blue-50 active:text-blue-600"
                        >
                            Day {day.id}
                        </button>
                    ))}
                 </div>
            </div>

            <div className="relative">
                {data.itinerary.map((day) => (
                    <DayCard key={day.id} day={day} />
                ))}
            </div>
          </div>

          {/* Sidebar - Tools & Planning */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            
            {/* New Widgets */}
            <WeatherWidget forecast={data.weatherForecast} />
            
            <CurrencyConverter exchangeRate={data.exchangeRate} />
            
            <BudgetEstimator budget={data.budgetEstimate} exchangeRate={data.exchangeRate} />

            {/* Savings Analysis */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Wallet className="text-indigo-600" />
                        智慧省錢
                    </h2>
                    <SavingsChart 
                      data={data.savingsData} 
                      passCost={data.passCost} 
                      totalValue={data.totalValue} 
                    />
                </div>

                <BookingWidget items={data.bookingItems} />

                {/* Disclaimer */}
                <div className="text-xs text-slate-400 px-2 leading-relaxed">
                    * 價格為 2024/2025 預估費率。匯率與氣溫皆為預測值。請務必再次確認各景點於跨年期間（特別是 1/1）的營業時間。
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;