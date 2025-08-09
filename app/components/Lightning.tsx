'use client';

export default function Lightning() {
  return (
    <div className="lightning-container">
      <div className="lightning">
        {/* Corps principal de l'éclair */}
        <div className="lightning-main">
          <div className="lightning-bolt">
            <div className="bolt-segment bolt-1"></div>
            <div className="bolt-segment bolt-2"></div>
            <div className="bolt-segment bolt-3"></div>
            <div className="bolt-segment bolt-4"></div>
            <div className="bolt-segment bolt-5"></div>
          </div>
        </div>
        
        {/* Effet de lueur */}
        <div className="lightning-glow"></div>
        
        {/* Particules d'énergie */}
        <div className="energy-particles">
          <div className="particle" style={{left: '20%', animationDelay: '0s'}}></div>
          <div className="particle" style={{left: '40%', animationDelay: '0.3s'}}></div>
          <div className="particle" style={{left: '60%', animationDelay: '0.6s'}}></div>
          <div className="particle" style={{left: '80%', animationDelay: '0.9s'}}></div>
        </div>
      </div>

      <style jsx>{`
        .lightning-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .lightning {
          position: relative;
          width: 40px;
          height: 50px;
          transform-style: preserve-3d;
          animation: lightningFloat 3s ease-in-out infinite;
        }
        
        @keyframes lightningFloat {
          0%, 100% {
            transform: translateY(0px) rotateY(0deg) scale(1);
          }
          50% {
            transform: translateY(-3px) rotateY(180deg) scale(1.05);
          }
        }
        
        .lightning-main {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .lightning-bolt {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .bolt-segment {
          position: absolute;
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          border-radius: 2px;
          animation: boltFlash 2s ease-in-out infinite;
        }
        
        .bolt-1 {
          width: 6px;
          height: 15px;
          top: 0;
          left: 50%;
          transform: translateX(-50%) rotate(15deg);
          animation-delay: 0s;
        }
        
        .bolt-2 {
          width: 8px;
          height: 12px;
          top: 12px;
          left: 45%;
          transform: rotate(-20deg);
          animation-delay: 0.2s;
        }
        
        .bolt-3 {
          width: 6px;
          height: 10px;
          top: 22px;
          left: 55%;
          transform: rotate(25deg);
          animation-delay: 0.4s;
        }
        
        .bolt-4 {
          width: 7px;
          height: 8px;
          top: 30px;
          left: 40%;
          transform: rotate(-15deg);
          animation-delay: 0.6s;
        }
        
        .bolt-5 {
          width: 5px;
          height: 6px;
          top: 36px;
          left: 60%;
          transform: rotate(30deg);
          animation-delay: 0.8s;
        }
        
        @keyframes boltFlash {
          0%, 100% {
            opacity: 0.8;
            filter: brightness(1) drop-shadow(0 0 2px #fbbf24);
          }
          50% {
            opacity: 1;
            filter: brightness(1.3) drop-shadow(0 0 8px #fbbf24);
          }
        }
        
        .lightning-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
          animation: glowPulse 2s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
        
        .energy-particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #fbbf24;
          border-radius: 50%;
          animation: particleFloat 1.5s ease-in-out infinite;
        }
        
        @keyframes particleFloat {
          0% {
            opacity: 0;
            transform: translateY(0px) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-8px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-15px) scale(0);
          }
        }
      `}</style>
    </div>
  );
} 