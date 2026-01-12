
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeliveryMode } from '../types';
import { optimizeDeliveryNote, analyzeItemSafety } from '../services/geminiService';

const ApplyScreen: React.FC = () => {
  const navigate = useNavigate();
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>('fast');
  const [note, setNote] = useState('');
  const [safetyTip, setSafetyTip] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Debounced safety analysis
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (note.length > 3) {
        setIsAnalyzing(true);
        const tip = await analyzeItemSafety(note);
        setSafetyTip(tip);
        setIsAnalyzing(false);
      } else {
        setSafetyTip('');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [note]);

  const handleOptimize = async () => {
    if (!note) return;
    setIsOptimizing(true);
    const optimized = await optimizeDeliveryNote(note);
    setNote(optimized);
    setIsOptimizing(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-transparent dark:border-border-dark shrink-0">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-10">배송 신청</h1>
      </header>

      <main className="flex-1 px-4 py-4 pb-48 overflow-y-auto w-full hide-scrollbar">
        {/* Location Inputs */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark mb-6">
          <div className="relative flex flex-col gap-4">
            <div className="absolute left-[1.3rem] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-border-light dark:border-border-dark pointer-events-none"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-filled text-primary text-xl shrink-0 z-10 bg-surface-light dark:bg-surface-dark py-1">radio_button_checked</span>
              <div className="flex-1">
                <label className="text-xs font-medium text-text-sub-light dark:text-text-sub-dark ml-1 mb-1 block">픽업 위치</label>
                <div className="flex items-center bg-background-light dark:bg-background-dark/50 rounded-lg px-3 py-2 border border-transparent focus-within:border-primary transition-colors">
                  <input className="bg-transparent border-none w-full text-sm font-medium focus:ring-0 p-0 text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light/50" placeholder="지번, 도로명, 건물명으로 검색" type="text" defaultValue="강남역 1번 출구"/>
                  <button className="text-primary ml-2 flex items-center">
                    <span className="material-symbols-outlined text-lg">my_location</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-filled text-primary text-xl shrink-0 z-10 bg-surface-light dark:bg-surface-dark py-1">location_on</span>
              <div className="flex-1">
                <label className="text-xs font-medium text-text-sub-light dark:text-text-sub-dark ml-1 mb-1 block">배송 위치</label>
                <div className="flex items-center bg-background-light dark:bg-background-dark/50 rounded-lg px-3 py-2 border border-transparent focus-within:border-primary transition-colors">
                  <input className="bg-transparent border-none w-full text-sm font-medium focus:ring-0 p-0 text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light/50" placeholder="상세 주소를 입력해주세요" type="text"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Illustration */}
        <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden mb-6 shadow-sm border border-border-light dark:border-border-dark group">
          <div className="absolute inset-0 bg-cover bg-center opacity-80 dark:opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAltBxMSGKrI5i_uKwYf-0yJHk1PGtSjZ9luJpJh0rDNyl292SUlV3p-fVH6sWkSjPMtyGUMT2Bg-5-ept0x4UZXcuLv3vQa2CuJTh3xELNa4XTcG-jSGQacogxe_A9boRg1v-B-pPENFXqkO0oSfpxCkD6H2bCxvIAI8pd4g4xYVgz9IVCtDBS4_5ALq8ZHun33dO2lSg09fK_kntYKhwBMTMt7Nfq6D468h0Iy5oLM4XR5-abkWgvQwaadPsxBNx-CmR1xkwCDim6')" }}></div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 200">
            <path d="M50,150 Q200,50 350,150" fill="none" stroke="#fa8a2e" strokeDasharray="8 4" strokeLinecap="round" strokeWidth="4"></path>
            <circle cx="50" cy="150" fill="#fa8a2e" r="6" stroke="white" strokeWidth="2"></circle>
            <circle cx="350" cy="150" fill="#fa8a2e" r="6" stroke="white" strokeWidth="2"></circle>
          </svg>
          <div className="absolute top-3 left-3 bg-surface-light dark:bg-surface-dark px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-border-light/50 dark:border-border-dark/50">
            <span className="material-symbols-outlined text-primary text-sm">straighten</span>
            <span className="text-xs font-bold text-text-main-light dark:text-text-main-dark">1.2km</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="mb-8">
          <div className="flex items-end justify-between mb-4 px-2">
            <div>
              <p className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">예상 합계</p>
              <h2 className="text-3xl font-bold text-text-main-light dark:text-white tracking-tight">5,200 <span className="text-base font-normal text-text-sub-light">원</span></h2>
            </div>
            <button className="text-primary text-xs font-semibold bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
              상세 요금
            </button>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-text-sub-light dark:text-text-sub-dark">기본 요금</span>
              <span className="text-sm font-medium">4,000원</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-sub-light dark:text-text-sub-dark">거리 추가</span>
              <span className="text-sm font-medium">+1,200원</span>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-text-main-light dark:text-white ml-2 mb-3 block">배송 옵션</label>
          <div className="grid grid-cols-2 gap-3">
            <label className="relative cursor-pointer group" onClick={() => setDeliveryMode('fast')}>
              <input type="radio" name="delivery_mode" className="peer sr-only" checked={deliveryMode === 'fast'} readOnly />
              <div className="p-4 rounded-xl border-2 border-transparent bg-surface-light dark:bg-surface-dark peer-checked:border-primary peer-checked:bg-primary/5 transition-all shadow-sm h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-filled text-primary">bolt</span>
                  <span className="font-bold text-text-main-light dark:text-white">빠른 배달</span>
                </div>
                <span className="text-xs text-text-sub-light dark:text-text-sub-dark">30분 이내</span>
              </div>
              <div className="absolute top-2 right-2 hidden peer-checked:block text-primary">
                <span className="material-symbols-filled text-xl">check_circle</span>
              </div>
            </label>
            <label className="relative cursor-pointer group" onClick={() => setDeliveryMode('next')}>
              <input type="radio" name="delivery_mode" className="peer sr-only" checked={deliveryMode === 'next'} readOnly />
              <div className="p-4 rounded-xl border-2 border-transparent bg-surface-light dark:bg-surface-dark peer-checked:border-primary peer-checked:bg-primary/5 transition-all shadow-sm h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark">schedule</span>
                  <span className="font-bold text-text-main-light dark:text-white">내일 도착</span>
                </div>
                <span className="text-xs text-text-sub-light dark:text-text-sub-dark">1,000원 할인</span>
              </div>
              <div className="absolute top-2 right-2 hidden peer-checked:block text-primary">
                <span className="material-symbols-filled text-xl">check_circle</span>
              </div>
            </label>
          </div>
        </div>

        {/* Smart Note (AI Integration) */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-text-main-light dark:text-white ml-2 mb-3 block flex items-center justify-between">
            물품명 및 요청사항
            <button 
              onClick={handleOptimize} 
              disabled={isOptimizing || !note}
              className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1 hover:bg-primary/20 disabled:opacity-50 transition-all"
            >
              <span className="material-symbols-outlined text-[12px]">{isOptimizing ? 'sync' : 'auto_awesome'}</span>
              AI 다듬기
            </button>
          </label>
          <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-xl border border-border-light dark:border-border-dark relative">
            <textarea 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-transparent border-0 resize-none p-0 text-sm focus:ring-0 text-text-main-light dark:text-white placeholder:text-text-sub-light/40" 
              placeholder="예: 빈티지 램프, 문 앞에 놔주세요."
              rows={2}
            />
            {isAnalyzing && (
              <div className="absolute right-3 bottom-3 animate-pulse">
                <span className="material-symbols-outlined text-primary text-sm">psychology</span>
              </div>
            )}
          </div>
          {safetyTip && (
            <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg animate-in slide-in-from-top-1 duration-300">
              <span className="material-symbols-outlined text-blue-500 text-sm">info</span>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">AI 팁: {safetyTip}</p>
            </div>
          )}
        </div>

        {/* Payer Selection */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-text-main-light dark:text-white ml-2 mb-3 block">누가 결제하나요?</label>
          <div className="flex p-1 bg-surface-light dark:bg-surface-dark rounded-full border border-border-light dark:border-border-dark">
            <label className="flex-1 cursor-pointer">
              <input className="peer sr-only" name="payer" type="radio"/>
              <div className="text-center py-2.5 rounded-full text-sm font-medium text-text-sub-light dark:text-text-sub-dark peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md transition-all">
                구매자
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input defaultChecked className="peer sr-only" name="payer" type="radio"/>
              <div className="text-center py-2.5 rounded-full text-sm font-medium text-text-sub-light dark:text-text-sub-dark peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md transition-all">
                판매자
              </div>
            </label>
          </div>
        </div>
      </main>

      {/* Persistent Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark p-4 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-2xl z-20 max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-3 justify-center">
          <span className="material-symbols-outlined text-green-600 text-sm">verified_user</span>
          <p className="text-xs text-text-sub-light dark:text-text-sub-dark">안심 배송 보장</p>
        </div>
        <button onClick={() => navigate('/tracking')} className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <span>5,200원 결제 및 신청하기</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default ApplyScreen;
