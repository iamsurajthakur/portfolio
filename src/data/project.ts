export interface ProjectItem {
	id?: number; 
	title: string
	title_en?: string
	description?: string
	date?: string		
	detail?: string 
  	url?: string  
	tags?: string[]
	cover?: string[]
}
export const projectItems: ProjectItem[] = [
	{
		title: "Prezent",
    title_en: "Generate presentation slides with AI.",
		date: "2026-03-15",
    detail: "https://github.com/iamsurajthakur/Prezent",
    url: "https://github.com/iamsurajthakur/Prezent",
    cover: ['prezent/home_prezent.png',
		'prezent/dashboard_prezent.png',
		'prezent/smart_slide.png'],
		tags: ['AI', 'WEB', 'FULL STACK']
	},
  {
		title: "Sustainify",
    title_en: "Track your environmental impact.",
		date: "2026-01-26",
    detail: "https://github.com/iamsurajthakur/sustainable-living-tracker",
    url: "https://github.com/iamsurajthakur/sustainable-living-tracker",
    cover: ['sustainify/home.png',
		'sustainify/dashboard.png',
		'sustainify/eco-challenge.png'
	],
		tags: ['WEB', 'FULL STACK']
	},
  {
		title: "Brain Tumor Classifier",
    title_en: "DL model for MRI brain tumor classification.",
		date: "2026-03-31",
		url: "https://github.com/iamsurajthakur/brain-tumor-classifier",
		detail: "https://github.com/iamsurajthakur/brain-tumor-classifier",
    cover: ['mri/cover-brain.jpg'],
		tags: ['AI','PYTHON']
	},
	  {
		title: "Finance API",
    title_en: "Secure finance backend with RBAC.",
		date: "2026-04-06",
		url: "https://github.com/iamsurajthakur/Zorvyn",
		detail: "https://github.com/iamsurajthakur/Zorvyn",
    cover: ['mri/finance.jpeg'],
		tags: ['BACKEND','NODE']
	},

];

