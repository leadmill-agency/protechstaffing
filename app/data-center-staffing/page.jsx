import DataCenterPage, { dataCenterMetadata } from '@/components/DataCenterPage'

export const metadata = dataCenterMetadata('hub')

export default function DataCenterHubPage() {
  return <DataCenterPage pageKey="hub" />
}
