import { Topic } from '@/types/content';
import { additionUnit1 } from './units/addition-basics';

export const additionTopic: Topic = {
  id: 'topic_addition',
  name: {
    en: 'Addition',
    bn: 'যোগ',
  },
  description: {
    en: 'Learn to add numbers together and solve addition problems',
    bn: 'সংখ্যা একসাথে যোগ করতে এবং যোগ সমস্যা সমাধান করতে শেখো',
  },
  icon: 'Plus',
  color: 'primary',
  prerequisites: [],
  units: [additionUnit1],
  order: 1,
  estimatedHours: 2,
};
