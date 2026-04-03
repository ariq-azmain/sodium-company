import {
   FaVideo,
   FaCheck,
   FaPalette,
   FaSearch,
   FaGamepad,
   FaPhotoVideo,
   FaLaptopCode,
   FaTrophy,
   FaMicrophone,
   FaFileAlt,
   FaUser
} from "react-icons/fa";

import '@/css/application.css'

const page = () => {
   return (
       <main className="role-container">
         <div id="content">
            <div className="role-header">
               <h1>Apply for a Role</h1>
               <p>
                  Choose a role that matches your skills and interests. Your
                  application will be reviewed by our team.
               </p>
            </div>

            <div className="role-category">
               <h2>
                  Available Roles{" "}
                  <span className="category-badge">8 Positions</span>
               </h2>
               <div className="role-grid" id="rolesGrid">
                  <div
                     className="role-card role-editor"
                     data-role="Video Editor"
                  >
                     <div className="role-icon">
                        <FaVideo />
                     </div>
                     <h3>Video Editor</h3>
                     <p>
                        Edit and produce video content for SODIUM media
                        channels. Create engaging visual stories.
                     </p>
                     <div className="role-badge">Media</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>

                  <div
                     className="role-card role-designer"
                     data-role="Graphics Designer"
                  >
                     <div className="role-icon">
                        <FaPalette />
                     </div>
                     <h3>Graphics Designer</h3>
                     <p>
                        Create visual content, logos, banners, and promotional
                        materials for SODIUM.
                     </p>
                     <div className="role-badge">Media</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>

                  <div
                     className="role-card role-researcher"
                     data-role="Researcher & Script Writer"
                  >
                     <div className="role-icon">
                        <FaSearch />
                     </div>
                     <h3>Researcher & Script Writer</h3>
                     <p>
                        Research topics and write scripts for SODIUM content and
                        video productions.
                     </p>
                     <div className="role-badge">Media</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>

                  <div className="role-card role-narrator" data-role="Narrator">
                     <div className="role-icon">
                        <FaMicrophone/>
                     </div>
                     <h3>Narrator</h3>
                     <p>
                        Provide voiceovers and narration for SODIUM videos and
                        presentations.
                     </p>
                     <div className="role-badge">Media</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>

                  <div
                     className="role-card role-competitive"
                     data-role="Competitive IT"
                  >
                     <div className="role-icon">
                        <FaTrophy/>
                     </div>
                     <h3>Competitive IT</h3>
                     <p>
                        Participate in coding competitions, hackathons, and tech
                        challenges.
                     </p>
                     <div className="role-badge">IT</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>

                  <div
                     className="role-card role-developer"
                     data-role="Development IT"
                  >
                     <div className="role-icon">
                        <FaLaptopCode/>
                     </div>
                     <h3>Development IT</h3>
                     <p>
                        Develop software, websites, and applications for SODIUM
                        projects.
                     </p>
                     <div className="role-badge">IT</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>

                  <div className="role-card role-media" data-role="Media">
                     <div className="role-icon">
                        <FaPhotoVideo/>
                     </div>
                     <h3>Media</h3>
                     <p>
                        Manage social media, content strategy, and community
                        engagement.
                     </p>
                     <div className="role-badge">Media</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>

                  <div className="role-card role-gaming" data-role="Gaming">
                     <div className="role-icon">
                        <FaGamepad />
                     </div>
                     <h3>Gaming</h3>
                     <p>
                        Organize gaming events, tournaments, and gaming content
                        creation.
                     </p>
                     <div className="role-badge">Gaming</div>
                     <div className="checkmark">
                        <FaCheck />
                     </div>
                  </div>
               </div>
            </div>

            <div className="application-form">
               <h3 className="text-[28px] mb-[30px] text-white">
                  Submit Your Application
               </h3>

               <div className="message" id="formMessage"></div>

               <form id="applicationForm">
                  <input type="hidden" id="selectedRole" name="selectedRole" />

                  <div className="form-section">
                     <h3>
                        <FaUser/> Your Information
                     </h3>

                     <div className="form-row">
                        <div className="form-group">
                           <label>Full Name</label>
                           <input
                              type="text"
                              id="applicantName"
                              className="form-input"
                              readOnly
                           />
                        </div>

                        <div className="form-group">
                           <label>Email Address</label>
                           <input
                              type="email"
                              id="applicantEmail"
                              className="form-input"
                           />
                        </div>
                     </div>

                     <div className="form-row">
                        <div className="form-group">
                           <label>Username</label>
                           <input
                              type="text"
                              id="applicantUsername"
                              className="form-input"
                           />
                        </div>

                        <div className="form-group">
                           <label>Selected Role</label>
                           <input
                              type="text"
                              id="selectedRoleDisplay"
                              className="form-input"
                              readOnly
                              placeholder="Select a role above"
                           />
                        </div>
                     </div>
                  </div>

                  <div className="form-section">
                     <h3>
                        <FaFileAlt/> Application Details
                     </h3>

                     <div className="form-group">
                        <label>
                           Why do you want this role?{" "}
                           <span className="required">*</span>
                        </label>
                        <textarea
                           id="roleMotivation"
                           className="form-textarea"
                           placeholder="Explain why you're interested in this role and what you hope to contribute (minimum 50 words)"
                           required
                           maxLength={2000}
                        ></textarea>
                        <div className="char-count" id="motivationCount">
                           0/2000 characters
                        </div>
                     </div>

                     <div className="form-group">
                        <label>
                           Relevant Experience{" "}
                           <span className="required">*</span>
                        </label>
                        <textarea
                           id="roleExperience"
                           className="form-textarea"
                           placeholder="Describe your relevant skills, experience, or portfolio (minimum 50 words)"
                           required
                           maxLength={2000}
                        ></textarea>
                        <div className="char-count" id="experienceCount">
                           0/2000 characters
                        </div>
                     </div>

                     <div className="form-row">
                        <div className="form-group">
                           <label>
                              Availability <span className="required">*</span>
                           </label>
                           <select
                              id="availability"
                              className="form-select"
                              required
                           >
                              <option value="">Select your availability</option>
                              <option value="full-time">
                                 Full-time (40+ hours/week)
                              </option>
                              <option value="part-time">
                                 Part-time (20-40 hours/week)
                              </option>
                              <option value="weekends">Weekends only</option>
                              <option value="flexible">
                                 Flexible schedule
                              </option>
                           </select>
                        </div>

                        <div className="form-group">
                           <label>Portfolio/Examples (Optional)</label>
                           <input
                              type="text"
                              id="portfolio"
                              className="form-input"
                              placeholder="Link to your portfolio or examples"
                           />
                        </div>
                     </div>
                  </div>

                  <button type="submit" className="submit-btn" id="submitBtn">
                     <span className="btn-text">Submit Application</span>
                  </button>
               </form>
            </div>
         </div>
      </main>
   );
};
export default page;
