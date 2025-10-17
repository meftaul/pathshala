'use client';

import { useState } from 'react';

interface LineOrientationComponentProps {
  orientation: 'horizontal' | 'vertical' | 'diagonal' | 'all';
  showSlope?: boolean;
  showEquation?: boolean;
  allowInteraction?: boolean;
  instruction: string;
  language: 'en' | 'bn';
}

type OrientationType = 'horizontal' | 'vertical' | 'diagonal';

interface OrientationInfo {
  type: OrientationType;
  nameEn: string;
  nameBn: string;
  descEn: string;
  descBn: string;
  exampleEn: string;
  exampleBn: string;
  color: string;
  emoji: string;
  slope: string;
}

export function LineOrientationComponent({
  orientation,
  showSlope = true,
  showEquation = false,
  allowInteraction = true,
  instruction,
  language,
}: LineOrientationComponentProps) {
  const [selectedType, setSelectedType] = useState<OrientationType>(
    orientation === 'all' ? 'horizontal' : orientation
  );
  const [slopeValue, setSlopeValue] = useState(1);

  const orientations: OrientationInfo[] = [
    {
      type: 'horizontal',
      nameEn: 'Horizontal Line',
      nameBn: 'অনুভূমিক রেখা',
      descEn: 'Runs left to right, parallel to the horizon',
      descBn: 'বাম থেকে ডানে চলে, দিগন্তের সমান্তরাল',
      exampleEn: 'Horizon, table top, floor',
      exampleBn: 'দিগন্ত, টেবিলের উপরিভাগ, মেঝে',
      color: '#3b82f6',
      emoji: '➖',
      slope: '0',
    },
    {
      type: 'vertical',
      nameEn: 'Vertical Line',
      nameBn: 'উল্লম্ব রেখা',
      descEn: 'Runs up and down, perpendicular to the horizon',
      descBn: 'উপর থেকে নিচে চলে, দিগন্তের লম্ব',
      exampleEn: 'Flagpole, wall, door frame',
      exampleBn: 'পতাকা দণ্ড, দেয়াল, দরজার ফ্রেম',
      color: '#10b981',
      emoji: '|',
      slope: 'undefined',
    },
    {
      type: 'diagonal',
      nameEn: 'Diagonal Line',
      nameBn: 'কর্ণ রেখা',
      descEn: 'Slants at an angle, neither horizontal nor vertical',
      descBn: 'একটি কোণে তির্যক, অনুভূমিক বা উল্লম্ব নয়',
      exampleEn: 'Ramp, roof, staircase handrail',
      exampleBn: 'র‍্যাম্প, ছাদ, সিঁড়ির রেলিং',
      color: '#f59e0b',
      emoji: '⟋',
      slope: 'variable',
    },
  ];

  const currentOrientation = orientations.find((o) => o.type === selectedType)!;

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => {
        if (d === '-') return '-';
        if (d === '.') return '.';
        return bengaliDigits[parseInt(d)] || d;
      }).join('');
    }
    return num.toString();
  };

  const renderLine = (type: OrientationType, slope: number) => {
    const centerX = 200;
    const centerY = 200;
    const length = 140;

    if (type === 'horizontal') {
      return (
        <>
          <line
            x1={centerX - length}
            y1={centerY}
            x2={centerX + length}
            y2={centerY}
            stroke={currentOrientation.color}
            strokeWidth="4"
          />
          {/* Grid reference lines */}
          <line
            x1={centerX}
            y1={centerY - 10}
            x2={centerX}
            y2={centerY + 10}
            stroke="#94a3b8"
            strokeWidth="2"
          />
          {showSlope && (
            <text
              x={centerX + length + 15}
              y={centerY + 5}
              fontSize="16"
              fontWeight="bold"
              fill={currentOrientation.color}
            >
              m = 0
            </text>
          )}
        </>
      );
    }

    if (type === 'vertical') {
      return (
        <>
          <line
            x1={centerX}
            y1={centerY - length}
            x2={centerX}
            y2={centerY + length}
            stroke={currentOrientation.color}
            strokeWidth="4"
          />
          {/* Grid reference lines */}
          <line
            x1={centerX - 10}
            y1={centerY}
            x2={centerX + 10}
            y2={centerY}
            stroke="#94a3b8"
            strokeWidth="2"
          />
          {showSlope && (
            <text
              x={centerX + 15}
              y={centerY - length - 10}
              fontSize="16"
              fontWeight="bold"
              fill={currentOrientation.color}
            >
              m = ∞
            </text>
          )}
        </>
      );
    }

    // Diagonal line
    const angle = Math.atan(slope);
    const dx = length * Math.cos(angle);
    const dy = length * Math.sin(angle);

    return (
      <>
        <line
          x1={centerX - dx}
          y1={centerY + dy}
          x2={centerX + dx}
          y2={centerY - dy}
          stroke={currentOrientation.color}
          strokeWidth="4"
        />
        {/* Rise and run indicators */}
        {showSlope && slope !== 0 && (
          <>
            {/* Rise (vertical) */}
            <line
              x1={centerX + dx}
              y1={centerY}
              x2={centerX + dx}
              y2={centerY - dy}
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <text
              x={centerX + dx + 10}
              y={centerY - dy / 2}
              fontSize="14"
              fontWeight="bold"
              fill="#ef4444"
            >
              {language === 'en' ? 'rise' : 'উত্থান'}
            </text>
            {/* Run (horizontal) */}
            <line
              x1={centerX}
              y1={centerY}
              x2={centerX + dx}
              y2={centerY}
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <text
              x={centerX + dx / 2}
              y={centerY + 20}
              fontSize="14"
              fontWeight="bold"
              fill="#3b82f6"
              textAnchor="middle"
            >
              {language === 'en' ? 'run' : 'ভ্রমণ'}
            </text>
            {/* Slope value */}
            <text
              x={centerX - dx - 50}
              y={centerY + dy + 30}
              fontSize="16"
              fontWeight="bold"
              fill={currentOrientation.color}
            >
              m = {displayNumber(parseFloat(slope.toFixed(2)))}
            </text>
          </>
        )}
      </>
    );
  };

  const getEquation = (type: OrientationType, slope: number) => {
    if (type === 'horizontal') {
      return 'y = 0';
    }
    if (type === 'vertical') {
      return 'x = 0';
    }
    return `y = ${slope.toFixed(2)}x`;
  };

  return (
    <div className="card bg-gradient-to-br from-accent/10 to-primary/10 shadow-lg border-2 border-accent/20">
      <div className="card-body">
        <h4 className="card-title text-center">{instruction}</h4>

        {/* Orientation selector (if 'all' mode) */}
        {orientation === 'all' && allowInteraction && (
          <div className="flex justify-center gap-2 mb-6">
            {orientations.map((orient) => (
              <button
                key={orient.type}
                onClick={() => setSelectedType(orient.type)}
                className={`btn btn-sm ${
                  selectedType === orient.type ? 'btn-primary' : 'btn-ghost'
                }`}
                style={
                  selectedType === orient.type
                    ? { backgroundColor: orient.color, borderColor: orient.color }
                    : {}
                }
              >
                {orient.emoji} {language === 'en' ? orient.type : orient.nameBn.split(' ')[0]}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SVG Visualization */}
          <div>
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full bg-base-100 rounded-lg border-2 border-base-300"
            >
              {/* Grid */}
              <g opacity="0.1">
                {Array.from({ length: 40 }, (_, i) => (
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
                    x2="400"
                    y2={i * 10}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                ))}
              </g>

              {/* Axes */}
              <line x1="0" y1="200" x2="400" y2="200" stroke="#94a3b8" strokeWidth="1" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="#94a3b8" strokeWidth="1" />

              {/* Render the line */}
              {renderLine(selectedType, slopeValue)}
            </svg>
          </div>

          {/* Information Panel */}
          <div className="space-y-4">
            <div
              className="card bg-base-100 border-2"
              style={{ borderColor: currentOrientation.color }}
            >
              <div className="card-body p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{currentOrientation.emoji}</span>
                  <h5
                    className="text-lg font-bold"
                    style={{ color: currentOrientation.color }}
                  >
                    {language === 'en' ? currentOrientation.nameEn : currentOrientation.nameBn}
                  </h5>
                </div>

                <p className="text-sm text-base-content/80 mb-3">
                  {language === 'en' ? currentOrientation.descEn : currentOrientation.descBn}
                </p>

                <div className="badge badge-outline mb-2">
                  {language === 'en' ? '📐 Examples: ' : '📐 উদাহরণ: '}
                  {language === 'en' ? currentOrientation.exampleEn : currentOrientation.exampleBn}
                </div>

                {/* Slope information */}
                {showSlope && (
                  <div
                    className="alert mt-2"
                    style={{ backgroundColor: `${currentOrientation.color}20` }}
                  >
                    <div className="w-full">
                      <p className="text-sm font-semibold mb-1">
                        {language === 'en' ? 'Slope (m):' : 'ঢাল (m):'}
                      </p>
                      {selectedType === 'horizontal' && (
                        <p className="text-sm">
                          {language === 'en'
                            ? 'Slope = 0 (no rise, flat)'
                            : 'ঢাল = ০ (কোন উত্থান নেই, সমতল)'}
                        </p>
                      )}
                      {selectedType === 'vertical' && (
                        <p className="text-sm">
                          {language === 'en'
                            ? 'Slope = undefined (infinite steepness)'
                            : 'ঢাল = অসংজ্ঞায়িত (অসীম খাড়াত্ব)'}
                        </p>
                      )}
                      {selectedType === 'diagonal' && (
                        <p className="text-sm">
                          {language === 'en'
                            ? `Slope = rise ÷ run = ${slopeValue.toFixed(2)}`
                            : `ঢাল = উত্থান ÷ ভ্রমণ = ${displayNumber(parseFloat(slopeValue.toFixed(2)))}`}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Equation display */}
                {showEquation && (
                  <div className="mt-3">
                    <p className="text-xs text-base-content/60 mb-1">
                      {language === 'en' ? 'Equation:' : 'সমীকরণ:'}
                    </p>
                    <div
                      className="badge badge-lg font-mono font-bold"
                      style={{ backgroundColor: currentOrientation.color, color: 'white' }}
                    >
                      {getEquation(selectedType, slopeValue)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Slope adjuster for diagonal */}
            {selectedType === 'diagonal' && allowInteraction && (
              <div className="card bg-base-100">
                <div className="card-body p-4">
                  <label className="label">
                    <span className="label-text font-semibold">
                      {language === 'en' ? 'Adjust slope:' : 'ঢাল সামঞ্জস্য করো:'}
                    </span>
                    <span
                      className="label-text-alt font-bold text-lg"
                      style={{ color: currentOrientation.color }}
                    >
                      {displayNumber(parseFloat(slopeValue.toFixed(2)))}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.1"
                    value={slopeValue}
                    onChange={(e) => setSlopeValue(Number(e.target.value))}
                    className="range range-warning"
                  />
                  <div className="flex justify-between text-xs text-base-content/60 mt-1">
                    <span>{language === 'en' ? 'Negative' : 'ঋণাত্মক'}</span>
                    <span>0</span>
                    <span>{language === 'en' ? 'Positive' : 'ধনাত্মক'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary table for 'all' mode */}
        {orientation === 'all' && (
          <div className="overflow-x-auto mt-6">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>{language === 'en' ? 'Type' : 'ধরন'}</th>
                  <th>{language === 'en' ? 'Description' : 'বর্ণনা'}</th>
                  <th>{language === 'en' ? 'Slope' : 'ঢাল'}</th>
                  <th>{language === 'en' ? 'Example' : 'উদাহরণ'}</th>
                </tr>
              </thead>
              <tbody>
                {orientations.map((orient) => (
                  <tr key={orient.type}>
                    <td>
                      <span style={{ color: orient.color }} className="font-semibold">
                        {orient.emoji} {language === 'en' ? orient.nameEn : orient.nameBn}
                      </span>
                    </td>
                    <td className="text-sm">
                      {language === 'en' ? orient.descEn : orient.descBn}
                    </td>
                    <td className="font-mono font-bold" style={{ color: orient.color }}>
                      {orient.slope}
                    </td>
                    <td className="text-sm text-base-content/70">
                      {language === 'en' ? orient.exampleEn : orient.exampleBn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
