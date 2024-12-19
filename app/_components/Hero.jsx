import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";

function Hero() {
  return (
    // bg-[url('/grid.svg')]
    <section className=" h-[500px] bg-[url('/grid.svg')]">
      <div className="mx-auto max-w-screen-xl z-30 px-4 pt-32 lg:flex  ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Create your Form
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              In Seconds Not in Hours{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            Generate, publish and share your form right away with AI. Dive into
            insightful results, charts and analytics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* <img src='/grid.svg' className=' absolute w-full h-[400px] '/> */}
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-56 ">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>

            <p className="mt-4 text-gray-300">
              Get started in just a few simple steps! Create your form,
              customize it to your needs, and share it with your audience. Once
              shared, responses are collected in real-time, and you can analyze
              the data to make informed decisions effortlessly.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <AtomIcon className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Write promot for your form
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Provide a clear and concise prompt that guides users on how to
                fill out your form effectively. Include details about the
                purpose of the form and any specific information you need from
                the user. A well-written prompt ensures accurate and relevant
                submissions.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Edit className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Edit Your form{" "}
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Use this form to update the information or settings you
                previously provided. Make the necessary changes to fields like
                personal details, preferences, or configurations. Ensure that
                all the required fields are completed accurately before
                submitting.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Share2 className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Share & Start Accepting Responses
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Once your form is ready, share it with your audience using a
                link, email, or social media. Start collecting responses
                instantly and review them in real-time to gain valuable insights
                or take necessary actions based on the submissions.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/sign-in"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
