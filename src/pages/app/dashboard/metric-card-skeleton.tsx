import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-2 h-7 w-36" />
      <Skeleton className="mb-2 h-4 w-52" />
    </>
  )
}
