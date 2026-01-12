
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSupportAnswer } from '../services/geminiService';

const TrackingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAI = async () => {
    if (!question || isLoading) return;
    setIsLoading(true);
    setAnswer('');
    const context = "배송 상태: 배달 중, 남은 시간: 12분, 물품: 빈티지 램프, 기사: 김민수(4.9점)";
    const res = await getSupportAnswer(question, context);
    setAnswer(res);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header Buttons */}
      <div className="absolute top-0 left-0 w-full z-20 p-4 pt-6 flex items-center justify-between pointer-events-none max-w-md mx-auto">
        <button onClick={() => navigate('/')} className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/60 shadow-sm backdrop-blur-sm text-neutral-900 dark:text-white hover:bg-white dark:hover:bg-black transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex gap-2 pointer-events-auto">
          <button onClick={() => setShowAI(true)} className="flex size-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/60 shadow-sm backdrop-blur-sm text-primary hover:bg-white dark:hover:bg-black transition-colors">
            <span className="material-symbols-outlined material-symbols-filled">psychology</span>
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
            </div>

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
              </div>
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

      {/* AI Assistant Modal */}
      {showAI && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowAI(false)}></div>
          <div className="relative bg-white dark:bg-surface-dark rounded-t-3xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300 max-w-md mx-auto w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">AI 배송 비서</h3>
                  <p className="text-xs text-gray-500">궁금한 점을 물어보세요</p>
                </div>
              </div>
              <button onClick={() => setShowAI(false)} className="text-gray-400">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 flex-wrap mb-4">
                {["언제 도착해요?", "기사님 친절한가요?", "비가 오는데 괜찮을까요?"].map((q) => (
                  <button 
                    key={q} 
                    onClick={() => setQuestion(q)}
                    className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700">
                <input 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="질문을 입력하세요..."
                  className="bg-transparent border-0 flex-1 text-sm focus:ring-0 dark:text-white"
                  onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                />
                <button onClick={handleAskAI} disabled={isLoading} className="text-primary disabled:opacity-50">
                  <span className="material-symbols-outlined">{isLoading ? 'sync' : 'send'}</span>
                </button>
              </div>
            </div>

            {answer && (
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">{answer}</p>
              </div>
            )}
            <div className="h-4"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingScreen;
