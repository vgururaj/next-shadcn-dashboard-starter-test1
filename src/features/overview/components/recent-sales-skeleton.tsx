import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function RecentSalesSkeleton() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <Skeleton className='h-6 w-[140px]' /> {/* CardTitle */}
        <Skeleton className='h-4 w-[180px]' /> {/* CardDescription */}
      </CardHeader>
      <CardContent className='min-h-0 flex-1'>
        <div className='space-y-12'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='flex items-center'>
              <Skeleton className='h-9 w-9 shrink-0 rounded-full' />
              <div className='ml-4 space-y-1'>
                <Skeleton className='h-4 w-[120px]' />
                <Skeleton className='h-4 w-[160px]' />
              </div>
              <Skeleton className='ml-auto h-4 w-[80px] shrink-0' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
