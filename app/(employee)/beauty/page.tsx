"use client";
import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    return (
        <div className="max-w-6xl mx-auto mt-30 px-4 py-12 flex flex-col md:flex-row gap-10 md:gap-16">

            {/* Left Column: Image and Back Button */}
            <div className="w-full md:w-[350px] shrink-0 flex flex-col">
                <div className="relative w-full h-[450px] bg-gray-100">
                    <Image
                        src="/employee/beauty.png"
                        alt="beauty"
                        fill
                        className="object-cover"
                    />
                </div>

                <button
                    onClick={() => router.back()}
                    className="mt-6 flex items-center gap-3 text-black hover:opacity-60 transition-opacity w-fit"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span className="text-sm font-medium tracking-wide uppercase">Back</span>
                </button>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex-1 mt-4 md:mt-0">

                {/* Name */}
                <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                    Beauty Kumari
                </h1>

                <div className="w-12 h-[2px] bg-black mb-6"></div>

                {/* Role */}
                <h2 className="text-xl md:text-2xl font-bold text-black mb-8">
                    Systems & Operations Manager
                </h2>

                {/* Biography Paragraphs */}
                <div className="space-y-6 text-neutral-700 font-light leading-relaxed text-base md:text-lg text-justify md:text-left">
                    <p>
                        Beauty works on the firm’s IT solutions, supporting the development and management of digital systems that improve workflow, data organization, and project coordination. She helps implement technology that streamlines internal processes and enhances collaboration within the team.
                    </p>
                    <p>
                        Along with managing IT-related tasks, she also oversees project coordination and employee management, ensuring smooth communication and efficient execution across different stages of work.
                    </p>
                </div>

            </div>
        </div>
    );
}