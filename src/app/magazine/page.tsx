import { Suspense } from 'react';

import RecommendedContentContainer from '@/components/Magazine/RecommendedContentContainer';
import VideoContainer from '@/components/Magazine/VideoContainer';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';
import VideoSkeleton from '@/components/common/Skeleton/VideoSkeleton';

const MagazinePage = () => {
  return (
    <>
      <Header title="매거진" />
      <main className="px-4 pb-24 pt-20 lg:mx-auto lg:w-[1024px]">
        <Suspense fallback={<VideoSkeleton />}>
          <VideoContainer />
        </Suspense>
        <RecommendedContentContainer />
      </main>
      <NavBar />
    </>
  );
};

export default MagazinePage;
