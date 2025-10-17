'use client';

import { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import { DragDropProblem } from '@/types/content';

interface DragDropProblemComponentProps {
  problem: DragDropProblem;
  language: 'en' | 'bn';
  onSubmit: (answer: Record<string, string>) => void;
  disabled?: boolean;
}

export function DragDropProblemComponent({
  problem,
  language,
  onSubmit,
  disabled = false,
}: DragDropProblemComponentProps) {
  const [assignments, setAssignments] = useState<Record<string, string>>({});

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      setAssignments((prev) => ({
        ...prev,
        [over.id as string]: active.id as string,
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(assignments);
  };

  const isComplete = problem.dropZones.every((zone) => assignments[zone.id]);

  // Get draggables that haven't been placed yet
  const availableDraggables = problem.draggables.filter(
    (draggable) => !Object.values(assignments).includes(draggable.id)
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="space-y-6">
        {/* Draggables Pool */}
        <div className="p-4 bg-base-200 rounded-lg">
          <h4 className="font-semibold mb-3">
            {language === 'en' ? 'Drag these items:' : 'এই আইটেমগুলি টানো:'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {availableDraggables.map((draggable) => (
              <DraggableItem
                key={draggable.id}
                id={draggable.id}
                content={draggable.content[language]}
                disabled={disabled}
              />
            ))}
          </div>
        </div>

        {/* Drop Zones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problem.dropZones.map((zone) => (
            <DroppableZone
              key={zone.id}
              id={zone.id}
              label={zone.label[language]}
              assignedContent={
                assignments[zone.id]
                  ? problem.draggables.find(
                      (d) => d.id === assignments[zone.id]
                    )?.content[language] ?? null
                  : null
              }
              disabled={disabled}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isComplete || disabled}
          className="btn btn-primary w-full"
        >
          {language === 'en' ? 'Check Answer' : 'উত্তর পরীক্ষা করো'}
        </button>
      </div>
    </DndContext>
  );
}

function DraggableItem({
  id,
  content,
  disabled,
}: {
  id: string;
  content: string;
  disabled?: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      disabled,
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`px-4 py-2 bg-white border-2 border-primary rounded-lg cursor-move transition-opacity ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {content}
    </div>
  );
}

function DroppableZone({
  id,
  label,
  assignedContent,
  disabled,
}: {
  id: string;
  label: string;
  assignedContent: string | null;
  disabled?: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id, disabled });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[100px] p-4 border-2 border-dashed rounded-lg transition-colors ${
        isOver ? 'border-primary bg-primary/10' : 'border-base-300'
      }`}
    >
      <div className="font-semibold mb-2 text-center">{label}</div>
      {assignedContent && (
        <div className="px-4 py-2 bg-primary/10 border-2 border-primary rounded-lg text-center">
          {assignedContent}
        </div>
      )}
    </div>
  );
}
