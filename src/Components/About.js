import React from "react";
import image from "./images/nurse1-removebg-preview.png";

function About() {
  return (
    <div>
      <h1 className="about-us">About Us</h1>
      <div className="about">
        <div className="cards">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
            <a href="#">
              <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div class="p-5 ">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Who are we?
                </h5>
                <p>
                  Our team of writers and editors have many years of experience
                  in academic writing.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="cards">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
            <a href="#">
              <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div class="p-5 ">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Our Vision
                </h5>
                <p>
                  Our team of writers and editors have many years of experience
                  in academic writing.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="cards">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
            <a href="#">
              <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div class="p-5 ">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Our Mission
                </h5>
                <p>
                  Our team of writers and editors have many years of experience
                  in academic writing.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="cards">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
            <a href="#">
              <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div class="p-5 ">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Our Services
                </h5>
                <p>
                  Our team of writers and editors have many years of experience
                  in academic writing.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
