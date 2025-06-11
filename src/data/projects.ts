export interface Project {
  slug: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  client?: string;
  location?: string;
  year?: number;
}

export const projectsData: Project[] = [
  {
    slug: 'modern-urban-residence',
    title: 'Modern Urban Residence',
    category: 'Residential Architecture',
    thumbnailUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'A stunning contemporary home blending sleek design with urban living convenience.',
    longDescription: 'This project involved the complete design and construction of a multi-level urban residence. Key features include an open-plan living space, floor-to-ceiling windows offering panoramic city views, and sustainable materials throughout. The design emphasizes natural light and a seamless connection between indoor and outdoor spaces, including a rooftop terrace.',
    images: [
      'https://images.unsplash.com/photo-1560185007-c5ca91ba2960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'Private Homeowner',
    location: 'Metropolis City, India',
    year: 2023,
  },
  {
    slug: 'eco-friendly-office-hub',
    title: 'Eco-Friendly Office Hub',
    category: 'Commercial Design',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'A state-of-the-art office complex designed with sustainability and employee well-being at its core.',
    longDescription: 'This commercial project focused on creating a dynamic and sustainable workspace. It features green roofs, solar panels, advanced water recycling systems, and biophilic design elements to enhance productivity and well-being. The flexible office layouts cater to modern work styles, promoting collaboration and innovation.',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1573496774439-c9a7a8a8a6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'Innovatech Corp.',
    location: 'Tech Park, Bangalore',
    year: 2022,
  },
  {
    slug: 'luxury-coastal-villa',
    title: 'Luxury Coastal Villa',
    category: 'Residential Architecture',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'An exquisite villa offering breathtaking ocean views and unparalleled luxury.',
    longDescription: 'Perched on a cliffside, this luxury villa maximizes its stunning coastal location. The design incorporates expansive glass walls, infinity pools, and natural materials like stone and wood to blend with the landscape. Each room is crafted for comfort and elegance, providing a serene retreat.',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'Seaside Estates Ltd.',
    location: 'Coastal Region, Goa',
    year: 2024,
  },
  {
    slug: 'minimalist-downtown-apartment',
    title: 'Minimalist Downtown Apartment',
    category: 'Interior Design',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'A compact city apartment transformed into a serene and functional minimalist haven.',
    longDescription: 'This interior design project focused on maximizing space and light in a small downtown apartment. Using a neutral color palette, custom-built furniture, and clever storage solutions, the apartment now feels spacious, calm, and highly functional, perfectly suited for modern city living.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1533090481720-856c6e7c6c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'Urban Dweller',
    location: 'City Center, Mumbai',
    year: 2023,
  },
  {
    slug: 'serene-courtyard-residence',
    title: 'Serene Courtyard Residence',
    category: 'Residential Architecture',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'A tranquil home designed around a central courtyard, blurring indoor-outdoor lines.',
    longDescription: 'This residence prioritizes peace and connection with nature. The central courtyard acts as the heart of the home, bringing light and greenery into every room. The design uses natural materials and a minimalist aesthetic to create a calming and sophisticated living environment.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'The Sharma Family',
    location: 'Jaipur, Rajasthan',
    year: 2023,
  },
  {
    slug: 'boutique-hotel-artisan',
    title: 'Boutique Hotel "The Artisan"',
    category: 'Commercial Design',
    thumbnailUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'A unique boutique hotel celebrating local craftsmanship and contemporary design.',
    longDescription: '"The Artisan" offers a distinctive hospitality experience. Each space is thoughtfully curated with custom furniture, local art, and luxurious finishes. The design blends modern aesthetics with traditional influences, creating a warm and inviting atmosphere for guests.',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'Artisan Hospitality Group',
    location: 'Udaipur, Rajasthan',
    year: 2024,
  },
  {
    slug: 'urban-loft-conversion',
    title: 'Urban Loft Conversion',
    category: 'Interior Design',
    thumbnailUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'Transforming an industrial warehouse space into a chic and functional urban loft.',
    longDescription: 'This project involved reimagining a former warehouse into a spacious and light-filled loft apartment. The design retains industrial elements like exposed brick and steel beams, juxtaposed with modern finishes and comfortable furnishings. An open-plan layout maximizes space and light.',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'Mr. Arjun Singh',
    location: 'Lower Parel, Mumbai',
    year: 2022,
  },
  {
    slug: 'sustainable-community-center',
    title: 'Sustainable Community Center',
    category: 'Commercial Design',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'An eco-conscious community center designed for versatility and public engagement.',
    longDescription: 'This community center is a model of sustainable architecture, featuring passive solar design, rainwater harvesting, and locally sourced materials. The flexible spaces can host a variety of activities, from workshops and meetings to cultural events, fostering a vibrant community hub.',
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'City Development Authority',
    location: 'Pune, Maharashtra',
    year: 2023,
  },
  {
    slug: 'contemporary-hillside-villa',
    title: 'Contemporary Hillside Villa',
    category: 'Residential Architecture',
    thumbnailUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1287&q=80',
    shortDescription: 'A striking modern villa nestled into a hillside, offering panoramic valley views.',
    longDescription: 'This architectural marvel is designed to integrate seamlessly with its dramatic hillside setting. Expansive windows and cantilevered balconies maximize the stunning views, while the interior spaces are characterized by clean lines, natural materials, and an abundance of natural light.',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1287&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1287&q=80'
    ],
    client: 'Ms. Priya Reddy',
    location: 'Lonavala, Maharashtra',
    year: 2024,
  }
];
