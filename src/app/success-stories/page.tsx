import StoryCard from "@/components/StoryCard";
import { successStories, categories } from "@/data/successStories";

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A462A] to-[#4A6049] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the inspiring journeys of our patients and families who have found hope, healing, and renewed independence at Meadowbrook Rehabilitation.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white py-8 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-[#48a546] hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              title={story.title}
              excerpt={story.excerpt}
              content={story.content}
              author={story.author}
              date={story.date}
              category={story.category}
              image={story.image}
              readTime={story.readTime}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2A462A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the many families who have found hope and healing at Meadowbrook Rehabilitation. 
            Contact us today to learn how we can help you or your loved one on the journey to recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactus"
              className="bg-[#48a546] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a8a3a] transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/careservices"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2A462A] transition-colors duration-200"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
