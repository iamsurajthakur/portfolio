export const siteConfig = {
    siteName: import.meta.env.PUBLIC_SITE_NAME,
    siteUrl: import.meta.env.PUBLIC_SITE_URL,
}

interface NavItem {
    label: string;
    href: string;
    target?: string;
}

interface Nav {
    avatar?: string;
    items?: NavItem[]; 
}

export const nav: Nav = {
	avatar:'/assets/author-image.png',
    items: [
        { label: 'Home', href: '/', target: '_self' },
        { label: 'Projects', href: '/project', target: '_self' },
        { label: 'About', href: '/about', target: '_self' },
        { label: 'Blog', href: '/blog', target: '_self' },
    ],
};

// Footer
export const footerText = `© ${new Date().getFullYear()} Suraj Thakur. All Rights Reserved.`

//SEO TDK
interface SeoTdk {
	title?: string
	description?: string
	keywords?: string
}
export const homeTdk: SeoTdk = {
	title: 'Suraj Thakur | Software Engineer',
	description: 'Software engineer specializing in full-stack web development, backend systems, Go, TypeScript, and AI-powered applications.',
	keywords: 'Suraj Thakur, Software Engineer, Full Stack Developer, Go, TypeScript, Next.js, AI'
}
export const blogTdk: SeoTdk = {
	title: 'Blog | Suraj Thakur',
	description: 'Articles about software engineering, Go, web development, Linux, AI, and my learning journey.',
	keywords: 'software engineering blog, Go, Next.js, TypeScript, AI, Linux'
}
export const aboutTdk: SeoTdk = {
	title: 'About | Suraj Thakur',
	description: 'Learn more about Suraj Thakur, a software engineer passionate about backend development, web technologies, and AI.',
	keywords: 'About Suraj Thakur, Software Engineer'
}
export const projectTdk: SeoTdk = {
	title: 'Projects | Suraj Thakur',
	description: 'A collection of software engineering, AI, and full-stack projects built by Suraj Thakur.',
	keywords: 'Software Projects, Go, Next.js, TypeScript, AI'
}
export const notFoundTdk: SeoTdk = {
	title: '404 | Page Not Found',
	description: 'The page you are looking for could not be found.',
	keywords: '404, Page Not Found'
}

export const socialLinks = [
	{
		name: 'Github',
		url: 'https://github.com/iamsurajthakur',
		icon: `<svg t="1730125604816" class="icon ic-github ic-social" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12741" width="256" height="256"><path d="M511.957333 21.333333C241.024 21.333333 21.333333 240.981333 21.333333 512c0 216.832 140.544 400.725333 335.573334 465.664 24.490667 4.394667 32.256-10.069333 32.256-23.082667 0-11.690667 0.256-44.245333 0-85.205333-136.448 29.610667-164.736-64.64-164.736-64.64-22.314667-56.704-54.4-71.765333-54.4-71.765333-44.586667-30.464 3.285333-29.824 3.285333-29.824 49.194667 3.413333 75.178667 50.517333 75.178667 50.517333 43.776 75.008 114.816 53.333333 142.762666 40.789333 4.522667-31.658667 17.152-53.376 31.189334-65.536-108.970667-12.458667-223.488-54.485333-223.488-242.602666 0-53.546667 19.114667-97.322667 50.517333-131.669334-5.034667-12.330667-21.930667-62.293333 4.778667-129.834666 0 0 41.258667-13.184 134.912 50.346666a469.802667 469.802667 0 0 1 122.88-16.554666c41.642667 0.213333 83.626667 5.632 122.88 16.554666 93.653333-63.488 134.784-50.346667 134.784-50.346666 26.752 67.541333 9.898667 117.504 4.864 129.834666 31.402667 34.346667 50.474667 78.122667 50.474666 131.669334 0 188.586667-114.730667 230.016-224.042666 242.090666 17.578667 15.232 33.578667 44.672 33.578666 90.453334v135.850666c0 13.141333 7.936 27.605333 32.853334 22.869334C862.250667 912.597333 1002.666667 728.746667 1002.666667 512 1002.666667 240.981333 783.018667 21.333333 511.957333 21.333333z" p-id="12742"></path></svg>`
	},
	{
	  name: 'LinkedIn',
	  url: 'https://www.linkedin.com/in/suraj-thakur7/',
		icon: `<svg
  class="ic-linkedin icon"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
>
  <path
    fill="#666666"
    d="M20.447 20.452H16.89V14.87c0-1.33-.027-3.04-1.852-3.04-1.853 0-2.136 1.445-2.136 2.94v5.682H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.269 2.372 4.269 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452z"
  />
</svg>`
	},
	{
	  name: 'Xiaohongshu',
	  url: 'https://www.xiaohongshu.com/user/profile/5f2b6903000000000101f51f',
	  icon: `<svg t="1728957787092"  class="ic-xiaohongshu ic-social icon" viewBox="0 0 2496 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3844" width="128" height="128"><path d="M2366.874 190.874l-3.687-3.687c-33.382-31.949-69.017-21.709-94.617-5.53-22.324 14.132-35.84 38.913-35.84 65.332v73.113h76.595c67.174 0.205 103.629-80.486 57.549-129.228z" fill="" p-id="3845"></path><path d="M2197.3 441.344c0-33.587-0.206-133.734-0.82-164.25-0.82-103.014-106.496-100.556-106.496-100.556h-114.893l-0.819-58.778h-144.18v58.778h-94.617v139.264h93.184v124.723h-140.288V587.57h144.384v316.007h142.95V585.523c70.452 0 134.759-1.024 198.861 0.41 31.95 0.614 49.152 21.094 50.176 52.429 1.23 37.478 0 145.817 0 145.817l-144.384-0.41 55.501 119.809h132.71s101.991 2.662 101.991-101.581V549.888c0.205-84.378-51.814-109.158-173.26-108.544z m-125.748-0.614h-95.232l-1.024-124.724h96.46V440.73zM136.397 684.85c27.853 49.152 55.705 98.1 86.016 151.552 113.664-159.539 108.544-516.505 108.544-516.505H179.2c12.288 190.873-42.598 359.219-42.803 364.953z m297.37-567.091v667.443h-96.052l91.341 121.242h87.45s61.235 0 59.801-89.293c1.024-218.726 1.229-480.87 1.434-699.597-47.719 0-95.847 0-143.975 0.205z m739.123 381.952c29.49-59.597 59.187-118.989 92.364-186.163-62.873 3.686-115.712 6.758-174.49 10.035 25.191-66.97 64.513-135.578 99.943-206.234h-144.179c-41.984 86.221-86.22 171.418-125.542 258.663-24.986 55.091-4.71 82.125 55.91 84.173 20.48 0.819 40.96 0.204 69.222 0.204-9.83 21.504-16.384 36.045-22.937 50.586-19.251 42.189-39.731 83.968-57.14 126.976-14.13 34.816-0.409 62.464 36.25 66.56 50.586 5.53 101.786 3.891 152.576 4.096 5.735 0 13.927-6.349 16.999-12.083 18.227-33.792 35.225-68.403 54.476-106.291-13.107-1.024-20.07-2.048-27.238-2.253-68.813-1.843-68.813-2.048-37.888-64.307 3.686-7.578 7.578-15.975 11.674-23.962z" fill="" p-id="3846"></path><path d="M1536.614 768.205h149.71V906.65h-517.735c25.19-49.767 69.837-138.445 69.837-138.445h147.66V315.597h-91.955V174.08h333.62v139.264h-91.137v454.86zM680.346 318.464h142.13c-10.854 141.312 34.817 329.933 34.817 329.933s-41.37 92.774-71.475 179.814C716.8 768 679.322 586.957 680.346 318.464z m256 440.934h230.195c-25.805 50.381-46.08 91.341-68.199 131.482-4.096 7.373-16.384 14.336-24.985 14.54-67.175 1.025-134.144 0.615-211.354 0.615 29.287-57.958 53.248-105.062 74.343-146.637z" fill="" p-id="3847"></path></svg>`
	},
	// RSS
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
	},

];

// Page Tag 
interface PageTag {
	index: string
	about: string
	blog: string
	project: string
}
export const pageTag: PageTag = {
	index: 'SURAJ THAKUR',
	about: 'ABOUT',
	blog: 'BLOG',
	project: 'PROJECT'
}


//Page Description 
interface PageDescription {
	index?: string
	project?: string
	blog?: string
	about?: string
}
export const pageDescription: PageDescription = {
	index: 'I am Suraj Thakur, a software engineer focused on building scalable web applications, backend systems, and AI-powered products. Explore my projects or read about what I am learning',
	project: "A collection of projects I've built, from full-stack web applications to backend services and AI-powered tools.",
	about: 'Passionate about software engineering, backend development, distributed systems, and building practical products.',
	blog: 'Articles, tutorials, and notes about software engineering, Go, web development, Linux, and the things I am learning.',
}



// FilterItem 
export interface FilterItem {
	content: string
	dataGroup: string
}
export const filterItems: FilterItem[] = [
	{ content: "Web", dataGroup: "web" },
	{ content: "AI", dataGroup: "ai" },
	{ content: "Backend", dataGroup: "backend" },
	{ content: "End-to-End", dataGroup: "end-to-end" },
	{ content: "Low Level", dataGroup: "low-level" },
];



