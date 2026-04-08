import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout, { DetailHero, DetailContent, RelatedLinks } from '@/components/PageLayout';
import { impacts } from '@/data/content';

export default function ImpactDetail() {
  const { slug } = useParams();
  const impact = impacts.find(i => i.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!impact) return <Navigate to="/" replace />;

  return (
    <PageLayout backLabel="Back to Impact">
      <DetailHero
        icon={impact.icon}
        title={impact.title}
        tagline={impact.tagline}
        heroImage={impact.heroImage}
      />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-10 text-center">
            <p className="text-7xl sm:text-8xl font-bold tracking-tighter text-white stat-glow">{impact.stat}</p>
            <p className="text-base text-neutral-400 mt-3">{impact.description}</p>
          </div>
        </div>
      </div>
      <DetailContent
        overview={impact.details.overview}
        keyPoints={impact.details.keyPoints}
      />
      <RelatedLinks items={impacts} basePath="/impact" currentSlug={slug} />
    </PageLayout>
  );
}
