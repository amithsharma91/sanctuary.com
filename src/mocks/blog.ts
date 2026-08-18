type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  datePublished?: string;
  dateModified?: string;
  featuredImage: string;
  featuredImageAlt: string;
  content: string;
};

const BlogPosts: BlogPost[] = [
  {
    slug: "architecture-design-process",
    title: "Architecture Design Process",
    description: "Recurring design considerations across Sanctuary's project portfolio",
    excerpt:
      "How Sanctuary's approach to residential, hospitality and commercial projects transforms brief into built work",
    category: "Design Process",
    datePublished: "2025-01-15",
    featuredImage:
      "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/LEVITATING_HOUSE_-_13_u0ygk7.jpg",
    featuredImageAlt:
      "Levitating House by Sanctuary Architects & Designers",
    content: `<h2>Understanding the Brief</h2>
<p>
  Across the documented project portfolio, a consistent starting point is the project brief — a period of listening and recording the client's purpose, requirements and context. The project detail pages routinely begin with what the client seeks to achieve, whether a residence, a hospitality venue or a commercial space.
</p>

<h2>Responding to Context</h2>
<p>
  Several documented projects explore how the design responds to its context — climate, site, surrounding architecture and cultural setting. This context-response pattern appears across multiple project types and is recorded as a design highlight in the project documentation.
</p>

<h2>Spatial Planning and Open Planning</h2>
<p>
  Open planning — generous, flowing spaces that adapt to how people live and work — is recorded as a design highlight across the portfolio. The spatial organisation of each project reflects the specific needs of its programme, whether residential, hospitality or commercial.
</p>

<h2>Natural Light</h2>
<p>
  Natural lighting appears as a design highlight in multiple projects, described as abundant light through strategically placed openings and skylights. The consideration of light is a recurring theme in the documented work, though specific technical calculations are not part of the recorded evidence.
</p>

<h2>Material Palette</h2>
<p>
  A carefully curated material palette — materials that age gracefully and tell a story — is a recurring design highlight. The selection and organisation of materials is discussed at a conceptual level across the portfolio, reflecting the firm's approach to material thinking.
</p>

<h2>Landscape Integration</h2>
<p>
  Several projects demonstrate architecture that responds to and enhances its natural surroundings. Landscape integration appears as a design highlight and reflects the firm's approach to connecting building and site.
</p>

<h2>Sustainability as a Design Consideration</h2>
<p>
  Sustainability appears as a design highlight across the portfolio, described as energy-efficient design with passive cooling and local materials. The four sustainability principles documented on the About page — new sustainable materials, reusing and recycling materials, passive solar methods, and making design accessible to the common person — inform the broader design approach, though specific performance statistics are not claimed.
</p>

<h2>How These Ideas Appear Across the Portfolio</h2>
<p>
  These design considerations — brief, context, spatial planning, light, materials, landscape and sustainability — are not isolated strategies but recurring themes visible across the documented project work. They operate differently depending on project type and programme, but their presence across residential, hospitality and commercial projects suggests a consistent design mindset.
</p>
<p>
  <a href="/projects/residential" className="text-primary-600 hover:text-primary-800 transition-colors">
    Explore the residential portfolio
  </a>
  &
  <a href="/projects/hospitality" className="text-primary-600 hover:text-primary-800 transition-colors ml-4">
    Explore the hospitality portfolio
  </a>
  &
  <a href="/projects/commercial" className="text-primary-600 hover:text-primary-800 transition-colors ml-4">
    Explore the commercial portfolio
  </a>
</p>`,
  },
  {
    slug: "architecture-consultation-guide",
    title: "Architecture Consultation Guide",
    description:
      "What to prepare and expect when contacting Sanctuary Architects about a project",
    excerpt:
      "A guide to the consultation process using the firm's existing infrastructure",
    category: "Consultation",
    datePublished: "2025-01-22",
    featuredImage:
      "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/LEVITATING_HOUSE_-_13_u0ygk7.jpg",
    featuredImageAlt:
      "Levitating House by Sanctuary Architects & Designers",
    content: `<h2>What an Architecture Consultation Is</h2>
<p>
  An initial consultation is an opportunity to communicate the project clearly and to understand whether the practice is appropriate for the work. The firm's consultation workflow is documented through the contact infrastructure, which captures specific information via a structured form.
</p>

<h2>What Information You Can Prepare</h2>
<p>
  The contact form reflects the firm's existing infrastructure and includes the following fields:
</p>
<ul className="list-disc list-inside mb-6 space-y-2">
  <li>
    <strong>Service type:</strong> Residential Architecture, Interior Design, Renovation, Convention Hall, Commercial or Consultation Only
  </li>
  <li>
    <strong>Budget range:</strong> Below 25 Lakhs, 25 Lakhs to 50 Lakhs, 50 Lakhs to 1 Crore, 1 Crore to 3 Crores, 3 Crores to 5 Crores, Above 5 Crores, or Prefer to Discuss
  </li>
  <li>
    <strong>Project brief:</strong> A description of the project vision, requirements and timeline (maximum 500 characters)
  </li>
  <li>
    <strong>Location:</strong> Project location
  </li>
</ul>

<h2>Choosing the Relevant Service</h2>
<p>
  The six service options documented on the contact page represent the firm's actual offering. Selecting the option that most closely matches the project scope helps direct the enquiry to the right team.
</p>

<h2>Thinking About Your Project Brief</h2>
<p>
  The project brief field has a 500-character limit and the placeholder text "Tell us about your project vision, requirements and timeline." A concise brief that touches on the project's purpose, key requirements and approximate timeline is the most helpful format.
</p>

<h2>Budget and Project Scope</h2>
<p>
  The budget selection infrastructure on the contact page offers seven ranges. Choosing the range that best reflects the project scope is part of the enquiry process.
</p>

<h2>What Happens After Enquiry</h2>
<p>
  The contact infrastructure includes a WhatsApp consultation workflow. Submitting the form generates a pre-populated WhatsApp message containing the enquirer's name, phone, email, service type, location, budget range and project brief. This is the documented mechanism for initial contact.
</p>

<h2>Explore the Portfolio Before Contacting</h2>
<p>
  Prospective clients may wish to explore the existing project portfolio — residential, hospitality and commercial — before making enquiry. This can help clarify project type and service needs.
</p>
<p>
  <a href="/contact" className="text-foreground-950 font-medium hover:text-primary-800 transition-colors">
    Get in touch
  </a>
</p>`,
  },
  {
    slug: "sustainable-architecture",
    title: "Sustainable Architecture",
    description:
      "Sanctuary's approach to sustainability as documented on the About page and across the project portfolio",
    excerpt:
      "Four documented sustainability principles and their expression in the work",
    category: "Sustainability",
    datePublished: "2025-01-29",
    featuredImage:
      "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/LEVITATING_HOUSE_-_13_u0ygk7.jpg",
    featuredImageAlt:
      "Levitating House by Sanctuary Architects & Designers",
    content: `<h2>Sustainability as a Design Principle</h2>
<p>
  The About page explicitly documents four sustainability principles that guide the firm's design approach. These are not performance claims or certification standards but conceptual directions.
</p>

<h2>Sustainable Materials</h2>
<p>
  One documented principle is the use of new sustainable materials. Across the project portfolio, material choices reflect a consideration of materials that age gracefully and tell a story, as noted in the design highlights. Specific material names or environmental certifications are not part of the recorded evidence.
</p>

<h2>Reuse and Recycling</h2>
<p>
  Another documented principle is reusing and recycling materials used in projects. This concept appears in the firm's stated approach but without specific case studies or quantified recycling rates.
</p>

<h2>Passive Solar Design</h2>
<p>
  A third principle is passive solar methods. The consideration of solar orientation and passive cooling is part of the design approach, but specific solar percentages, energy savings figures or thermal performance data are not claimed in the documented evidence.
</p>

<h2>Making Design Accessible</h2>
<p>
  The fourth documented principle is making design accessible to the common person and changing mindsets on design, materials, construction, technologies and lifestyles. This principle reflects the firm's commitment but does not admit into unsupported corporate or environmental claims.
</p>

<h2>Natural Light and Environmental Response</h2>
<p>
  The documented design highlights include Natural Lighting and Context Response. These concepts connect the built work to its environmental setting, though engineering claims such as energy-reduction percentages are not part of the evidence.
</p>

<h2>Landscape and Context</h2>
<p>
  Landscape Integration appears as a design highlight across multiple projects, reflecting the firm's approach to connecting architecture with its surrounding site. Specific environmental metrics are not claimed.
</p>

<h2>Sustainability Across the Portfolio</h2>
<p>
  These four principles — sustainable materials, reuse and recycling, passive solar design, and making design accessible — are documented on the About page and inform the broader design approach. Their expression varies by project type and programme, and their presence across the portfolio suggests a consistent design mindset.
</p>
<p>
  <a href="/about" className="text-primary-600 hover:text-primary-800 transition-colors">
    Learn about the practice
  </a>
  &
  <a href="/projects/residential" className="text-primary-600 hover:text-primary-800 transition-colors ml-4">
    Explore residential projects
  </a>
  &
  <a href="/projects/hospitality" className="text-primary-600 hover:text-primary-800 transition-colors ml-4">
    Explore hospitality projects
  </a>
</p>`,
  },
];

export { BlogPosts };