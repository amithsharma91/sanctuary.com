export interface GoogleReview {
  name: string;
  review: string;
  googleUrl: string;
}

export const googleReviews: GoogleReview[] = [
  {
    name: "Sunjeev Aurora",
    review: "Having returned from the US, we were looking for an architect to build our home. After meeting several architects and designers, we finally settled on Sanctuary Architects and Anshul Chodha. From the first meeting itself, Anshul was able to understand and sketch out our requirements. He was personable and easy to work with.\n\nWhat followed was a fascinating journey and series of interactions with Anshul and his team, who gave us a home we love and enjoy. We would highly recommend Sanctuary for architecture and interior design.",
    googleUrl: "https://goo.gl/maps/Nrokdnfa1txNfQWA8?g_st=a",
  },
  {
    name: "Oum Pradutt",
    review: "Anshul and his team designed my new office on Indiranagar 100 Feet Road, which I absolutely love. It has given my team and me a space to collaborate and showcase our work to our clients.\n\nThe space has been designed very sensitively with alternative materials and has an amazingly fun vibe. Anshul has done projects for me in the past and I love working with him and his young, intuitive and hardworking team.",
    googleUrl: "https://goo.gl/maps/uqfVuUwtkn5mEQRM7?g_st=ac",
  },
  {
    name: "Sanjana Shivakumar",
    review: "This architecture firm offers comprehensive solutions for interior spaces and homes, making living spaces an experience through distinctive and thoughtful design. The firm provides thoughtful solutions to design problems, with careful selection of materials and technology to meet client needs.",
    googleUrl: "https://goo.gl/maps/9D3DRP8VYhVmgz8u6?g_st=ac",
  },
  {
    name: "Vineeth Kariappa",
    review: "As a vendor, I have been extremely happy while working with them. They are responsive, professional and always solve problems quickly.",
    googleUrl: "https://goo.gl/maps/mo65UdM72poDdqxc8?g_st=ac",
  },
  {
    name: "Madhunath Nair",
    review: "Very much impressed with the work. Very fresh, and every detail catches attention.",
    googleUrl: "https://goo.gl/maps/5znt3UYJV2rGSukt8",
  },
  {
    name: "Vijay Victor",
    review: "Very good, neat finishing, also good time management.",
    googleUrl: "https://goo.gl/maps/WUVR5x8NESztZJcy9?g_st=ac",
  },
  {
    name: "Ranganath R",
    review: "Nice office, professional and supportive staff.",
    googleUrl: "https://goo.gl/maps/zFn7ZYCVLe4k11Kr8?g_st=ac",
  },
  {
    name: "Jaganmayi Himamshu",
    review: "Very friendly and obliging people.",
    googleUrl: "https://goo.gl/maps/xR5G9S3oX5ZWGPBq6",
  },
  {
    name: "Prakash Aland",
    review: "Nice architecture and design team.",
    googleUrl: "https://maps.app.goo.gl/L1wh5e35G9iPaEv78",
  },
  {
    name: "Shreehari B",
    review: "One of the best architects.",
    googleUrl: "https://goo.gl/maps/UksJRW8T3hkseaZy9",
  },
  {
    name: "Kavish Navedia",
    review: "Committed, experienced and dependable.",
    googleUrl: "https://goo.gl/maps/GckAWEnptChzquCNA?g_st=ac",
  },
  {
    name: "Msanandkumar",
    review: "Great designs.",
    googleUrl: "https://maps.app.goo.gl/2jdQHTJuXhRXHpif7",
  },
  {
    name: "Sulaiman Sharieff",
    review: "Great.",
    googleUrl: "https://goo.gl/maps/UPTa3mbBRtjzzJiR9",
  },
];

// Homepage shows a curated editorial subset of the approved reviews.
// The Testimonials page renders the complete collection from googleReviews.
export const featuredGoogleReviews = googleReviews.slice(0, 6);
export const remainingGoogleReviews = googleReviews.slice(6);