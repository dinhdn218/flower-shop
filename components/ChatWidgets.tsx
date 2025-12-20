'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidgets() {
  const [isZaloOpen, setIsZaloOpen] = useState(false);
  const [isMessengerOpen, setIsMessengerOpen] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);

  // Load Messenger SDK
  useEffect(() => {
    // Facebook Messenger Chat Plugin
    if (typeof window !== 'undefined') {
      (window as any).fbAsyncInit = function() {
        (window as any).FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };

      // Load the SDK asynchronously
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/vi_VN/sdk.js';
      document.body.appendChild(script);
    }
  }, []);

  const openZalo = () => {
    window.open('https://zalo.me/0328717972', '_blank');
  };

  const openMessenger = () => {
    // Replace with your Facebook Page ID
    window.open('https://m.me/yourpagename', '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatMenuOpen && (
          <div className="absolute bottom-10 md:bottom-14 right-0 bg-white rounded-lg shadow-2xl p-4 w-64 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Liên hệ với chúng tôi</h3>
              <button
                onClick={() => setIsChatMenuOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-3">
              {/* Zalo */}
              <button
                onClick={openZalo}
                className="w-full flex items-center gap-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0068FF">
                    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.814 6.614 4.644 8.656.184.132.308.33.343.548l.236 1.809c.027.205.132.384.288.493.088.062.19.094.293.094.078 0 .157-.015.232-.046l2.092-.848c.147-.06.31-.07.462-.03 1.104.292 2.265.444 3.41.444 6.627 0 12-4.974 12-11.111S18.627 0 12 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Chat Zalo</div>
                  <div className="text-xs opacity-90">Phản hồi nhanh</div>
                </div>
              </button>

              {/* Messenger */}
              <button
                onClick={openMessenger}
                className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="url(#messenger-gradient)">
                    <defs>
                      <linearGradient id="messenger-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#00B2FF'}} />
                        <stop offset="100%" style={{stopColor: '#006AFF'}} />
                      </linearGradient>
                    </defs>
                    <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.498 1.814 6.614 4.644 8.656.184.132.308.33.343.548l.236 1.809c.038.288.327.474.596.383l2.382-.967c.146-.06.308-.07.462-.03 1.104.292 2.265.444 3.41.444 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.19 14.963l-3.055-3.252-5.963 3.252 6.559-6.963 3.13 3.252 5.889-3.252-6.56 6.963z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Messenger</div>
                  <div className="text-xs opacity-90">Chat ngay</div>
                </div>
              </button>

              {/* Phone */}
              <a
                href="tel:0328717972"
                className="w-full flex items-center gap-3 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#22C55E">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Hotline</div>
                  <div className="text-xs opacity-90">032 871 7972</div>
                </div>
              </a>
            </div>
          </div>
        )}

        {/* Main Chat Button */}
        <button
          onClick={() => setIsChatMenuOpen(!isChatMenuOpen)}
          className="bg-pink-600 text-white w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-pink-700 transition-all hover:scale-110"
        >
          {isChatMenuOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Messenger Chat Plugin (hidden, using custom buttons instead) */}
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat" style={{ display: 'none' }}></div>
    </>
  );
}
