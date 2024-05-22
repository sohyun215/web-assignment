import Image from 'next/image';

import { Magazine } from '@/types/magazine';

const RecommendedContentContainer = async () => {
  const res = await fetch('http://localhost:3000/api/magazine');
  const { magazineList }: { magazineList: Magazine[] } = await res.json();

  return (
    <section className="shadow-card mt-4 min-h-[280px] rounded-[10px] p-5">
      <h2 className="mb-4 font-bold">추천 컨텐츠</h2>
      <ul className="flex flex-col gap-4">
        {magazineList.map((content) => (
          <li key={content.articleNo} className="flex h-[60px] gap-3 md:h-24">
            <Image
              src={content.imageUrl}
              width={0}
              height={0}
              sizes="100vw"
              className="h-[60px] w-[60px] rounded-md object-cover md:h-24 md:w-24"
              alt={content.title}
            />
            <div className="flex h-full flex-col justify-center gap-2 text-xs">
              <h3 className="font-semibold">{content.title}</h3>
              <p className="line-clamp-2">{content.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedContentContainer;
