import React from "react";
import { Image } from "@nextui-org/react";
import { Vspacer } from "@/components/vspacer";

export const DeltaNYC = () => {
  return (
    <section className="flex flex-col justify-start items-start w-full sm:mt-2">
      <div className="flex flex-row max-w-3xl mx-4 sm:mx-20">
        {/* LINE SPACER */}
        <div className="shrink-0 grid grid-cols-3 w-10 sm:w-12 place-items-center">
          <div className=""></div>
          <div className="w-px min-h-full bg-slate-300"></div>
          <div className=""></div>
        </div>

        <div className="px-4 sm:px-12">
          <p className="mb-4">
            Delta Nonstop NYC was a six week promotional campaign where
            participants could win a grand prize. There were a variety of ways
            to participate and accumulate points including a real-life scavenger
            hunt, weekly online games and contests, and Foursquare check-ins and
            Twitter retweets.
          </p>
        </div>
      </div>

      <Vspacer />

      {/* Delta Nonstop NYC overview */}
      <div className="flex flex-row max-w-4xl mx-4 sm:mx-20 scroll-mt-7">
        {/* LINE SPACER */}
        <div className="shrink-0 grid grid-cols-1 w-10 sm:w-12 justify-items-center">
          <div className="self-center">
            <Image
              src="/dott.png"
              className="
                                rounded-none
                                max-w-none"
              width={23}
              alt="point"
            />
          </div>
        </div>

        {/* Flove overview description */}
        <div className="px-4 sm:px-12">
          <h3 className="mb-2">How to participate</h3>
          <h4 className="leading-relaxed sm:leading-normal">
            There were a variety of ways to participate in the campaign, and
            much of the content was time-gated, so{" "}
            <span className="font-bold bg-high px-1">
              the challenge was to make it easy for users to understand what
              activities were available when, and how to play.
            </span>
          </h4>
        </div>
      </div>

      {/* LINE SPACER - EMPTY - NO MARGINS */}
      <div className="flex flex-row max-w-5xl mx-4 sm:mx-20">
        <div className="grid grid-cols-3 w-10 sm:w-12 place-items-center">
          <div className=""></div>
          <div className="w-px h-8 sm:h-10 bg-slate-300"></div>
          <div className=""></div>
        </div>
        <div className="">{/* EMPTY */}</div>
      </div>

      {/* Boxwood Means - Flow chart */}
      <div className="flex flex-row max-w-5xl mx-4 sm:mx-20">
        <div className="shrink-0 grid grid-cols-3 w-10 sm:w-12 place-items-center">
          <div className=""></div>
          <div className="w-px min-h-full bg-slate-300"></div>
          <div className=""></div>
        </div>

        <div className="flex flex-row  pl-4 sm:pl-12">
          <div className="w-full pb-16">
            <div className="flex flex-row">
              {/* *** Find *** */}
              <div className="flex place-content-center">
                <Image
                  src="/delta_flow.png"
                  className="rounded-none sm:w-4/5"
                  alt="The flow chart of the campaign site. 'Campaign microsite' is centered at the top and has arrows coming from it going to three different boxes: Weekly games, Red Coat scavenger hunt and social media participation."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END - Flow overview */}

      {/* DESIGNS */}
      <div className="flex flex-nowrap min-w-full max-w-full overflow-x-scroll scroll-mt-7 scroll-pl-20 snap-x">
        <section className="flex flex-nowrap bg-bggray py-16 2xl:py-20 shrink-0">
          {/* High-fidelity wireframes */}
          <div className="flex flex-col ml-20 sm:ml-40 pr-10 snap-start">
            <div className="flex mb-2">
              <h3>Designs</h3>
            </div>

            <div className="flex flex-row">
              {/* Begin search */}
              <div className="flex flex-col pr-40">
                <h4 className="mb-6">Campaign microsite</h4>
                <div className="h-24 sm:h-16 max-w-xs sm:max-w-xl md:max-w-3xl mb-6 2xl:mb-20 2xl:mb-20">
                  <h5>
                    The campaign microsite was an important hub for participants
                    to keep track of their progress and to receive updates of
                    the next event.
                  </h5>
                </div>
                <div className="flex space-x-10 shrink-0 drop-shadow-xl">
                  <Image
                    src="/delta-microsite_1.png"
                    className="
                                                rounded-none                                                
                                                max-w-xs
                                                sm:max-w-2xl
                                                "
                    alt="The microsite homepage for the campaight. There is a menu at the top and four buttons on the left. In the middle is the campaign name along with the most recent event happening. The user can click on the button to go to the 'mission event.' Below that is an activity ticker showing the most recent activity from participating users. There is a cityscape of NYC as the background."
                  />
                  <Image
                    src="/delta-microsite_2.png"
                    className="
                                                rounded-none
                                                max-w-xs                                            
                                                sm:max-w-2xl
                                                "
                    alt="A modal pop up of 'How to Play, 3 ways to win.' Each way to win has it's own corresponding icon and underneat is the title and truncated description. The user can click 'more' to read more about each way to win."
                  />
                </div>
                <div className="max-w-xs sm:max-w-xl md:max-w-3xl mt-8 2xl:mt-16">
                  <p className="text-sm text-slate-600 leading-normal">
                    The microsite mimicked a dashboard of a video game. The user
                    name, score, and ranking was always visible at the top. Most
                    importantly, a “How to Play” and “FAQ” link was also
                    prominently visible and easily accessible. The main content
                    in the middle highlighted the latest activity that the user
                    could participate in.
                  </p>
                </div>
              </div>
              {/* END Begin search */}

              {/* Confirm */}
              <div className="flex flex-col snap-start pr-40">
                <div className="flex flex-col pr-10">
                  <h4 className="mb-6">Play weekly mini-games</h4>
                  <div className="h-24 sm:h-16 max-w-xs sm:max-w-2xl mb-6 2xl:mb-20">
                    <h5>
                      Each mini-game had the same flow: overview of how to play
                      and win points, overview of the game UI, the game itself,
                      and the results.
                    </h5>
                  </div>
                  <div className="flex space-x-10 drop-shadow-xl">
                    <div className="flex-col">
                      <Image
                        src="/delta-minigame_1.png"
                        className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                        alt="An overview screen of a minigame. The name of the game is the headline, with a summary on how to play. There is a button to 'Start playing' or the user can see current winners. At the bottom are details of what to know and how to gain opints with this game."
                      />
                      <div className="max-w-xs sm:max-w-lg mt-8 2xl:mt-16">
                        <p className="text-sm text-slate-600 leading-normal">
                          Each mini-game consists of an opening summary that
                          lists how to play, details of when the game starts and
                          ends, and how many points the user can earn. Some
                          games had daily winners, others had only one winner
                          for the week, so it was important to call out how
                          often users could participate.
                        </p>
                      </div>
                    </div>
                    <div className="flex-col">
                      <Image
                        src="/delta-minigame_2.png"
                        className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                        alt="An overview of the game, 'Around the World NYC or Not' user interface. There is an image of the statue of liberty in the background, there are controls at the bottom, that has tool tips to highlight their function/use. "
                      />
                      <div className="max-w-xs sm:max-w-lg mt-8 2xl:mt-16">
                        <p className="text-sm text-slate-600 leading-normal">
                          This introduction of the game UI was a very important
                          part of the mini-game flow. It gives the user
                          confidence and reduces the confusion once they begin
                          playing. They are already prepared as soon as the game
                          starts-they know where to click and what to pay
                          attention to.
                        </p>
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/delta-minigame_3.png"
                        className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                        alt="In-game screenshot of the game 'Around the World, NYC or Not' There is an image in the background of a courtyard surrounded by arches. The controls show this image is number 3 of 10 and a timer. The user can choose to click NYC or Rio de Janeiro."
                      />
                    </div>
                    <div className="flex-col">
                      <Image
                        src="/delta-minigame_4.png"
                        className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                        alt="The results of the game. The result is at the top with how many are correct and the time it took. The left side lists the day's top 5 scores with their avatar, username, score and time. The user can share their score to social media and there is a message at the bottom telling details of when to expect the winner announcement and to come back and play again."
                      />
                      <div className="max-w-xs sm:max-w-lg mt-8 2xl:mt-16">
                        <p className="text-sm text-slate-600 leading-normal">
                          The results lists the user&apos;s score prominently,
                          alongside the top scores on the leaderboard so that
                          they know where they place.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END - Confirm */}

              {/* View report */}
              <div className="flex flex-col snap-start pr-40">
                <div className="flex flex-col pr-10">
                  <h4 className="mb-6">Find the Red Coat</h4>
                  <div className="h-24 sm:h-16 max-w-xs sm:max-w-2xl md:max-w-3xl mb-6 2xl:mb-20">
                    <h5>
                      Each week, a Delta Red Coat(customer service rep) hid
                      somewhere in NYC. Users received three clues that led to
                      their location. The first user to find the Red Coat won
                      two grand prize tickets.
                    </h5>
                  </div>
                  <div className="flex space-x-10 drop-shadow-xl">
                    <Image
                      src="/delta-redcoat_1.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="There is a map view of NYC in the background. The headline reads, 'Find the red Coat' with a description of how to play. There is a section the prompts the user to 'Answer to unlock the clues' All three clues are revealed."
                    />
                    <Image
                      src="/delta-redcoat_2.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="An photo of the Delta Red Coat out on a fall day in NYC with two users talking to her. Everyone is bundled up."
                    />
                  </div>
                  <div className="max-w-xs sm:max-w-xl md:max-w-3xl mt-8 2xl:mt-20">
                    <p className="text-sm text-slate-600 leading-normal">
                      Considering the large amount of data that accompanies a
                      valuation, it was very important to display the
                      information in an easily digestible way. Data
                      visualization breaks up the page and lightens the
                      information load, making the report easier to scan.
                    </p>
                  </div>
                </div>
              </div>
              {/* END - View report */}

              {/* Adjust comps */}
              <div className="flex flex-col snap-start pr-40">
                <div className="flex flex-col pr-10">
                  <h4 className="mb-6">Participate with social media</h4>
                  <div className="h-24 sm:h-16 max-w-xs sm:max-w-2xl md:max-w-3xl mb-6 2xl:mb-20">
                    <h5>
                      A quick list of how to earn points for the duration of the
                      campaign, how much the user has earned and what activities
                      they&apos;ve completed to earn those points.
                    </h5>
                  </div>
                  <div className="flex space-x-10 drop-shadow-xl">
                    <Image
                      src="/delta-social_1.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="The 'Up Your Score' section. On the left are the categories of ways the users can earn points during the campaign. On the right displays the different ways they can earn points within each category. The number of points they've received this way is at the top."
                    />
                  </div>
                  <div className="max-w-xs sm:max-w-2xl md:max-w-3xl mt-8 sm:mt-10">
                    <p className="text-sm text-slate-600 leading-normal">
                      It was important that users understood at a quick glance
                      what activities they had not yet completed. Each category
                      tab featured the number of points the user earned for that
                      category, and the incomplete activity design clearly
                      stands out.
                    </p>
                  </div>
                </div>
              </div>
              {/* END - View report */}
            </div>
          </div>
        </section>
      </div>
      {/* END - Designs */}
    </section>
  );
};
