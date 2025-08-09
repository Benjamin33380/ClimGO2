'use client';

export default function Person() {
  return (
    <div className="person-container">
      <div className="person">
        {/* Tête */}
        <div className="head">
          <div className="head-front"></div>
          <div className="head-back"></div>
          <div className="head-left"></div>
          <div className="head-right"></div>
          <div className="head-top"></div>
          <div className="head-bottom"></div>
        </div>
        
        {/* Corps */}
        <div className="body">
          <div className="body-front"></div>
          <div className="body-back"></div>
          <div className="body-left"></div>
          <div className="body-right"></div>
          <div className="body-top"></div>
          <div className="body-bottom"></div>
        </div>
        
        {/* Bras gauche */}
        <div className="arm-left">
          <div className="arm-front"></div>
          <div className="arm-back"></div>
        </div>
        
        {/* Bras droit */}
        <div className="arm-right">
          <div className="arm-front"></div>
          <div className="arm-back"></div>
        </div>
        
        {/* Jambes */}
        <div className="leg-left">
          <div className="leg-front"></div>
          <div className="leg-back"></div>
        </div>
        
        <div className="leg-right">
          <div className="leg-front"></div>
          <div className="leg-back"></div>
        </div>
        
        {/* Ombre */}
        <div className="shadow"></div>
      </div>

      <style jsx>{`
        .person-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .person {
          position: relative;
          width: 40px;
          height: 60px;
          transform-style: preserve-3d;
          animation: personWalk 3s ease-in-out infinite;
        }
        
        @keyframes personWalk {
          0%, 100% {
            transform: rotateY(0deg) rotateX(10deg);
          }
          25% {
            transform: rotateY(90deg) rotateX(10deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(10deg);
          }
          75% {
            transform: rotateY(270deg) rotateX(10deg);
          }
        }
        
        .head {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          transform-style: preserve-3d;
        }
        
        .head > div {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
        }
        
        .head-front { transform: translateZ(10px); }
        .head-back { transform: translateZ(-10px); }
        .head-left { transform: rotateY(-90deg) translateZ(10px); }
        .head-right { transform: rotateY(90deg) translateZ(10px); }
        .head-top { transform: rotateX(90deg) translateZ(10px); }
        .head-bottom { transform: rotateX(-90deg) translateZ(10px); }
        
        .body {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 20px;
          transform-style: preserve-3d;
        }
        
        .body > div {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 4px;
        }
        
        .body-front { transform: translateZ(8px); }
        .body-back { transform: translateZ(-8px); }
        .body-left { transform: rotateY(-90deg) translateZ(8px); }
        .body-right { transform: rotateY(90deg) translateZ(8px); }
        .body-top { transform: rotateX(90deg) translateZ(10px); }
        .body-bottom { transform: rotateX(-90deg) translateZ(10px); }
        
        .arm-left {
          position: absolute;
          top: 22px;
          left: 2px;
          width: 6px;
          height: 12px;
          transform-style: preserve-3d;
          transform: rotateZ(-20deg);
        }
        
        .arm-right {
          position: absolute;
          top: 22px;
          right: 2px;
          width: 6px;
          height: 12px;
          transform-style: preserve-3d;
          transform: rotateZ(20deg);
        }
        
        .arm-left > div, .arm-right > div {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 3px;
        }
        
        .arm-front { transform: translateZ(3px); }
        .arm-back { transform: translateZ(-3px); }
        
        .leg-left {
          position: absolute;
          bottom: 0;
          left: 8px;
          width: 6px;
          height: 15px;
          transform-style: preserve-3d;
          transform: rotateZ(-5deg);
        }
        
        .leg-right {
          position: absolute;
          bottom: 0;
          right: 8px;
          width: 6px;
          height: 15px;
          transform-style: preserve-3d;
          transform: rotateZ(5deg);
        }
        
        .leg-left > div, .leg-right > div {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e293b, #334155);
          border-radius: 3px;
        }
        
        .leg-front { transform: translateZ(3px); }
        .leg-back { transform: translateZ(-3px); }
        
        .shadow {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 8px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          filter: blur(2px);
        }
      `}</style>
    </div>
  );
} 