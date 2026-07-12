import { Droplet } from 'lucide-react';
import { PagePlaceholder } from '@/components/page-placeholder';

export default function BloodRequestsPage() {
  return (
    <PagePlaceholder
      title="Blood Requests"
      description="Post and respond to urgent blood requests, find donors by blood group, and coordinate donations in real time."
      icon={Droplet}
      badge="Urgent"
    />
  );
}
