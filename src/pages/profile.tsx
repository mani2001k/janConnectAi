import { User } from 'lucide-react';
import { PagePlaceholder } from '@/components/page-placeholder';

export default function ProfilePage() {
  return (
    <PagePlaceholder
      title="Your Profile"
      description="Manage your personal profile, contributions, badges, and community reputation in one place."
      icon={User}
      badge="Account"
    />
  );
}
