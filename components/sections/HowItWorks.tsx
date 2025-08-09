"use client";

import { useEffect, useState } from 'react';
import { Search, Heart, Zap, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
	{
		number: "01",
		title: "Discover",
		subtitle: "Find Your Style",
		description: "Browse and get AI-powered style recommendations just for you.",
		icon: Search,
		color: "bg-[#043a5b]/10" // Deeper blue
	},
	{
		number: "02",
		title: "Connect",
		subtitle: "Meet Local Designers",
		description: "Follow your favorite creators and get notified when they release new collections.",
		icon: Heart,
		color: "bg-[#043a5b]/10" // Medium blue
	},
	{
		number: "03",
		title: "Try On",
		subtitle: "Virtual Fitting Room",
		description: "Preview outfits on your body type and get size recommendations from our AI.",
		icon: Zap,
		color: "bg-[#043a5b]/10" // Light blue
	},
	{
		number: "04",
		title: "Shop",
		subtitle: "Quick Delivery",
		description: "Easy checkout and fast delivery straight to your door, same-day in Doha.",
		icon: ShoppingBag,
		color: "bg-[#043a5b]/10" // Bright blue
	}
];

const HowItWorks = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setActiveStep((prev) => (prev + 1) % steps.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section id="how-it-works" className="section relative overflow-hidden py-20">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
			
			<div className="container relative">
				<div
					className={`text-center mb-16 transform transition-all duration-1000 ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
					}`}
				>
					<span className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4 md:mb-6 px-6 py-3 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
          The Process
        </span>
					
					<h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
					<p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Discover, Connect, Try On, and Shop - All in One Place
          </p>
				</div>

				{/* Steps Section - Horizontal */}
				<div className="hidden lg:block relative max-w-7xl mx-auto">
          <div className="flex justify-between relative px-12">
            {/* Connecting Line */}
            <div className="absolute top-10 left-[140px] right-[140px] h-[3px] bg-gradient-to-r from-[#043a5b]/20 via-[#043a5b]/40 to-[#043a5b]/20" />
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "w-[260px] relative group",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center">
                  {/* Step Number */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#043a5b] to-[#043a5b] text-white font-bold text-3xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:from-[#043a5b] group-hover:to-[#043a5b] mb-8">
                      {step.number}
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-[105px] top-[25px] w-[100px] flex items-center">
                        <div className="w-10 h-10 border-t-[3px] border-r-[3px] border-[#043a5b] transform rotate-45 group-hover:border-[#043a5b] transition-colors duration-300" />
                      </div>
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="w-full min-h-[360px] bg-white rounded-2xl p-8 border-[3px] border-[#043a5b]/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-[#043a5b]/40 group-hover:-translate-y-1">
                    <div className={`bg-gradient-to-br from-[#043a5b]/10 to-[#043a5b]/10 p-5 rounded-xl mb-6 inline-block shadow-md self-start`}>
														<step.icon className="h-10 w-10 text-[#043a5b]" strokeWidth={2.5} />
													</div>
													<div className="flex-1 flex flex-col">
										<h3 className="text-2xl font-extrabold mb-3">{step.title}</h3>
										<p className="text-primary font-semibold mb-4 text-lg">{step.subtitle}</p>
										<p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
									</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

				{/* Mobile Accordion */}
				<div className="lg:hidden space-y-4">
					{steps.map((step, index) => (
						<div
							key={index}
							className={cn(
								'bg-white rounded-xl overflow-hidden transition-all duration-300 transform',
								activeStep === index ? 'shadow-lg scale-[1.02]' : 'shadow',
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
							)}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<button
								className="w-full flex items-center p-6 text-left focus:outline-none"
								onClick={() => setActiveStep(index)}
							>
								<div
									className={cn(
										'w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300',
										activeStep === index
											? 'bg-primary text-white'
											: `${step.color} text-primary`
									)}
								>
									<step.icon className="h-6 w-6" />
								</div>
								<div>
									<h3 className="text-lg font-semibold">{step.title}</h3>
									<p
										className={cn(
											'text-gray-600 transition-all duration-300',
											activeStep === index ? 'h-auto opacity-100 mt-2' : 'h-0 opacity-0'
										)}
									>
										{step.description}
									</p>
								</div>
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
