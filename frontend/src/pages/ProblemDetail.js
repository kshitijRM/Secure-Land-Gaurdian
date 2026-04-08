import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout, { DetailHero, DetailContent, RelatedLinks } from '@/components/PageLayout';
import { problems } from '@/data/content';

export default function ProblemDetail() {
  const { slug } = useParams();
  const problem = problems.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!problem) return <Navigate to="/" replace />;

  return (
    <PageLayout backLabel="Back to Problem">
      <DetailHero
        icon={problem.icon}
        title={problem.label}
        tagline={problem.tagline}
        heroImage={problem.heroImage}
      />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#007AFF]/10 to-[#5E5CE6]/10 border border-[#007AFF]/20 rounded-2xl p-8 sm:p-10 text-center mb-16">
            <p className="text-6xl sm:text-7xl font-bold tracking-tighter text-white stat-glow">{problem.number}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mt-2">{problem.label}</p>
          </div>
        </div>
      </div>
      <DetailContent
        overview={problem.details.overview}
        keyPoints={problem.details.keyPoints}
      />
      <RelatedLinks items={problems} basePath="/problem" currentSlug={slug} />
    </PageLayout>
  );
}
