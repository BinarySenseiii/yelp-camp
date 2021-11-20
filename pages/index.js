import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { suggestions } from '../data'
import { Button } from '../components'

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Yelpcamp - Home</title>
            </Head>
            <div className="grid grid-cols-2 min-h-screen w-full">
                <div className="px-10">
                    <Image
                        src="/assets/Logo.svg"
                        alt="logo not found"
                        height={150}
                        width={150}
                    />
                    <div className="relative -mt-8">
                        <h1 className="text-6xl font-bold text-gray-800">
                            Explore the best <br /> camps on Earth.
                        </h1>
                        <p className="mt-5 text-2xl text-primary">
                            YelpCamp is a curated list of the best camping spots
                            on <br /> Earth. Unfiltered and unbiased reviews.
                        </p>
                        <ul className="mt-5">
                            {suggestions.map(({ id, text }) => (
                                <li
                                    key={id}
                                    className="text-xl font-headings text-black flex items-center mb-2"
                                >
                                    <Image
                                        src="/assets/Checkmark.svg"
                                        alt="logo not found"
                                        height={20}
                                        width={20}
                                    />
                                    <span className="ml-4">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button
                                text="View Campgrounds"
                                path="/camp-ground"
                            />
                        </div>
                        <div className="mt-9 font-medium">
                            <h4>Partnered With</h4>
                            <div className="-mt-8 -ml-6">
                                <Image
                                    src="/assets/airbnb.svg"
                                    alt="booking not found"
                                    height={120}
                                    width={120}
                                />
                                <Image
                                    src="/assets/Booking.svg"
                                    alt="booking not found"
                                    height={120}
                                    width={120}
                                />
                                <Image
                                    src="/assets/plum-guide.svg"
                                    alt="booking not found"
                                    height={120}
                                    width={120}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative max-h-screen w-full">
                    <Image
                        src="/assets/hero-image.jpg"
                        alt="hero-img not found"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
