import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#141414] md:p-7 text-white">
      <div className=" w-11/12 mx-auto py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Home</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Blogs</a></li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-white">Resources</a>
              <span className="border border-[#262626] text-xs text-white px-2 py-1 rounded-lg">New</span> 
            </li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Newsletter</a></li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">News</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Trending Stories</a></li>
            <li><a href="#" className="hover:text-white">Featured Videos</a></li>
            <li><a href="#" className="hover:text-white">Technology</a></li>
            <li><a href="#" className="hover:text-white">Health</a></li>
            <li><a href="#" className="hover:text-white">Politics</a></li>
            <li><a href="#" className="hover:text-white">Environment</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Blogs</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Quantum Computing</a></li>
            <li><a href="#" className="hover:text-white">AI Ethics</a></li>
            <li><a href="#" className="hover:text-white">Space Exploration</a></li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-white">Biotechnology</a>
              <span className="border border-[#262626] text-xs text-white px-2 py-1 rounded-lg">New</span>            </li>
            <li><a href="#" className="hover:text-white">Renewable Energy</a></li>
            <li><a href="#" className="hover:text-white">Biohacking</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Podcasts</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">AI Revolution</a></li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-white">AI Revolution</a>
              <span className="border border-[#262626] text-xs text-white px-2 py-1 rounded-lg">New</span> 
            </li>
            <li><a href="#" className="hover:text-white">TechTalk AI</a></li>
            <li><a href="#" className="hover:text-white">AI Conversations</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-7 text-gray-400">
          <li><a href="#" className="hover:text-white p-[10px] border border-[#262626]">Whitepapers →</a></li>
            <li><a href="#" className="hover:text-white p-[10px] border border-[#262626]">Ebooks →</a></li>
            <li><a href="#" className="hover:text-white p-[10px] border border-[#262626]">Reports →</a></li>
            <li><a href="#" className="hover:text-white p-[10px] border border-[#262626]">Research Papers →</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="p-4 flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-xl hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="text-xl hover:text-gray-300"><FaGithub /></a>
          <a href="#" className="text-xl hover:text-gray-300"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;