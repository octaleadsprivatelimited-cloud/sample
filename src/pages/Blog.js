import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Perfect Wedding Photography",
      excerpt: "Learn the essential techniques for capturing beautiful wedding moments that will last a lifetime.",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1594736797933-d0c29d0b8c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Wedding Photography"
    },
    {
      id: 2,
      title: "Indian Wedding Traditions: A Photographer's Guide",
      excerpt: "Understanding the rich cultural traditions of Indian weddings to capture authentic moments.",
      date: "December 10, 2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Cultural Photography"
    },
    {
      id: 3,
      title: "Event Photography: Capturing Corporate Moments",
      excerpt: "Professional tips for documenting corporate events and business gatherings.",
      date: "December 5, 2024",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Event Photography"
    },
    {
      id: 4,
      title: "Portrait Photography: Lighting Techniques",
      excerpt: "Master the art of portrait lighting to create stunning professional headshots.",
      date: "November 28, 2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Portrait Photography"
    },
    {
      id: 5,
      title: "Nature Photography: Golden Hour Magic",
      excerpt: "Discover the secrets of capturing breathtaking nature scenes during golden hour.",
      date: "November 20, 2024",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Nature Photography"
    },
    {
      id: 6,
      title: "Birthday Party Photography: Capturing Joy",
      excerpt: "Tips for photographing children's birthday parties and family celebrations.",
      date: "November 15, 2024",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Family Photography"
    }
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Photography Blog</h1>
          <p>
            Insights, tips, and stories from our photography journey. 
            Learn about techniques, equipment, and the art of capturing perfect moments.
          </p>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <h2 className="gallery-title">Latest Posts</h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
