import bithesis from '../assets/bithesis.png'
import dowww from '../assets/dowww.png'
import onedriveVercelIndex from '../assets/onedrive-vercel-index.png'
import substats from '../assets/substats.png'
import vscodeMathToImage from '../assets/vscode-math-to-image.png'

export interface WheelProps{
  segments:string[],
  segColors:string[],
  winningSegment:string,
  onFinished:(arg:string)=>void,
  primaryColor:string 
  contrastColor:string 
  buttonText:string
  isOnlyOnce:boolean,
  size:number
  upDuration:number
  downDuration:number
  fontFamily?:string 
}

const defaultWeelProps = {
  primaryColor: 'black',
  contrastColor: 'white',
  buttonText:'Spin',
  isOnlyOnce: true,
  size:290,
  upDuration:100,
  downDuration:1000,
  fontFamily:'proxima-nova'
}

export interface SkillsCardProps{
  id: string,
  title:string,
  description: string
}

export interface ProjectProps {
  name: string
  link: string
  slug: string
  bimg: string
}

export interface CompanyProps{
  img: string
  description: string
  title: string
  skills: string[]
}

export const projects: ProjectProps[] = [
  {
    name: 'Substats',
    link: 'https://github.com/spencerwooo/substats',
    slug: 'spencerwooo/substats',
    bimg: substats,
  },
  {
    name: 'onedrive-vercel-index',
    link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    slug: 'spencerwooo/onedrive-vercel-index',
    bimg: onedriveVercelIndex,
  },
  {
    name: 'dowww',
    link: 'https://github.com/spencerwooo/dowww',
    slug: 'spencerwooo/dowww',
    bimg: dowww,
  },
  {
    name: 'BIThesis',
    link: 'https://github.com/BITNP/BIThesis',
    slug: 'BITNP/BIThesis',
    bimg: bithesis,
  },
  {
    name: 'vscode-math-to-image',
    link: 'https://github.com/TeamMeow/vscode-math-to-image',
    slug: 'TeamMeow/vscode-math-to-image',
    bimg: vscodeMathToImage,
  },
]
const charter = "At this company I created features for the “Stratagem and Operations” application which managed and supported direct reports as they guided corporate initiatives."
const ahs = "In this project I created various support features for the Appliance Reaper Application. These applications have four roles: Customer, Professional, Agent, and Supervisor. Each of the roles has a separate view and data access which provides various operations."
const codepath = "At this program, I worked as a Full Stack developer instructor where I provided lectures and real time support for the students to help them with their assessments and projects for the class."
const dish = "In this company I created a system for automatic team and customer based SW Releases. I built both the front and back end parts of this application from scratch."
const global  = "The 27Global a huge consult on it company/. At this company I handled multiple projects with different stacks. Each project had different allocated hours meaning that I worked parallel on all these projects. "
const apolloware = " One of the 27Global the project that I worked on was the Appolloware project where I used Angular8, NodeJS and AWS stack components to create a way to view the amount electricity various devices expend during the day. The data was real-time and updated the user live on the amount of electricity they expended over the course of a day. "
const geeni = "Another of the 27Global huge project I worked on was the GEENI app which was built on ReactNative, NodeJS, and AVS. It provides a way to manipulate smart home devices from different manufactures. My job in this project was to create certain scenes and connect various devices to the application for an easier and more uniform user experience."
export const projectsLena  = [
  {img:"/src/assets/charter-logo.png", description: charter,skills:["AgularJS", "Pyhon", "MongoDB"], title:"Full Stack Engineer"},
  {img:"/src/assets/ahs-logo.svg", description: ahs, skills:["React.js","NodeJs","MongoDb"] ,title:"Software Engineer"},
  {img:"/src/assets/codepath-logo.webp", description: codepath, skills:["React", "NodeJS","Postgres"],title:"Full-Stack Software Engineer | Instructor"},
  {img:"/src/assets/dish-logo.png", description: dish,skills:["React.js","Python","MySQl"] ,title:"Software Engineer"},
  {img:"/src/assets/27Global-logo.png", description:global ,skills:["React.js", " React Native"," AngularJS ","Angular Material", "NodeJs"] ,title:"Software Engineer"},
  {img:"/src/assets/geeni_logo_27Global.avif", description:geeni ,skills:[" React Native"," NodeJs "] ,title:"Software Engineer"},
  {img:"/src/assets/apolloware_logo_27Global.png", description:apolloware,skills:[" Angular8 ","Angular Material", "D3.js"] ,title:"Software Engineer"}
]
