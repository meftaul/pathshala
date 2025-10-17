'use client';

import { useState, useRef, useEffect } from 'react';
import { RotateCw, Info } from 'lucide-react';

interface ProtractorComponentProps {
  initialAngle?: number;
  instruction: string;
  allowInteraction?: boolean;
  language: 'en' | 'bn';
}

type AngleType = 'acute' | 'right' | 'obtuse' | 'straight' | 'reflex' | 'full';

export function ProtractorComponent({
  initialAngle = 45,
  instruction,
  allowInteraction = true,
  language,
}: ProtractorComponentProps) {
  const [angle, setAngle] = useState(initialAngle);
  const [isDragging, setIsDragging] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)] || d).join('');
    }
    return num.toString();
  };

  const getAngleType = (deg: number): AngleType => {
    if (deg === 0) return 'acute';
    if (deg > 0 && deg < 90) return 'acute';
    if (deg === 90) return 'right';
    if (deg > 90 && deg < 180) return 'obtuse';
    if (deg === 180) return 'straight';
    if (deg > 180 && deg < 360) return 'reflex';
    if (deg === 360) return 'full';
    return 'acute';
  };

  const getAngleTypeLabel = (type: AngleType): string => {
    const labels = {
      en: {
        acute: 'Acute',
        right: 'Right',
        obtuse: 'Obtuse',
        straight: 'Straight',
        reflex: 'Reflex',
        full: 'Full',
      },
      bn: {
        acute: 'সূক্ষ্মকোণ',
        right: 'সমকোণ',
        obtuse: 'স্থূলকোণ',
        straight: 'সরলকোণ',
        reflex: 'প্রবৃদ্ধকোণ',
        full: 'সম্পূর্ণ',
      },
    };
    return labels[language][type];
  };

  const getAngleColor = (type: AngleType): string => {
    const colors = {
      acute: '#10b981',
      right: '#3b82f6',
      obtuse: '#f59e0b',
      straight: '#8b5cf6',
      reflex: '#ef4444',
      full: '#ec4899',
    };
    return colors[type];
  };

  const angleType = getAngleType(angle);
  const angleColor = getAngleColor(angleType);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!allowInteraction) return;
    setIsDragging(true);
    updateAngle(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !allowInteraction) return;
    updateAngle(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!allowInteraction) return;
    setIsDragging(true);
    const touch = e.touches[0];
    updateAngle(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !allowInteraction) return;
    const touch = e.touches[0];
    updateAngle(touch.clientX, touch.clientY);
  };

  const updateAngle = (clientX: number, clientY: number) => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height * 0.75; // Protractor center is lower

    const dx = clientX - centerX;
    const dy = centerY - clientY;

    let calculatedAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (calculatedAngle < 0) calculatedAngle += 360;

    // Clamp to 0-180 for protractor
    calculatedAngle = Math.max(0, Math.min(180, calculatedAngle));
    setAngle(Math.round(calculatedAngle));
  };

  const reset = () => {
    setAngle(initialAngle);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  // SVG calculations
  const centerX = 250;
  const centerY = 350;
  const protractorRadius = 200;
  const lineRadius = 180;

  const endX = centerX + lineRadius * Math.cos((angle * Math.PI) / 180);
  const endY = centerY - lineRadius * Math.sin((angle * Math.PI) / 180);

  // Generate protractor marks
  const marks = [];
  for (let i = 0; i <= 180; i += 10) {
    const isMajor = i % 30 === 0;
    const markLength = isMajor ? 20 : 10;
    const startRadius = protractorRadius - markLength;
    const endRadius = protractorRadius;

    const x1 = centerX + startRadius * Math.cos((i * Math.PI) / 180);
    const y1 = centerY - startRadius * Math.sin((i * Math.PI) / 180);
    const x2 = centerX + endRadius * Math.cos((i * Math.PI) / 180);
    const y2 = centerY - endRadius * Math.sin((i * Math.PI) / 180);

    marks.push(
      <line
        key={`mark-${i}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#64748b"
        strokeWidth={isMajor ? 2 : 1}
      />
    );

    // Add numbers for major marks
    if (isMajor) {
      const textRadius = protractorRadius - 35;
      const textX = centerX + textRadius * Math.cos((i * Math.PI) / 180);
      const textY = centerY - textRadius * Math.sin((i * Math.PI) / 180);

      marks.push(
        <text
          key={`text-${i}`}
          x={textX}
          y={textY}
          fill="#334155"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {displayNumber(i)}
        </text>
      );
    }
  }

  return (
    <div className="card bg-gradient-to-br from-secondary/10 to-accent/10 shadow-lg border-2 border-secondary/20">
      <div className="card-body items-center">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="card-title text-lg text-center">{instruction}</h4>
          <button
            className="btn btn-circle btn-ghost btn-xs"
            onClick={() => setShowInfo(!showInfo)}
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {showInfo && (
          <div className="alert alert-info mb-4 text-sm">
            <div>
              <p>
                {language === 'en'
                  ? 'A protractor is used to measure angles. Drag the blue line to create different angles!'
                  : 'প্রট্র্যাক্টর কোণ পরিমাপ করতে ব্যবহৃত হয়। বিভিন্ন কোণ তৈরি করতে নীল রেখাটি টেনে নিয়ে যাও!'}
              </p>
            </div>
          </div>
        )}

        {/* SVG Protractor */}
        <div className="relative w-full max-w-lg">
          <svg
            ref={svgRef}
            viewBox="0 0 500 400"
            className="w-full h-full"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: allowInteraction ? 'pointer' : 'default' }}
          >
            {/* Protractor semicircle */}
            <path
              d={`M ${centerX - protractorRadius} ${centerY}
                  A ${protractorRadius} ${protractorRadius} 0 0 1 ${centerX + protractorRadius} ${centerY}`}
              fill="#f1f5f9"
              stroke="#94a3b8"
              strokeWidth="3"
            />

            {/* Angle fill */}
            <path
              d={`M ${centerX} ${centerY}
                  L ${centerX + protractorRadius} ${centerY}
                  A ${protractorRadius} ${protractorRadius} 0 ${angle > 90 ? 1 : 0} 0 ${
                centerX + protractorRadius * Math.cos((angle * Math.PI) / 180)
              } ${centerY - protractorRadius * Math.sin((angle * Math.PI) / 180)}
                  Z`}
              fill={angleColor}
              opacity="0.2"
            />

            {/* Protractor marks */}
            {marks}

            {/* Base line (0 degrees) */}
            <line
              x1={centerX - lineRadius}
              y1={centerY}
              x2={centerX + lineRadius}
              y2={centerY}
              stroke="#64748b"
              strokeWidth="3"
            />

            {/* Angle line */}
            <line
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke={angleColor}
              strokeWidth="4"
            />

            {/* Center point */}
            <circle cx={centerX} cy={centerY} r="8" fill={angleColor} />

            {/* Draggable end point */}
            {allowInteraction && (
              <circle
                cx={endX}
                cy={endY}
                r="16"
                fill={angleColor}
                className="cursor-grab active:cursor-grabbing"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
              />
            )}

            {/* Right angle indicator */}
            {angle === 90 && (
              <rect
                x={centerX}
                y={centerY - 25}
                width="25"
                height="25"
                fill="none"
                stroke={angleColor}
                strokeWidth="3"
              />
            )}
          </svg>
        </div>

        {/* Measurement display */}
        <div className="flex flex-col items-center gap-3 mt-4 w-full">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-sm text-base-content/60">
                {language === 'en' ? 'Angle' : 'কোণ'}
              </p>
              <div className="text-5xl font-bold" style={{ color: angleColor }}>
                {displayNumber(angle)}°
              </div>
            </div>

            <div className="divider divider-horizontal" />

            <div className="text-center">
              <p className="text-sm text-base-content/60">
                {language === 'en' ? 'Type' : 'ধরন'}
              </p>
              <div
                className="badge badge-lg px-4 py-3 text-white font-semibold"
                style={{ backgroundColor: angleColor }}
              >
                {getAngleTypeLabel(angleType)}
              </div>
            </div>
          </div>

          {allowInteraction && (
            <div className="flex gap-3 mt-2">
              <button onClick={reset} className="btn btn-ghost btn-sm gap-2">
                <RotateCw className="w-4 h-4" />
                {language === 'en' ? 'Reset' : 'রিসেট'}
              </button>
            </div>
          )}

          {allowInteraction && (
            <p className="text-sm text-base-content/60 text-center">
              {language === 'en'
                ? 'Drag the colored point to measure different angles'
                : 'বিভিন্ন কোণ পরিমাপ করতে রঙিন বিন্দুটি টেনে নিয়ে যাও'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
