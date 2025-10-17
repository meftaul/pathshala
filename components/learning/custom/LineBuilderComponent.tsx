'use client';

import { useState, useRef, useEffect } from 'react';
import { Move, RotateCcw } from 'lucide-react';

interface LineBuilderComponentProps {
  initialType: 'line' | 'ray' | 'segment';
  showGrid?: boolean;
  showMeasurement?: boolean;
  instruction: string;
  allowInteraction?: boolean;
  language: 'en' | 'bn';
}

type LineType = 'line' | 'ray' | 'segment';

interface Point {
  x: number;
  y: number;
}

export function LineBuilderComponent({
  initialType,
  showGrid = true,
  showMeasurement = true,
  instruction,
  allowInteraction = true,
  language,
}: LineBuilderComponentProps) {
  const [lineType, setLineType] = useState<LineType>(initialType);
  const [point1, setPoint1] = useState<Point>({ x: 150, y: 200 });
  const [point2, setPoint2] = useState<Point>({ x: 350, y: 200 });
  const [draggingPoint, setDraggingPoint] = useState<'point1' | 'point2' | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)] || d).join('');
    }
    return num.toString();
  };

  const getLineTypeInfo = (type: LineType) => {
    const info = {
      line: {
        nameEn: 'Line',
        nameBn: 'রেখা',
        notationEn: '↔AB',
        notationBn: '↔AB',
        descEn: 'Extends infinitely in both directions',
        descBn: 'উভয় দিকে অসীমভাবে বিস্তৃত',
        color: '#3b82f6',
      },
      ray: {
        nameEn: 'Ray',
        nameBn: 'রশ্মি',
        notationEn: '→AB',
        notationBn: '→AB',
        descEn: 'Starts at A, extends infinitely through B',
        descBn: 'A থেকে শুরু হয়, B এর মাধ্যমে অসীমভাবে বিস্তৃত',
        color: '#10b981',
      },
      segment: {
        nameEn: 'Line Segment',
        nameBn: 'রেখাংশ',
        notationEn: 'AB̅',
        notationBn: 'AB̅',
        descEn: 'Connects A to B with fixed length',
        descBn: 'A থেকে B পর্যন্ত নির্দিষ্ট দৈর্ঘ্য',
        color: '#f59e0b',
      },
    };
    return info[type];
  };

  const calculateDistance = () => {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleMouseDown = (e: React.MouseEvent, point: 'point1' | 'point2') => {
    if (!allowInteraction) return;
    e.preventDefault();
    setDraggingPoint(point);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggingPoint || !svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const x = Math.max(20, Math.min(480, e.clientX - rect.left));
    const y = Math.max(20, Math.min(380, e.clientY - rect.top));

    if (draggingPoint === 'point1') {
      setPoint1({ x, y });
    } else {
      setPoint2({ x, y });
    }
  };

  const handleMouseUp = () => {
    setDraggingPoint(null);
  };

  const handleTouchStart = (e: React.TouchEvent, point: 'point1' | 'point2') => {
    if (!allowInteraction) return;
    e.preventDefault();
    setDraggingPoint(point);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!draggingPoint || !svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(20, Math.min(480, touch.clientX - rect.left));
    const y = Math.max(20, Math.min(380, touch.clientY - rect.top));

    if (draggingPoint === 'point1') {
      setPoint1({ x, y });
    } else {
      setPoint2({ x, y });
    }
  };

  const reset = () => {
    setPoint1({ x: 150, y: 200 });
    setPoint2({ x: 350, y: 200 });
    setLineType(initialType);
  };

  useEffect(() => {
    if (draggingPoint) {
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
  }, [draggingPoint]);

  const lineInfo = getLineTypeInfo(lineType);

  // Calculate extended line points for visual representation
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  const angle = Math.atan2(dy, dx);
  const extendLength = 1000;

  const extendedStart = {
    x: point1.x - Math.cos(angle) * extendLength,
    y: point1.y - Math.sin(angle) * extendLength,
  };

  const extendedEnd = {
    x: point2.x + Math.cos(angle) * extendLength,
    y: point2.y + Math.sin(angle) * extendLength,
  };

  return (
    <div className="card bg-gradient-to-br from-secondary/10 to-primary/10 shadow-lg border-2 border-secondary/20">
      <div className="card-body">
        <h4 className="card-title text-center">{instruction}</h4>

        {/* Line Type Selector */}
        {allowInteraction && (
          <div className="flex justify-center gap-2 mb-4">
            <button
              onClick={() => setLineType('line')}
              className={`btn btn-sm ${
                lineType === 'line' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              {language === 'en' ? 'Line' : 'রেখা'}
            </button>
            <button
              onClick={() => setLineType('ray')}
              className={`btn btn-sm ${
                lineType === 'ray' ? 'btn-success' : 'btn-ghost'
              }`}
            >
              {language === 'en' ? 'Ray' : 'রশ্মি'}
            </button>
            <button
              onClick={() => setLineType('segment')}
              className={`btn btn-sm ${
                lineType === 'segment' ? 'btn-warning' : 'btn-ghost'
              }`}
            >
              {language === 'en' ? 'Segment' : 'রেখাংশ'}
            </button>
          </div>
        )}

        {/* SVG Canvas */}
        <div className="relative w-full max-w-2xl mx-auto">
          <svg
            ref={svgRef}
            viewBox="0 0 500 400"
            className="w-full h-full bg-base-100 rounded-lg border-2 border-base-300"
          >
            {/* Grid */}
            {showGrid && (
              <g opacity="0.1">
                {Array.from({ length: 50 }, (_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 10}
                    y1="0"
                    x2={i * 10}
                    y2="400"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                ))}
                {Array.from({ length: 40 }, (_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 10}
                    x2="500"
                    y2={i * 10}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                ))}
              </g>
            )}

            {/* Draw the line based on type */}
            {lineType === 'line' && (
              <>
                <line
                  x1={extendedStart.x}
                  y1={extendedStart.y}
                  x2={extendedEnd.x}
                  y2={extendedEnd.y}
                  stroke={lineInfo.color}
                  strokeWidth="3"
                  opacity="0.6"
                />
                <line
                  x1={point1.x}
                  y1={point1.y}
                  x2={point2.x}
                  y2={point2.y}
                  stroke={lineInfo.color}
                  strokeWidth="4"
                />
              </>
            )}

            {lineType === 'ray' && (
              <>
                <line
                  x1={point1.x}
                  y1={point1.y}
                  x2={extendedEnd.x}
                  y2={extendedEnd.y}
                  stroke={lineInfo.color}
                  strokeWidth="3"
                  opacity="0.6"
                />
                <line
                  x1={point1.x}
                  y1={point1.y}
                  x2={point2.x}
                  y2={point2.y}
                  stroke={lineInfo.color}
                  strokeWidth="4"
                />
                {/* Arrowhead */}
                <polygon
                  points={`${point2.x + Math.cos(angle) * 15},${
                    point2.y + Math.sin(angle) * 15
                  } ${point2.x + Math.cos(angle + 2.8) * 10},${
                    point2.y + Math.sin(angle + 2.8) * 10
                  } ${point2.x + Math.cos(angle - 2.8) * 10},${
                    point2.y + Math.sin(angle - 2.8) * 10
                  }`}
                  fill={lineInfo.color}
                />
              </>
            )}

            {lineType === 'segment' && (
              <line
                x1={point1.x}
                y1={point1.y}
                x2={point2.x}
                y2={point2.y}
                stroke={lineInfo.color}
                strokeWidth="4"
              />
            )}

            {/* Points */}
            <circle
              cx={point1.x}
              cy={point1.y}
              r="8"
              fill={lineInfo.color}
              onMouseDown={(e) => handleMouseDown(e, 'point1')}
              onTouchStart={(e) => handleTouchStart(e, 'point1')}
              className={allowInteraction ? 'cursor-grab active:cursor-grabbing' : ''}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
            />
            <text
              x={point1.x}
              y={point1.y - 15}
              fill={lineInfo.color}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              A
            </text>

            <circle
              cx={point2.x}
              cy={point2.y}
              r="8"
              fill={lineInfo.color}
              onMouseDown={(e) => handleMouseDown(e, 'point2')}
              onTouchStart={(e) => handleTouchStart(e, 'point2')}
              className={allowInteraction ? 'cursor-grab active:cursor-grabbing' : ''}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
            />
            <text
              x={point2.x}
              y={point2.y - 15}
              fill={lineInfo.color}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              B
            </text>
          </svg>
        </div>

        {/* Information Display */}
        <div className="mt-6 space-y-4">
          <div
            className="card bg-base-200 border-2"
            style={{ borderColor: lineInfo.color }}
          >
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-lg" style={{ color: lineInfo.color }}>
                    {language === 'en' ? lineInfo.nameEn : lineInfo.nameBn}
                  </h5>
                  <p className="text-sm text-base-content/70">
                    {language === 'en' ? lineInfo.descEn : lineInfo.descBn}
                  </p>
                </div>
                <div
                  className="badge badge-lg px-4 py-3 text-white font-bold"
                  style={{ backgroundColor: lineInfo.color }}
                >
                  {lineInfo.notationEn}
                </div>
              </div>
            </div>
          </div>

          {/* Measurement */}
          {showMeasurement && lineType === 'segment' && (
            <div className="text-center">
              <div className="badge badge-secondary badge-lg">
                <Move className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Length: ' : 'দৈর্ঘ্য: '}
                {displayNumber(Math.round(calculateDistance()))} {language === 'en' ? 'units' : 'একক'}
              </div>
            </div>
          )}

          {/* Instructions */}
          {allowInteraction && (
            <div className="flex gap-3 justify-center items-center">
              <p className="text-sm text-base-content/60 text-center">
                {language === 'en'
                  ? 'Drag points A and B to adjust the line'
                  : 'রেখা সামঞ্জস্য করতে A এবং B বিন্দু টেনে নিয়ে যাও'}
              </p>
              <button onClick={reset} className="btn btn-ghost btn-sm gap-2">
                <RotateCcw className="w-4 h-4" />
                {language === 'en' ? 'Reset' : 'রিসেট'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
