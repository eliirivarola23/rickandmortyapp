import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

interface PropsLoading {
  isLoaded: boolean;
  children: React.ReactNode;
  repeatSkeleton?: number;
  styleStack?: object;
}
const Loading = ({ isLoaded, children, repeatSkeleton = 5, styleStack, ...res }: PropsLoading) => {
  const skeletonList = Array.from({ length: repeatSkeleton }, () => 1);

  if (isLoaded) return <>{children}</>;
  return (
    <Stack m="5px 0" {...(styleStack && { ...styleStack })}>
      {skeletonList?.map((_, index) => (
        <Skeleton key={`Skeleton_${index}`} height="20px" {...res}>
          {children}
        </Skeleton>
      ))}
    </Stack>
  );
};

export default Loading;
