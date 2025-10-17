// Content Type Definitions for Pathshala Learning Platform

export type Difficulty = 1 | 2 | 3 | 4 | 5; // 1=easiest, 5=hardest

export type ContentLanguage = 'en' | 'bn';

export interface LocalizedText {
  en: string;
  bn: string;
}

// Curriculum Structure
export interface Topic {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string; // Lucide icon name
  color: string; // Theme color
  prerequisites: string[]; // Topic IDs
  units: Unit[];
  order: number;
  estimatedHours: number;
}

export interface Unit {
  id: string;
  topicId: string;
  name: LocalizedText;
  description: LocalizedText;
  order: number;
  lessons: Lesson[];
  problemSets: ProblemSet[];
}

export interface Lesson {
  id: string;
  unitId: string;
  title: LocalizedText;
  content: LessonContent;
  order: number;
  estimatedMinutes: number;
}

export type LessonContentBlock =
  | TextBlock
  | ImageBlock
  | ExampleBlock
  | CounterBlock
  | AngleVisualizerBlock
  | AngleTypeComparisonBlock
  | ProtractorBlock
  | LineBuilderBlock
  | LineRelationshipBlock
  | LineOrientationBlock
  | CircleBlock;

export interface TextBlock {
  type: 'text';
  content: LocalizedText;
  format?: 'paragraph' | 'heading' | 'callout';
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  width?: number;
  height?: number;
}

export interface ExampleBlock {
  type: 'example';
  title: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  steps?: Array<{
    step: number;
    description: LocalizedText;
  }>;
}

export interface CounterBlock {
  type: 'counter';
  startValue: number;
  maxValue: number;
  label: LocalizedText;
  showEquation?: boolean;
}

export interface AngleVisualizerBlock {
  type: 'angle-visualizer';
  initialAngle: number;
  minAngle: number;
  maxAngle: number;
  label: LocalizedText;
  showDegrees?: boolean;
  showType?: boolean;
  allowInteraction?: boolean;
}

export interface AngleTypeComparisonBlock {
  type: 'angle-comparison';
  title: LocalizedText;
  description?: LocalizedText;
}

export interface ProtractorBlock {
  type: 'protractor';
  initialAngle?: number;
  instruction: LocalizedText;
  allowInteraction?: boolean;
}

export interface LineBuilderBlock {
  type: 'line-builder';
  initialType: 'line' | 'ray' | 'segment';
  showGrid?: boolean;
  showMeasurement?: boolean;
  instruction: LocalizedText;
  allowInteraction?: boolean;
}

export interface LineRelationshipBlock {
  type: 'line-relationship';
  relationship: 'parallel' | 'perpendicular' | 'intersecting' | 'all';
  allowInteraction?: boolean;
  showAngle?: boolean;
  title: LocalizedText;
  description?: LocalizedText;
}

export interface LineOrientationBlock {
  type: 'line-orientation';
  orientation: 'horizontal' | 'vertical' | 'diagonal' | 'all';
  showSlope?: boolean;
  showEquation?: boolean;
  allowInteraction?: boolean;
  instruction: LocalizedText;
}

export interface CircleBlock {
  type: 'circle';
  initialRadius?: number;
  minRadius?: number;
  maxRadius?: number;
  showCenter?: boolean;
  showRadius?: boolean;
  showDiameter?: boolean;
  showCircumference?: boolean;
  allowInteraction?: boolean;
  instruction?: LocalizedText;
}

export type LessonContent = LessonContentBlock[];

// Problem Types
export interface ProblemSet {
  id: string;
  unitId: string;
  name: LocalizedText;
  description: LocalizedText;
  problems: Problem[];
  order: number;
  minScoreToPass: number; // 0-100
}

export type ProblemType =
  | 'mcq'
  | 'number-input'
  | 'drag-drop';

export interface BaseProblem {
  id: string;
  type: ProblemType;
  difficulty: Difficulty;
  question: LocalizedText;
  explanation: LocalizedText;
  hints: Array<{
    level: number; // 1=subtle, 2=moderate, 3=direct
    text: LocalizedText;
  }>;
  tags: string[];
  estimatedTime: number; // seconds
  points: number;
}

export interface MCQProblem extends BaseProblem {
  type: 'mcq';
  options: Array<{
    id: string;
    text: LocalizedText;
    isCorrect: boolean;
  }>;
  feedback?: {
    correct: LocalizedText;
    incorrect: Record<string, LocalizedText>; // optionId -> feedback
  };
}

export interface NumberInputProblem extends BaseProblem {
  type: 'number-input';
  correctAnswer: number;
  tolerance?: number; // Allow ±tolerance
  acceptEquivalent?: boolean;
}

export interface DragDropProblem extends BaseProblem {
  type: 'drag-drop';
  draggables: Array<{
    id: string;
    content: LocalizedText;
  }>;
  dropZones: Array<{
    id: string;
    label: LocalizedText;
    accepts: string[]; // draggable IDs
  }>;
  solution: Record<string, string>; // dropZoneId -> draggableId
}

export type Problem = MCQProblem | NumberInputProblem | DragDropProblem;
