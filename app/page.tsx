
import { Suspense } from 'react';

function HomeContentWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

// HomeContent must be a client component
"use client";
import { useSearchParams } from 'next/navigation';
function HomeContent() {
  const searchParams = useSearchParams();
  return <div>Home</div>;
}

export default HomeContentWrapper;
