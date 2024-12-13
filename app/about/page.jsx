'use client';
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-12 max-w-screen-xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-customBrown font-lilita">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          TINPET is a dedicated platform designed to connect individuals with homeless pets in need of loving homes. Our mission is to streamline the adoption process by helping you find the perfect match with a furry companion.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12">
        <Image
          src="/about-us-3.webp"
          alt="About TINPET"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div className="sm:text-left">
          <h2 className="text-3xl font-bold mb-4 text-customBrown font-lilita">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to create lasting, meaningful connections between pets in need of a home and loving adopters. By using a personalized, questionnaire-based matching system, we ensure that every pet finds their perfect family, and every adopter finds the pet best suited to their lifestyle.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-12 items-start space-y-12 sm:space-y-0">
        <div className="sm:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-customBrown font-lilita">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <strong>Compassion:</strong> We care deeply about the well-being of both pets and adopters, striving to create a nurturing environment for all animals.
            </li>
            <li>
              <strong>Commitment:</strong> We are dedicated to ensuring that every pet adoption is a thoughtful, lasting decision, connecting pets with families who will provide love and care for a lifetime.
            </li>
            <li>
              <strong>Inclusivity:</strong> We believe in making pet adoption accessible to all, regardless of background or experience.
            </li>
            <li>
              <strong>Transparency:</strong> We are committed to providing clear, honest information to adopters.
            </li>
            <li>
              <strong>Community:</strong> We aim to foster a community of animal lovers, pet parents, and shelters working together.
            </li>
          </ul>
        </div>

        <div className="sm:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-customBrown font-lilita">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our journey began with a simple but powerful idea: to make the pet adoption process more thoughtful and personalized. Too often, pets are adopted impulsively or without considering how well they&apos;d fit into a family&apos;s lifestyle, leading to mismatched matches and unfortunate returns.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            By combining our passion for animals with modern technology, we developed an app that uses a tailored questionnaire to match pets with the right adopters. Our team, made up of animal lovers and tech enthusiasts, works tirelessly to create a seamless experience for both pet seekers and shelters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
