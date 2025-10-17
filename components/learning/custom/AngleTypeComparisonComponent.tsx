'use client';

interface AngleTypeComparisonComponentProps {
  title: string;
  description?: string;
  language: 'en' | 'bn';
}

interface AngleDefinition {
  type: string;
  typeEn: string;
  typeBn: string;
  angle: number;
  rangeEn: string;
  rangeBn: string;
  exampleEn: string;
  exampleBn: string;
  color: string;
  emoji: string;
}

export function AngleTypeComparisonComponent({
  title,
  description,
  language,
}: AngleTypeComparisonComponentProps) {
  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)] || d).join('');
    }
    return num.toString();
  };

  const angles: AngleDefinition[] = [
    {
      type: 'acute',
      typeEn: 'Acute Angle',
      typeBn: 'সূক্ষ্মকোণ',
      angle: 45,
      rangeEn: '0° < angle < 90°',
      rangeBn: '০° < কোণ < ৯০°',
      exampleEn: 'Scissors opening slightly',
      exampleBn: 'সামান্য খোলা কাঁচি',
      color: '#10b981',
      emoji: '✂️',
    },
    {
      type: 'right',
      typeEn: 'Right Angle',
      typeBn: 'সমকোণ',
      angle: 90,
      rangeEn: 'angle = 90°',
      rangeBn: 'কোণ = ৯০°',
      exampleEn: 'Corner of a book',
      exampleBn: 'বইয়ের কোণা',
      color: '#3b82f6',
      emoji: '📐',
    },
    {
      type: 'obtuse',
      typeEn: 'Obtuse Angle',
      typeBn: 'স্থূলকোণ',
      angle: 135,
      rangeEn: '90° < angle < 180°',
      rangeBn: '৯০° < কোণ < ১৮০°',
      exampleEn: 'Reclining chair',
      exampleBn: 'হেলানো চেয়ার',
      color: '#f59e0b',
      emoji: '🪑',
    },
    {
      type: 'straight',
      typeEn: 'Straight Angle',
      typeBn: 'সরলকোণ',
      angle: 180,
      rangeEn: 'angle = 180°',
      rangeBn: 'কোণ = ১৮০°',
      exampleEn: 'Straight line',
      exampleBn: 'সরলরেখা',
      color: '#8b5cf6',
      emoji: '➖',
    },
    {
      type: 'reflex',
      typeEn: 'Reflex Angle',
      typeBn: 'প্রবৃদ্ধকোণ',
      angle: 270,
      rangeEn: '180° < angle < 360°',
      rangeBn: '১৮০° < কোণ < ৩৬০°',
      exampleEn: 'Clock hands at 3:00',
      exampleBn: 'ঘড়ির কাঁটা ৩:০০ টায়',
      color: '#ef4444',
      emoji: '🕒',
    },
    {
      type: 'full',
      typeEn: 'Full Rotation',
      typeBn: 'সম্পূর্ণ ঘূর্ণন',
      angle: 360,
      rangeEn: 'angle = 360°',
      rangeBn: 'কোণ = ৩৬০°',
      exampleEn: 'Complete circle',
      exampleBn: 'সম্পূর্ণ বৃত্ত',
      color: '#ec4899',
      emoji: '⭕',
    },
  ];

  const renderAngleSVG = (angle: number, color: string, type: string) => {
    const centerX = 80;
    const centerY = 80;
    const radius = 60;
    const arcRadius = 25;

    const endX = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const endY = centerY - radius * Math.sin((angle * Math.PI) / 180);

    const arcEndX = centerX + arcRadius * Math.cos((angle * Math.PI) / 180);
    const arcEndY = centerY - arcRadius * Math.sin((angle * Math.PI) / 180);

    const largeArcFlag = angle > 180 ? 1 : 0;

    return (
      <svg viewBox="0 0 160 160" className="w-full h-full">
        {/* Base line */}
        <line
          x1={centerX}
          y1={centerY}
          x2={centerX + radius}
          y2={centerY}
          stroke="#94a3b8"
          strokeWidth="2"
        />

        {/* Arc fill */}
        <path
          d={`M ${centerX} ${centerY}
              L ${centerX + arcRadius} ${centerY}
              A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcEndX} ${arcEndY}
              Z`}
          fill={color}
          opacity="0.3"
        />

        {/* Arc outline */}
        <path
          d={`M ${centerX + arcRadius} ${centerY}
              A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcEndX} ${arcEndY}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />

        {/* Rotating line */}
        <line
          x1={centerX}
          y1={centerY}
          x2={endX}
          y2={endY}
          stroke={color}
          strokeWidth="2"
        />

        {/* Center point */}
        <circle cx={centerX} cy={centerY} r="4" fill={color} />

        {/* Right angle indicator */}
        {type === 'right' && (
          <rect
            x={centerX}
            y={centerY - 15}
            width="15"
            height="15"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
        )}
      </svg>
    );
  };

  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <h3 className="card-title text-2xl text-center mb-2">{title}</h3>
        {description && (
          <p className="text-center text-base-content/70 mb-6">{description}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {angles.map((angleData) => (
            <div
              key={angleData.type}
              className="card bg-base-100 shadow-md border-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ borderColor: angleData.color }}
            >
              <div className="card-body p-4">
                {/* Angle visualization */}
                <div className="w-full aspect-square mb-3 flex items-center justify-center">
                  {renderAngleSVG(angleData.angle, angleData.color, angleData.type)}
                </div>

                {/* Type name */}
                <h4
                  className="text-lg font-bold text-center"
                  style={{ color: angleData.color }}
                >
                  {language === 'en' ? angleData.typeEn : angleData.typeBn}
                </h4>

                {/* Angle measure */}
                <div className="text-center">
                  <span className="text-2xl font-bold" style={{ color: angleData.color }}>
                    {displayNumber(angleData.angle)}°
                  </span>
                </div>

                {/* Range */}
                <div
                  className="badge badge-sm w-full justify-center py-3 text-white font-medium"
                  style={{ backgroundColor: angleData.color }}
                >
                  {language === 'en' ? angleData.rangeEn : angleData.rangeBn}
                </div>

                {/* Example */}
                <div className="text-center mt-2">
                  <div className="text-2xl mb-1">{angleData.emoji}</div>
                  <p className="text-xs text-base-content/60">
                    {language === 'en' ? angleData.exampleEn : angleData.exampleBn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary table */}
        <div className="mt-6 overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>{language === 'en' ? 'Angle Type' : 'কোণের ধরন'}</th>
                <th>{language === 'en' ? 'Measure' : 'পরিমাপ'}</th>
                <th>{language === 'en' ? 'Range' : 'সীমা'}</th>
              </tr>
            </thead>
            <tbody>
              {angles.map((angleData) => (
                <tr key={angleData.type}>
                  <td>
                    <span style={{ color: angleData.color }} className="font-semibold">
                      {angleData.emoji} {language === 'en' ? angleData.typeEn : angleData.typeBn}
                    </span>
                  </td>
                  <td className="font-bold">{displayNumber(angleData.angle)}°</td>
                  <td className="text-sm text-base-content/70">
                    {language === 'en' ? angleData.rangeEn : angleData.rangeBn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
