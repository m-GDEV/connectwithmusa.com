import { useState } from "react";
import { Modal, MantineProvider, Tabs } from "@mantine/core";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";

export default function CustomModal(project) {
  const [open, setOpen] = useState(false);

  const projectArray = Object.values(project);

  return (
    <>
      {projectArray.map((array) => (
        <div key={array.title}>
          <MantineProvider theme={{ colorScheme: "dark" }}>
            <Modal
              opened={open}
              onClose={() => setOpen(false)}
              centered
              size="100%"
            >
              <div className="flex lg:flex-row flex-col font-dm-sans text-xl bg-g-light rounded-xl px-4 py-8 place-items-center">
                <div className="flex flex-col w-full text-center mx-4">
                  <h1 className="font-rock-salt text-4xl text-h-brightgreen mb-1">
                    {array.title}
                  </h1>
                  <p className="font-dm-mono text-t-darkyellow italic tracking-[0.285em] uppercase text-xs sm:text-base mb-4">
                    {array.category}
                  </p>
                  <p className="text-base sm:text-lg text-slate-500">
                    {array.description}
                  </p>
                  <div className="flex flex-row mt-4">
                    <a
                      className="inline-flex justify-center rounded-[20px] mb-4 w-9/12 mx-auto font-dm-sans py-1 px-2 sm:px-0 xl:px-12 
                    bg-g-light uppercase mr-2 
                      underline xl:no-underline text-blue-500 xl:text-white text-xs mt-auto xl:text-sm
                      hover:scale-105 transition-all hover:z-10 duration-500 border-[3px] border-br-lightpurple"
                      href={array.link}
                      target="_blank"
                    >
                      Source Code
                      <ExternalLinkIcon className="ml-1 w-5 text-blue-500 hidden xl:block" />
                    </a>
                    <a
                      className="inline-flex justify-center rounded-[20px] mb-4 w-9/12 mx-auto font-dm-sans py-1 xl:px-12 bg-g-light border-[3px] border-br-lightpurple
                      uppercase hover:scale-105 hover:z-10 transition-all duration-500
                      underline xl:no-underline text-blue-500 xl:text-white text-xs place-items-center xl:text-sm"
                      href={array.demoLink}
                      target="_blank"
                    >
                      Demo
                      <ExternalLinkIcon className="ml-1 w-5 text-blue-500 hidden xl:block" />
                    </a>
                  </div>
                </div>

                <div className="w-full min-h-[25rem] max-h-[25rem] overflow-y-scroll">
                  <Tabs className="sticky">
                    <Tabs.Tab label="More Info">
                      <ReactMarkdown
                        children={array.longDescription}
                        className="post-content mr-6"
                      />
                      <div className="flex lg:justify-end">
                        <button
                          className="mt-2 mr-8 text-h-brightgreen px-2 py-1 border-[3px] border-br-lightpurple rounded-xl text-lg
                         transition-all duration-500 hover:scale-105"
                        >
                          <a href={array.link} target="_blank">
                            Read More
                          </a>
                        </button>
                      </div>
                    </Tabs.Tab>
                    <Tabs.Tab label="Screenshot">
                      <img
                        src={array.image}
                        loading="lazy"
                        className="rounded-xl w-[95%] mt-5 mx-auto"
                      />
                    </Tabs.Tab>
                  </Tabs>
                </div>
              </div>
            </Modal>
          </MantineProvider>

          <button
            className="inline-flex mt-auto justify-center rounded-[20px] mb-4 font-dm-sans py-1 px-12 text-sm bg-b-darkpurple uppercase
            hover:scale-110 transition-all duration-500 w-full"
            onClick={() => setOpen(true)}
          >
            Learn More &nbsp;
            <ExternalLinkIcon className="w-5 text-blue-500" />
          </button>
        </div>
      ))}
    </>
  );
}
