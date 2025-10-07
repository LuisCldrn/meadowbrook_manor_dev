import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { successStories } from '@/data/successStories';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            href="/success-stories" 
            className="inline-flex items-center text-[#48a546] hover:text-[#3a8a3a] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Success Stories
          </Link>
        </div>
      </div>

      {/* Story Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-4">
            <span className="bg-[#48a546] text-white px-3 py-1 rounded-full text-sm font-medium">
              {story.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {story.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{story.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{story.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{story.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Story Image */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Story Content */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
              {story.excerpt}
            </p>
            
            <div className="text-gray-800 leading-relaxed space-y-6">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2A462A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Inspired by This Story?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Every success story starts with a single step. Contact us today to learn how we can help you or your loved one begin their own journey to recovery and independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="bg-[#48a546] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a8a3a] transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/careservices"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2A462A] transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all stories
export async function generateStaticParams() {
  return successStories.map((story) => ({
    id: story.id.toString(),
  }));
}
