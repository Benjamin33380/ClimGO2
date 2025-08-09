'use client';

export default function Badge() {
  return (
    <div className="badge-container">
      <div className="badge">
        <div className="badge-front">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="badge-back"></div>
        <div className="badge-left"></div>
        <div className="badge-right"></div>
        <div className="badge-top"></div>
        <div className="badge-bottom"></div>
      </div>

      <style jsx>{`
        .badge-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .badge {
          position: relative;
          width: 40px;
          height: 40px;
          transform-style: preserve-3d;
          animation: badgeRotate 3s ease-in-out infinite;
        }
        
        @keyframes badgeRotate {
          0%, 100% {
            transform: rotateY(0deg) rotateX(10deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(10deg);
          }
        }
        
        .badge > div {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid #22c55e;
        }
        
        .badge-front {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          transform: translateZ(20px);
          color: white;
        }
        
        .badge-back {
          background: linear-gradient(135deg, #16a34a, #15803d);
          transform: translateZ(-20px);
        }
        
        .badge-left {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          transform: rotateY(-90deg) translateZ(20px);
        }
        
        .badge-right {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          transform: rotateY(90deg) translateZ(20px);
        }
        
        .badge-top {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          transform: rotateX(90deg) translateZ(20px);
        }
        
        .badge-bottom {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          transform: rotateX(-90deg) translateZ(20px);
        }
      `}</style>
    </div>
  );
} 