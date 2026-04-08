import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout, { DetailHero, DetailContent, RelatedLinks } from '@/components/PageLayout';
import { features } from '@/data/content';

export default function FeatureDetail() {
  const { slug } = useParams();
  const feature = features.find(f => f.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!feature) return <Navigate to="/" replace />;

  return (
    <PageLayout backLabel="Back to Features">
      <DetailHero
        icon={feature.icon}
        title={feature.title}
        tagline={feature.details.overview.split('.')[0] + '.'}
        heroImage={feature.heroImage}
      />
      <DetailContent
        overview={feature.details.overview}
        keyPoints={feature.details.keyPoints}
        stats={feature.details.stats}
        techStack={feature.details.techStack}
      />
      <RelatedLinks items={features} basePath="/features" currentSlug={slug} />
    </PageLayout>
  );
}
