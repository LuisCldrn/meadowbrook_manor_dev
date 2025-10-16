import { notFound } from 'next/navigation';
import { successStories } from '@/data/successStories';
import StoryDetailClient from '@/components/StoryDetailClient';

interface StoryPageProps {
  params: {
    id: string;
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  const storyId = parseInt(params.id);
  const story = successStories.find(s => s.id === storyId);

  if (!story) {
    notFound();
  }

  return <StoryDetailClient story={story} />;
}

// Generate static params for all stories
export async function generateStaticParams() {
  return successStories.map((story) => ({
    id: story.id.toString(),
  }));
}
