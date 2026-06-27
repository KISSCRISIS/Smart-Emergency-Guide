import { visualAssets } from '@/lib/database';
import { VisualMappingWorkbench } from '@/components/VisualMappingWorkbench';

export default function AdminVisualMappingPage() {
  return <VisualMappingWorkbench assets={visualAssets} />;
}
