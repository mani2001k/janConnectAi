import { Newspaper } from 'lucide-react';
import { PagePlaceholder } from '@/components/page-placeholder';

export default function CommunityFeedPage() {
  return (
    <PagePlaceholder
      title="Community Feed"
      description="A real-time social feed of reports, updates, volunteer actions, and NGO announcements across your community."
      icon={Newspaper}
      badge="Feed"
    />
  );
}
