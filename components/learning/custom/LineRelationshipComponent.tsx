'use client';

import { useState } from 'react';

interface LineRelationshipComponentProps {
  relationship: 'parallel' | 'perpendicular' | 'intersecting' | 'all';
  allowInteraction?: boolean;
  showAngle?: boolean;
  title: string;
  description?: string;
  language: 'en' | 'bn';
}

type RelationshipType = 'parallel' | 'perpendicular' | 'intersecting';

interface RelationshipInfo {
  type: RelationshipType;
  nameEn: string;
  nameBn: string;
  descEn: string;
  descBn: string;
  exampleEn: string;
  exampleBn: string;
  color: string;
  emoji: string;
}

export function LineRelationshipComponent({
  relationship,
  allowInteraction = true,
  showAngle = true,
  title,
  description,
  language,
}: LineRelationshipComponentProps) {
  const [selectedType, setSelectedType] = useState<RelationshipType>(
    relationship === 'all' ? 'parallel' : relationship
  );
  const [angle, setAngle] = useState(45);

  const relationships: RelationshipInfo[] = [
    {
      type: 'parallel',
      nameEn: 'Parallel Lines',
      nameBn: 'সমান্তরাল রেখা',
      descEn: 'Lines that never meet, always the same distance apart',
      descBn: 'রেখাগুলি কখনও মিলিত হয় না, সর্বদা একই দূরত্বে থাকে',
      exampleEn: 'Railway tracks, opposite edges of a ruler',
      exampleBn: 'রেললাইন, স্কেলের বিপরীত প্রান্ত',
      color: '#10b981',
      emoji: '🛤️',
    },
    {
      type: 'perpendicular',
      nameEn: 'Perpendicular Lines',
      nameBn: 'লম্ব রেখা',
      descEn: 'Lines that meet at exactly 90° (right angle)',
      descBn: 'রেখাগুলি ঠিক ৯০° (সমকোণ) এ মিলিত হয়',
      exampleEn: 'Corner of a book, the + sign',
      exampleBn: 'বইয়ের কোণা, + চিহ্ন',
      color: '#3b82f6',
      emoji: '➕',
    },
    {
      type: 'intersecting',
      nameEn: 'Intersecting Lines',
      nameBn: 'ছেদক রেখা',
      descEn: 'Lines that cross each other at any angle',
      descBn: 'রেখাগুলি যেকোনো কোণে একে অপরকে ছেদ করে',
      exampleEn: 'Scissors blades, the X shape',
      exampleBn: 'কাঁচির ফলক, X আকৃতি',
      color: '#f59e0b',
      emoji: '✂️',
    },
  ];

  const currentRelationship = relationships.find((r) => r.type === selectedType)!;

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)] || d).join('');
    }
    return num.toString();
  };

  const renderLines = (type: RelationshipType, svgAngle: number) => {
    const centerX = 200;
    const centerY = 200;
    const length = 150;

    if (type === 'parallel') {
      return (
        <>
          {/* Line 1 */}
          <line
            x1={centerX - length}
            y1={centerY - 40}
            x2={centerX + length}
            y2={centerY - 40}
            stroke={currentRelationship.color}
            strokeWidth="4"
          />
          <line
            x1={centerX - length}
            y1={centerY - 40}
            x2={centerX + length}
            y2={centerY - 40}
            stroke={currentRelationship.color}
            strokeWidth="2"
            strokeDasharray="10,5"
            opacity="0.5"
          />
          {/* Line 2 */}
          <line
            x1={centerX - length}
            y1={centerY + 40}
            x2={centerX + length}
            y2={centerY + 40}
            stroke={currentRelationship.color}
            strokeWidth="4"
          />
          <line
            x1={centerX - length}
            y1={centerY + 40}
            x2={centerX + length}
            y2={centerY + 40}
            stroke={currentRelationship.color}
            strokeWidth="2"
            strokeDasharray="10,5"
            opacity="0.5"
          />
          {/* Parallel symbol */}
          <text
            x={centerX + length + 20}
            y={centerY - 30}
            fontSize="24"
            fill={currentRelationship.color}
          >
            ∥
          </text>
        </>
      );
    }

    if (type === 'perpendicular') {
      return (
        <>
          {/* Horizontal line */}
          <line
            x1={centerX - length}
            y1={centerY}
            x2={centerX + length}
            y2={centerY}
            stroke={currentRelationship.color}
            strokeWidth="4"
          />
          {/* Vertical line */}
          <line
            x1={centerX}
            y1={centerY - length}
            x2={centerX}
            y2={centerY + length}
            stroke={currentRelationship.color}
            strokeWidth="4"
          />
          {/* Right angle indicator */}
          <rect
            x={centerX}
            y={centerY}
            width="25"
            height="25"
            fill="none"
            stroke={currentRelationship.color}
            strokeWidth="2"
            transform={`translate(${-12.5}, ${-12.5})`}
          />
          {/* 90° label */}
          <text
            x={centerX + 35}
            y={centerY - 15}
            fontSize="18"
            fontWeight="bold"
            fill={currentRelationship.color}
          >
            {displayNumber(90)}°
          </text>
        </>
      );
    }

    // Intersecting lines
    const rad = (svgAngle * Math.PI) / 180;
    return (
      <>
        {/* Line 1 */}
        <line
          x1={centerX - length}
          y1={centerY}
          x2={centerX + length}
          y2={centerY}
          stroke={currentRelationship.color}
          strokeWidth="4"
        />
        {/* Line 2 at angle */}
        <line
          x1={centerX - length * Math.cos(rad)}
          y1={centerY - length * Math.sin(rad)}
          x2={centerX + length * Math.cos(rad)}
          y2={centerY + length * Math.sin(rad)}
          stroke={currentRelationship.color}
          strokeWidth="4"
        />
        {/* Angle arc */}
        {showAngle && (
          <>
            <path
              d={`M ${centerX + 40} ${centerY} A 40 40 0 0 0 ${
                centerX + 40 * Math.cos(rad)
              } ${centerY - 40 * Math.sin(rad)}`}
              fill="none"
              stroke={currentRelationship.color}
              strokeWidth="2"
            />
            <text
              x={centerX + 50}
              y={centerY - 20}
              fontSize="16"
              fontWeight="bold"
              fill={currentRelationship.color}
            >
              {displayNumber(svgAngle)}°
            </text>
          </>
        )}
      </>
    );
  };

  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <h3 className="card-title text-2xl text-center mb-2">{title}</h3>
        {description && (
          <p className="text-center text-base-content/70 mb-6">{description}</p>
        )}

        {/* Type selector (if 'all' mode) */}
        {relationship === 'all' && allowInteraction && (
          <div className="flex justify-center gap-2 mb-6">
            {relationships.map((rel) => (
              <button
                key={rel.type}
                onClick={() => setSelectedType(rel.type)}
                className={`btn btn-sm ${
                  selectedType === rel.type ? 'btn-primary' : 'btn-ghost'
                }`}
                style={
                  selectedType === rel.type
                    ? { backgroundColor: rel.color, borderColor: rel.color }
                    : {}
                }
              >
                {rel.emoji} {language === 'en' ? rel.nameEn.split(' ')[0] : rel.nameBn.split(' ')[0]}
              </button>
            ))}
          </div>
        )}

        {/* Visualization */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* SVG Canvas */}
          <div className="flex-1 w-full">
            <svg viewBox="0 0 400 400" className="w-full h-full bg-base-100 rounded-lg border-2 border-base-300">
              <rect width="400" height="400" fill="transparent" />
              {renderLines(selectedType, angle)}
            </svg>
          </div>

          {/* Information Card */}
          <div className="flex-1 w-full">
            <div
              className="card bg-base-100 border-2 shadow-md"
              style={{ borderColor: currentRelationship.color }}
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{currentRelationship.emoji}</span>
                  <h4
                    className="text-xl font-bold"
                    style={{ color: currentRelationship.color }}
                  >
                    {language === 'en' ? currentRelationship.nameEn : currentRelationship.nameBn}
                  </h4>
                </div>

                <p className="text-base-content/80 mb-3">
                  {language === 'en' ? currentRelationship.descEn : currentRelationship.descBn}
                </p>

                <div
                  className="alert"
                  style={{ backgroundColor: `${currentRelationship.color}20` }}
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {language === 'en' ? 'Real-world examples:' : 'বাস্তব জীবনের উদাহরণ:'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' ? currentRelationship.exampleEn : currentRelationship.exampleBn}
                    </p>
                  </div>
                </div>

                {/* Angle adjuster for intersecting lines */}
                {selectedType === 'intersecting' && allowInteraction && (
                  <div className="mt-4">
                    <label className="label">
                      <span className="label-text font-semibold">
                        {language === 'en' ? 'Adjust angle:' : 'কোণ সামঞ্জস্য করো:'}
                      </span>
                      <span className="label-text-alt font-bold" style={{ color: currentRelationship.color }}>
                        {displayNumber(angle)}°
                      </span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="170"
                      value={angle}
                      onChange={(e) => setAngle(Number(e.target.value))}
                      className="range range-primary"
                      style={{ accentColor: currentRelationship.color }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Summary for 'all' mode */}
        {relationship === 'all' && (
          <div className="overflow-x-auto mt-6">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>{language === 'en' ? 'Type' : 'ধরন'}</th>
                  <th>{language === 'en' ? 'Property' : 'বৈশিষ্ট্য'}</th>
                  <th>{language === 'en' ? 'Example' : 'উদাহরণ'}</th>
                </tr>
              </thead>
              <tbody>
                {relationships.map((rel) => (
                  <tr key={rel.type}>
                    <td>
                      <span style={{ color: rel.color }} className="font-semibold">
                        {rel.emoji} {language === 'en' ? rel.nameEn : rel.nameBn}
                      </span>
                    </td>
                    <td className="text-sm">
                      {language === 'en' ? rel.descEn : rel.descBn}
                    </td>
                    <td className="text-sm text-base-content/70">
                      {language === 'en' ? rel.exampleEn : rel.exampleBn}
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
