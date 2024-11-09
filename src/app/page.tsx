import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { Suspense } from "react";
import { FaLink } from "react-icons/fa";

const words = ["@xvcf", "a developer", "(not) a pro gamer", "hackerman", "german"];

const year = new Date().getFullYear();

export default function Home() {
	return (
		<Suspense fallback={
			<div className="absolute top-0 left-0 w-screen h-screen object-cover z-10 opacity-25 justify-items-center">
				<p>Loading...</p>
			</div>
		}>
			<div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-figtree)] bg-gradient-to-t from-black to-transparent select-none">
				<Suspense fallback={<div className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-75"></div>}>
					<video src="/bg.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-75" />
				</Suspense>
				<main className="flex flex-col gap-8 row-start-2 items-start sm:items-start mt-auto">
					<h1 className="lg:text-7xl text-4xl text-wrap font-[family-name:var(--font-figtree-black)]">
						Hey, I&apos;m <FlipWords words={words} />
					</h1>
					<p className="text-lg text-wrap font-[weight:var(--font-geist-mono)]">Welcome to the new version of my website!</p>
				</main>
				<footer className="row-start-3 flex gap-4 flex-col flex-wrap items-center justify-center w-full">
					<p>My projects and services</p>
					<div className="flex flex-row w-full h-full items-center justify-center gap-6 row-start-3">
						<a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://link.xvcf.dev/" target="_blank" rel="noopener noreferrer">
							<FaLink aria-hidden width={16} height={16} />
							LiNK
						</a>
						<a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://dcos.xvcf.dev" target="_blank" rel="noopener noreferrer">
							<Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
							dcOS
						</a>
						<a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://github.com/RafaeloxMC/xvcf.dev-v4" target="_blank" rel="noopener noreferrer">
							<Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
							Source
						</a>
					</div>
					<p className="text-xs">
						© {year} - Made by{" "}
						<a className="hover:underline hover:underline-offset-4" href="https://xvcf.dev">
							@xvcf
						</a>{" "}
						-{" "}
						<a className="hover:underline hover:underline-offset-4" href="mailto:root@xvcf.dev">
							Contact
						</a>
					</p>
				</footer>
			</div>
		</Suspense>
	);
}
