import React from 'react';

interface HaberListesiProps {
  kategori?: string | null;
}

function page({ params }: { params: HaberListesiProps }) {
  return (
    
      <p>deniz {params.kategori}</p>
    
  );
}

export default page;
