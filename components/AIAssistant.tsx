import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles } from 'lucide-react';

interface AIAssistantProps {
  isDark: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: 'Hello! I am the Altrex Prime AI. How can I assist you with our facilities or security services today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Simulated API Call
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: "I've received your inquiry regarding " + userMsg + ". Our team specializes in integrated FM and security solutions in Dubai. How else can I help?"
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end font-sans">
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="mb-4 w-[calc(100vw-2rem)] md:w-[400px] h-[70vh] md:h-[550px] bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative"
              >
                {/* HEADER */}
                <div className="p-5 md:p-6 bg-red-600 flex justify-between items-center text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-tight">Altrex Assistant</h4>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Online</span>
                      </div>
                    </div>
                  </div>
                  <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* CHAT FEED */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50 dark:bg-[#080808] custom-scrollbar">
                  {messages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                            m.role === 'user'
                                ? 'bg-red-600 text-white rounded-tr-none shadow-lg shadow-red-600/10'
                                : 'bg-white dark:bg-white/10 text-slate-700 dark:text-gray-200 rounded-tl-none border border-slate-100 dark:border-white/5 shadow-sm'
                        }`}>
                          {m.text}
                        </div>
                      </div>
                  ))}
                  {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-white/10 p-4 rounded-2xl rounded-tl-none">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" />
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      </div>
                  )}
                </div>

                {/* INPUT */}
                <div className="p-4 md:p-6 bg-white dark:bg-[#0d0d0d] border-t border-slate-100 dark:border-white/5">
                  <div className="relative flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask about our services..."
                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-red-500 dark:text-white text-slate-800 transition-colors"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-red-600 hover:text-red-700 disabled:opacity-50"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-slate-400 dark:text-gray-600 mt-3 font-medium uppercase tracking-widest">Powered by Altrex AI</p>
                </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* FLOATING BOT BUTTON */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group relative ${
                isOpen ? 'bg-white dark:bg-[#0a0a0a] text-red-600' : 'bg-red-600 text-white'
            }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={28} />
                </motion.div>
            ) : (
                <motion.div key="bot" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                  <div className="relative">
                    <Bot size={32} />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-red-600"></span>
                </span>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </button>

        <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(220, 38, 38, 0.2); border-radius: 10px; }
      `}</style>
      </div>
  );
};

export default AIAssistant;