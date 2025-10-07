import Image from "next/image";
import Link from "next/link";

interface StoryCardProps {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export default function StoryCard({
  id,
  title,
  excerpt,
  content,
  author,
  date,
  category,
  image,
  readTime,
}: StoryCardProps) {
  return (
    <Link href={`/success-stories/${id}`} className="block">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#48a546] text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#48a546] transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              By {author}
            </div>
            <span className="text-[#48a546] font-medium group-hover:text-[#3a8a3a] transition-colors duration-200">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
