
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrackingScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header Buttons */}
      <div className="absolute top-0 left-0 w-full z-20 p-4 pt-6 flex items-center justify-between pointer-events-none max-w-md mx-auto">
        <button onClick={() => navigate('/')} className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/60 shadow-sm backdrop-blur-sm text-neutral-900 dark:text-white hover:bg-white dark:hover:bg-black transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex gap-2 pointer-events-auto">
          <button onClick={() => navigate('/driver')} className="flex size-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/60 shadow-sm backdrop-blur-sm text-neutral-900 dark:text-white hover:bg-white dark:hover:bg-black transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </div>

      {/* Map View */}
      <div className="relative h-[45vh] w-full shrink-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAltBxMSGKrI5i_uKwYf-0yJHk1PGtSjZ9luJpJh0rDNyl292SUlV3p-fVH6sWkSjPMtyGUMT2Bg-5-ept0x4UZXcuLv3vQa2CuJTh3xELNa4XTcG-jSGQacogxe_A9boRg1v-B-pPENFXqkO0oSfpxCkD6H2bCxvIAI8pd4g4xYVgz9IVCtDBS4_5ALq8ZHun33dO2lSg09fK_kntYKhwBMTMt7Nfq6D468h0Iy5oLM4XR5-abkWgvQwaadPsxBNx-CmR1xkwCDim6")' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Car Marker */}
          <div className="absolute top-[40%] left-[45%] flex flex-col items-center justify-center">
            <div className="absolute size-24 rounded-full bg-primary/20 animate-pulse"></div>
            <div className="relative z-10 bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center transform -translate-y-1">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            </div>
          </div>
          {/* Destination Marker */}
          <div className="absolute top-[25%] right-[20%] flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 text-neutral-900 dark:text-white p-1.5 rounded-full shadow-md">
              <span className="material-symbols-outlined text-[18px] text-red-500 material-symbols-filled">location_on</span>
            </div>
          </div>
          <svg className="absolute inset-0 w-full h-full z-0 drop-shadow-md" style={{ pointerEvents: 'none' }}>
            <path d="M 170 180 Q 220 150 280 120" fill="none" stroke="#fa8a2e" strokeDasharray="8 4" strokeLinecap="round" strokeWidth="4"></path>
          </svg>
        </div>
      </div>

      {/* Content Sheet */}
      <div className="relative flex-1 -mt-6 rounded-t-[2rem] bg-background-light dark:bg-background-dark w-full z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Driver Profile */}
        <div className="px-5 pt-2 pb-6">
          <div className="bg-white dark:bg-[#2c241b] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 rounded-full size-12 bg-cover bg-center shrink-0 border-2 border-white dark:border-gray-700 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKsVtyJD6IfJnrAD2xkLh0_uFZvoMmhEApA0LA7oUVD8-maLKZ8qouYiK-NbRwsPzKkcQDFKpktHrDuvvE-wQFpUCmFVhghz4bbMV52cyPptE6rVNiXRx2IafNYlTsr2oWPzUUYee-Y9lUU27I7bDJq0yaKP8SBpEqghwulaaMMw_CU_S8zoSlYY8yg61rG5kNdOIMYTo71cjl78n6sTJJUNqVsBVqHJkCO341h34GZxhowNAa7sYIdxYdAa35Yvs_HqL7o14aCkR5")' }}></div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-tight">김민수</h3>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-yellow-500 material-symbols-filled">star</span>
                  <span className="font-medium text-neutral-700 dark:text-gray-300">4.9</span>
                  <span>•</span>
                  <span>블루 포터</span>
                </div>
              </div>
            </div>
            <button className="bg-primary/10 hover:bg-primary/20 active:bg-primary/30 text-primary rounded-full size-10 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined material-symbols-filled">call</span>
            </button>
          </div>
        </div>

        {/* Status Text */}
        <div className="px-6 pb-2">
          <h1 className="text-[28px] font-bold text-neutral-900 dark:text-white leading-tight">
            <span className="text-primary">12분 후</span> 도착 예정
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">빈티지 램프 · 3.2km 남음</p>
        </div>
        
        {/* Timeline */}
        <div className="flex-1 px-6 py-6 overflow-y-auto hide-scrollbar">
          <div className="grid grid-cols-[32px_1fr] gap-x-4 h-full pb-20">
            {/* Step 1: Done */}
            <div className="flex flex-col items-center">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
              </div>
              <div className="w-[2px] bg-primary/30 h-full -mt-1 -mb-1"></div>
            </div>
            <div className="flex flex-col justify-start pb-8 pt-1">
              <div className="flex justify-between items-start">
                <p className="text-neutral-900 dark:text-gray-100 text-base font-semibold leading-none">판매자 준비 완료</p>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">14:30</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">물품 확인 및 포장 완료</p>
            </div>

            {/* Step 2: Active */}
            <div className="flex flex-col items-center">
              <div className="relative size-8 flex items-center justify-center z-10">
                <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping opacity-75"></div>
                <div className="relative size-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                  <span className="material-symbols-outlined text-white text-[18px]">local_shipping</span>
                </div>
              </div>
              <div className="w-[2px] h-full -mt-1 -mb-1 border-l-2 border-dashed border-gray-300 dark:border-gray-600 w-0 ml-[1px]"></div>
            </div>
            <div className="flex flex-col justify-start pb-8 pt-1">
              <div className="flex justify-between items-start">
                <p className="text-primary text-lg font-bold leading-none">배달 중</p>
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">15:02 도착 예정</span>
              </div>
              <p className="text-neutral-700 dark:text-gray-300 text-sm mt-1">기사가 배송지로 이동 중</p>
            </div>

            {/* Step 3: Pending */}
            <div className="flex flex-col items-center">
              <div className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[18px]">flag</span>
              </div>
            </div>
            <div className="flex flex-col justify-start pt-1">
              <p className="text-gray-400 dark:text-gray-500 text-base font-medium leading-none">배달 완료</p>
              <p className="text-gray-400 dark:text-gray-600 text-sm mt-1">배달 대기 중</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white dark:bg-[#1a120b] border-t border-gray-100 dark:border-gray-800 rounded-b-[2rem] z-20">
          <div className="flex gap-3">
            <button className="flex-1 h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-neutral-900 dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              문제 신고
            </button>
            <button onClick={() => navigate('/review')} className="flex-1 h-12 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 hover:bg-orange-600 transition-colors">
              팁 보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingScreen;
