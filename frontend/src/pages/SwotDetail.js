import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout, { DetailHero, DetailContent, RelatedLinks } from '@/components/PageLayout';
import { swotData } from '@/data/content';

export default function SwotDetail() {
  const { slug } = useParams();
  const swot = swotData.find(s => s.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!swot) return <Navigate to="/" replace />;

  return (
    <PageLayout backLabel="Back to SWOT">
      <DetailHero
        icon={swot.icon}
        title={swot.title}
        tagline={swot.tagline}
        heroImage={swot.heroImage}
      />
      {/* Summary bullets */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-8">
            <ul className="space-y-3">
              {swot.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-neutral-300">
                  <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: swot.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <DetailContent
        overview={swot.details.overview}
        keyPoints={swot.details.keyPoints}
      />
      <RelatedLinks items={swotData} basePath="/swot" currentSlug={slug} />
    </PageLayout>
  );
}
