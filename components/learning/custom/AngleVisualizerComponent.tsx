'use client';

import { useState, useRef, useEffect } from 'react';
import { RotateCw } from 'lucide-react';

interface AngleVisualizerComponentProps {
  initialAngle: number;
  minAngle: number;
  maxAngle: number;
  label: string;
  showDegrees?: boolean;
  showType?: boolean;
  allowInteraction?: boolean;
  language: 'en' | 'bn';
}

type AngleType = 'acute' | 'right' | 'obtuse' | 'straight' | 'reflex' | 'full';

export function AngleVisualizerComponent({
  initialAngle,
  minAngle,
  maxAngle,
  label,
  showDegrees = true,
  showType = true,
  allowInteraction = true,
  language,
}: AngleVisualizerComponentProps) {
  const [angle, setAngle] = useState(initialAngle);
  const [isDragging, setIsDragging] = useState(false);
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
        acute: 'Acute Angle',
        right: 'Right Angle',
        obtuse: 'Obtuse Angle',
        straight: 'Straight Angle',
        reflex: 'Reflex Angle',
        full: 'Full Rotation',
      },
      bn: {
        acute: 'সূক্ষ্মকোণ',
        right: 'সমকোণ',
        obtuse: 'স্থূলকোণ',
        straight: 'সরলকোণ',
        reflex: 'প্রবৃদ্ধকোণ',
        full: 'সম্পূর্ণ ঘূর্ণন',
      },
    };
    return labels[language][type];
  };

  const getAngleColor = (type: AngleType): string => {
    const colors = {
      acute: '#10b981', // green
      right: '#3b82f6', // blue
      obtuse: '#f59e0b', // orange
      straight: '#8b5cf6', // purple
      reflex: '#ef4444', // red
      full: '#ec4899', // pink
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
    const centerY = rect.top + rect.height / 2;

    const dx = clientX - centerX;
    const dy = centerY - clientY; // Invert Y axis

    let calculatedAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (calculatedAngle < 0) calculatedAngle += 360;

    calculatedAngle = Math.max(minAngle, Math.min(maxAngle, calculatedAngle));
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

  // Calculate arc path for the angle
  const centerX = 200;
  const centerY = 200;
  const radius = 150;
  const arcRadius = 60;

  const endX = centerX + radius * Math.cos((angle * Math.PI) / 180);
  const endY = centerY - radius * Math.sin((angle * Math.PI) / 180);

  const arcEndX = centerX + arcRadius * Math.cos((angle * Math.PI) / 180);
  const arcEndY = centerY - arcRadius * Math.sin((angle * Math.PI) / 180);

  const largeArcFlag = angle > 180 ? 1 : 0;

  return (
    <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg border-2 border-primary/20">
      <div className="card-body items-center">
        <h4 className="card-title text-lg text-center">{label}</h4>

        {/* SVG Angle Visualization */}
        <div className="relative w-full max-w-md aspect-square">
          <svg
            ref={svgRef}
            viewBox="0 0 400 400"
            className="w-full h-full"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: allowInteraction ? 'pointer' : 'default' }}
          >
            {/* Base line (horizontal) */}
            <line
              x1={centerX}
              y1={centerY}
              x2={centerX + radius}
              y2={centerY}
              stroke="#94a3b8"
              strokeWidth="3"
            />

            {/* Angle arc */}
            <path
              d={`M ${centerX + arcRadius} ${centerY}
                  A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcEndX} ${arcEndY}`}
              fill="none"
              stroke={angleColor}
              strokeWidth="3"
            />

            {/* Arc fill */}
            <path
              d={`M ${centerX} ${centerY}
                  L ${centerX + arcRadius} ${centerY}
                  A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcEndX} ${arcEndY}
                  Z`}
              fill={angleColor}
              opacity="0.2"
            />

            {/* Rotating line */}
            <line
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke={angleColor}
              strokeWidth="3"
            />

            {/* Center point */}
            <circle cx={centerX} cy={centerY} r="6" fill={angleColor} />

            {/* Draggable end point */}
            {allowInteraction && (
              <circle
                cx={endX}
                cy={endY}
                r="12"
                fill={angleColor}
                className="cursor-grab active:cursor-grabbing"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
              />
            )}

            {/* Right angle indicator */}
            {angleType === 'right' && (
              <rect
                x={centerX}
                y={centerY - 20}
                width="20"
                height="20"
                fill="none"
                stroke={angleColor}
                strokeWidth="2"
              />
            )}
          </svg>
        </div>

        {/* Angle information */}
        <div className="flex flex-col items-center gap-3 mt-4 w-full">
          {showDegrees && (
            <div className="text-5xl font-bold" style={{ color: angleColor }}>
              {displayNumber(angle)}°
            </div>
          )}

          {showType && (
            <div
              className="badge badge-lg px-4 py-3 text-white font-semibold"
              style={{ backgroundColor: angleColor }}
            >
              {getAngleTypeLabel(angleType)}
            </div>
          )}

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
                ? 'Drag the point to change the angle'
                : 'কোণ পরিবর্তন করতে বিন্দুটি টেনে নিয়ে যাও'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
