export interface IBase {
  title: string,
  icon: string
}

export interface Contact extends IBase {
  link: string,
  isMail?: boolean
}

export interface Stack extends IBase {
}

export interface Tool extends IBase {
}

export type Icons =
  'mdi:nuxt'
  | 'bxl:typescript'
  | 'mdi:tailwind'
  | 'carbon:api'
  | 'devicon-plain:vuetify'
  | 'mdi:vuejs'
  | 'ri:bootstrap-fill'
  | 'file-icons:nuxt' |
  "logos:vue"
  | "devicon:spring"
  | "logos:nodejs-icon"
  | 'logos:flutter'
  | 'logos:dart'
  | 'logos:firebase'
  | 'logos:bloc' // تأكد من المسمى الصحيح في Iconify
  | 'logos:google-maps' // إذا كنت تستخدم الخرائط
  | 'logos:react'
  | 'logos:redux'
  | 'logos:redux-toolkit'
export interface ITechIcon extends IBase {
  icon: Icons
}

export const CONTACT: Contact[] = [
  {
    title: "linkedin",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/osama-mohamed1/"
  },
  {
    title: "github",
    icon: "mdi:github",
    link: "https://github.com/osos2511"
  },
  {
    title: "mail",
    icon: "material-symbols-light:mail-outline",
    link: "mailto:osamamohamed.developer@gmail.com",
    isMail: true,
  },
]


export const PROJECTS: Project[] = [
  {
    title: "Tayarko App",
    type: "Delivery App",
    grid: "xx-large",
    techs: [
      {
        icon: "logos:flutter",
        title: "Flutter"
      },
      {
        icon: "logos:dart",
        title: "Dart"
      },
      // ضيف هنا الـ State Management اللي استخدمته، مثلاً:
      {
        icon: "logos:bloc", // أو provider
        title: "Cubit"
      },
      // لو شغال بـ Firebase ضيف دي:
      {
        icon: "logos:firebase",
        title: "Firebase"
      },
      // لو شغال بـ API ضيف دي:
      {
        icon: "carbon:api",
        title: "Rest API"
      }
    ],
    src: "Tayarko", 
    link: "https://play.google.com/store/apps/details?id=com.tayarko.devduardx&pli=1", 
},



{
    title: "AlmohandesLink App",
    type: "Store App",
    grid: "xx-large",
    techs: [
      {
        icon: "logos:flutter",
        title: "Flutter"
      },
      {
        icon: "logos:dart",
        title: "Dart"
      },
      {
        icon: "logos:bloc", 
        title: "Cubit"
      },
      {
        icon: "carbon:api",
        title: "Rest API"
      }
    ],
    src: "almohandeslink",
    link: "https://play.google.com/store/apps/details?id=com.devguardx.ahmohandes",
},


{
    title: "Magnet Web App",
    type: "Store Web App",
    grid: "xx-large",
    techs: [
      {
        icon: "logos:react",
        title: "React"
      },
      {
        icon: "bxl:typescript",
        title: "TypeScript"
      },
      {
        icon: "logos:redux",
        title: "Redux"
      },
      {
        icon: "logos:redux-toolkit", 
        title: "RTK Query"
      },
      {
        icon: "carbon:api",
        title: "Rest API"
      }
    ],
    src: "magnet",
    link: "https://magnet-web-omega.vercel.app/",
},



]



export const STACKS: Stack[] = [
  {
    title: "Flutter",
    icon: "logos:flutter"
  },
  {
    title: "Dart",
    icon: "logos:dart"
  },
  {
    title: "Python",
    icon: "logos:python"
  },
  {
    title: "SQL",
    icon: "mdi:database" 
  },
  {
    title: "Linux",
    icon: "logos:linux-tux"
  },
  {
    title: "git",
    icon: "logos:git"
  },
  {
    title: "bootstrap",
    icon: "logos:bootstrap"
  },
  {
    title: "javascript",
    icon: "logos:javascript"
  },
  {
    title: "CSS",
    icon: "flowbite:css-solid"
  },
  {
    title: "HTML",
    icon: "flowbite:html-solid"
  },
]





export const TOOLS: Tool[] = [
  {
    title: "Cursor",
    icon: "material-icon-theme:cursor"
  },
  {
    title: "Ubuntu",
    icon: "logos:ubuntu"
  },
  {
    title: "vscode",
    icon: "mdi:microsoft-visual-studio-code"
  },
  {
    title: "Android Studio",
    icon: "mdi:android-studio"
  },
  {
    title: "MySQL",
    icon: "logos:mysql"
  },
  {
    title: "postman",
    icon: "logos:postman"
  },
  {
    title: "Chat GPT",
    icon: "arcticons:openai-chatgpt"
  },
  {
    title: "Figma",
    icon: "solar:figma-broken"
  }
]
export interface HeaderLink {
  title: string,
  icon: string
}

export const HEADERLINKS: HeaderLink[] = [
  {
    title: "profile",
    icon: 'iconamoon:profile-thin'
  },
  // {
  //   title: "timeline",
  //   icon: 'material-symbols:timeline'
  // },
  {
    title: "projects",
    icon: "material-symbols-light:work-outline"
  },
  {
    title: "techs",
    icon: "hugeicons:nano-technology"
  },
  {
    title: "tools",
    icon: "et:tools-2"
  },
]

interface TimeLine {
  date: string,
  text: string,
  isLeft?: boolean,
  avatarUrl?: string,
  joined?: boolean,
  icon?: string
}

export const TIMELINE: TimeLine[] = [
  {
    date: "Aug 2022",
    text: "Graduated in Computer Science",
    icon: "line-md:computer"
  },
  {
    date: "Apr 2024",
    text: "joined <a target='_blank' href='https://www.linkedin.com/company/talent-innovate/' style='text-decoration: underline;'>@innovate</a> as a Frontend Developer",
    isLeft: true,
    joined: true
  },
  {
    date: "Jan 2025 – Present",
    text: "joined <a target='_blank' href='https://www.linkedin.com/company/namasoft' style='text-decoration: underline;'>@namasoft</a> as a Frontend Developer",
    joined: true,
    isLeft: false,
  },
]

export const DEFAULT_INDICATOR_SIZE = 80

export interface Project {
  title: string,
  type: string,
  grid?: string,
  techs: ITechIcon[],
  src: string,
  link: string,
  githubLink?: string
  tags?: {
    title: string,
    color: string
  }[],
  show?: boolean,
  made_with?: string
}
