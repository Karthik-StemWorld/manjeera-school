import React, { useState, useRef, useEffect } from 'react';

const activities = [
  { title: "Dance", description: "Learn various dance forms and express yourself creatively through movement and rhythm.", image: "manjeera-school/Dance.jpeg" },
  { title: "Music", description: "Discover the world of music with instrument training, vocal lessons, and music theory.", image: "manjeera-school/Music.jpeg" },
  { title: "Robotics & AI", description: "Build and program robots to solve challenges and Explore the fundamentals of Artificial Intelligence.", image: "manjeera-school/Robotics.jpeg" },
  { title: "Sports", description: "Our sports programs promote physical health, discipline, and a spirit of sportsmanship.", image: "manjeera-school/Sports.jpeg" },
  { title: "Abacus Classes", description: "Develop mental math skills and improve concentration with our Abacus training.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIjjZ3WThvZ8-isCAt3Rdd2SR4a6GzAFMOg&s" },
  { title: "IIT & AI Classes", description: "Our IIT & AI classes offer expert guidance and learning to help students excel in competitive exams.", image: "manjeera-school/IIT.png" },
];

const programs = [
  { title: "Pre-Primary", description: "A nurturing environment for our youngest learners to build foundational skills.", image: "manjeera-school/Pre-primary.jpeg" },
  { title: "Primary", description: "Focus on core subjects while encouraging curiosity and independent thinking.", image: "manjeera-school/Primary.jpeg" },
  { title: "Secondary", description: "A rigorous curriculum designed to prepare students for higher education and professional life.", image: "manjeera-school/Secondary.jpeg" }
];

const achievements = [
  {
    icon: "fas fa-trophy",
    title: "Academic Excellence",
    description: "95% of our students scored above 90% in State Board Exams"
  },
  {
    icon: "fas fa-medal",
    title: "Sports Champions",
    description: "Played in State Level Sports Championship"
  },
  {
    icon: "fas fa-paint-brush",
    title: "Arts & Culture",
    description: "State level recognition in painting and music competitions"
  }
]
const news = [
  {
   
    title: "Annual Day Celebration",
    description: "Our annual day celebration was a grand success with students showcasing their talents in various performances.",
    image: "manjeera-school/Annual.jpeg"
  },
  {
   
    title: "Science Fair Winners",
    description: "Our students won 3 prizes at the Regional Science Fair showcasing innovative projects.",
    image: "manjeera-school/Science.jpeg"
  },
  {
    
    title: "Annual Sports Day",
    description: "Annual sports day was conducted with great enthusiasm and participation from students.",
    image: "manjeera-school/Sports-day.jpeg"
  },
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
          background: linear-gradient(
              rgba(26, 75, 140, 0.85),
              rgba(26, 75, 140, 0.85)
            ),
            url("manjeera-school/Manjeera.jpeg") center/cover no-repeat;
          position: relative;
          overflow: hidden;
          animation: fadeInBg 1.5s ease-in-out;
        }

        .hero-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 20% 80%,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%
          );
          animation: shimmer 3s ease-in-out infinite alternate;
          pointer-events: none;
        }

        /* Fade-in Background */
        @keyframes fadeInBg {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Existing Animations */
        .hero-text {
          animation: heroFadeIn 1.2s ease-out;
        }

        @keyframes heroFadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-buttons {
          animation: heroButtonsIn 1.5s ease-out 0.3s both;
        }

        @keyframes heroButtonsIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive tweaks */
        @media (max-width: 640px) {
          .hero-bg {
            background-position: top center;
          }
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
              <div className='h-[60px] w-[60px] mr-4'>
                <img src="manjeera-school/logo.png" alt="Manjeera High School Logo" className="h-15 w-full object-cover rounded-full" />
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
      <section
        className="relative h-max lg:h-screen w-full flex flex-col lg:flex-row items-center justify-between overflow-hidden hero-bg"
        id="home"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Left Column - Hero Content */}
        <div className="relative z-10 w-full lg:w-[40%] flex items-center justify-center p-6 sm:p-10 lg:p-16">
          <div className="text-white max-w-xl hero-text">
            {/* School Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
              Manjeera High School
            </h2>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl mb-6 text-blue-100 font-medium drop-shadow">
              Nurturing Young Minds
            </p>

            {/* About */}
            <div className="mb-6 space-y-4 text-sm sm:text-base text-blue-50 text-justify">
              <p>
                Established in 1995, we've been a beacon of excellence in education
                for over 30 years, nurturing young minds through a holistic approach
                that balances academics with character development.
              </p>
              <p>
                Our campus features smart classrooms, science & computer labs, and
                extensive sports facilities.
              </p>
              <p>
                We follow the State Board curriculum with innovative teaching
                methodologies that encourage creativity and collaboration.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full font-semibold shadow-lg text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Video Card */}
        <div className="relative z-10 w-full hidden lg:flex lg:w-[60%] flex items-center justify-center p-6 sm:p-8">
          <div className="w-full aspect-video rounded-2xl shadow-xl overflow-hidden border-4 border-white/20">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              controls
              playsInline
              poster="manjeera-school/video-thumbnail.png"
            >
              <source src="manjeera-school/manjeera school.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Mobile Background Video (for smaller screens) */}
        <div className="lg:hidden absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="manjeera-school/video-thumbnail.png"
          >
            <source src="manjeera-school/manjeera school.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>
    
      {/* Correspondent Desk Section */}
      <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Correspondent Section */}
        <section id="about" className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 rounded-lg mx-4 mb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Image */}
              <div className="lg:col-span-1 animate-on-scroll fade-in-left">
                <div className="relative w-full max-w-xs mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-blue-500 rounded-2xl transform rotate-2"></div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-xl transform hover:rotate-1 transition-all duration-300">
                    <img 
                      src="manjeera-school/sir.jpeg" 
                      alt="Mr. Sudhakar Reddy - Correspondent" 
                      className="w-full h-64 rounded-xl object-cover"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="font-bold text-gray-900 text-sm">Mr. Sudhakar Reddy</h3>
                      <p className="text-xs text-gray-600">Correspondent</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="lg:col-span-2 animate-on-scroll fade-in-right">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    From the Correspondent's Desk
                  </h2>
                  <div className="w-16 h-1 bg-orange-500 mb-4"></div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our Correspondent, <span className="font-semibold text-blue-800">Mr. Sudhakar Reddy</span>, has been dedicated to ensuring the smooth functioning and progress of the school. His vision and guidance have been pivotal in fostering an environment of academic excellence and ethical values.
                  </p>
                  <div className="flex items-center space-x-2 text-orange-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-sm">Leading with Vision & Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principal Section */}
        <section id="principal" className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 rounded-lg mx-4">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Text Content First for alternating layout */}
              <div className="lg:col-span-2 order-2 lg:order-1 animate-on-scroll fade-in-left">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    From the Principal's Desk
                  </h2>
                  <div className="w-16 h-1 bg-purple-500 mb-4"></div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our Principal, <span className="font-semibold text-blue-800">Mrs. Anuradha</span>, leads the school with passion and dedication. She believes in nurturing every student's potential through empathy, discipline, and personalized learning approaches.
                  </p>
                  <div className="flex items-center space-x-2 text-purple-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-sm">Nurturing Excellence & Character</span>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="lg:col-span-1 order-1 lg:order-2 animate-on-scroll fade-in-right">
                <div className="relative w-full max-w-xs mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-2xl transform -rotate-2"></div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-xl transform hover:-rotate-1 transition-all duration-300">
                    <img 
                      src="https://static.vecteezy.com/system/resources/previews/003/337/511/non_2x/default-avatar-photo-placeholder-profile-icon-female-vector.jpg" 
                      alt="Mrs. Anuradha - Principal" 
                      className="w-full h-64 rounded-xl object-cover"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="font-bold text-gray-900 text-sm">Mrs. Anuradha</h3>
                      <p className="text-xs text-gray-600">Principal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Academics Section */}
      <section id="academics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-down">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
              Academics
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a structured educational journey for every stage of your child's growth.
             <p>State board education from pre-primary to 10th builds strong basics in key subjects, promotes overall development, and prepares students for future learning and life. It also focuses on values, discipline, and practical skills.</p>

            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              let animationClass = "fade-in-up";
              if (index % 3 === 0) {
                animationClass = "fade-in-left";
              } else if (index % 3 === 2) {
                animationClass = "fade-in-right";
              }
              return(
                <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-lg card-hover animate-on-scroll ${animationClass}`} style={{'--stagger': index}}>
                  <div className="h-48 overflow-hidden">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover image-zoom" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="extracurricular" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-down">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
              Extracurricular Activities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Engage, explore, and excel beyond the classroom with our diverse activities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              let animationClass = "fade-in-up";
              if (index % 3 === 0) {
                animationClass = "fade-in-left";
              } else if (index % 3 === 2) {
                animationClass = "fade-in-right";
              }
              return(
                <div key={index} className={`bg-gray-50 rounded-lg overflow-hidden shadow-lg card-hover animate-on-scroll ${animationClass}`} style={{'--stagger': index}}>
                  <div className="h-48 overflow-hidden">
                    <img src={activity.image} alt={activity.title} className="w-full h-full object-cover image-zoom" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-down">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
              Student Achievements
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
              <div className="flex-1 animate-on-scroll fade-in-left">
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
                    Admission
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
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
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
                      className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:border-blue-500 text-sm form-input"
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
              <div className="flex-1 animate-on-scroll fade-in-right">
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