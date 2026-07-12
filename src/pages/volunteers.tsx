import { HandHeart } from 'lucide-react';
import { PagePlaceholder } from '@/components/page-placeholder';

export default function VolunteersPage() {
  return (
    <PagePlaceholder
      title="Volunteers"
      description="Discover and manage volunteers, match skills to community needs, and coordinate efforts for maximum impact."
      icon={HandHeart}
      badge="Network"
    />
  );
}
