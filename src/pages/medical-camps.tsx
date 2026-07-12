import { Stethoscope } from 'lucide-react';
import { PagePlaceholder } from '@/components/page-placeholder';

export default function MedicalCampsPage() {
  return (
    <PagePlaceholder
      title="Medical Camps"
      description="Schedule, discover, and coordinate medical camps and health check-up drives organized by NGOs and volunteers."
      icon={Stethoscope}
      badge="Health"
    />
  );
}
