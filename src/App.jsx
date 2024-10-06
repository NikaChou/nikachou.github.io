import React from 'react';
import './App.css';
import self_photo from './assets/seaside.jpg'; // 使用require或import导入图片
import img_linkedin from './assets/linkedin.png';
import img_github from './assets/github.svg';
import img_twitter from './assets/twitter.svg';
import img_redbook from './assets/Xiaohongshu.png';
import logoBaidu from './assets/baidu_logo.jpg'; // 替换为实际路径
import logoIFLYTEK from './assets/iflytek_logo.jpg'; // 替换为实际路径
import logoGM from './assets/gm_logo.png'; // 替换为实际路径
import logoHashKey from './assets/hashkey_logo.png'; // 替换为实际路径


function App() {
  // 示例数据，你需要替换成自己的信息
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
    'B.S. in German Language and Literature, Huazhong University of Science and Technology, Sep. 2018 - Jun. 2022. GPA-3.93/4.00',
    'M.S. in German Language and Literature, Fudan University, Sep. 2022 - Jun. 2025 (expected), GPA-3.85/4.00',
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
    '2020 Honorable Mention Chinese Culture International Translation Competition',
  ];

  const academic_Achievements = [
    {
      title: "Chinese Literary Perception under Western Discourse: A Case Study of the Aesthetic View of Tang Poetry in Wilhelm Grube's 'History of Chinese Literature'",
      description: "First Author, published in the annual journal German Studies (2022)",
    },
    {
      title: 'Multiple Paths to a Doctorate Degree: A Comparative Study on Doctoral Education and Evaluation at Universities of Applied Sciences',
      description: 'First Author, published in the journal Shanghai Graduate Education (2023, first issue)',
    },
  ];

  const campus_activities = [
    '2023-Now President, Fudan Job Hunt Club',
    '2024-Now Vice President, Fudan University Blockchain Association',
    '2022-2023 Core Member of Fudan University Graduate Admissions Promotion Team',
    '2020-2021 Director of External Relations, Students\' Union, Huazhong University of Science and Technology',
    '2019-2021 Core Member of University History Museum, Huazhong University of Science and Technology'
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
          Conducted a study on the IPO of WeRide, produced 2 reports and 10 core insights for references. <br />
          Conducted market analysis based on foreign investment research reports, producing 7 weekly reports.
        </>
      ),
    },
    {
      title: 'Product Manager @iFLYTEK Co., Ltd.',
      logo: logoIFLYTEK,
      description: (
        <>
          2024, Intern, Voice Interaction APP <br />
          Assisted in multilingual TTS business, resulting in 3 detailed feature lists. <br />
          Analyzed key indicators for improved performance: 5pt in recognition rate and 3pt in wake-up rate.
        </>
      ),
    },
    {
      title: 'Market Research @General Motors Company',
      logo: logoGM,
      description: (
        <>
          2024, Intern, in Planning Department <br />
          Conducted research on vehicle and consumer, producing 2 insightful reports with 2 recommendations adopted. <br />
          Prepared reports for an imported SUV case with quantitative and qualitative research.
        </>
      ),
    },
    {
      title: 'Market Research @HashKey Group',
      logo: logoHashKey,
      description: (
        <>
          2023, Intern, in ToB Cloud Products Department <br />
          Completed market analysis and forecasts for target regions, proposing 4 recommendations adopted by the team. <br />
          Analyzed competitive products with in-depth research on 2 strong competitors.
        </>
      ),
    },
  ];

  const hobbies = [
    'Skiing',
    'Traveling',
    'Yoga',
    'Oil Painting',
    'Texas Hold\'em',
  ];

  const Interests = [
    'LLM',
    'AI-Agent',
    'Blockchain',
    'Web3',
    'Autonomous Driving',
    'Office Automation',
    'Global Social Media Marketing',
  ];

  return (
    <div className='container w-full mx-auto'>
      <div className="flex flex-col md:flex-row gap-4">
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
                <div className="bg-slate-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{interest}</div>
              ))}
            </div>
          </div>
  
          <div>
            <h2 className="text-lg font-bold">Hobbies</h2>
            <div className='grid grid-cols-2 gap-4'>
              {hobbies.map((hobby, index) => (
                <div className="bg-zinc-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>
  
        </div>
  
        <div className="container basis-3/4 rounded-xl text-left p-4 space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Education</h2>
            <ul>
              <li className='rounded-lg hover:bg-gradient-to-r from-primary'>M.S. in German Language and Literature, <span className='font-bold'>Fudan University</span>, Sep. 2022 - Jun. 2025. <span className='font-bold'>GPA-3.85/4.00</span></li>
              <li className='rounded-lg hover:bg-gradient-to-r from-primary'>B.S. in German Language and Literature, <span className='font-bold'>Huazhong University of Science and Technology</span>, Sep. 2018 - Jun. 2022. <span className='font-bold'>GPA-3.93/4.00</span></li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Awards and Honors</h2>
            <div className='text-lg pt-2 pb-1 font-bold'>Campus Honors</div>
            <ul>
              {honors.map((honor, index) => (
                <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{honor}</li>
              ))}
            </ul>
            <div className='text-lg pt-2 pb-1 font-bold'>Competition Awards</div>
            <ul>
              {awards.map((award, index) => (
                <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
              ))}
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Publications</h2>
            <div className="grid grid-cols-1 gap-6">
              {academic_Achievements.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">
                    {achievement.title.replace('German Studies', <strong>German Studies</strong>).replace('Shanghai Graduate Education', <strong>Shanghai Graduate Education</strong>)}
                  </h3>
                  <div className="text-gray-600">{achievement.description}</div>
                </div>
              ))}
            </div>
            <div className='text-xl pt-8 pb-2 font-bold'>Campus Activities</div>
            <div className="grid grid-cols-1 gap-2">
              {campus_activities.map((activity, index) => (
                <div key={index} className="card rounded-lg shadow-md bg-gray-100 p-2 hover:bg-gray-300">{activity}</div>
              ))}
            </div>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Innovation Practice Projects</h2>
            <div className="grid grid-cols-1 gap-2">
              {innovation_practice_projects.map((project, index) => (
                <div key={index} className="card rounded-lg shadow-md bg-gray-100 p-2 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <div className="text-gray-600">{project.description}</div>
                </div>
              ))}
            </div>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Internship Experience</h2>
            <ul className="list-disc space-y-2">
              {internships.map((internship, index) => (
                <li key={index} className="flex items-center">
                  <img src={internship.logo} alt={`${internship.title} logo`} className="w-10 h-10 mr-2" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{internship.title}</h3>
                    <div className="text-gray-600">{internship.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
export default App;