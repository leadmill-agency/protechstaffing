import DataCenterPage, { dataCenterMetadata } from '@/components/DataCenterPage'

export const metadata = dataCenterMetadata('lowVoltageFiber')

export default function LowVoltageFiberPage() {
  return <DataCenterPage pageKey="lowVoltageFiber" />
}
