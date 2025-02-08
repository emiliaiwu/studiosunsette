import img1 from "../assets/img1 (1).jpg";
import img2 from "../assets/img1 (2).jpg";
import img3 from "../assets/img1 (3).jpg";
import img4 from "../assets/img1 (4).jpg";
import img5 from "../assets/img1 (1).jpg";
import img6 from "../assets/img1 (1).jpg";

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
