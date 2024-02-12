import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './Blog.css'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Lifelong Learning",
      author: "John Doe",
      date: "February 15, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "10 Tips for Effective Online Learning",
      author: "Jane Smith",
      date: "February 20, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 3,
      title: "The Benefits of Online Education",
      author: "Alice Johnson",
      date: "March 5, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 4,
      title: "How to Stay Motivated While Learning Online",
      author: "Robert Williams",
      date: "March 12, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 5,
      title: "Exploring Different Learning Styles",
      author: "Emily Brown",
      date: "March 20, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 6,
      title: "The Future of Education: Trends and Innovations",
      author: "Michael Johnson",
      date: "April 2, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  return (
    <section className="blog-page">
      <Container>
        <h2 className="text-center mb-5">Latest Blog Posts</h2>
        <Row>
          {blogPosts.map((post) => (
            <Col key={post.id} lg="4" md="6" sm="12" className="mb-4">
              <div className="blog-post p-3 border rounded">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-meta mb-2">
                  By <span className="author">{post.author}</span> |{" "}
                  <span className="date">{post.date}</span>
                </p>
                <p className="mb-3">{post.content.slice(0, 100)}...</p>
                <Link to={`/blog/${post.id}`} className="read-more btn btn-primary">
                  Read More
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogPage;
