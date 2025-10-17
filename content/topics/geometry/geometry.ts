import { Topic } from '@/types/content';
import { anglesUnit } from './units/angles-basics';
import { linesUnit } from './units/lines-basics';

export const geometryTopic: Topic = {
  id: 'topic_geometry',
  name: {
    en: 'Geometry',
    bn: 'জ্যামিতি',
  },
  description: {
    en: 'Explore shapes, angles, lines, and spatial relationships through interactive visualizations',
    bn: 'ইন্টারেক্টিভ ভিজ্যুয়ালাইজেশনের মাধ্যমে আকার, কোণ, রেখা এবং স্থানিক সম্পর্ক অন্বেষণ করো',
  },
  icon: 'Triangle',
  color: 'secondary',
  prerequisites: [],
  units: [anglesUnit, linesUnit],
  order: 2,
  estimatedHours: 6,
};
