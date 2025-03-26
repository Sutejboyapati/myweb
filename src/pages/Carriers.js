export default function Careers() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
      <p className="text-lg mb-8">We're looking for talented individuals to join our growing team. Explore our open positions below.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCard title="Frontend Developer" location="Remote" description="Build and optimize UI components using React and Tailwind CSS." />
        <JobCard title="Backend Developer" location="Remote" description="Develop and maintain APIs using Node.js and Express." />
        <JobCard title="AI/ML Engineer" location="Remote" description="Work on cutting-edge AI models and data pipelines." />
        <JobCard title="Cloud Engineer" location="Remote" description="Design and manage cloud infrastructure using AWS, Azure, or GCP." />
        <JobCard title="DevOps Engineer" location="Remote" description="Implement CI/CD pipelines and optimize cloud deployments." />
        <JobCard title="ML Ops Engineer" location="Remote" description="Deploy and monitor machine learning models in production environments." />
      </div>
      
      <div className="mt-20"> {/* Increased vertical space */}
        <h2 className="text-2xl font-semibold mb-4">See a role that fits?</h2>
        <p className="text-lg mb-6">We're always looking for great talent. Send us your resume, and we'll reach out when a relevant opportunity arises.</p>
        <a href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </a>
      </div>
    </div>
  );
}

function JobCard({ title, location, description }) {
  return (
    <div className="border p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600">{location}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
