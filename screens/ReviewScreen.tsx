
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { refineReview } from '../services/geminiService';

const ReviewScreen: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4);
  const [reviewText, setReviewText] = useState('');
  const [isRefining, setIsRefining] = useState(false);

  const handleRefine = async () => {
    if (!reviewText) return;
    setIsRefining(true);
    const refined = await refineReview(reviewText);
    setReviewText(refined);
    setIsRefining(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <button onClick={() => navigate('/')} className="p-2 -ml-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        <h1 className="text-lg font-bold">배송 평가하기</h1>
        <div className="w-10"></div> 
      </header>

      <main className="flex-1 px-5 pb-32 flex flex-col items-center w-full max-w-lg mx-auto">
        {/* Driver Card */}
        <div className="mt-4 flex flex-col items-center gap-3 w-full">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center shadow-md ring-4 ring-white dark:ring-[#23180f]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb48X6LVn5c8w_2b-Z9CEpVTEiydjCbOGPoybXQAyTPmyd4gfSbvhtedat3jtAzJQ-ehCbX2Q0GZZ51IfABKEF3hq3lt14YFRiD62C6UtRUCKHkl-J3QOcbjg5WVbcAT8Q7F0rPJc-JNuXHSTGuhFdBnSuKIXnkeTdf51pL6c87I1m2KkjVXukokrlwpj9N9s2h1kSFcbD_1jtBR4kfoHVXMMBUJ9NP_0wZZGjFgAZutJ6Pa5vDA2TBSfZiAl6s7cI22bGgc_-lXyg')" }}></div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background-light dark:bg-background-dark shadow-sm border border-gray-100 dark:border-gray-800">
                <span className="text-xs font-bold text-primary whitespace-nowrap">프리미엄 배달기사</span>
              </span>
            </div>
          </div>
          <div className="text-center mt-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">김민수</h2>
            <div className="flex items-center justify-center gap-1.5 mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
              <span className="flex items-center text-primary">
                <span className="material-symbols-outlined text-[18px]">star</span>
              </span>
              <span>평점 4.9</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-6"></div>

        {/* Star Rating */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h3 className="text-[22px] font-bold text-center tracking-tight">배송은 어떠셨나요?</h3>
          <div className="flex items-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className={`hover:scale-110 transition-transform focus:outline-none ${star <= rating ? 'text-primary' : 'text-gray-200 dark:text-gray-700'}`}>
                <span className={`material-symbols-outlined text-[42px] ${star <= rating ? 'material-symbols-filled' : ''}`}>star</span>
              </button>
            ))}
          </div>
        </div>

        {/* Text Area with AI Refine */}
        <div className="mt-8 w-full">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ml-1">상세 후기</p>
            <button 
              onClick={handleRefine}
              disabled={isRefining || !reviewText}
              className="text-[10px] bg-primary/10 text-primary px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-primary/20 transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[14px]">{isRefining ? 'sync' : 'auto_awesome'}</span>
              AI 정중하게 다듬기
            </button>
          </div>
          <div className="bg-white dark:bg-white/5 rounded-[24px] p-5 shadow-sm ring-1 ring-gray-200 dark:ring-white/10 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <textarea 
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full h-24 bg-transparent border-0 resize-none p-0 text-base placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-0 text-gray-900 dark:text-gray-100 leading-relaxed" 
              placeholder="배송 경험을 들려주세요..."
            ></textarea>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 w-full">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 ml-1">좋았던 점을 골라주세요</p>
          <div className="flex flex-wrap gap-2.5">
            {['빠른 배송', '친절해요', '안전한 운반', '시간 엄수'].map((tag, i) => (
              <button key={i} className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-transparent z-20 max-w-md mx-auto">
        <button onClick={() => navigate('/')} className="w-full bg-primary text-white font-bold text-[17px] py-4 rounded-full shadow-xl shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <span>리뷰 제출하기</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewScreen;
