import React, { useState } from 'react';
import './App.css';
import self_photo from './assets/seaside.jpg';
import img_linkedin from './assets/linkedin.png';
import img_github from './assets/github.svg';
import img_twitter from './assets/twitter.svg';
import img_redbook from './assets/Xiaohongshu.png';
import logoBaidu from './assets/baidu_logo.png';
import logoIFLYTEK from './assets/iflytek_logo.jpg';
import logoGM from './assets/gm_logo.png';
import logoHashKey from './assets/hashkey_logo.png';
import snowboarding1 from './assets/Snowboarding1.jpg';
import snowboarding2 from './assets/Snowboarding3.jpg';
import snowboarding3 from './assets/Snowboarding4.jpg';
import traveling1 from './assets/France.jpg';
import traveling2 from './assets/Italy.jpg';
import traveling3 from './assets/Belgium.jpg';
import traveling4 from './assets/Germany.jpg';
import traveling5 from './assets/Austria.jpg';
import traveling6 from './assets/Netherlands.jpg';
import traveling7 from './assets/Sweden.jpg';
import traveling8 from './assets/England.jpg';
import traveling9 from './assets/Norway.jpg';
import traveling10 from './assets/Poland.jpg';
import traveling11 from './assets/Scotland.jpg';
import traveling12 from './assets/Spain.jpg';
import photography1 from './assets/Shanghai.jpg';
import photography2 from './assets/Beijing.jpg';
import photography3 from './assets/Berlin.jpg';
import photography4 from './assets/Cologne.jpg';
import photography5 from './assets/Milan.jpg';
import photography6 from './assets/Venice.jpg';
import museum1 from './assets/museum1.jpg';
import museum2 from './assets/museum2.jpg';
import museum3 from './assets/museum3.jpg';
import museum4 from './assets/museum4.jpg';
import painting1 from './assets/painting1.jpg';
import painting2 from './assets/painting2.jpg';
import painting3 from './assets/painting3.jpg';
import painting4 from './assets/painting4.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('campus');
  const [language, setLanguage] = useState('en');

  const personalInfo = {
    name: 'Zhengzhi Zhou',
    contact: 'monikazhou@foxmail.com',
    location: 'Shanghai, China',
    school: 'Fudan University',
    linkedin: 'https://www.linkedin.com/in/zzz26',
    twitter: 'https://x.com/kkk222206',
    github: 'https://github.com/NikaChou',
    redbook: 'https://www.xiaohongshu.com/user/profile/63df800900000000260076e6?xhsshare=CopyLink&appuid=63df800900000000260076e6&apptime=1728121625',
  };

  const educations = [
    'B.S. in German Language and Literature, Huazhong University of Science and Technology, 2018 - 2022. GPA-3.93/4.00',
    'M.S. in German Language and Literature, Fudan University, 2022 - 2025 (expected), GPA-3.85/4.00',
    'Exchange Program, University of Cologne, 2023 - 2024',
    // 'Ph.D in Version Control Theory, GitHub University, 2018 (expected)'
  ];

  const honors = [
    '2022-2023 Second-Class Academic Scholarship, Outstanding Volunteer',
    '2021-2022 Triple-A Student of 2022 (top 5%)',
    '2019-2021 Outstanding Student Cadre, Academic Excellence Scholarship',
    '2019-2020 Outstanding Student Cadre, Academic Excellence Scholarship',
  ];

  const awards = [
    '2021 National Second Prize, National College English Vocabulary Competition',
    '2020 National Second Prize, National Innovation English Challenge',
    '2020 Honorable Mention, Chinese Culture International Translation Competition',
  ];

  const academic_Achievements = [
    {
      title: "Chinese Literary Conception under Western Discourse: A Case Study of the Aesthetic View of Tang Poetry in Wilhelm Grube's 'History of Chinese Literature'",
      description: "First Author, published in the annual journal German Studies (2022)",
    },
    {
      title: 'Multiple Paths to a Doctorate Degree: A Comparative Study on Doctoral Education and Evaluation at Universities of Applied Sciences',
      description: 'First Author, published in the journal Shanghai Graduate Education (2023)',
    },
  ];

  const campus_activities = [
    '2023-Now President, Fudan Job Hunt Club',
    '2024-Now Vice President, Fudan University Blockchain Association',
    '2022-2023 Core Member,Fudan University Graduate Admissions Promotion Team',
    '2020-2021 Director of External Relations, Students\' Union, Huazhong University of Science and Technology',
    '2019-2021 Core Member,University History Museum, Huazhong University of Science and Technology'
  ];

  const innovation_practice_projects = [
    {
      title: "Provincial Project: 19th Century German Writings on the History of Chinese Literature.",
      description: "2020-2021 , Project Leader",
    },
    {
      title: 'University Project: The History and Policies of Waste Classification in Germany and Their Significance for Waste Classification Policies in China.',
      description: '2019-2020 , Core Member',
    },
  ];

  const internships = [
    {
      title: 'Strategic Analysis @Baidu (China) Co., Ltd.',
      logo: logoBaidu,
      description: (
        <>
          2024, Intern, in Autonomous Driving Group <br />
          •	Target Research: Conducted a study on the IPO of WeRide. Produced 2 reports and 10 core insights for insights and references <br />
          •	Market Analysis: Conducted researches based on foreign investment research reports. Tracked research reports on peer companies, producing 7 weekly reports.
        </>
      ),
    },
    {
      title: 'Product Manager @iFLYTEK Co., Ltd.',
      logo: logoIFLYTEK,
      description: (
        <>
          2024, Intern, Voice Interaction APP <br />
          •	Version Iteration: Analyzed key indicators with improved performance: 5pt in recognition rate and 3pt in wake-up rate. <br />
          •	Product Research: Conducted research on high-frequency words for the products tailored to Anhui dialects, assisted in the completion of a focused feature list by the factory research team.
        </>
      ),
    },
    {
      title: 'Market Research @General Motors Company',
      logo: logoGM,
      description: (
        <>
          2024, Intern, in Planning Department <br />
          •	Market Research: Conducted research on vehicle and consumer. Analyzed potential competitive models and produced 2 insightful reports, with 2 recommendations adopted. <br />
          •	Product Positioning: Prepared for an imported SUV case with quantitative and qualitative research, resulting in 2 reports.
        </>
      ),
    },
    {
      title: 'Market Research @HashKey Group',
      logo: logoHashKey,
      description: (
        <>
          2023, Intern, in ToB Cloud Products Department <br />
          •	Industry Research: Completed market analysis and forecasts for target regions, proposing 4 recommendations, adopted by the team <br />
          •	Competitive Analysis: Analyzed competitive products with in-depth research on 2 strong competitors. Produced a 30-page report
        </>
      ),
    },
  ];

  const hobbies = [
    'Traveling',
    'Snowboarding',
    'Yoga',
    'Oil Painting',
    'Museum',
    'Texas Hold\'em',
  ];

  const Interests = [
    'LLM',
    'AI-Agent',
    'Blockchain',
    'Web3',
    'Autonomous Driving',
    'Office Automation',
    'Overseas consumption',
    'Cross-Border E-Commerce',
  ];

  const volunteerActivities = [
    '2023 Shanghai Jewish Refugees Museum - Guide Volunteer',
    '2022 Fudan University - Admission Volunteer',
    '2019-2021 Campus History Museum - Volunteer Guide',
    '2021 Wuhan East Lake Park - Park Volunteer',
    '2021 Wuhan Art Museum - Volunteer',
    '2020 Hubei Provincial Hospital of Traditional Chinese Medicine - Volunteer',
    '2021 Campus Marathon - Volunteer',
    
  ];

  const researchProjects = [
    {
      title: "Case Study: DM (German Pharmacy's) Digital Transformation Challenges",
      year: "2023",
      description: [
        "Researched DM's legacy and digital systems' integration challenges during its digital transformation, including data migration, consumer habit guidance, and the integration of online and offline marketing.",
        "Visited DM stores in major German cities for surveys and interviews, contributing to 2 research reports and achieving 2nd place in group evaluation."
      ]
    },
   
    {
      title: 'Summer Research: "Short Videos for Poverty Alleviation in Mountainous Areas: A Case Study of Kuaishou Live Streaming"',
      year: "2019",
      description: [
        "Research Focus: Investigated the impact of Kuaishou live streaming on agricultural product sales in impoverished areas of Xiaojin County, Aba Prefecture. Used social media analytics to study platform support like algorithms, traffic, subsidies, and events.",
        "Responsibilities: Managed sponsorships, conducted interviews, and wrote press releases.",
        "Outcome: The project was recognized as an outstanding practice project at the school, provincial, and national levels and led to the establishment of a summer practice base for HUST in the area."
      ]
    }
  ];

  const translations = {
    en: {
      campus: "Campus Life",
      experience: "Internships & Projects",
      personal: "Personal Life",
      education: "Education",
      honors: "Honors and Awards",
      academic: "Academic Achievements",
      activities: "Campus Activities",
      innovation: "Innovation Practice Projects",
      internships: "Internships",
      projects: "Research Projects",
      hobbies: "Hobbies",
      arts: "Art Appreciation",
      volunteer: "Volunteer Activities",
      france: "France",
      italy: "Italy",
      belgium: "Belgium",
      germany: "Germany",
      austria: "Austria",
      netherlands: "Netherlands",
      sweden: "Sweden",
      england: "England",
      norway: "Norway",
      poland: "Poland",
      scotland: "Scotland",
      spain: "Spain"
    },
    zh: {
      campus: "校园生活",
      experience: "实习与项目",
      personal: "个人生活",
      education: "教育经历",
      honors: "荣誉奖项",
      academic: "学术成果",
      activities: "校园活动",
      innovation: "创新实践项目",
      internships: "实习经历",
      projects: "研究项目",
      hobbies: "兴趣爱好",
      arts: "艺术鉴赏",
      volunteer: "志愿活动",
      france: "法国",
      italy: "意大利",
      belgium: "比利时",
      germany: "德国",
      austria: "奥地利",
      netherlands: "荷兰",
      sweden: "瑞典",
      england: "英国",
      norway: "挪威",
      poland: "波兰",
      scotland: "苏格兰",
      spain: "西班牙"
    },
    de: {
      campus: "Campusleben",
      experience: "Praktika & Projekte",
      personal: "Persönliches Leben",
      education: "Bildung",
      honors: "Auszeichnungen und Ehrungen",
      academic: "Akademische Leistungen",
      activities: "Campus-Aktivitäten",
      innovation: "Innovative Praxisprojekte",
      internships: "Praktika",
      projects: "Forschungsprojekte",
      hobbies: "Hobbys",
      arts: "Kunstverständnis",
      volunteer: "Freiwilligenarbeit",
      france: "Frankreich",
      italy: "Italien",
      belgium: "Belgien",
      germany: "Deutschland",
      austria: "Österreich",
      netherlands: "Niederlande",
      sweden: "Schweden",
      england: "England",
      norway: "Norwegen",
      poland: "Polen",
      scotland: "Schottland",
      spain: "Spanien"
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'campus':
        return (
          <div className="flex flex-col space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].education}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {educations.map((edu, index) => (
                  <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{edu}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].honors}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Campus Honors</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {honors.map((honor, index) => (
                      <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{honor}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Competition Awards</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {awards.map((award, index) => (
                      <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].academic}</h2>
              <div className="grid grid-cols-1 gap-6">
                {academic_Achievements.map((achievement, index) => (
                  <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <div className="text-gray-600">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].activities}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {campus_activities.map((activity, index) => (
                  <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{activity}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].innovation}</h2>
              <div className="grid grid-cols-1 gap-4">
                {innovation_practice_projects.map((project, index) => (
                  <div key={index} className="card rounded-lg shadow-md bg-gray-100 p-4 hover:bg-gray-300">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <div className="text-gray-600">{project.description}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'experience':
        return (
          <div className="flex flex-col space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].internships}</h2>
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
                    <img src={internship.logo} alt={`${internship.title} logo`} className="w-16 h-16 object-contain" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{internship.title}</h3>
                      <div className="text-gray-600">{internship.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].projects}</h2>
              <div className="space-y-6">
                {researchProjects.map((project, index) => (
                  <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
                    <h3 className="text-lg font-semibold mb-2">{project.title} ({project.year})</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.description.map((desc, i) => (
                        <li key={i} className="text-gray-600">{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'personal':
        return (
          <div className="flex flex-col space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">{translations[language].hobbies}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <h3 className="text-xl font-semibold mb-4">Traveling</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="relative">
                      <img src={traveling1} alt="France" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].france}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling2} alt="Italy" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].italy}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling3} alt="Belgium" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].belgium}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling4} alt="Germany" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].germany}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling5} alt="Austria" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].austria}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling6} alt="Netherlands" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].netherlands}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling7} alt="Sweden" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].sweden}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling8} alt="England" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].england}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling9} alt="Norway" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].norway}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling10} alt="Poland" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].poland}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling11} alt="Scotland" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].scotland}</p>
                    </div>
                    <div className="relative">
                      <img src={traveling12} alt="Spain" className="w-full h-40 object-cover rounded-lg shadow-md" />
                      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded">{translations[language].spain}</p>
                    </div>
                  </div>
                  <p className="mt-4">Love exploring cultures and landscapes around the world, visited over 13 countries.</p>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Photography</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src={photography1} alt="Shanghai" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src={photography2} alt="Beijing" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src={photography3} alt="Beijing" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src={photography4} alt="Beijing" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src={photography5} alt="Beijing" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src={photography6} alt="Beijing" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  </div>
                  <p className="mt-4">Enjoy capturing beautiful moments, specializing in landscape and urban photography.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Snowboarding</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <img src={snowboarding1} alt="Snowboarding 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src={snowboarding2} alt="Snowboarding 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src={snowboarding3} alt="Snowboarding 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  </div>
                  <p className="mt-4">Visit different ski resorts every winter to experience the thrill of snowboarding.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">{translations[language].arts}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Museum Visits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <img src={museum1} alt="Louvre" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={museum2} alt="British Museum" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={museum3} alt="British Museum" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={museum4} alt="British Museum" className="w-full h-40 object-cover rounded-lg shadow-md" />
                  </div>
                  <p className="mt-4">Frequently visit art museums to appreciate various art styles and broaden artistic vision.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Painting</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <img src={painting1} alt="Painting 1" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={painting2} alt="Painting 2" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={painting3} alt="Painting 3" className="w-full h-40 object-cover rounded-lg shadow-md" />
                    <img src={painting4} alt="Painting 4" className="w-full h-40 object-cover rounded-lg shadow-md" />
                  </div>
                  <p className="mt-4">Enjoy sketching and watercolor painting in spare time, participated in several art exhibitions.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{translations[language].volunteer}</h2>
              <div>
               
                <ul className="list-disc pl-5 space-y-2">
                  {language === 'zh' ? (
                    <>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>上海犹太难民博物馆 - 导游志愿者 (2023)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>复旦大学 - 招生志愿者 (2022)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>校园历史博物馆 - 志愿导游 (2019-2021)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>武汉东湖公园 - 公园志愿者 (2021)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>武汉艺术博物馆 - 志愿者 (2021)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>湖北省中医医院 - 志愿者 (2020)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>校园马拉松 - 志愿者 (2020)</li>
                    </>
                  ) : (
                    <>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>Shanghai Jewish Refugees Museum - Guide Volunteer (2023)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>Fudan University - Admission Volunteer (2022)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>Campus History Museum - Volunteer Guide (2019-2021)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>Wuhan East Lake Park - Park Volunteer (2021)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>Wuhan Art Museum - Volunteer (2021)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>Hubei Provincial Hospital of Traditional Chinese Medicine - Volunteer (2020)</li>
                      <li className='rounded-lg hover:bg-gradient-to-r from-primary'>Campus Marathon - Volunteer (2020)</li>
                    </>
                  )}
                </ul>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='container w-full mx-auto'>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <button
              className={`text-white ${activeTab === 'campus' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('campus')}
            >
              {translations[language].campus}
            </button>
          </li>
          <li>
            <button
              className={`text-white ${activeTab === 'experience' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              {translations[language].experience}
            </button>
          </li>
          <li>
            <button
              className={`text-white ${activeTab === 'personal' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              {translations[language].personal}
            </button>
          </li>
          <li>
            <button
              className={`text-white`}
              onClick={() => window.open("https://nikas-private-organization.gitbook.io/untitled/", "_blank")}
            >
              Daily Notes
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="flex justify-end mt-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1"
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="container basis-1/4 bg-gradient-to-b from-gray-200 rounded-xl flex-col space-y-8 p-4 max-w-sm mx-auto">
          <img src={self_photo} className="mx-auto rounded-3xl shadow-xl" />
          <h1 className="text-2xl font-bold text-primary">Zhengzhi Zhou</h1>
          <h2 className="text-lg font-bold text-primary">(Nika Chou)</h2>
  
          <div>
            <h2 className="text-lg font-bold">Basic Info</h2>
            <div>
              <div>{personalInfo.school}</div>
              <div>{personalInfo.location}</div>
              <div>{personalInfo.contact}</div>
              <div className='flex flex-row justify-center mt-4'>
                <a href={personalInfo.linkedin} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_linkedin} alt='linkedin'/></a>
                <a href={personalInfo.twitter} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_twitter} alt='twitter'/></a>
                <a href={personalInfo.redbook} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_redbook} alt='redbook'/></a>
                <a href={personalInfo.github} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_github} alt='github'/></a>
              </div>
            </div>
          </div>
  
          <div>
            <h2 className="text-lg font-bold">Interests</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Interests.map((interest, index) => (
                <div key={index} className="bg-slate-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{interest}</div>
              ))}
            </div>
          </div>
  
          <div>
            <h2 className="text-lg font-bold">Hobbies</h2>
            <div className='grid grid-cols-2 gap-4'>
              {hobbies.map((hobby, index) => (
                <div key={index} className="bg-zinc-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>
  
        </div>
  
        <div className="container basis-3/4 rounded-xl text-left p-4 space-y-12 min-h-[800px] flex flex-col justify-between">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
export default App;