import { Topic, Problem, Unit } from '@/types/content';
import { additionTopic } from '@/content/topics/arithmetic/addition';

export class ContentLoader {
  private static topics: Topic[] = [additionTopic];

  /**
   * Get all available topics
   */
  static getAllTopics(): Topic[] {
    return this.topics;
  }

  /**
   * Get topic by ID
   */
  static getTopicById(topicId: string): Topic | undefined {
    return this.topics.find((t) => t.id === topicId);
  }

  /**
   * Get unit by ID
   */
  static getUnitById(unitId: string): { topic: Topic; unit: Unit } | null {
    for (const topic of this.topics) {
      const unit = topic.units.find((u) => u.id === unitId);
      if (unit) return { topic, unit };
    }
    return null;
  }

  /**
   * Get problem by ID
   */
  static getProblemById(problemId: string): Problem | undefined {
    for (const topic of this.topics) {
      for (const unit of topic.units) {
        for (const problemSet of unit.problemSets) {
          const problem = problemSet.problems.find((p) => p.id === problemId);
          if (problem) return problem;
        }
      }
    }
    return undefined;
  }

  /**
   * Get all problems for a unit
   */
  static getProblemsForUnit(unitId: string): Problem[] {
    const result = this.getUnitById(unitId);
    if (!result) return [];

    const problems: Problem[] = [];
    for (const problemSet of result.unit.problemSets) {
      problems.push(...problemSet.problems);
    }
    return problems;
  }
}
