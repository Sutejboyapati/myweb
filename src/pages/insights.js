export default function Insights() {
          return (
            <div className="container mx-auto p-6">
              <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Insights & Updates</h1>
              <p className="text-lg text-center text-gray-700 mb-12">
                Stay informed with the latest trends, research, and industry news.
              </p>
        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InsightCard 
                  title="The Future of AI in Healthcare" 
                  date="March 20, 2025" 
                  description="Explore how AI is transforming the healthcare industry, from diagnostics to personalized treatments."
                />
                <InsightCard 
                  title="Cloud Computing: Trends to Watch" 
                  date="March 18, 2025" 
                  description="Discover the latest trends shaping the future of cloud computing, including edge computing and security advancements."
                />
                <InsightCard 
                  title="Machine Learning in Business" 
                  date="March 15, 2025" 
                  description="Understand how businesses leverage machine learning for automation, data analytics, and decision-making."
                />
                <InsightCard 
                  title="Cybersecurity in the AI Era" 
                  date="March 12, 2025" 
                  description="How AI is being used to detect, prevent, and respond to cybersecurity threats in real time."
                />
              </div>
            </div>
          );
        }
        
        function InsightCard({ title, date, description }) {
          return (
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold text-blue-600">{title}</h3>
              <p className="text-gray-500 text-sm">{date}</p>
              <p className="text-gray-700 mt-2">{description}</p>
            </div>
          );
        }
        