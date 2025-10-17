import { ContentLoader } from '@/lib/services/content-loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { UnitPageClient } from '@/components/learning/UnitPageClient';

export default async function UnitPage({
  params,
}: {
  params: Promise<{ topicId: string; unitId: string }>;
}) {
  const { unitId } = await params;
  const result = ContentLoader.getUnitById(unitId);

  if (!result) {
    return <div>Unit not found</div>;
  }

  const { topic, unit } = result;
  const problems = ContentLoader.getProblemsForUnit(unit.id);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-4 md:p-8">
        <UnitPageClient topic={topic} unit={unit} problems={problems} />
      </main>
      <Footer />
    </>
  );
}
