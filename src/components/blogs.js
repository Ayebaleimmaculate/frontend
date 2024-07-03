
import React from 'react';
import './blogs.css'; 

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-post">
        <h2 className="blog-title">Delicious New Recipes</h2>
        <p className="blog-date">Published on July 1, 2024</p>
        <p className="blog-content">
        Bakery Tours and Local Food Culture: Offer virtual or in-person
        tours of your bakery, showcasing the process behind making  bread,
        pastries, and cakes. Discuss the importance of bakery culture in Uganda
        and its significance in daily life.


        </p>
        <a href="#" className="blog-read-more">
          Read More
        </a>
      </div>
      <div className="blog-post">
        <h2 className="blog-title">Special Event Highlights</h2>
        <p className="blog-date">Published on June 15, 2024</p>
        <p className="blog-content">
        <p className="blog-content">
  The recent Special Event held on June 15, 2024, 
  was a spectacular gathering of industry leaders, innovators,
  and enthusiasts alike. It showcased groundbreaking advancements in technology
  and highlighted insightful discussions on the future of AI integration in everyday 
  life. Attendees were treated to inspiring keynote speeches, interactive workshops, 
  and networking opportunities that fostered collaboration and idea exchange. The event
  not only reaffirmed our commitment to pushing boundaries but also underscored the 
  transformative potential of technological innovation in shaping a brighter tomorrow.
</p>

        </p>
        <a href="#" className="blog-read-more">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Blog;
