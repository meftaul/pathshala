'use client';

import { LessonContent } from '@/types/content';
import Image from 'next/image';

interface LessonRendererProps {
  content: LessonContent;
  language: 'en' | 'bn';
}

export function LessonRenderer({ content, language }: LessonRendererProps) {
  return (
    <div className="lesson-content space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            const Tag =
              block.format === 'heading'
                ? 'h3'
                : block.format === 'callout'
                ? 'div'
                : 'p';

            const className =
              block.format === 'heading'
                ? 'text-2xl font-bold text-primary mb-4'
                : block.format === 'callout'
                ? 'alert bg-accent/10 border-accent/30 shadow-md'
                : 'text-base-content/80 leading-relaxed';

            return (
              <Tag key={index} className={className}>
                {block.content[language]}
              </Tag>
            );

          case 'image':
            return (
              <div key={index} className="my-6">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={block.src}
                    alt={block.alt[language]}
                    fill
                    className="object-contain"
                  />
                </div>
                {block.caption && (
                  <p className="text-center text-sm text-base-content/60 mt-2">
                    {block.caption[language]}
                  </p>
                )}
              </div>
            );

          case 'example':
            return (
              <div
                key={index}
                className="card bg-secondary/5 border-2 border-secondary/20 shadow-md"
              >
                <div className="card-body">
                  <h4 className="card-title text-secondary">
                    {block.title[language]}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-base-100 p-4 rounded-lg">
                      <p className="font-semibold mb-2">
                        {language === 'en' ? 'Problem:' : 'সমস্যা:'}
                      </p>
                      <p>{block.problem[language]}</p>
                    </div>

                    {block.steps && (
                      <div className="space-y-2">
                        <p className="font-semibold">
                          {language === 'en' ? 'Steps:' : 'ধাপ:'}
                        </p>
                        {block.steps.map((step) => (
                          <div key={step.step} className="flex gap-3">
                            <span className="badge badge-secondary">
                              {step.step}
                            </span>
                            <p>{step.description[language]}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bg-success/10 p-4 rounded-lg border-2 border-success/30">
                      <p className="font-semibold mb-2 text-success">
                        {language === 'en' ? 'Solution:' : 'সমাধান:'}
                      </p>
                      <p>{block.solution[language]}</p>
                    </div>
                  </div>
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
