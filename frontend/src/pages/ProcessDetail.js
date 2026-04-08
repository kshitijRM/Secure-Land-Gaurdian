import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout, { DetailHero, DetailContent, RelatedLinks } from '@/components/PageLayout';
import { steps } from '@/data/content';

export default function ProcessDetail() {
  const { slug } = useParams();
  const step = steps.find(s => s.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!step) return <Navigate to="/" replace />;

  return (
    <PageLayout backLabel="Back to Process">
      <DetailHero
        icon={step.icon}
        title={`Step ${step.step}: ${step.title}`}
        tagline={step.tagline}
        heroImage={step.heroImage}
      />
      <DetailContent
        overview={step.details.overview}
        keyPoints={step.details.keyPoints}
      />
      <RelatedLinks items={steps} basePath="/process" currentSlug={slug} />
    </PageLayout>
  );
}
