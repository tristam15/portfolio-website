const sampleAwards = [
  {
    id: '1',
    title: 'Excellence in Residential Design',
    awardingBody: 'National Architecture Guild',
    year: '2023',
    project: 'Modern Residence, Hyderabad',
    description: 'Recognized for innovative use of space and sustainable practices in a contemporary residential project.'
  },
  {
    id: '2',
    title: 'Best Commercial Interior',
    awardingBody: 'Urban Design & Architecture Awards',
    year: '2022',
    project: 'Urban Office Space, Bangalore',
    description: 'Awarded for creating a dynamic and productive work environment that enhances employee well-being.'
  },
  {
    id: '3',
    title: 'Hospitality Project of the Year',
    awardingBody: 'Global Design Conclave',
    year: '2021',
    project: 'Boutique Hotel, Jaipur',
    description: 'Celebrated for its unique blend of traditional Rajasthani aesthetics with modern luxury.'
  },
  {
    id: '4',
    title: 'Green Building Award',
    awardingBody: 'Sustainable Architecture Forum',
    year: '2023',
    project: 'Modern Residence, Hyderabad',
    description: 'Acknowledging the project commitment to eco-friendly materials and energy-efficient design.'
  },
];

export default function AwardsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <header className="text-center mb-16 md:mb-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Recognition & Awards
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are honored to have our dedication to design excellence recognized by esteemed organizations in the industry.
        </p>
      </header>

      {sampleAwards.length > 0 ? (
        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
          {sampleAwards.map((award) => (
            <div 
              key={award.id} 
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-sky-700 mb-2 sm:mb-0">
                  {award.title}
                </h2>
                <span className="text-gray-500 font-medium text-sm bg-gray-100 px-3 py-1.5 rounded-full self-start sm:self-center whitespace-nowrap">
                  {award.year}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Awarded by: <span className="font-semibold">{award.awardingBody}</span>
              </p>
              {award.project && (
                <p className="text-sm text-gray-500 mb-4">
                  Project: <span className="italic text-gray-600">{award.project}</span>
                </p>
              )}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">No awards to display at the moment.</p>
      )}
    </div>
  );
}
