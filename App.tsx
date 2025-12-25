
import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { QUESTIONS, PERSONALITY_TYPES } from './constants';
import { ViewState, Dimension } from './types';
import { ResultReport } from './components/ResultReport';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<Dimension, string[]>>({
    'E/I': [], 'S/N': [], 'T/F': [], 'J/P': []
  });
  const [userName, setUserName] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const startQuiz = () => {
    if (!userName.trim()) {
      alert("请填写一个称呼，让我们更好地认识你。");
      return;
    }
    setView('instructions');
  };

  const beginTest = () => {
    setView('quiz');
  };

  const handleAnswer = (dimension: Dimension, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [dimension]: [...prev[dimension], value]
    }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      processResult();
    }
  };

  const processResult = () => {
    setView('loading');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setLoadingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setView('result');
      }
    }, 40); // Slightly faster for more questions
  };

  const calculateType = () => {
    const code = (Object.keys(answers) as Dimension[]).map(dim => {
      const counts = answers[dim].reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const pairs = dim.split('/');
      // Tie-breaker: favors first of the pair if equal
      return (counts[pairs[0]] || 0) >= (counts[pairs[1]] || 0) ? pairs[0] : pairs[1];
    }).join('');

    return PERSONALITY_TYPES[code] || PERSONALITY_TYPES['default'];
  };

  const getDimensionScores = () => {
    const scores: Record<string, number> = {};
    (Object.keys(answers) as Dimension[]).forEach(dim => {
        const counts = answers[dim].reduce((acc, val) => {
          acc[val] = (acc[val] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        const pairs = dim.split('/');
        // Percentage of the first trait in the pair
        const total = (counts[pairs[0]] || 0) + (counts[pairs[1]] || 0);
        scores[dim] = total > 0 ? (counts[pairs[0]] || 0) / total : 0.5;
    });
    return scores;
  };

  return (
    <div className="min-h-screen flex flex-col max-w-lg mx-auto bg-white shadow-2xl relative overflow-x-hidden">
      <Header />

      <main className="flex-grow px-8 py-10">
        {view === 'landing' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-pink-500 bg-pink-50 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                <span className="animate-pulse w-2 h-2 rounded-full bg-pink-500"></span>
                开启灵魂探索之旅
              </div>
              <h1 className="text-4xl font-black text-gray-800 leading-tight">
                玖月LoveType<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">遇见未见的自己</span>
              </h1>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                爱情是一场修行，<br/>先了解自己的灵魂，才能遇见对的人。
              </p>
            </div>

            {/* Benefit Cards */}
            <div className="grid gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 shrink-0 bg-pink-100 text-pink-500 rounded-xl flex items-center justify-center font-bold">01</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">深度自我察觉</h4>
                  <p className="text-gray-400 text-xs">通过15个核心场景，挖掘你潜意识里的恋爱模型。</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 shrink-0 bg-indigo-50 text-indigo-400 rounded-xl flex items-center justify-center font-bold">02</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">灵魂伴侣画像</h4>
                  <p className="text-gray-400 text-xs">勾勒出与你能量共鸣的理想伴侣应有的模样。</p>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className="space-y-6 pt-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="请输入你的昵称"
                  className="w-full bg-gray-50 border-2 border-transparent rounded-[2rem] px-8 py-5 focus:bg-white focus:border-pink-200 outline-none transition-all text-center text-lg placeholder:text-gray-300 shadow-inner"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && startQuiz()}
                />
              </div>
              <button
                onClick={startQuiz}
                className="w-full gradient-pink text-white font-black py-6 rounded-[2rem] shadow-xl shadow-pink-200 active:scale-[0.98] transition-all text-xl tracking-widest"
              >
                开始探索
              </button>
              <p className="text-[10px] text-gray-300 text-center uppercase tracking-widest">
                Explore yourself • Love the world
              </p>
            </div>

            <div className="border-t border-gray-100 pt-10">
              <div className="bg-rose-50/50 p-6 rounded-[2rem] border border-rose-100">
                <p className="text-rose-700/80 text-xs leading-relaxed italic text-center">
                  “好的爱情不是寻找一个完美的另一半，<br/>而是学着通过另一个人的眼睛，看到那个发光的自己。”
                </p>
              </div>
            </div>
          </div>
        )}

        {view === 'instructions' && (
          <div className="animate-fadeIn space-y-10 py-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black text-gray-800">测前必读</h2>
              <div className="py-2">
                <p className="text-rose-500 font-black text-2xl tracking-tighter italic mb-1">
                  亲爱的 {userName}
                </p>
                <p className="text-gray-400 text-sm font-medium">在开启探索前请知晓：</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-bold shrink-0">1</div>
                <p className="text-gray-600 leading-relaxed pt-1">本测试包含 <span className="text-pink-500 font-bold">15</span> 个精心设计的场景问题，预计耗时 3 分钟。</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-bold shrink-0">2</div>
                <p className="text-gray-600 leading-relaxed pt-1">请根据你最直观的 <span className="text-pink-500 font-bold">真实想法</span> 和日常行为习惯选择答案，无需犹豫。</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-bold shrink-0">3</div>
                <p className="text-gray-600 leading-relaxed pt-1">问题 <span className="text-pink-500 font-bold">没有对错</span> 之分，诚实作答才能帮我们绘制出最准确的灵魂图谱。</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-bold shrink-0">4</div>
                <p className="text-gray-600 leading-relaxed pt-1">完成所有问题后，系统将即刻揭晓你的恋爱底色与契合报告。</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={beginTest}
                className="w-full gradient-pink text-white font-black py-5 rounded-full shadow-lg active:scale-95 transition-all text-lg"
              >
                我准备好了，开始测评
              </button>
              <p className="text-center text-gray-400 text-xs mt-6 leading-relaxed">
                愿这份探索如林间微风，轻拂过你通往爱的小径，<br/>带你走向那个正为你而来的灵魂。
              </p>
            </div>
          </div>
        )}

        {view === 'quiz' && (
          <div className="animate-fadeIn">
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                  Progress {currentQuestionIndex + 1} / {QUESTIONS.length}
                </span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="gradient-pink h-full transition-all duration-700 ease-out"
                  style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-2xl font-black text-gray-800 mb-12 leading-relaxed text-center min-h-[5rem] flex items-center justify-center">
              {QUESTIONS[currentQuestionIndex].text}
            </h2>

            <div className="space-y-4">
              {QUESTIONS[currentQuestionIndex].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(QUESTIONS[currentQuestionIndex].dimension, opt.value)}
                  className="w-full bg-white border-2 border-gray-100 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-50 p-6 rounded-[1.5rem] text-center transition-all group relative active:scale-[0.98] animate-slideUp"
                >
                  <span className="text-gray-600 font-medium group-hover:text-pink-600 transition-colors">{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'loading' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-10 animate-fadeIn">
            <div className="relative">
              <div className="w-40 h-40 border-[6px] border-pink-50 rounded-full animate-spin border-t-pink-500 shadow-2xl shadow-pink-100"></div>
              <div className="absolute inset-0 flex items-center justify-center text-pink-500 font-black text-2xl">
                {loadingProgress}%
              </div>
            </div>
            <div className="space-y-4 px-10">
              <h2 className="text-2xl font-black text-gray-800">正在链接你的潜意识...</h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed h-12">
                {loadingProgress < 30 ? "正在检索情感倾向模型..." :
                 loadingProgress < 60 ? "正在分析 15 个维度的权重分配..." :
                 loadingProgress < 90 ? "正在为您匹配契合度画像..." :
                 "报告正在排版，遇见未见的自己..."}
              </p>
            </div>
          </div>
        )}

        {view === 'result' && (
          <ResultReport
            personality={calculateType()}
            scores={getDimensionScores()}
            userName={userName}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
