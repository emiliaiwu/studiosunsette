import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
	name: string;
	email: string;
	website: string;
	services: string;
	budget: string;
	about_brand: string;
	launch_date?: string;
	business_name: string;
	find_us?: string;
	additional?: string;
	honeypot?: string;
}

const serviceID: string = import.meta.env.VITE_SERVICE_ID as string;
const templateID: string = import.meta.env.VITE_TEMPLATE_ID as string;
const userID: string = import.meta.env.VITE_USER_ID as string;

const InquiryForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();

	const [message, setMessage] = useState<string>("");
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		if (data.honeypot) return; // Honeypot trap for bots

		const lastSubmit = localStorage.getItem("lastSubmit") || "0";
		const now = Date.now();
		if (now - parseInt(lastSubmit) < 30000) {
			alert("You're submitting too fast!");
			return;
		}
		localStorage.setItem("lastSubmit", now.toString());

		try {
			setIsSubmitting(true);
			await emailjs.send(serviceID, templateID, { ...data }, userID);
			setMessage("Inquiry sent!");
			setIsSuccess(true);
			reset();
		} catch (error) {
			console.error("Error sending email:", error);
			setMessage("Error sending your inquiry.");
			setIsSuccess(false);
		} finally {
			setIsSubmitting(false);
		}
	};

	const servicesOptions = [
		{ value: "squarespace", label: "Squarespace" },
		{ value: "shopify", label: "Shopify" },
		{ value: "custom_website", label: "Custom Website" },
		{ value: "showit", label: "Showit" },
		{ value: "wix", label: "Wix" },
		{ value: "webflow", label: "Webflow" },
	];

	return (
		<form
			noValidate
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-8 text-sm font-suisse w-full'
		>
			<input type='hidden' {...register("honeypot")} />

			<div className='flex xl:flex-row flex-col gap-3 w-full'>
				<div className='w-full'>
					<label htmlFor='name' className='mb-3 font-[500]'>
						Full Name *
					</label>
					<input id='name' {...register("name", { required: true })} />
					{errors.name && (
						<span className='text-xs text-red-500'>Name is required</span>
					)}
				</div>

				<div className='w-full'>
					<label htmlFor='email' className='mb-3 font-[500]'>
						Email *
					</label>
					<input
						id='email'
						type='email'
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Invalid email address",
							},
						})}
					/>
					{errors.email && (
						<span className='text-xs text-red-500'>
							{" "}
							{errors.email.message}
						</span>
					)}
				</div>
			</div>

			{/* Business Name */}
			<div>
				<label className='font-[500]' htmlFor='business_name'>
					Brand Name *
				</label>
				<input
					id='business_name'
					{...register("business_name", { required: "Brand name is required" })}
					className='mt-2'
				/>
				{errors.business_name && (
					<span className='text-xs text-red-500'>
						{errors.business_name.message}
					</span>
				)}
			</div>

			{/* Website or Social Link */}
			<div>
				<label className='font-[500]' htmlFor='website'>
					Website or Social Link *
				</label>
				<input
					className='mt-2'
					id='website'
					{...register("website", { required: true })}
				/>
				{errors.website && (
					<span className='text-red-500 text-xs'>
						Website or Instagram is required
					</span>
				)}
			</div>

			<div className='flex flex-col gap-4'>
				<label className='font-[500]'>
					What services are you looking for? *
				</label>
				<div className='flex flex-col gap-4 ml-4'>
					{servicesOptions.map((option) => (
						<div key={option.value}>
							<label className='flex items-center'>
								<input
									type='radio'
									value={option.value}
									className='radio-button w-5 h-5 z-50 bg-transparent'
									{...register("services", {
										required: "Please select a service",
									})}
								/>
								<span className='radio-label bg-transparent'></span>
								<span className=''>{option.label}</span>
							</label>
						</div>
					))}
				</div>
				{errors.services && (
					<span className='text-red-500 text-xs'>
						{errors.services.message}
					</span>
				)}
			</div>

			{/* About Your Brand */}
			<div className='flex flex-col w-full'>
				<label htmlFor='about_brand' className='font-[500]'>
					Tell me about your brand and vision *
				</label>
				<textarea
					className='border border-black min-h-28 mt-2 rounded-none p-3 text-sm'
					id='about_brand'
					{...register("about_brand", { required: true })}
				/>
				{errors.about_brand && (
					<span className='text-red-500 text-xs'>
						About your brand is required
					</span>
				)}
			</div>

			{/* Budget */}
			<div>
				<label className='font-[500]' htmlFor='budget'>
					Budget *
				</label>
				<input
					className='mt-2'
					id='budget'
					{...register("budget", { required: true })}
				/>
				{errors.budget && (
					<span className='text-red-500 text-xs'>Budget is required</span>
				)}
			</div>

			{/* Launch Date */}
			<div>
				<label className='font-[500]' htmlFor='launch_date'>
					When is your ideal launch date? *
				</label>
				<input
					className='mt-2'
					id='launch_date'
					{...register("launch_date", { required: true })}
				/>
				{errors.launch_date && (
					<span className='text-red-500 text-xs'>Launch date is required</span>
				)}
			</div>

			{/* How did you find out about us? */}
			<div>
				<label className='font-[500]' htmlFor='find_us'>
					How did you find out about me?
				</label>
				<input className='mt-2' id='find_us' {...register("find_us")} />
			</div>

			{/* Anything to Add */}
			<div className='flex flex-col'>
				<label className='font-[500]' htmlFor='additional'>
					Is there anything else you would like to add?
				</label>
				<textarea
					className='border border-black min-h-28 mt-2 rounded-none p-3 text-sm'
					id='additional'
					{...register("additional")}
				/>
			</div>

			{/* Submit Button */}
			<button
				disabled={true}
				className=' bg-primary text-white p-3 mt-4 hover-opacity flex justify-center items-center max-h-[44px] uppercase'
				// type='submit'
			>
				{isSubmitting ? (
					<span className='loader'></span>
				) : isSuccess ? (
					message
				) : (
					"Submit"
				)}
			</button>
		</form>
	);
};

export default InquiryForm;
