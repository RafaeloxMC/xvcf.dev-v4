import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

const year = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className="row-start-3 flex gap-4 flex-col flex-wrap items-center justify-center w-full text-white">
			<p>My projects and services</p>
			<div className="flex flex-row w-full h-full items-center justify-center gap-6 row-start-3">
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://link.xvcf.dev/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLink aria-hidden width={16} height={16} />
					LiNK
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://dcos.xvcf.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					dcOS
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://github.com/RafaeloxMC/xvcf.dev-v4"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Source
				</Link>
			</div>
			<p className="text-xs">
				© {year} - Made by{" "}
				<Link
					className="hover:underline hover:underline-offset-4"
					href="https://xvcf.dev"
				>
					@xvcf
				</Link>{" "}
				-{" "}
				<Link
					className="hover:underline hover:underline-offset-4"
					href="mailto:root@xvcf.dev"
				>
					Contact
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
