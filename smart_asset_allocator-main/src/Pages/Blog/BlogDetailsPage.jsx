import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  // Updated blog data for financial services
  const blog = {
    id: 1,
    title: "5 Essential Financial Planning Tips for 2023",
    content: `
      <p>In today's volatile economic environment, having a solid financial plan is more important than ever. Here are five essential tips to help you navigate 2023 with confidence:</p>
      
      <h2>1. Assess Your Current Financial Health</h2>
      <p>Start by reviewing your income, expenses, assets, and liabilities. Create a net worth statement and track your cash flow. This baseline assessment will help you identify areas for improvement and set realistic financial goals.</p>
      
      <h2>2. Build an Emergency Fund</h2>
      <p>Financial experts recommend having 3-6 months' worth of living expenses set aside. Consider keeping this in a liquid account like a high-yield savings account for easy access during emergencies.</p>
      
      <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80" alt="Financial planning" class="w-full h-auto my-6 rounded-lg">
      
      <h2>3. Diversify Your Investments</h2>
      <p>Don't put all your eggs in one basket. Spread your investments across different asset classes (stocks, bonds, real estate) to mitigate risk. Consider consulting with a financial advisor to create an asset allocation strategy that matches your risk tolerance.</p>
      
      <h2>4. Maximize Tax-Advantaged Accounts</h2>
      <p>Take full advantage of retirement accounts like PPF, NPS, and tax-saving mutual funds. These instruments not only help you save for the future but also provide immediate tax benefits.</p>
      
      <h2>5. Review Insurance Coverage</h2>
      <p>Ensure you have adequate life, health, and disability insurance coverage. As your life circumstances change, so should your insurance policies. An annual review can prevent underinsurance.</p>
      
      <p>By implementing these financial planning strategies, you'll be better prepared to achieve your financial goals. For personalized advice tailored to your unique situation, <a href="/contact" class="text-blue-600 hover:underline">schedule a consultation</a> with our financial advisors.</p>
    `,
    excerpt:
      "Discover key strategies to optimize your financial planning and wealth management in the current economic climate.",
    category: "Wealth Management",
    date: "May 15, 2023",
    slug: "financial-planning-tips-2023",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
    author: {
      name: "Sanjay Jadhav",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      role: "Certified Financial Planner",
    },
    relatedServices: [
      { id: 1, name: "Wealth Management", link: "/services/wealth-management" },
      {
        id: 2,
        name: "Retirement Planning",
        link: "/services/retirement-planning",
      },
    ],
  };

  // Recent posts for sidebar
  const recentPosts = [
    {
      id: 2,
      title: "Understanding Tax-Saving Investment Options",
      date: "April 28, 2023",
      slug: "tax-saving-investment-options",
    },
    {
      id: 3,
      title: "Retirement Planning: Start Early, Retire Wealthy",
      date: "March 10, 2023",
      slug: "retirement-planning-guide",
    },
  ];

  // Categories for financial services
  const categories = [
    "Wealth Management",
    "Tax Planning",
    "Retirement Planning",
    "Investment",
    "Insurance",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* SEO Meta */}
      <title>{blog.title} | Sanjay Jadhav & Associates</title>
      <meta name="description" content={blog.excerpt} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />

            {/* Article Header */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-800">
                    {blog.author.name}
                  </h4>
                  <p className="text-sm text-gray-500">{blog.author.role}</p>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>

              {/* Related Services */}
              {blog.relatedServices && blog.relatedServices.length > 0 && (
                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {blog.relatedServices.map((service) => (
                      <li key={service.id}>
                        <Link
                          to={service.link}
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Sharing */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Share this article
                </h4>
                <div className="flex gap-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      blog.title
                    )}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      window.location.href
                    )}&title=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      window.location.href
                    )}&media=${encodeURIComponent(
                      blog.image
                    )}&description=${encodeURIComponent(blog.excerpt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
                    aria-label="Share on Pinterest"
                  >
                    <FaPinterest size={18} />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `${blog.title} ${window.location.href}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Comments Section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="mt-12 bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Questions? Ask Our Experts
            </h3>
            <div className="border-t border-gray-200 pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Question *
                  </label>
                  <textarea
                    id="question"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Submit Question
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search financial topics..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                />
                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Latest Insights
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Financial Topics
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {category === "Wealth Management"
                          ? 3
                          : category === "Tax Planning"
                          ? 2
                          : 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Financial Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get monthly insights on wealth management and financial planning
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default BlogDetailsPage;
