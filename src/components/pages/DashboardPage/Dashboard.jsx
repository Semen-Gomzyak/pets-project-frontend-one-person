import { useMedia } from 'react-use';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useState } from 'react';


export const DashboardPage = () => {
  const isMobie = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  return (
    <SharedLayout>
      
    </SharedLayout>
  );
};

