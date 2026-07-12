import { Settings } from 'lucide-react';
import { PagePlaceholder } from '@/components/page-placeholder';

export default function SettingsPage() {
  return (
    <PagePlaceholder
      title="Settings"
      description="Configure your account preferences, notifications, privacy, and workspace integrations."
      icon={Settings}
      badge="Config"
    />
  );
}
