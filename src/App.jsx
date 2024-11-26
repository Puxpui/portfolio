import React, { useEffect } from 'react';
import MyNavbar from './component/MyNavbar';
import Footer from './component/Footer';
import MyMotion from './motion';

function App() {
  useEffect(() => {
    document.getElementById('home').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <div id='home'>
      <MyNavbar />
      <div className='font-dcscrip bg-gradient-to-l from-[#f0f8ff] to-[#ffffff]'>
        <div className='flex justify-end'>
          <img
            className='absolute w-[250px] rounded-full mr-[100px] mt-[50px] select-none opacity-75'
            src="https://i.imgur.com/t1xe1P9.png"
            alt=""
            draggable="false"
          />
        </div>
        <MyMotion direction="up" delay={0.2}>
          <div className='ml-[100px] text-4xl font-semibold mt-[100px]'>Hello World</div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex'>
            <div className='ml-[100px] text-4xl font-semibold'>I'am</div>
            <div className='ml-[20px] text-4xl text-[#00B7FF] font-semibold'>Puxpui</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='ml-[100px] text-xl font-semibold text-[#666666]'>Student of Digital Business Technology</div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='ml-[100px] mt-[15px] flex w-[125px] gap-2 select-none'>
            <a href="https://github.com/Puxpui" target="_blank">
              <img draggable="false" src="https://i.imgur.com/CxlFent.png" />
            </a>
            <a href="https://x.com/puxpuidesu" target="_blank">
              <img draggable="false" src="https://i.imgur.com/f77JuFG.png" />
            </a>
            <a href="https://www.facebook.com/puxpui/" target="_blank">
              <img draggable="false" src="https://i.imgur.com/dLA1tdL.png" />
            </a>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-center'>
            <div className='mt-[20%] text-xl font-semibold text-[#666666]'>
              Game Developer | Front-End Developer
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='mt-[0.5%] text-sm font-semibold text-[#666666]'>
              Skill : JavaScript, C#, Python, NodeJS, React, MongoDB, MySQL, Git, HTML, CSS
            </div>
          </div>
          
        </MyMotion>
        <MyMotion direction="left" delay={0.1}>
          <div className='flex justify-center' id='about'>
            <div className='mt-[10%] text-4xl font-semibold text-[#00B7FF] underline'>About Me</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-center text-center mt-[25px] text-xl font-semibold text-[#666666]'>
            My name is Pui. I have a deep passion for computers and technology since I was young.
            <br /> with the goal of using technology to make a positive impact.
            <br /> I hope to be part of creating meaningful change for a better world.
          </div>
        </MyMotion>
        <MyMotion direction="left" delay={0.1}>
          <div className='flex justify-center'>
            <div className='mt-[5%] text-4xl font-semibold text-[#00B7FF] underline'>Education</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex ml-[20%] justify-start text-start mt-[25px] text-2xl font-semibold text-[#666666]'>
            Phonphisai College of Technology
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-end'>
            <div className='text-start text-2xl mr-[25%] font-semibold text-[#666666] absolute'>2021 - Present</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex ml-[25%] justify-start text-start mt-[px] text-xl font-semibold text-[#666666]'>Vocational Diploma (VCD)</div>
          <div className='flex ml-[25%] justify-start text-start mt-[px] text-xl font-semibold text-[#666666]'>Vocational Certificate (VCT)</div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex ml-[20%] justify-start text-start mt-[25px] text-2xl font-semibold text-[#666666]'>Rujeejintakanon School</div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-end'>
            <div className='text-start text-2xl mr-[25%] font-semibold text-[#666666] absolute'>2012 - 2021</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex ml-[25%] justify-start text-start mt-[px] text-xl font-semibold text-[#666666]'>Lower Secondary</div>
          <div className='flex ml-[25%] justify-start text-start mt-[px] text-xl font-semibold text-[#666666]'>Education Primary</div>
        </MyMotion>
        {/* <MyMotion>
          <div className='flex justify-center' id='project'>
            <div className='mt-[12%] text-4xl font-semibold'>My Project</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-center gap-[35%]'>
            <div className='flex text-start mt-[25px] text-xl font-semibold text-[#666666]'>
              Game Project
            </div>
            <div className='flex text-end mt-[25px] text-xl font-semibold text-[#666666]'>
              Website Project
            </div>
          </div>
          <div className='flex justify-end mr-[25%] text-end mt-[25px] text-sm font-semibold text-[#666666]'>All you can cal</div>
        </MyMotion> */}
        <MyMotion direction="left" delay={0.1}>
          <div className='flex justify-center' id='certificate'>
            <div className='mt-[12%] text-4xl font-semibold text-[#00B7FF] underline'>Certificate</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-center'>
            <div className='w-[75%] grid grid-cols-3 gap-4 mt-[25px]'>
              <a href="https://school.borntodev.com/certificate/r97NqhkTm5b1" target="_blank">
                <img draggable="false" src="https://i.imgur.com/fOXbzqg.png" />
              </a>
              <a href="https://school.borntodev.com/certificate/HYgsRXZBapzu" target="_blank">
                <img draggable="false" src="https://i.imgur.com/saw5Cl6.png" />
              </a>
              <a href="https://school.borntodev.com/certificate/UD6L59tT3Iu8" target="_blank">
                <img draggable="false" src="https://i.imgur.com/0O7Cn4B.png" />
              </a>
              <a href="https://school.borntodev.com/certificate/jMW1sABz90po" target="_blank">
                <img draggable="false" src="https://i.imgur.com/CHN1QFC.png" />
              </a>
              <a href="https://www.borntodev.com/devlab/certificate_online/bc8755121297faf5f542651b7aee301f" target="_blank">
                <img draggable="false" src="https://i.imgur.com/DeEcC49.png" />
              </a>
            </div>
          </div>
        </MyMotion>
        <MyMotion direction="left" delay={0.1}>
          <div className='flex justify-center' id='contact'>
            <div className='mt-[12%] text-4xl font-semibold text-[#00B7FF] underline'>Contact</div>
          </div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-center text-start mt-[10px] text-xl font-semibold text-[#666666]'>
            Email : pukpuidesu666@gmail.com
          </div>
          <div className='flex justify-center text-start mt-[px] text-xl font-semibold text-[#666666]'>Discord : Puxpui</div>
          <div className='flex justify-center text-start mt-[px] text-xl font-semibold text-[#666666]'>GitHub : Puxpui</div>
        </MyMotion>
        <MyMotion direction="up" delay={0.2}>
          <div className='flex justify-center mt-[7.5%]'>
            <img className='' draggable="false" src="https://media1.tenor.com/m/-9lHctoXbJkAAAAd/toothless-toothless-dragon.gif" alt="" />
          </div>
        </MyMotion>
        <Footer />
      </div>
    </div>
  );
}

export default App;