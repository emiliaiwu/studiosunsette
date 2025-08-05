import img1 from "/assets/img1 (1).jpg";
import img2 from "/assets/img1 (2).jpg";
import img3 from "/assets/img1 (3).jpg";
import img4 from "/assets/img1 (4).jpg";
import img5 from "/assets/img1 (1).jpg";
import img6 from "/assets/img1 (1).jpg";

export type WorksProp = {
	image: string;
	client: string;
	url: string;
	serviceType: string;
};

export const works: WorksProp[] = [
	{
		image: img1,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "wix",
	},
	{
		image: img2,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "squarespace",
	},
	{
		image: img3,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "shopify",
	},
	{
		image: img4,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "webflow",
	},
	{
		image: img5,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "showit",
	},
	{
		image: img6,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "squarespace",
	},
	{
		image: img4,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "webflow",
	},
	{
		image: img5,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "showit",
	},
	{
		image: img6,
		client: "Clara Moore",
		url: "https://studiobasique.com",
		serviceType: "squarespace",
	},
];

type ServiceProp = {
	image: string;
	serviceType: string;
	deliverables: string[];
	description: string;
	exclusions: string[];
	timeline: string;
	extras: string[];
};

export const services: ServiceProp[] = [
	{
		image: "path_to_squarespace_image.jpg",
		serviceType: "Squarespace",
		description:
			" I design custom Squarespace websites that feel clean, effortless, and high-end. With seamless mobile responsiveness, elegant typography, and strategic layouts, your website will be both visually compelling and conversion-focused, ensuring a lasting impression on your audience. ",
		deliverables: [
			"Custom Squarespace website design",
			"Mobile-friendly & responsive design",
			"Up to 6 Pages designed",
			"2 free pages - Coming Soon & 404 Page",
			"Basic SEO setup",
			"Basic integrations (Google Analytics, Email)",
			"Speed optimization",
			"Custom CSS for additional styling",
			"One month complimentary aftercare",
		],
		exclusions: [
			"Starts at $600",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "1-3 weeks",
		extras: [
			"Advanced SEO $200+",
			"Monthly Website Care $100+",
			"Copywriting $500+",

			"Additional Page $150+",
			"Membership/Subscription Setup: $150+",
			"E-commerce Setup: $400+",
			"Booking & Scheduling Integration: $200+",
			"Advanced CSS & Code Tweaks: $120+",
		],
	},
	{
		image: "path_to_shopify_image.jpg",
		serviceType: "Shopify",
		description:
			"For brands ready to elevate their online shopping experience, I design beautifully customized Shopify stores that captivate and convert. From thoughtfully curated product pages to seamless checkout flows, every detail is tailored to enhance your customers’ journey. ",
		deliverables: [
			"Fully Custom Shopify Store Design",
			"Fully Responsive Design",
			"Up to 5 Pages Designed",
			"2 free pages - Coming Soon & 404 Page",
			"Product Setup (up to 10 products)",
			"Basic SEO & Speed Optimization",
			"Payment Gateway Integration",
			"Basic Essential Apps & Plugins Setup",
		],
		exclusions: [
			"Starts at $1200",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "2-4 weeks",
		extras: [
			"Additional Page: $150+",
			"Product Upload: $10 per product",
			"More Essential Apps Setup: $200+",
			"Subscription/Membership Setup: $150+",
			"Custom Checkout Page Design: $150+",
			"Email Marketing Setup: $200+",
		],
	},
	{
		image: "path_to_webflow_image.jpg",
		serviceType: "Webflow",
		description:
			"Your brand deserves a website that feels effortless, refined, and uniquely yours. With Webflow, I craft fully custom, visually striking websites that blend elegance with functionality. Every design is thoughtfully tailored to showcase your brand’s personality ",
		deliverables: [
			"Fully custom Webflow website design (up to 6 pages)",
			"Responsive and mobile-friendly layout",
			"Basic SEO and speed optimization",
			"Custom animations and interactions",
			"2 free pages - Coming Soon & 404 Page",
			"CMS setup for blogs or portfolios",
			"Integration with basic third-party tools",
			"Basic training on managing the site",
		],
		exclusions: [
			"Starts at $800",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "1-3 weeks",
		extras: [
			"Additional pages: $150 per page",
			"Advanced animations and interactions: $200+",
			"E-commerce setup (up to 10 products): $400",
			"Custom CMS collections setup: $300+",
			"Membership/subscription setup: $300+",
			"Advanced SEO optimization: $200",
		],
	},
	{
		image: "path_to_showit_image.jpg",
		serviceType: "Showit",
		description:
			"For creatives, coaches, and entrepreneurs who crave a website as stunning as their vision, Showit is the perfect canvas. I design fully custom Showit websites that offer creative freedom without compromising on functionality.  ",
		deliverables: [
			"Fully custom Showit website design (up to 5 pages)",
			"Responsive and mobile-friendly design",
			"Blog integration with WordPress",
			"Basic SEO optimization",
			"Custom fonts and branding",
			"Basic integrations (Google Analytics, Email, Social Media)",
			"Basic training on managing the site",
		],
		exclusions: [
			"Starts at $600",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "1-3 weeks",
		extras: [
			"Additional pages: $100 per page",
			"Advanced custom code and styling: $300+",
			"E-commerce integration: $400",
			"Membership/subscription setup: $300+",
			"Advanced SEO optimization: $200",
		],
	},
	{
		image: "path_to_wix_image.jpg",
		serviceType: "Wix",
		description:
			" I create fully custom Wix websites that are easy to manage and designed with intention. From sleek visuals to seamless integrations, I ensure that your website is both aesthetically beautiful and strategically built to support your business growth. ",
		deliverables: [
			"Fully custom Wix website design (up to 5 pages)",
			"Mobile-friendly and responsive design",
			"Basic SEO and speed optimization",
			"Blog setup (if needed)",
			"Basic integrations (Google Analytics, Email, Social Media)",
			"Custom animations and interactive elements",
			"Basic training on managing the site",
		],
		exclusions: [
			"Starts at $600",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "1-3 weeks",
		extras: [
			"Additional pages: $100 per page",
			"Advanced custom code and styling: $300+",
			"E-commerce integration: $400",
			"Membership/subscription setup: $300+",
			"Advanced SEO optimization: $200",
		],
	},
];


type PackageProp = {
	packageTitle: string;
	slug: string;
	deliverables: string[];
	description: string;
	investment: string[];
	timeline: string;
	extras: string[];
};


export const packages: PackageProp[] = [
	{
		packageTitle: "The Solrise Package",
		slug: "solrise-package",
		description:
			" Perfect for new service providers, coaches, creatives, or anyone ready to launch with clarity. A beautiful, strategic site to set the tone for your brand and invite aligned clients in with grace. ",
		deliverables: [
			"Up to 5-7 Custom Pages",
			"Responsive Design",
			"Custom Popup",
			"Coming Soon & NotFound Page",
			"Basic SEO Setup",
			"Social Media integrations",
			"Newsletter Integration",
			"Booking Integration",
			"Speed Optimization",
			"Premium CSS",
			"2 Rounds of Refinements",
			"14 days Post-Launch Care",
		],
		investment: [
			"$1500",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% on delivery ",
		],
		timeline: "2-3 weeks",
		extras: [
			"Monthly Website Care $100+",
			"Copywriting $350+",
			"Additional Page $150+",
			"Membership/Subscription Setup: $150+",
			"E-commerce Setup: $400+",
			"Blog Setup: $300+",
		],
	},

	{
		packageTitle: "The Solshine Package",
		slug: "solshine-package",
		description:
			"Perfect for growing brands ready to showcase more depth, offers, or content. Designed for businesses with multiple offerings, storytelling elements, or a portfolio to display.",
		deliverables: [
			"Up to 10 Custom Pages",
			"Responsive Design",
			"Custom Popup",
			"Coming Soon & NotFound Page",
			"Basic SEO Setup",
			"Social Media integrations",
			"Newsletter Integration",
			"Booking Integration",
			"Speed Optimization",
			"Premium CSS",
			"2 Rounds of Refinements",
			"14 days Post-Launch Care",
		],
		investment: [
			"From $2000",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "3-4 weeks",
		extras: [
			"Monthly Website Care $100+",
			"Copywriting $350+",
			"Additional Page $150+",
			"Membership/Subscription Setup: $150+",
			"E-commerce Setup: $400+",
			"Blog Setup: $300+",
		],
	},

	{
		packageTitle: "The Shopify Beam",
		slug: "shopify-beam",
		description:
			"Perfect for product-based brands just beginning or with a small curated collection. An elegant, minimal Shopify Lite setup for boutique brands who want to start selling online with style and ease.",
		deliverables: [
			"Up to 7 Custom Pages",
			"Wire Frame Mock Up",
			"Catalogue Set Up & Product Upload (20 items)",
			"Up to 5 App Integrations",
			"Shipping & Payment Data Set Up",
			"Theme Shortlist, Installation & Customisations",
			"Basic SEO",
			"Premium CSS",
			"Mobile Optimisation",
			"Coming Soon Page",
			"Blog Set Up",
			"Custom Shopify Pop Up",
			"Social Media Integration",
			"Newsletter Integration",
			"2 Rounds of Refinements",
			"30 days Post-Launch Care",
		],
		investment: [
			"From $2000",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "4-6 weeks",
		extras: [
			"Monthly Website Care $100+",
			"Copywriting $350+",
			"Additional Page $200+",
			"Blog Setup: $300+",
			"Product Upload: $10 per product",
		],
	},

	{
		packageTitle: "The Shopify Glow",
		slug: "shopify-glow",
		description:
			"Perfect for established shops with a full range of products and a desire for a luxurious, on-brand shopping experience. This package supports growing ecommerce businesses who want a seamless blend of form and function.",
		deliverables: [
			"Up to 10 Custom Pages",
			"Custom Section Coding",
			"Wire Frame Mock Up",
			"Catalogue Set Up & Product Upload (40 items)",
			"Up to 10 App Integrations",
			"Shipping & Payment Data Set Up",
			"Theme Shortlist, Installation & Customisations",
			"Basic SEO",
			"Premium CSS",
			"Mobile Optimisation",
			"Coming Soon Page",
			"Blog Set Up",
			"Custom Shopify Pop Up",
			"Social Media Integration",
			"Newsletter Integration",
			"2 Rounds of Refinements",
			"30 days Post-Launch Care",
		],
		investment: [
			"From $2500",
			"Payment Plan: 25% Upfront",
			"25% after design is finalized",
			"50% after delivery ",
		],
		timeline: "6-8 weeks",
		extras: [
			"Monthly Website Care $100+",
			"Copywriting $350+",
			"Additional Page $200+",
			"Blog Setup: $300+",
			"Product Upload: $10 per product",
		],
	},
];