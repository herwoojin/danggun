
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hideUntilDate = localStorage.getItem('hide_delivery_popup_date');
    const today = new Date().toISOString().split('T')[0];

    if (hideUntilDate !== today) {
      const timer = setTimeout(() => setShowPopup(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDontShowToday = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('hide_delivery_popup_date', today);
    setShowPopup(false);
  };

  return (
    <div className="pb-28 relative">
      {/* Promotional Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={closePopup}
          ></div>
          <div className="relative w-full max-w-[360px] bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-white/10">
            {/* Visual Header based on user image */}
            <div className="bg-white p-6 pb-4">
              <h2 className="text-[22px] font-black text-center text-gray-900 leading-tight">
                🚗 직접 가면 5,000원? 🛵 맡기면 3,500원!
              </h2>
              
              <div className="mt-8 flex justify-between relative">
                {/* Vertical Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2"></div>
                
                {/* Left side: Direct */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <p className="text-sm font-bold text-gray-800">내가 직접 갈 때 😰</p>
                  <div className="relative">
                    <span className="text-4xl">🚗</span>
                    <span className="absolute -top-1 -right-1 text-xl">😰</span>
                  </div>
                  <div className="bg-red-500 text-white px-4 py-1.5 rounded-full font-black text-lg shadow-sm">
                    5,000원
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 leading-tight text-center px-2">
                    왕복 5km, 20분 운전 시 기름값, 시간 등 최소 5,000원의 비용이 발생해요.
                  </p>
                </div>

                {/* Right side: Delivery */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <p className="text-sm font-bold text-gray-800">우리에게 맡길 때 😎</p>
                  <div className="relative">
                    <span className="text-4xl">🛵</span>
                    <span className="absolute -top-1 -right-1 text-xl">😎</span>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-1.5 rounded-full font-black text-lg shadow-sm">
                    3,500원
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 leading-tight text-center px-2">
                    집에서 편하게!<br/>배달 비용은 단 3,500원이에요.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center">
                <div className="border-[3px] border-black rounded-full px-6 py-2 flex items-center gap-2 bg-white shadow-sm">
                  <span className="text-red-500 font-black text-xl italic">1,500원</span>
                  <span className="font-black text-xl italic">오히려 절약! 🥳</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-3 font-medium">
                  배달시키고 남는 돈으로 커피 한 잔의 여유를 즐기세요.
                </p>
              </div>
            </div>

            {/* Popup Footer */}
            <div className="flex bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-gray-800">
              <button 
                onClick={handleDontShowToday}
                className="flex-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors border-r border-gray-100 dark:border-gray-800"
              >
                오늘은 보지 않기
              </button>
              <button 
                onClick={closePopup}
                className="flex-1 py-4 text-sm font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center p-4 sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md justify-between transition-colors">
        <div className="flex items-center gap-2 text-text-main-light dark:text-white cursor-pointer hover:opacity-70 transition-opacity">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>location_on</span>
          <span className="text-lg font-bold tracking-tight">강서구</span>
          <span className="material-symbols-outlined text-gray-400" style={{ fontSize: '20px' }}>expand_more</span>
        </div>
        <button onClick={() => navigate('/driver')} className="flex items-center justify-center rounded-full p-2 text-text-main-light dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>notifications</span>
        </button>
      </div>

      {/* Hero */}
      <div className="px-5 pt-2 pb-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-main-light dark:text-white">
          동네 거래를 더 편하게,<br/>
          <span className="text-primary">당근배송</span>
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
          7km 이내 거리라면 무거운 물건도 대신 배달해드려요.
        </p>
      </div>

      {/* Banner */}
      <div className="px-4">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm group">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-white/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-gray-800 dark:text-gray-200">배송 가능</span>
          </div>
          <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
            반경 7km
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 ml-1">왜 당근배송인가요?</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-1 min-w-[140px] flex-col gap-3 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">평균 절약 비용</p>
              <p className="text-text-main-light dark:text-white text-xl font-bold leading-tight mt-0.5">3,000원</p>
            </div>
          </div>
          <div className="flex flex-1 min-w-[140px] flex-col gap-3 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">절약 시간</p>
              <p className="text-text-main-light dark:text-white text-xl font-bold leading-tight mt-0.5">30분</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Area in Main Feed */}
      <div className="px-4 pb-2">
        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg dark:text-white">직접 가는 것보다 저렴해요</h3>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">인기</span>
          </div>
          <div className="flex items-center gap-3 mb-4 opacity-60">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-sm">directions_car</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-600 dark:text-gray-300">직접 이동 (유류비+시간)</span>
                <span className="font-bold text-gray-600 dark:text-gray-300">약 8,000원</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400 w-[80%] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-sm">local_shipping</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-primary">당근배송</span>
                <span className="font-bold text-primary">5,000원</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[50%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide */}
      <div className="py-6">
        <div className="px-4 flex justify-between items-end mb-3">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">이용 가이드</h3>
        </div>
        <div className="flex overflow-x-auto gap-3 px-4 pb-2 hide-scrollbar">
          {[
            { icon: 'scale', title: '최대 8kg', sub: '한 손 운반' },
            { icon: 'chair', title: '가구 제외', sub: '승용차 적재' },
            { icon: 'door_front', title: '문 앞 배송', sub: '비대면 전달' },
            { icon: 'package_2', title: '포장 필수', sub: '파손 주의' },
          ].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-32 p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center gap-2">
              <span className="material-symbols-outlined text-gray-400 text-3xl">{item.icon}</span>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.title}</span>
              <span className="text-xs text-gray-400 leading-tight">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-8 max-w-md mx-auto z-30">
        <Link to="/apply" className="w-full bg-primary hover:bg-orange-600 active:scale-[0.98] transition-all text-white font-bold text-lg h-14 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
          <span>배송 신청하기</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
