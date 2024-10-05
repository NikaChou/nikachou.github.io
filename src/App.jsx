import React from 'react';
import './App.css';
import danmao from './assets/danmao8.jpg'; // 使用require或import导入图片
import chsnet from './assets/chsnet-arch.png';
import iks from './assets/iks-algo.png';
import psc from './assets/psc.png';
import img_github from './assets/github.svg';
import img_twitter from './assets/twitter.svg';
import img_csdn from './assets/csdn.svg';
import img_google_scholar from './assets/googleScholar.svg';



function App() {
  // 示例数据，你需要替换成自己的信息
  const personalInfo = {
    name: 'Mingliang Dai',
    contact: 'mldai21@m.fudan.edu.cn',
    location: 'Shanghai, China',
    school: 'Fudan University',
    github: 'https://github.com/RaccoonDML',
    twitter: 'https://twitter.com/raccoondml',
    csdn: 'https://blog.csdn.net/daimaliang',
    googleScholar: 'https://scholar.google.com/citations?user=wbPGvY8AAAAJ&hl=en',

  };

  const educations = [
    'B.S. in Computer Science and Technology, Xiamen University, 2021',
    'M.S. in Computer Application Technology, Fudan University, 2024 (expected)',
    // 'Ph.D in Version Control Theory, GitHub University, 2018 (expected)'
  ];

  const honors = [
    '2017-2018 National Encouragement Scholarship',
    '2019-2020 AmoyDx Scholarship, Xiamen University',
    '2019、2020、2021Merit Student, Outstanding Graduates, Xiamen University',
    '2021-2022 Dong Scholarship, Fudan University',
  ];

  const awards = [
    'Aug. 2019. National Second Prize, China National University Computer Design Competition',
    'Apr. 2019. National Third Prize, China National College Team Programming Ladder Competition',
    'May 2019. Provincial Silver Award, Fujian Province College Student Programming Competition',
  ];

  const academicAchievements = [
    {
      title: 'Point, Segment and Count: A Generalized Framework for Object Counting, CVPR 2024',
      image: psc,
      description: "We introduce a novel framework for class-agnostic object counting, which combines SAM and CLIP, addressing the limitations of current counting methods that depend heavily on density maps. The framework improves efficiency and accuracy in detecting small, crowded objects.",
      paperLink: 'https://arxiv.org/abs/2311.12386',
      code: 'https://github.com/Hzzone/PseCo'
    },
    {
      title: 'Cross-head Supervision for Crowd Counting with Noisy Annotations, ICASSP 2023',
      image: chsnet,
      description: 'This study aims to address the prevalent issue of label noise in crowd datasets. We propose a learning paradigm that utilizes a dual-branch network consisting of convolutional and transformer components for mutual supervision. This approach effectively leverages supervisory information in noisy regions, thereby enhancing counting accuracy.',
      paperLink: 'https://ieeexplore.ieee.org/document/10095636/',
      code: 'https://github.com/RaccoonDML/CHSNet'
    },
    {
      title: 'Adjustable Memory-efficient Image Super-resolution via Individual Kernel Sparsity, ACMMM 2022',
      image: iks,
      description: "To abtain sparsed image super-resolution models, we introduce a dynamic threshold learning algorithm in which the threshold adaptively decays under the guidance of target sparsity. The proposed method can achieve parameter sparsity of 50% to 70% while maintaining the existing super-resolution model's accuracy.",
      paperLink: 'https://dl.acm.org/doi/10.1145/3503161.3547768',
      code: 'https://github.com/RaccoonDML/IKS'
    },
  ];

  const patents = [
    'A Differentiated Additive Noise Method in Federated Learning Gradient Exchange, Patent No. CN111260061A',
    'An Efficient Image Super-Resolution Method Based on Adjustable Kernel Sparsity, Application No. 202210579505.2'
  ];


  const projects = [
    {
      title: 'Controllable Diffusion Model Internship @HikVision',
      description: " Jun. 2023 - Aug. 2023. I'm responsible for generating facial data in various business scenarios using ControlNet, and investigating the impact of different control conditions (keypoints, segmentation maps, IDs) and their interaction on diffusion model's generation performance and controllability.",
    },
    {
      title: 'Diffusion Model for Crowd Counting',
      description: "Mar. 2023. I leveraged diffusion models for crowd counting by treating counting as a conditional density map generation task. The algorithm recovered density maps from Gaussian noise with the diffusion model conditioned on the original crowd images, which achieved state-of-the-art results on the SHB dataset.",
    },
    {
      title: 'Video Algorithm Internship @Simo Technology',
      description: "Mar. 2021 - May 2021. I developed expertise in VapourSynth and FFmpeg video processing workflow. My contributions included optimizing the Vine de-halo algorithm and integrating it into the video processing pipeline. And I developed an offline config generation tool GUI via wxPython.",
    },
    {
      title: 'Danmao NFT Development',
      description: "Apr. 2023 - Jun. 2023. I led the development of Danmao series NFTs as the head of the Development Department at the Fudan University Blockchain Association. This project aimed to lower the barrier for web2 users to enter web3. I’m responsible for NFT designing, frontend, and smart contract. Project website: https://danmao.xyz",
    },
    {
      title: 'Handwritten Mathematical Formula Inference System',
      description: "Apr. 2019 - Jul. 2019. Our team, utilizing Java, developed this system with sophisticated image preprocessing techniques such as binarization, denoising, and skew correction. The system features dynamic image segmentation, preliminary coarse recognition, and employs convolutional neural networks for precise single-character recognition. This innovative approach led us to win a prestigious National Second Prize.",
    },
  ];

  const hobbies = [
    'Reading',
    'Badminton',
    'Bodybuilding',
    'Snowboarding',
    "Texas Hold'em",
  ];

  const Interests = [
    'Computer vision',
    'Image super-resolution',
    'Crowd counting',
    'Diffusion models',
  ];

  return (
    <div className='container w-full mx-auto'>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="container basis-1/4 bg-gradient-to-b from-gray-200 rounded-xl flex-col space-y-8 p-4 max-w-sm mx-auto">
          <img  src={danmao} className="mx-auto rounded-3xl shadow-xl" />
          <h1 className="text-2xl font-bold text-primary">Mingliang Dai</h1>

          <div>
            <h2 className="text-lg font-bold">Basic Info</h2>
            <div>
              <div>{personalInfo.school}</div>
              <div>{personalInfo.location}</div>
              <div>{personalInfo.contact}</div>
              <div className='flex flex-row justify-center mt-4'>
                <a href={personalInfo.googleScholar} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_google_scholar} alt='scholar'/></a>
                <a href={personalInfo.github} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_github} alt='github'/></a>
                <a href={personalInfo.twitter} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_twitter} alt='twitter'/></a>
                <a href={personalInfo.csdn} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_csdn} alt='csdn'/></a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Research Interests</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Interests.map((hobby, index) => (
                <div className="bg-slate-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
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

        <div class="container basis-3/4 rounded-xl text-left p-4 space-y-12">
          <section className="">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Education</h2>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>B.S. in Computer Science and Technology, <span className='font-bold'>Xiamen University</span>, Sep. 2017 - Jun. 2021. <span className='font-bold'>GPA-3.85/4.0</span></li>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>M.S. in Computer Applied Technology, <span className='font-bold'>Fudan University</span>, Sep. 2021 - Jun. 2024. <span className='font-bold'>IELTS-7.0(6.0), reading 9.0</span></li>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Awards and Honors</h2>
            {honors.map((award, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
            ))}
            <div className='text-lg pt-2 pb-1 font-bold'>Competition Awards</div>
            {awards.map((award, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Publications</h2>
            <div className="grid grid-cols-1 gap-6">
              {academicAchievements.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                  <p className="text-gray-600">{achievement.description}</p>
                  <div className='flex justify-center gap-4'>
                    <a
                      href={achievement.paperLink}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      paper link
                    </a>
                    <a
                      href={achievement.code}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      code link
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className='text-xl pt-8 pb-2 font-bold'>National Invention Patents</div>
            <div className="grid grid-cols-1 gap-2">
              {patents.map((patent, index) => (
                <div key={index} className="card rounded-lg shadow-md bg-gray-100 p-2 hover:bg-gray-300">{patent}</div>
              ))}
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Projects and Internship Experience</h2>
            <ul className="list-disc space-y-2">
              {projects.map((project, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <div key={index} className="text-gray-600">{project.description}</div>
                </div>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div >
  );
}

export default App;
