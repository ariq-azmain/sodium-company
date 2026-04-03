"use client";

import { useState, useCallback } from "react";
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
    FaUser,
    FaTimes
} from "react-icons/fa";

import "@/css/application.css";

const ROLES = [
    {
        id: "video-editor",
        label: "Video Editor",
        icon: "FaVideo",
        description:
            "Edit and produce video content for SODIUM media channels. Create engaging visual stories.",
        badge: "Media",
        className: "role-editor"
    },
    {
        id: "graphics-designer",
        label: "Graphics Designer",
        icon: "FaPalette",
        description:
            "Create visual content, logos, banners, and promotional materials for SODIUM.",
        badge: "Media",
        className: "role-designer"
    },
    {
        id: "researcher",
        label: "Researcher & Script Writer",
        icon: "FaSearch",
        description:
            "Research topics and write scripts for SODIUM content and video productions.",
        badge: "Media",
        className: "role-researcher"
    },
    {
        id: "narrator",
        label: "Narrator",
        icon: "FaMicrophone",
        description:
            "Provide voiceovers and narration for SODIUM videos and presentations.",
        badge: "Media",
        className: "role-narrator"
    },
    {
        id: "competitive-it",
        label: "Competitive IT",
        icon: "FaTrophy",
        description:
            "Participate in coding competitions, hackathons, and tech challenges.",
        badge: "IT",
        className: "role-competitive"
    },
    {
        id: "development-it",
        label: "Development IT",
        icon: "FaLaptopCode",
        description:
            "Develop software, websites, and applications for SODIUM projects.",
        badge: "IT",
        className: "role-developer"
    },
    {
        id: "media",
        label: "Media",
        icon: "FaPhotoVideo",
        description:
            "Manage social media, content strategy, and community engagement.",
        badge: "Media",
        className: "role-media"
    },
    {
        id: "gaming",
        label: "Gaming",
        icon: "FaGamepad",
        description:
            "Organize gaming events, tournaments, and gaming content creation.",
        badge: "Gaming",
        className: "role-gaming"
    }
];

const ICON_MAP: Record<string, React.ReactNode> = {
    FaVideo: <FaVideo />,
    FaPalette: <FaPalette />,
    FaSearch: <FaSearch />,
    FaMicrophone: <FaMicrophone />,
    FaTrophy: <FaTrophy />,
    FaLaptopCode: <FaLaptopCode />,
    FaPhotoVideo: <FaPhotoVideo />,
    FaGamepad: <FaGamepad />
};

const MAX_ROLES = 3;
const MAX_CHARS = 2000;

const page = () => {
    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
    const [motivationCount, setMotivationCount] = useState(0);
    const [experienceCount, setExperienceCount] = useState(0);

    const handleRoleClick = useCallback((label: string) => {
        setSelectedRoles(prev => {
            if (prev.includes(label)) return prev.filter(r => r !== label);
            if (prev.length >= MAX_ROLES) return prev;
            return [...prev, label];
        });
    }, []);

    const handleRemoveTag = useCallback((label: string) => {
        setSelectedRoles(prev => prev.filter(r => r !== label));
    }, []);

    const isMaxReached = selectedRoles.length >= MAX_ROLES;

    const charClass = (count: number) => {
        if (count > MAX_CHARS * 0.95) return "char-count error";
        if (count > MAX_CHARS * 0.8) return "char-count warning";
        return "char-count";
    };

    return (
        <main className="role-container">
            <div id="content">
                <div className="role-header">
                    <h1>Apply for a Role</h1>
                    <p>
                        Choose a role that matches your skills and interests.
                        Your application will be reviewed by our team.
                    </p>
                </div>

                <div className="role-category">
                    <h2>
                        Available Roles{" "}
                        <span className="category-badge">8 Positions</span>
                    </h2>

                    <div className="role-grid" id="rolesGrid">
                        {ROLES.map(
                            ({
                                id,
                                label,
                                icon,
                                description,
                                badge,
                                className
                            }) => {
                                const isSelected =
                                    selectedRoles.includes(label);
                                const isDimmed = isMaxReached && !isSelected;
                                return (
                                    <div
                                        key={id}
                                        className={`role-card ${className}${isSelected ? " selected" : ""}`}
                                        style={{
                                            opacity: isDimmed ? 0.4 : 1,
                                            cursor: isDimmed
                                                ? "not-allowed"
                                                : "pointer"
                                        }}
                                        onClick={() => handleRoleClick(label)}
                                        title={
                                            isDimmed
                                                ? "Maximum 3 roles can be selected"
                                                : ""
                                        }
                                    >
                                        <div className="role-icon">
                                            {ICON_MAP[icon]}
                                        </div>
                                        <h3>{label}</h3>
                                        <p>{description}</p>
                                        <div className="role-badge">
                                            {badge}
                                        </div>
                                        <div className="checkmark">
                                            <FaCheck />
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>

                <div className="application-form">
                    <h3 className="text-[28px] mb-[30px] text-white">
                        Submit Your Application
                    </h3>

                    <div className="message" id="formMessage" />

                    <form id="applicationForm">
                        <input
                            type="hidden"
                            id="selectedRole"
                            name="selectedRole"
                            value={selectedRoles.join(", ")}
                            readOnly
                        />

                        <div className="form-section">
                            <h3>
                                <FaUser /> Your Information
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
                                    <div className="role-tags-input">
                                        {selectedRoles.length === 0 ? (
                                            <span className="placeholder">
                                                Select a role above
                                            </span>
                                        ) : (
                                            selectedRoles.map(role => (
                                                <span
                                                    key={role}
                                                    className="role-tag"
                                                >
                                                    {role}
                                                    <button
                                                        type="button"
                                                        className="role-tag-remove"
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            handleRemoveTag(
                                                                role
                                                            );
                                                        }}
                                                        title={`Remove ${role}`}
                                                    >
                                                        <FaTimes />
                                                    </button>
                                                </span>
                                            ))
                                        )}
                                    </div>
                                    <p className="max-hint">
                                        {isMaxReached
                                            ? "✓ Maximum 3 roles selected"
                                            : `${selectedRoles.length} / ${MAX_ROLES} roles selected`}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>
                                <FaFileAlt /> Application Details
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
                                    maxLength={MAX_CHARS}
                                    onChange={e =>
                                        setMotivationCount(
                                            e.target.value.length
                                        )
                                    }
                                />
                                <div className={charClass(motivationCount)}>
                                    {motivationCount}/{MAX_CHARS} characters
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
                                    maxLength={MAX_CHARS}
                                    onChange={e =>
                                        setExperienceCount(
                                            e.target.value.length
                                        )
                                    }
                                />
                                <div className={charClass(experienceCount)}>
                                    {experienceCount}/{MAX_CHARS} characters
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        Availability{" "}
                                        <span className="required">*</span>
                                    </label>
                                    <select
                                        id="availability"
                                        className="form-select"
                                        required
                                    >
                                        <option value="">
                                            Select your availability
                                        </option>
                                        <option value="full-time">
                                            Full-time (40+ hours/week)
                                        </option>
                                        <option value="part-time">
                                            Part-time (20-40 hours/week)
                                        </option>
                                        <option value="weekends">
                                            Weekends only
                                        </option>
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

                        <button
                            type="submit"
                            className="submit-btn"
                            id="submitBtn"
                            disabled={selectedRoles.length === 0}
                        >
                            <span className="btn-text">Submit Application</span>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default page;
