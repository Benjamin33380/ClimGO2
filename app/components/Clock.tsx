'use client';

export default function Clock() {
  return (
    <div className="clock-container">
      <div className="clock">
        <div className="clock-face">
          <div className="clock-center"></div>
          <div className="hour-hand"></div>
          <div className="minute-hand"></div>
          <div className="second-hand"></div>
          {/* Marqueurs d'heures */}
          <div className="hour-marker" style={{transform: 'rotate(0deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(30deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(60deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(90deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(120deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(150deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(180deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(210deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(240deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(270deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(300deg)'}}></div>
          <div className="hour-marker" style={{transform: 'rotate(330deg)'}}></div>
        </div>
        <div className="clock-back"></div>
        <div className="clock-rim"></div>
      </div>

      <style jsx>{`
        .clock-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .clock {
          position: relative;
          width: 50px;
          height: 50px;
          transform-style: preserve-3d;
          animation: clockRotate 4s linear infinite;
        }
        
        @keyframes clockRotate {
          0% {
            transform: rotateY(0deg) rotateX(15deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(15deg);
          }
        }
        
        .clock-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border: 3px solid #475569;
          transform: translateZ(5px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .clock-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #475569, #334155);
          transform: translateZ(-5px);
        }
        
        .clock-rim {
          position: absolute;
          width: 110%;
          height: 110%;
          border-radius: 50%;
          background: linear-gradient(135deg, #64748b, #475569);
          transform: translateZ(-2px);
          top: -5%;
          left: -5%;
        }
        
        .clock-center {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1e293b;
          z-index: 10;
        }
        
        .hour-hand {
          position: absolute;
          width: 3px;
          height: 15px;
          background: #1e293b;
          transform-origin: bottom center;
          transform: translateY(-7px) rotate(45deg);
          border-radius: 2px;
        }
        
        .minute-hand {
          position: absolute;
          width: 2px;
          height: 20px;
          background: #475569;
          transform-origin: bottom center;
          transform: translateY(-10px) rotate(90deg);
          border-radius: 1px;
        }
        
        .second-hand {
          position: absolute;
          width: 1px;
          height: 22px;
          background: #ef4444;
          transform-origin: bottom center;
          transform: translateY(-11px) rotate(180deg);
          border-radius: 0.5px;
        }
        
        .hour-marker {
          position: absolute;
          width: 2px;
          height: 8px;
          background: #475569;
          transform-origin: center 25px;
          top: 0;
          left: 50%;
          margin-left: -1px;
        }
      `}</style>
    </div>
  );
} 