import AnimatedText from "@/components/animated-text";
import ASCIIAnimation from "@/components/ascii-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import VideoASCIICoin from "@/components/video-ascii-coin";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex items-center flex-col m-auto max-w-6xl px-4">
			{/* ASCII Animations */}
			<div className="grid grid-cols-10 gap-8 mb-8 w-full items-center">
				<Card className="col-span-10 my-36 col-start-2">
					<CardHeader>
						<CardTitle>Fire Animation</CardTitle>
					</CardHeader>
					<CardContent>
						<ASCIIAnimation
							fps={60}
							colorOverlay={false}
							frameCount={600}
							frameFolder="frames-koi-white"
						/>
					</CardContent>
				</Card>
			</div>

            <div className="grid grid-cols-8 gap-8 mb-8 w-full items-center">
				<Card className="col-span-8 my-36 col-start-2">
					<CardHeader>
						<CardTitle>Koi Animation</CardTitle>
					</CardHeader>
					<CardContent>
						<ASCIIAnimation
							fps={60}
							colorOverlay={false}
							frameCount={600}
							frameFolder="frames-koi-diff-chars"
						/>
					</CardContent>
				</Card>
			</div>

			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
					Modern CSS Carousel
				</h1>
				<p className="text-lg text-muted-foreground mb-2">
					Pure CSS implementation with Tailwind classes
				</p>
				<Link
					className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					href={"/about"}
				>
					Go to about page →
				</Link>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Coin Animation</CardTitle>
				</CardHeader>
				<CardContent>
					<ASCIIAnimation fps={30} frameCount={60} frameFolder="frames" />
				</CardContent>
			</Card>

			{/* Features showcase */}
			<div className="w-full max-w-4xl mb-12">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					CSS Features Demonstrated
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-6 rounded-xl border">
						<h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">
							Radio Button State
						</h3>
						<p className="text-sm text-muted-foreground">
							CSS-only state management using :checked pseudo-class
						</p>
					</div>
					<div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border">
						<h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">
							CSS Transforms
						</h3>
						<p className="text-sm text-muted-foreground">
							Smooth transitions with translateX and scale transforms
						</p>
					</div>
					<div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border">
						<h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
							CSS Animations
						</h3>
						<p className="text-sm text-muted-foreground">
							Keyframe animations for progress bars and floating elements
						</p>
					</div>
					<div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border">
						<h3 className="font-semibold mb-2 text-green-700 dark:text-green-300">
							Responsive Design
						</h3>
						<p className="text-sm text-muted-foreground">
							Mobile-first approach with Tailwind breakpoints
						</p>
					</div>
					<div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-xl border">
						<h3 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">
							Modern Pseudo-classes
						</h3>
						<p className="text-sm text-muted-foreground">
							:hover, :focus, and peer selectors for interaction
						</p>
					</div>
					<div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 p-6 rounded-xl border">
						<h3 className="font-semibold mb-2 text-pink-700 dark:text-pink-300">
							CSS Grid & Flexbox
						</h3>
						<p className="text-sm text-muted-foreground">
							Modern layout techniques with perfect alignment
						</p>
					</div>
				</div>
			</div>

			{/* Other animations */}
			<div className="w-full max-w-3xl">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Text Animation Example
				</h2>
				<AnimatedText text="This demonstrates how far CSS has evolved. From simple styling to complex interactive components, modern CSS with frameworks like Tailwind enables developers to create sophisticated user interfaces without JavaScript for core functionality." />
			</div>
		</main>
	);
}
