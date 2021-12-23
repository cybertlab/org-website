import React from 'react';

// @ts-ignore
import { Timeline, Event } from 'react-timeline-scribble';

const Roadmap = () => {
  return (
    <div className={`py-12 bg-background`} id="roadmap">
      <div className="lg:text-center">
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Roadmap
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Timeline>
            <Event
              interval={'2022 Q1'}
              title={'Green Freak on Mars'}
              subtitle={'NFT'}
            >
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Event>
            <Event
              interval={'2022 Q2'}
              title={'Cybert Lab Airdrop'}
              subtitle={'$Cybert DAO'}
            >
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Event>
          </Timeline>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
