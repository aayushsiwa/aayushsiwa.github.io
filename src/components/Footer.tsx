export default function Footer() {
  return (
      <footer className="bg-lightBg dark:bg-darkBg py-20 w-full h-auto">
          <div className="max-w-[107rem] mx-auto pb-10">
              <div className="flex justify-between items-center">
                  <h3 className="text-[1.7rem] text-lightS dark:text-darkS font-bold">
                      Copyright © 2024. All rights reserved.
                  </h3>
                  <div className="flex gap-8 items-center">
                      <a
                          className="text-[2.3rem] text-white hover:scale-125 transition-transform duration-200"
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/aayush-siwach"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={30}
                              height={30}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="stroke-lightS dark:stroke-darkS hover:stroke-lightA dark:hover:stroke-darkA"
                          >
                              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                              <path d="M8 11l0 5" />
                              <path d="M8 8l0 .01" />
                              <path d="M12 16l0 -5" />
                              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                          </svg>
                      </a>
                      <a
                          className="text-[2.3rem] text-white hover:scale-125 transition-transform duration-200"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/aayushsiwa"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={30}
                              height={30}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="stroke-lightS dark:stroke-darkS hover:stroke-lightA dark:hover:stroke-darkA"
                          >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
      </footer>
  );
}
