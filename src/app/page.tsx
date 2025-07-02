import { FlipWords } from "@/components/ui/flip-words";
import Footer from "@/components/ui/footer";
import { Suspense } from "react";

const words = [
	"@xvcf",
	"a developer",
	"hackerman",
	"from Germany",
	"a friend",
	"a bug hunter",
	"caffeine-powered",
	"probably not sleeping",
	"probably overthinking this",
	"using dark mode",
];

export default function Home() {
	return (
		<Suspense
			fallback={
				<div className="absolute top-0 left-0 w-screen h-screen object-cover z-10 opacity-25 justify-items-center">
					<p>Loading...</p>
				</div>
			}
		>
			<div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-figtree)] bg-gradient-to-t from-black to-transparent select-none">
				<Suspense
					fallback={
						<div className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-75"></div>
					}
				>
					<video
						src="/bg.mp4"
						autoPlay
						loop
						muted
						playsInline
						preload="auto"
						className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-75"
					/>
				</Suspense>
				<main className="flex flex-col gap-8 row-start-2 items-start sm:items-start mt-auto">
					<h1 className="lg:text-7xl text-4xl text-wrap font-[family-name:var(--font-figtree-black)] text-white">
						Hey, I&apos;m <FlipWords words={words} />
					</h1>
					<p className="text-lg text-wrap font-[weight:var(--font-geist-mono)] text-white">
						Just doing what I like the most :D
					</p>
				</main>
				<Footer />
			</div>
		</Suspense>
	);
}
