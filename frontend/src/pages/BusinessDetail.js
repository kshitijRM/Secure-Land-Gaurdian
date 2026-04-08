import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout, { DetailHero, DetailContent, RelatedLinks } from '@/components/PageLayout';
import { businessModels } from '@/data/content';

export default function BusinessDetail() {
  const { slug } = useParams();
  const model = businessModels.find(m => m.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!model) return <Navigate to="/" replace />;

  return (
    <PageLayout backLabel="Back to Business Model">
      <DetailHero
        icon={model.icon}
        title={model.title}
        tagline={model.tagline}
        heroImage={model.heroImage}
      />
      <DetailContent
        overview={model.details.overview}
        keyPoints={model.details.keyPoints}
        revenue={model.details.revenue}
      />
      <RelatedLinks items={businessModels} basePath="/business" currentSlug={slug} />
    </PageLayout>
  );
}
