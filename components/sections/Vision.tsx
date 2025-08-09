"use client";

import { ShoppingBag, Sparkles, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const visionCards = [
	{
		title: 'Shop Local Drops',
		subtitle: 'Real Designers. Real Stories.',
		description:
			'Soon, you\'ll shop exclusive pieces from bold local creators near you — no copy-paste trends.',
		icon: ShoppingBag,
		color: 'bg-primary/10',
	},
	{
		title: 'AI-Styled Looks',
		subtitle: 'Outfits Picked to Match Your Vibe.',
		description:
			'Our upcoming AI stylist will help you discover pieces that just click — without endless scrolling.',
		icon: Sparkles,
		color: 'bg-primary/15',
	},
	{
		title: 'Launch Your Label',
		subtitle: 'Designers, This Is Your Platform.',
		description:
			'We\'re opening space for emerging fashion brands to grow, shine, and get seen.',
		icon: Rocket,
		color: 'bg-primary/20',
	},
];

const Vision = () => {
	const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
	const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

	return (
		<section
			id="vision"
			className="section bg-grayLight relative overflow-hidden py-20"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(11,60,93,0.1),transparent_70%)]" />

			<div className="container relative">
				<div
					ref={sectionRef}
					className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-up ${
						sectionVisible ? 'visible' : ''
					}`}
				>
					<span className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4 md:mb-6 px-6 py-3 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
						Labees's Vision
					</span>

					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Empowering Local Fashion for Everyone
					</h2>
					<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
						Discover pieces that matter: styled with culture, curated with intent,
						and personalized through AI to fit you perfectly.
					</p>
				</div>

				<div
					ref={cardsRef}
					className={`grid grid-cols-1 md:grid-cols-3 gap-8 relative ${
						cardsVisible ? 'visible' : ''
					}`}
				>
					{visionCards.map((card, index) => (
						<div
							key={index}
							className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 transform transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg hover:border-primary/40"
						>
							<div className="bg-primary/10 backdrop-blur-sm p-4 rounded-full inline-block mb-6 shadow-md">
								<card.icon className="h-8 w-8 text-primary" />
							</div>

							<h3 className="text-2xl font-bold mb-2">{card.title}</h3>
							<p className="text-lg font-medium text-primary/90 mb-4">
								{card.subtitle}
							</p>
							<p className="text-gray-600 leading-relaxed mb-6">
								{card.description}
							</p>
						</div>
					))}
				</div>

				{/* Footer CTA */}
				{/* Removed Join the Waitlist Now button */}
			</div>
		</section>
	);
};

export default Vision;
