
import { Breadcrumb } from '@/components/shared/breadcrumb';

export default function OurStoryPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Story' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <h1 className="text-4xl font-bold">Our Story works!</h1>
      </div>
    </div>
  );
}
