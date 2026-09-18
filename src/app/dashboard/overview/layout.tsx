import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter
} from '@/components/ui/card';
import { Icons } from '@/components/icons';
import React from 'react';

export default function OverViewLayout({
  sales,
  pie_stats,
  bar_stats,
  area_stats
}: {
  sales: React.ReactNode;
  pie_stats: React.ReactNode;
  bar_stats: React.ReactNode;
  area_stats: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className='@container/main flex flex-1 flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold tracking-tight'>Hi, Welcome back 👋</h2>
        </div>

        <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @5xl/main:grid-cols-4 @5xl/main:gap-4'>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className='text-3xl font-semibold tracking-tight whitespace-nowrap tabular-nums'>
                $1,250.00
              </CardTitle>
              <CardAction>
                <Badge variant='outline' className='shrink-0'>
                  <Icons.trendingUp />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                Trending up this month <Icons.trendingUp className='size-4' />
              </div>
              <div className='text-muted-foreground line-clamp-1'>
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>New Customers</CardDescription>
              <CardTitle className='text-3xl font-semibold tracking-tight whitespace-nowrap tabular-nums'>
                1,234
              </CardTitle>
              <CardAction>
                <Badge variant='outline' className='shrink-0'>
                  <Icons.trendingDown />
                  -20%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                Down 20% this period <Icons.trendingDown className='size-4' />
              </div>
              <div className='text-muted-foreground line-clamp-1'>Acquisition needs attention</div>
            </CardFooter>
          </Card>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>Active Accounts</CardDescription>
              <CardTitle className='text-3xl font-semibold tracking-tight whitespace-nowrap tabular-nums'>
                45,678
              </CardTitle>
              <CardAction>
                <Badge variant='outline' className='shrink-0'>
                  <Icons.trendingUp />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                Strong user retention <Icons.trendingUp className='size-4' />
              </div>
              <div className='text-muted-foreground line-clamp-1'>Engagement exceed targets</div>
            </CardFooter>
          </Card>
          <Card className='@container/card'>
            <CardHeader>
              <CardDescription>Growth Rate</CardDescription>
              <CardTitle className='text-3xl font-semibold tracking-tight whitespace-nowrap tabular-nums'>
                4.5%
              </CardTitle>
              <CardAction>
                <Badge variant='outline' className='shrink-0'>
                  <Icons.trendingUp />
                  +4.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                Steady performance increase <Icons.trendingUp className='size-4' />
              </div>
              <div className='text-muted-foreground line-clamp-1'>Meets growth projections</div>
            </CardFooter>
          </Card>
        </div>
        <div className='grid grid-cols-[repeat(7,minmax(10rem,1fr))] gap-4'>
          <div className='col-span-4 h-full'>{area_stats}</div>
          <div className='col-span-3 h-full'>{sales}</div>
          <div className='col-span-4'>{bar_stats}</div>
          <div className='col-span-3'>{pie_stats}</div>
        </div>
      </div>
    </PageContainer>
  );
}
