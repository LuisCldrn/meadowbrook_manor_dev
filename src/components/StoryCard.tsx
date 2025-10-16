'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageModal from "./ImageModal";

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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to story detail page
    e.stopPropagation();
    setIsImageModalOpen(true);
  };

  return (
    <>
      <Link href={`/success-stories/${id}`} className="block">
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <div className="relative h-48">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#48a546] text-white px-3 py-1 rounded-full text-xs font-medium">
                {category}
              </span>
            </div>
            {/* Click to view image overlay */}
            <div className="absolute inset-0 bg-transparent bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
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

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc={image}
        imageAlt={title}
        title={title}
      />
    </>
  );
}
