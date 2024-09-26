// src/Team.jsx
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
    {
        name: "Vishnu S",
        position: "Director & CEO",
        photo: "../../assets/images/Vishnuu.png",
        linkedin: "https://www.linkedin.com/in/vishnus06/"
    },
    {
        name: "Justin Jacob",
        position: "Chief Operating Officer",
        photo: "../../assets/images/justinn.png",
        linkedin: "https://www.linkedin.com/in/justinjacob01/"
    },
    {
        name: "Edric Thomas",
        position: "Director & CMO",
        photo: "../../assets/images/edric-modified.png",
        linkedin: "https://www.linkedin.com/in/edric-thomas/"
    },
    {
        name: "Devakrishna Dileep",
        position: "Chief Financial Officer",
        photo: "../../assets/images/deva-modified.png",
        linkedin: "https://www.linkedin.com/in/devakrishna-dileep/"
    },
    {
        name: "Anandakrishnan T.V",
        position: "Technical Head",
        photo: "../../assets/images/ananthakrish-modified.png",
        linkedin: "https://www.linkedin.com/in/anandakrishnanvinod/"
    },
    {
        name: "ARSHAK Rehman",
        position: "Chief Technical Officer",
        photo: "../../assets/images/arshak-.png",
        linkedin: "https://www.linkedin.com/in/arshak-rehuman-s-54857b189/"
    },
    {
        name: "Ashwin Shaji",
        position: "Research Head",
        photo: "../../assets/images/ashwin.png",
        linkedin: "https://www.linkedin.com/in/ashwin-shaji-01b272237/"
    },
    {
        name: "Adhithya Shine",
        position: "Web Developer",
        photo: "../../assets/images/adhi.png",
        linkedin: "https://www.linkedin.com/in/adhithya-shine/"
    },
    {
        name: "Govind Sankar",
        position: "App Developer",
        photo: "../../assets/images/govind1.png",
        linkedin: "https://www.linkedin.com/in/itzjustgk/"
    }
];

const Team = () => {
    return (
        <div 
        id='team'
        style={{ background: 'linear-gradient(to bottom, #000099 0%, #0099ff 100%)' }} 
        className="p-4 sm:p-6">
            
            {/* Heading */}
            <h2 className="text-5xl font-bold text-white text-center mt-14 mb-10 ">Meet Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="relative w-full max-w-xs p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                        {/* Image Container */}
                        <div className="relative w-48 h-48 mx-auto">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="rounded-full w-full h-full object-cover"
                            />
                            {/* LinkedIn Icon on Hover */}
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-full"
                            >
                                <FaLinkedin className="h-10 w-10 text-white" />
                            </a>
                        </div>
                        {/* Team Member Info */}
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
