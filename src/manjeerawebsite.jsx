import React, { useState, useRef, useEffect } from 'react';

const courses = [
              {
                title: "IIT & AI Classes",
                description: "Our IIT & AI classes offer expert guidance and structured learning to help students excel in competitive exams and advance their knowledge in engineering and artificial intelligence.",
                image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Robotics",
                description: "Our Robotics classes focus on practical learning and problem-solving to help students build skills in automation, control systems, and intelligent machines.",
                image: "https://media.istockphoto.com/id/1344988472/photo/happy-teacher-and-students-claps-as-their-robotic-car-model-successfully-works.webp?a=1&b=1&s=612x612&w=0&k=20&c=Az4GAwmNXE1ken9HJ96A5O0Q7VUPlKyS9tN_D_Ow-9w="
              },
              {
                title: "Sports Education",
                description: "Our sports program focuses on physical fitness, teamwork, and developing sportsmanship among students.",
                image: "https://media.istockphoto.com/id/1146896078/photo/teachers-cheering-student-playing-tug-of-war.webp?a=1&b=1&s=612x612&w=0&k=20&c=WUKGrhhNP0yJEchQXzHY0nfV_zeCwVoR80vT_HNnNsA="
              }
            ];

const achievements = [
              {
                icon: "fas fa-trophy",
                title: "Academic Excellence",
                description: "95% of our students scored above 90% in CBSE Board Exams 2023"
              },
              {
                icon: "fas fa-medal",
                title: "Sports Champions",
                description: "Played in State Level Sports Championship"
              },
              {
                icon: "fas fa-paint-brush",
                title: "Arts & Culture",
                description: "National level recognition in painting and music competitions"
              }
            ]
const news = [
              {
                date: "June 15, 2023",
                title: "Annual Day Celebration",
                description: "Our annual day celebration was a grand success with students showcasing their talents in various performances.",
                image: "https://images.unsplash.com/photo-1633338718293-785082123de7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNjaG9vbCUyMGFubnVhbCUyMGRheSUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"
              },
              {
                date: "July 22, 2023",
                title: "Science Fair Winners",
                description: "Our students won 3 prizes at the Regional Science Fair showcasing innovative projects.",
                image: "https://media.istockphoto.com/id/2160438317/photo/proud-schoolboy-wins-the-award-for-best-science-project-at-elementary-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=yem1lijZp7tUllfDkNtPzj8saIVD1OhmikF4zCY3g0s="
              },
              {
                date: "August 10, 2023",
                title: "Annual Sports Day",
                description: "Annual sports day was conducted with great enthusiasm and participation from students.",
                image: "https://media.istockphoto.com/id/1148219796/photo/teachers-applauding-for-student-at-awards-ceremony.webp?a=1&b=1&s=612x612&w=0&k=20&c=okL1qjTCi7BzIXnAqEwjRiQK4V_L4ytp3z9OxGZykY4="
              }
            ]

const ManjeeraSchoolWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const chatBodyRef = useRef(null);
  const [formType, setFormType] = useState("contact");

  // Animation observer hook
  const useIntersectionObserver = () => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            }
          });
        },
        { threshold: 0.1 }
      );

      const animateElements = document.querySelectorAll(".animate-on-scroll");
      animateElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);
  };

  useIntersectionObserver();

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessages = [...messages, { text: inputMessage, isUser: true }];
    setMessages(newMessages);
    
    // Bot reply logic
    let reply = "I'm not sure I understand. Could you please rephrase?";
    const lower = inputMessage.toLowerCase();
    
    if (lower.includes("admission")) {
      reply = "Admissions are now open! Please visit the Admissions page or call us at +91 40 1234 5678.";
    } else if (lower.includes("contact")) {
      reply = "You can reach us at +91 40 1234 5678 or email info@manjeeraschool.com.";
    } else if (lower.includes("location") || lower.includes("where")) {
      reply = "We are located at Mumbai Highway Rd, Ambedkar Colony, Shanthi Nagar, Patancheruvu, Hyderabad, Telangana 502032.";
    } else if (lower.includes("thanks") || lower.includes("thank you")) {
      reply = "You're most welcome!";
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: reply, isUser: false }]);
    }, 600);
    
    setInputMessage("");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <style jsx>{`
        :root {
          --primary: #1a4b8c;
          --secondary: #f37b21;
          --accent: #34a853;
          --light: #f5f5f5;
          --dark: #333;
        }
        
        .hero-bg {
          background: linear-gradient(rgba(26, 75, 140, 0.8), rgba(26, 75, 140, 0.8)), 
                     url('https://plus.unsplash.com/premium_photo-1682955296259-65540591f0c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat;
          position: relative;
          overflow: hidden;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          animation: shimmer 3s ease-in-out infinite alternate;
        }
        
        @keyframes shimmer {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        .testimonials-bg {
          background: linear-gradient(135deg, #1a4b8c, #2a5ba8, #3d6cc4);
          position: relative;
          overflow: hidden;
        }
        
        .testimonials-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: float 20s linear infinite;
        }
        
        @keyframes float {
          0% { transform: translate(-50px, -50px); }
          100% { transform: translate(50px, 50px); }
        }
        
        .nav-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #f37b21;
          transition: width 0.3s ease;
        }
        
        .nav-underline:hover::after {
          width: 100%;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-hover:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .image-zoom {
          transition: transform 0.6s ease;
        }
        
        .card-hover:hover .image-zoom {
          transform: scale(1.15);
        }
        
        .whatsapp-btn {
          background-color: #25d366;
          transition: all 0.3s ease;
        }
        
        .whatsapp-btn:hover {
          transform: scale(1.1) rotate(5deg);
          background-color: #128c7e;
        }
        
        .chatbot-toggle {
          background: linear-gradient(135deg, #f37b21, #e6661a);
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        .chatbot-toggle:hover {
          transform: scale(1.1);
          animation: none;
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(243, 123, 33, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(243, 123, 33, 0); }
        }
        
        /* Animation classes */
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in-left {
          transform: translateX(-60px);
        }
        
        .fade-in-right {
          transform: translateX(60px);
        }
        
        .fade-in-up {
          transform: translateY(60px);
        }
        
        .fade-in-down {
          transform: translateY(-60px);
        }
        
        .scale-in {
          transform: scale(0.8);
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translate(0) scale(1);
        }
        
        .hero-text {
          animation: heroFadeIn 1.2s ease-out;
        }
        
        @keyframes heroFadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .hero-buttons {
          animation: heroButtonsIn 1.5s ease-out 0.3s both;
        }
        
        @keyframes heroButtonsIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .achievement-icon {
          transition: all 0.4s ease;
        }
        
        .achievement-card:hover .achievement-icon {
          transform: scale(1.2) rotate(5deg);
          color: #f37b21;
        }
        
        .news-card {
          position: relative;
          overflow: hidden;
        }
        
        .news-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .news-card:hover::before {
          left: 100%;
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
        }
        
        .form-input {
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(26, 75, 140, 0.2);
        }
        
        @keyframes slideInFromLeft {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInFromRight {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .stagger-animation {
          animation-delay: calc(var(--stagger) * 0.1s);
        }
      `}</style>

      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center animate-on-scroll fade-in-left">
              <div className='h-[80px] w-[80px] mr-4'>
                <img src="logo.png" alt="Manjeera High School Logo" className="h-15 w-full object-cover rounded-full" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Manjeera High School</h1>
                <p className="text-sm opacity-90">Excellence in Education Since 1995</p>
              </div>
            </div>
            
            <nav className="hidden lg:block animate-on-scroll fade-in-right">
              <ul className="flex space-x-8">
                {['Home', 'About', 'Academics', 'Achievements', 'Contact'].map((item, index) => (
                  <li key={item} style={{'--stagger': index}} className="stagger-animation">
                    <a href={`#${item.toLowerCase()}`} className="nav-underline relative hover:text-orange-400 font-medium transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <button 
              className="lg:hidden text-white text-xl animate-on-scroll scale-in"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 mobile-menu">
              <ul className="flex flex-col space-y-2">
                {['Home', 'About', 'Academics', 'Achievements', 'Admissions', 'Contact'].map((item, index) => (
                  <li key={item} style={{'--stagger': index}} className="stagger-animation text-center">
                    <a href={`#${item.toLowerCase()}`} className="block py-2 hover:text-orange-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-bg text-white py-[10rem] text-center relative" id='home'>
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-text">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Manjeera High School</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Nurturing young minds with quality education, values, and skills for a better tomorrow.</p>
          </div>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center hero-buttons">
            <a href='#video' className="bg-orange-500 hover:bg-transparent hover:border-orange-500 text-white font-semibold py-3 px-8 rounded-full border-2 border-orange-500 transition-all duration-300 inline-block transform hover:scale-105">
              Explore Our Campus
            </a>
            <a href='#contact' className="bg-transparent hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-8 rounded-full border-2 border-white transition-all duration-300 inline-block transform hover:scale-105">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg animate-on-scroll fade-in-left">
              <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/298791383_446894427455361_4110249990567279366_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lpAklvTHjNMQ7kNvwH1GVFW&_nc_oc=Adm1tcsFa82hRICO_EFNSOZPDsPEPmY4GLfnOviPFEaWDNK6gn6esb_xRTJ0VxoHdAw&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=9S-3OGp9slKllZTg_xq0rA&oh=00_AfYIC0CXmDCQyok2wUjFJrD3C-3KvHYU7pJpkgCjLEL6Mg&oe=68C5B469" alt="Manjeera High School Campus" className="w-full h-auto transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="animate-on-scroll fade-in-right">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">About Our School</h2>
              <p className="text-gray-600 mb-4">
                Established in 1995, Manjeera High School has been a beacon of excellence in education for over 25 years. 
                We believe in nurturing young minds through a holistic approach that balances academic rigor with character development.
              </p>
              <p className="text-gray-600 mb-4">
                Our campus spans 10 acres with state-of-the-art facilities including smart classrooms, science and computer labs, 
                a well-stocked library, and extensive sports facilities.
              </p>
              <p className="text-gray-600 mb-6">
                We follow the CBSE curriculum while incorporating innovative teaching methodologies that encourage critical thinking, 
                creativity, and collaboration among students.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Video Section */}
      <section id='video' className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 animate-on-scroll fade-in-down">At a Glance</h2>
          <p className="text-lg mb-8 text-gray-600 animate-on-scroll fade-in-up">Take a quick look at Manjeera School – our values, facilities, and vibrant campus life.</p>
          <div className="mx-auto animate-on-scroll scale-in">
            <div className="relative w-full mx-auto" style={{paddingBottom: '56.25%'}}>
              <video 
                controls 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                poster="video-thumbnail.png"
              >
                <source src="manjeera school.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-down">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
              Academic Excellence
              <div className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We provide a comprehensive curriculum that prepares students for future challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const animationClass =
                index === 0
                  ? "fade-in-left"
                  : index === courses.length - 1
                  ? "fade-in-right"
                  : "fade-in-up";
              return(
              <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-lg card-hover animate-on-scroll ${animationClass}`} style={{'--stagger': index}}>
                <div className="h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover image-zoom" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-down">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
              Student Achievements
              <div className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our students consistently excel in various fields and bring pride to our institution</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`bg-gray-50 rounded-lg p-8 text-center shadow-lg achievement-card animate-on-scroll fade-in-up`} style={{'--stagger': index}}>
                <div className="text-5xl text-orange-500 mb-6 achievement-icon">
                  <i className={achievement.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-down">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
              School News & Events
              <div className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Stay updated with the latest happenings at Manjeera High School</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((content, index) => {
              const animationClass =
                index === 0
                  ? "fade-in-left"
                  : index === news.length - 1
                  ? "fade-in-right"
                  : "fade-in-up";
              return(
              <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-lg news-card animate-on-scroll ${animationClass}`} style={{'--stagger': index}}>
                <div className="h-48 overflow-hidden">
                  <img src={content.image} alt={content.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-orange-500 text-sm mb-2">{content.date}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{content.title}</h3>
                  <p className="text-gray-600">{content.description}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-bg py-20 text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll fade-in-down">
            <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
            <p className="text-green-200 max-w-3xl mx-auto">Hear from our parent community about their experience with Manjeera High School</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Manjeera High School has provided my child with an excellent learning environment. The teachers are dedicated and caring.",
                name: "Mrs. Rajeshwari",
                role: "Parent of Grade 8 Student",
                image: "https://randomuser.me/api/portraits/women/65.jpg"
              },
              {
                text: "The holistic approach to education here ensures that children develop not just academically but also as well-rounded individuals.",
                name: "Mr. Suresh Kumar",
                role: "Parent of Grade 10 Student",
                image: "https://randomuser.me/api/portraits/men/65.jpg"
              },
              {
                text: "The facilities and teaching methods are modern and effective. My child loves going to school every day.",
                name: "Mrs. Anjali Mehta",
                role: "Parent of Grade 5 Student",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 animate-on-scroll fade-in-up hover:bg-opacity-20 transition-all duration-300`} style={{'--stagger': index}}>
                <p className="italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-orange-400" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 animate-on-scroll fade-in-down">
            Connect With Us
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 animate-on-scroll scale-in">
            <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
              
              {/* Left Column */}
              <div className="flex-1 min-w-[300px] animate-on-scroll fade-in-left">
                {/* Tabs */}
                <div className="flex mb-6">
                  <button
                    onClick={() => setFormType("contact")}
                    className={`flex-1 py-2 text-center font-semibold rounded-t-lg transition-all duration-300 ${
                      formType === "contact"
                        ? "bg-blue-500 text-white transform scale-105"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={() => setFormType("admission")}
                    className={`flex-1 py-2 text-center font-semibold rounded-t-lg transition-all duration-300 ${
                      formType === "admission"
                        ? "bg-blue-500 text-white transform scale-105"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Admission Enquiry
                  </button>
                </div>

                {/* Contact Form */}
                {formType === "contact" && (
                  <form className="mb-6" action="mailto:info@example.com" method="POST" encType="text/plain">
                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      required
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
                    />

                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
                    />

                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Message
                    </label>
                    <textarea
                      name="Message"
                      required
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 min-h-[100px] text-sm form-input"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-base transform hover:scale-105 hover:shadow-lg"
                    >
                      Send
                    </button>
                  </form>
                )}

                {/* Admission Form */}
                {formType === "admission" && (
                  <form className="mb-6">
                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Full Name"
                      required
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
                    />

                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      name="Parent"
                      required
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
                    />

                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      required
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
                    />

                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Grade Applying For
                    </label>
                    <select
                      name="Grade"
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
                    >
                      <option>Grade 1</option>
                      <option>Grade 2</option>
                      <option>Grade 3</option>
                      <option>Grade 4</option>
                      <option>Grade 5</option>
                      <option>Grade 6</option>
                      <option>Grade 7</option>
                      <option>Grade 8</option>
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                    </select>

                    <label className="block mb-1 font-semibold text-gray-700 text-sm">
                      Additional Details
                    </label>
                    <textarea
                      name="Details"
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 min-h-[80px] text-sm form-input"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-base transform hover:scale-105 hover:shadow-lg"
                    >
                      Submit
                    </button>
                  </form>
                )}

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center bg-gray-50 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                    <i className="fas fa-phone-alt text-blue-500 mt-1 mr-3"></i>
                    <span className="text-sm text-gray-700">
                      <strong>Phone:</strong> +91 40 1234 5678
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                    <i className="fas fa-envelope text-blue-500 mt-1 mr-3"></i>
                    <span className="text-sm text-gray-700">
                      <strong>Email:</strong> info@manjeeraschool.com
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                    <i className="fas fa-map-marker-alt text-blue-500 mt-1 mr-3"></i>
                    <span className="text-sm text-gray-700">
                      <strong>Address:</strong> Mumbai Highway Rd, Ambedkar Colony, Shanthi Nagar, Patancheruvu, Hyderabad, Telangana 502032
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Map */}
              <div className="flex-1 min-w-[300px] animate-on-scroll fade-in-right">
                <div className="w-full h-full rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.28319607732095!2d78.26536467669068!3d17.526118394229915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf29304fee6a9%3A0x143cbe51023fe1f4!2sManjeera%20High%20School!5e0!3m2!1sen!2sin!4v1757403177314!5m2!1sen!2sin"
                    title="Map"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0 w-full h-full"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="animate-on-scroll fade-in-left">
              <h3 className="text-orange-500 text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300 mb-6">
                Manjeera High School is committed to providing quality education that prepares students for future challenges while instilling strong values.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/manjeeraHS/" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 social-icon">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 social-icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="animate-on-scroll fade-in-up">
              <h3 className="text-orange-500 text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Academics', 'Achievements', 'Admissions', 'Contact Us'].map((link, index) => (
                  <li key={link} style={{'--stagger': index}} className="stagger-animation">
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-on-scroll fade-in-right">
              <h3 className="text-orange-500 text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start hover:text-orange-400 transition-colors duration-300">
                  <i className="fas fa-map-marker-alt text-orange-500 mt-1 mr-3"></i>
                  <span className="text-gray-300">Mumbai Highway Rd, Ambedkar Colony, Shanthi Nagar, Patancheruvu, Hyderabad, Telangana 502032</span>
                </li>
                <li className="flex items-center hover:text-orange-400 transition-colors duration-300">
                  <i className="fas fa-phone text-orange-500 mr-3"></i>
                  <span className="text-gray-300">+91 40 1234 5678</span>
                </li>
                <li className="flex items-center hover:text-orange-400 transition-colors duration-300">
                  <i className="fas fa-envelope text-orange-500 mr-3"></i>
                  <span className="text-gray-300">info@manjeeraschool.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center animate-on-scroll fade-in-up">
            <p className="text-gray-400">&copy; 2023 Manjeera High School. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Toggle */}
      {!chatbotOpen && (
        <div 
          className="fixed bottom-8 right-8 z-50 chatbot-toggle w-15 h-15 p-2 rounded-full flex items-center justify-center text-white text-xl shadow-lg cursor-pointer"
          onClick={toggleChatbot}
        >
          <i className="fas fa-robot"></i>
        </div>
      )}

      {/* Chatbot */}
      {chatbotOpen && (
        <div
          className={`fixed bottom-8 right-8 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col scale-in transition-transform duration-300`}
        >
          <div className="bg-blue-900 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">School Assistant</h3>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div
            ref={chatBodyRef}
            className="flex-1 p-4 overflow-y-auto space-y-4"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                } fade-in-up`}
                style={{ "--stagger": index }}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg transform hover:scale-105 transition-transform duration-200 ${
                    message.isUser
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full outline-none focus:border-blue-500 form-input"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transform hover:scale-110 transition-all duration-200"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManjeeraSchoolWebsite;