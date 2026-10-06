import DataCenterPage, { dataCenterMetadata } from '@/components/DataCenterPage'

export const metadata = dataCenterMetadata('equipmentManufacturing')

export default function EquipmentManufacturingPage() {
  return <DataCenterPage pageKey="equipmentManufacturing" />
}
