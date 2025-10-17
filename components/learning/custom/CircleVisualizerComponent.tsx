'use client';

import { useState } from 'react';
import { Move, Maximize2, Ruler, Circle as CircleIcon } from 'lucide-react';

interface CircleVisualizerComponentProps {
  initialRadius?: number;
  minRadius?: number;
  maxRadius?: number;
  showCenter?: boolean;
  showRadius?: boolean;
  showDiameter?: boolean;
  showCircumference?: boolean;
  allowInteraction?: boolean;
  instruction?: string;
  language: 'en' | 'bn';
}

export function CircleVisualizerComponent({
  initialRadius = 50,
  minRadius = 20,
  maxRadius = 150,
  showCenter = true,
  showRadius = true,
  showDiameter = true,
  showCircumference = false,
  allowInteraction = true,
  instruction,
  language,
}: CircleVisualizerComponentProps) {
  const [radius, setRadius] = useState(initialRadius);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const diameter = radius * 2;
  const circumference = Math.round(2 * Math.PI * radius);

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)]).join('');
    }
    return num.toString();
  };

  const getLabelText = (key: string) => {
    const labels: Record<string, { en: string; bn: string }> = {
      center: { en: 'Center', bn: 'কেন্দ্র' },
      radius: { en: 'Radius', bn: 'ব্যাসার্ধ' },
      diameter: { en: 'Diameter', bn: 'ব্যাস' },
      circumference: { en: 'Circumference', bn: 'পরিধি' },
      radiusLength: { en: 'Radius Length', bn: 'ব্যাসার্ধের দৈর্ঘ্য' },
      diameterLength: { en: 'Diameter Length', bn: 'ব্যাসের দৈর্ঘ্য' },
      circumferenceLength: { en: 'Circumference Length', bn: 'পরিধির দৈর্ঘ্য' },
      adjustRadius: { en: 'Adjust Radius', bn: 'ব্যাসার্ধ সামঞ্জস্য করো' },
      pixels: { en: 'pixels', bn: 'পিক্সেল' }
    };
    return labels[key]?.[language] || key;
  };

  return (
    <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg border-2 border-primary/20">
      <div className="card-body">
        {instruction && (
          <div className="alert bg-info/10 border-info/30 mb-4">
            <p className="text-sm">{instruction}</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Circle Visualization */}
          <div className="relative bg-base-100 rounded-lg p-8 shadow-inner">
            <svg
              width={diameter + 40}
              height={diameter + 40}
              className="overflow-visible"
            >
              {/* Grid background */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-base-300" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Circle */}
              <circle
                cx={diameter / 2 + 20}
                cy={diameter / 2 + 20}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary drop-shadow-sm"
              />

              {/* Center point */}
              {showCenter && (
                <g
                  onMouseEnter={() => setHoveredElement('center')}
                  onMouseLeave={() => setHoveredElement(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={diameter / 2 + 20}
                    cy={diameter / 2 + 20}
                    r="4"
                    fill="currentColor"
                    className="text-accent"
                  />
                  {hoveredElement === 'center' && (
                    <text
                      x={diameter / 2 + 30}
                      y={diameter / 2 + 15}
                      className="text-sm font-semibold fill-accent"
                    >
                      {getLabelText('center')}
                    </text>
                  )}
                </g>
              )}

              {/* Radius line */}
              {showRadius && (
                <g
                  onMouseEnter={() => setHoveredElement('radius')}
                  onMouseLeave={() => setHoveredElement(null)}
                  className="cursor-pointer"
                >
                  <line
                    x1={diameter / 2 + 20}
                    y1={diameter / 2 + 20}
                    x2={diameter / 2 + 20 + radius}
                    y2={diameter / 2 + 20}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-secondary"
                    strokeDasharray="5,5"
                  />
                  {hoveredElement === 'radius' && (
                    <text
                      x={diameter / 2 + 20 + radius / 2}
                      y={diameter / 2 + 10}
                      className="text-sm font-semibold fill-secondary"
                      textAnchor="middle"
                    >
                      {getLabelText('radius')}
                    </text>
                  )}
                </g>
              )}

              {/* Diameter line */}
              {showDiameter && (
                <g
                  onMouseEnter={() => setHoveredElement('diameter')}
                  onMouseLeave={() => setHoveredElement(null)}
                  className="cursor-pointer"
                >
                  <line
                    x1={20}
                    y1={diameter / 2 + 20}
                    x2={diameter + 20}
                    y2={diameter / 2 + 20}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-warning"
                  />
                  {hoveredElement === 'diameter' && (
                    <text
                      x={diameter / 2 + 20}
                      y={diameter / 2 + 35}
                      className="text-sm font-semibold fill-warning"
                      textAnchor="middle"
                    >
                      {getLabelText('diameter')}
                    </text>
                  )}
                </g>
              )}
            </svg>
          </div>

          {/* Controls and Information */}
          <div className="flex-1 space-y-4">
            {/* Radius Control */}
            {allowInteraction && (
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold">
                  <Move className="w-4 h-4" />
                  {getLabelText('adjustRadius')}
                </label>
                <input
                  type="range"
                  min={minRadius}
                  max={maxRadius}
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center">
                  <span className="badge badge-primary">
                    {displayNumber(radius)} {getLabelText('pixels')}
                  </span>
                </div>
              </div>
            )}

            {/* Measurements Display */}
            <div className="space-y-3">
              {showRadius && (
                <div className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                  hoveredElement === 'radius' ? 'border-secondary bg-secondary/10' : 'border-base-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{getLabelText('radiusLength')}</span>
                  </div>
                  <span className="badge badge-secondary">
                    {displayNumber(radius)} {getLabelText('pixels')}
                  </span>
                </div>
              )}

              {showDiameter && (
                <div className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                  hoveredElement === 'diameter' ? 'border-warning bg-warning/10' : 'border-base-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-warning" />
                    <span className="font-medium">{getLabelText('diameterLength')}</span>
                  </div>
                  <span className="badge badge-warning">
                    {displayNumber(diameter)} {getLabelText('pixels')}
                  </span>
                </div>
              )}

              {showCircumference && (
                <div className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                  hoveredElement === 'circumference' ? 'border-accent bg-accent/10' : 'border-base-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <CircleIcon className="w-4 h-4 text-accent" />
                    <span className="font-medium">{getLabelText('circumferenceLength')}</span>
                  </div>
                  <span className="badge badge-accent">
                    {displayNumber(circumference)} {getLabelText('pixels')}
                  </span>
                </div>
              )}
            </div>

            {/* Fun Facts */}
            <div className="alert bg-success/10 border-success/30">
              <div className="text-sm">
                <p className="font-semibold mb-1">
                  {language === 'en' ? '🔍 Fun Fact!' : '🔍 মজার তথ্য!'}
                </p>
                <p>
                  {language === 'en' 
                    ? `The diameter is always exactly 2 times the radius! ${displayNumber(diameter)} = 2 × ${displayNumber(radius)}`
                    : `ব্যাস সবসময় ব্যাসার্ধের ঠিক ২ গুণ! ${displayNumber(diameter)} = ২ × ${displayNumber(radius)}`
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}