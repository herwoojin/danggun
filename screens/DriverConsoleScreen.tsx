
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DriverConsoleScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen relative pb-32">
      <header className="fixed top-0 w-full z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md transition-colors duration-300 max-w-md">
        <div className="flex items-center px-6 py-4 justify-between w-full">
          <button onClick={() => navigate(-1)} className="text-gray-800 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-gray-200 dark:active:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined text-[28px]">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">주문번호 #DG-4029</h2>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">오늘, 오후 2:30</span>
          </div>
          <button className="flex w-12 items-center justify-end group">
            <p className="text-primary text-base font-bold leading-normal group-active:text-primary-dark transition-colors">도움말</p>
          </button>
        </div>
      </header>

      <main className="pt-20 px-4 w-full flex flex-col gap-6">
        {/* Map Section */}
        <section className="relative w-full shadow-soft rounded-2xl overflow-hidden group">
          <div className="w-full h-56 bg-gray-200 relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAltBxMSGKrI5i_uKwYf-0yJHk1PGtSjZ9luJpJh0rDNyl292SUlV3p-fVH6sWkSjPMtyGUMT2Bg-5-ept0x4UZXcuLv3vQa2CuJTh3xELNa4XTcG-jSGQacogxe_A9boRg1v-B-pPENFXqkO0oSfpxCkD6H2bCxvIAI8pd4g4xYVgz9IVCtDBS4_5ALq8ZHun33dO2lSg09fK_kntYKhwBMTMt7Nfq6D468h0Iy5oLM4XR5-abkWgvQwaadPsxBNx-CmR1xkwCDim6")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-4 left-4">
              <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark pl-3 pr-4 shadow-lg border border-gray-100 dark:border-gray-700">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <p className="text-gray-900 dark:text-white text-sm font-bold leading-normal">픽업지로 이동 중</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <button className="size-10 bg-surface-light dark:bg-surface-dark rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200">
                <span className="material-symbols-outlined text-[20px]">my_location</span>
              </button>
            </div>
          </div>
        </section>

        {/* Address Details */}
        <section className="bg-surface-light dark:bg-surface-dark rounded-2xl p-0 shadow-soft border border-gray-100 dark:border-gray-800 overflow-hidden relative">
          <div className="absolute top-12 left-[2.85rem] bottom-12 w-0.5 border-l-2 border-dashed border-gray-300 dark:border-gray-600 z-0"></div>
          <div className="relative z-10 flex items-center gap-4 px-5 py-5 border-b border-gray-100 dark:border-gray-800/50">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 size-12 ring-4 ring-surface-light dark:ring-surface-dark z-10">
                <span className="material-symbols-outlined text-[24px]">storefront</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">픽업</p>
                <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight line-clamp-1">판매자 지원</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal mt-0.5">메이플가 102 (0.5km)</p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="flex size-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[22px]">call</span>
              </button>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-4 px-5 py-5">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 shrink-0 size-12 ring-4 ring-surface-light dark:ring-surface-dark z-10">
                <span className="material-symbols-outlined text-[24px]">home</span>
              </div>
              <div className="flex flex-col justify-center opacity-60">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">배송</p>
                <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight line-clamp-1">구매자 민수</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal mt-0.5">오크가 405</p>
              </div>
            </div>
          </div>
        </section>

        {/* Status Notification Presets */}
        <section className="flex flex-col gap-3">
          <h3 className="text-gray-900 dark:text-white text-base font-bold px-1">도착 예정 알림</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button className="flex-1 min-w-[80px] h-12 rounded-full bg-primary text-white font-bold text-sm shadow-md shadow-primary/20 flex items-center justify-center transition-transform active:scale-95">
              5분 후
            </button>
            <button className="flex-1 min-w-[80px] h-12 rounded-full bg-surface-light dark:bg-surface-dark text-gray-700 dark:text-gray-300 font-bold text-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-colors active:bg-gray-100 dark:active:bg-gray-700">
              10분 후
            </button>
            <button className="flex-1 min-w-[80px] h-12 rounded-full bg-surface-light dark:bg-surface-dark text-gray-700 dark:text-gray-300 font-bold text-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-colors active:bg-gray-100 dark:active:bg-gray-700">
              15분 후
            </button>
          </div>
        </section>
      </main>

      {/* Persistent Bottom Button */}
      <footer className="fixed bottom-0 left-0 w-full z-50 pointer-events-none max-w-md mx-auto">
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark"></div>
        <div className="relative px-6 pb-6 pt-2 w-full pointer-events-auto">
          <button onClick={() => navigate('/review')} className="group relative w-full h-[4.5rem] bg-primary hover:bg-primary-dark rounded-full shadow-glow flex items-center justify-between px-2 active:scale-[0.98] transition-all duration-200">
            <div className="size-14 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
              <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform">near_me</span>
            </div>
            <div className="flex-1 text-center pr-14"> 
              <span className="block text-white text-xl font-bold tracking-tight">도착 완료</span>
              <span className="block text-white/80 text-xs font-medium">터치하여 배송 완료 처리</span>
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default DriverConsoleScreen;
