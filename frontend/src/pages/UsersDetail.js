import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout, { DetailHero, DetailContent, RelatedLinks } from '@/components/PageLayout';
import { targetUsers } from '@/data/content';

export default function UsersDetail() {
  const { slug } = useParams();
  const user = targetUsers.find(u => u.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!user) return <Navigate to="/" replace />;

  return (
    <PageLayout backLabel="Back to Target Users">
      <DetailHero
        icon={user.icon}
        title={user.title}
        tagline={user.tagline}
        heroImage={user.heroImage}
      />
      <DetailContent
        overview={user.details.overview}
        keyPoints={user.details.keyPoints}
      />
      <RelatedLinks items={targetUsers} basePath="/users" currentSlug={slug} />
    </PageLayout>
  );
}
