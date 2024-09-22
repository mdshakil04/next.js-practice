import React from "react";

const page = ({ params }) => {
  console.log(params.id);

  const { title, content, author, date_published } = blogs.find(
    (blog) => blog.id == params.id
  );
  return (
    <div className=" p-4 border-2 m-4">
      <h2 className=" text-3xl">{title}</h2>
      <div className=" flex justify-between">
        <p className=" underline font-bold">Author: {author}</p>
        <p>{date_published}</p>
      </div>
      <p>{content}</p>
    </div>
  );
};
const blogs = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    author: "Jane Doe",
    date_published: "2024-08-27",
    content:
      "Artificial Intelligence (AI) is rapidly transforming industries around the world. In this post, we explore the latest trends and predictions for AI in the coming years.",
    tags: ["AI", "technology", "future"],
  },
  {
    id: 2,
    title: "10 Tips for Healthy Eating",
    author: "Mike Johnson",
    date_published: "2024-07-15",
    content:
      "Maintaining a healthy diet can be challenging. Here are 10 tips that can help you stay on track and eat healthier every day.",
    tags: ["health", "nutrition", "lifestyle"],
  },
  {
    id: 3,
    title: "Exploring the World of Virtual Reality",
    author: "Emily Clark",
    date_published: "2024-06-10",
    content:
      "Virtual Reality (VR) is becoming more accessible and immersive. This post dives into the latest VR technologies and their potential applications.",
    tags: ["VR", "technology", "innovation"],
  },
  {
    id: 4,
    title: "Top 5 Travel Destinations for 2024",
    author: "Alex Brown",
    date_published: "2024-05-22",
    content:
      "Looking for your next adventure? Here are the top 5 travel destinations for 2024 that should be on your bucket list.",
    tags: ["travel", "adventure", "destinations"],
  },
  {
    id: 5,
    title: "The Rise of Remote Work",
    author: "Sarah Wilson",
    date_published: "2024-04-18",
    content:
      "Remote work has become the new norm for many companies. This blog explores the benefits and challenges of working from home.",
    tags: ["remote work", "business", "productivity"],
  },
  {
    id: 6,
    title: "How to Start Your Own Business",
    author: "Tom Harris",
    date_published: "2024-03-30",
    content:
      "Thinking about starting your own business? This guide covers the essential steps to get your business off the ground.",
    tags: ["entrepreneurship", "business", "startup"],
  },
  {
    id: 7,
    title: "The Impact of Climate Change on Wildlife",
    author: "Laura Green",
    date_published: "2024-02-14",
    content:
      "Climate change is affecting wildlife around the globe. This post discusses the impact and what can be done to protect endangered species.",
    tags: ["climate change", "environment", "wildlife"],
  },
  {
    id: 8,
    title: "Mastering the Art of Meditation",
    author: "David Lee",
    date_published: "2024-01-05",
    content:
      "Meditation is a powerful tool for reducing stress and improving mental health. Learn how to master the art of meditation with these tips.",
    tags: ["meditation", "mental health", "wellness"],
  },
];
export default page;
