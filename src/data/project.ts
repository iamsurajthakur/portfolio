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
		title: "Latency Lab",
    title_en: "Load testing platform.",
		date: "2026-07-28",
    detail: "https://github.com/iamsurajthakur/Latency_Lab",
    url: "https://github.com/iamsurajthakur/Latency_Lab",
    cover: ['latency/dash.png',
		'latency/home.png',
		'latency/feature.png'],
		tags: ['BACKEND', 'WEB', 'FULL STACK']
	},
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

];

