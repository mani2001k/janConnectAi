import { BarChart3 } from 'lucide-react';
import { PagePlaceholder } from '@/components/page-placeholder';

export default function AnalyticsPage() {
  return (
    <PagePlaceholder
      title="Analytics"
      description="AI-powered insights, trends, and impact metrics across reports, volunteers, and community outcomes."
      icon={BarChart3}
      badge="Insights"
    />
  );
}
