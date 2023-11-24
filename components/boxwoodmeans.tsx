import React from "react";
import { Image } from "@nextui-org/react";
import { Vspacer } from "@/components/vspacer";

export const BoxwoodMeans = () => {
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
            The Boxwood Means Valuation Estimator is an online tool that
            assesses the commercial value of a selected property. The user
            inputs the address of the property, and in return they receive a
            valuation estimate and a summary.
          </p>
        </div>
      </div>

      <Vspacer />

      {/* Boxwood Means - Flow overview */}
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
          <h3 className="mb-2">Flow overview</h3>
          <h4 className="leading-relaxed sm:leading-normal">
            Though the flow is simple, the complexity lies in the amount of data
            that is returned to the user.{" "}
            <span className="font-bold bg-high px-1">
              How do we give the user granular control, while allowing them to
              parse through information easily and efficiently?
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
                  src="/boxwoodmeans_Find.png"
                  height={100}
                  className="rounded-none"
                  alt="Find subject property"
                />
              </div>
              {/* *** Confirm *** */}
              <div className="flex place-content-center">
                <Image
                  src="/boxwoodmeans_Confirm.png"
                  height={100}
                  className="rounded-none"
                  alt="Confirm subject property"
                />
              </div>
              {/* *** View *** */}
              <div className="flex object-center">
                <Image
                  src="/boxwoodmeans_View.png"
                  height={100}
                  className="rounded-none"
                  alt="View report"
                />
              </div>

              {/* *** Add *** */}
              <div className="flex object-center grow-0">
                <Image
                  src="/boxwoodmeans_Add.png"
                  height={100}
                  className="rounded-none"
                  alt="Add or adjust comps"
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
              <h3>High-fidelity wireframes</h3>
            </div>

            <div className="flex flex-row">
              {/* Begin search */}
              <div className="flex flex-col pr-40">
                <h4 className="mb-6">Begin search</h4>
                <div className="h-8 sm:h-16 max-w-xs sm:max-w-xl md:max-w-3xl mb-6 2xl:mb-20 2xl:mb-20">
                  <h5>
                    The user provides the address that they want to get a
                    valuation for.
                    <span className="hidden sm:block">
                      The search yields the subject property, along with other
                      similar listings.
                    </span>
                  </h5>
                </div>
                <div className="flex space-x-10 shrink-0 drop-shadow-xl">
                  <Image
                    src="/boxwoodmeans_search_1.png"
                    className="
                                                rounded-none                                                
                                                max-w-xs
                                                sm:max-w-2xl
                                                "
                    alt="The homepage of the valuation tool. The headline reads, 'Commercial property values. Instantly.' The user can input an address and zip code and select property type and subtype."
                  />
                  <Image
                    src="/boxwoodmeans_search_2.png"
                    className="
                                                rounded-none
                                                max-w-xs                                            
                                                sm:max-w-2xl
                                                "
                    alt="After searching an address, a list of properties is shown on the left. A map is on the right showing the location of the properties listed."
                  />
                </div>
                <div className="max-w-xs sm:max-w-xl md:max-w-3xl mt-8 2xl:mt-16">
                  <p className="text-sm text-slate-600 leading-normal">
                    The valuation tool results in a lot of property listings:
                    each property is known by it&apos;s address and is
                    accompanied by many characteristics. It was important from
                    the beginning to set a standard design of how a property is
                    to be displayed, with address as a clear title, and only
                    with a select number of characteristics visible. An
                    accompanying map is intentionally set side-by-side to give
                    the user a quick understanding of where these properties are
                    located in relation to each other, and to the given
                    neighborhood.
                  </p>
                </div>
              </div>
              {/* END Begin search */}

              {/* Confirm */}
              <div className="flex flex-col snap-start pr-40">
                <div className="flex flex-col pr-10">
                  <h4 className="mb-6">Confirm or edit property details</h4>
                  <div className="h-16 max-w-xs sm:max-w-xl mb-6 2xl:mb-20">
                    <h5>
                      The user reviews the property details and can edit as
                      needed.
                    </h5>
                  </div>
                  <div className="flex space-x-10 drop-shadow-xl">
                    <Image
                      src="/boxwoodmeans_confirm_1.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="The user confirms the property details. The headline reads, 'Confirm or edit details for 144 Brevard Ct'. There is a map on the top left quadrant showing the address location, below it is an image of the property. The right half shows the property details that the user can edit."
                    />
                  </div>
                </div>
              </div>
              {/* END - Confirm */}

              {/* View report */}
              <div className="flex flex-col snap-start pr-40">
                <div className="flex flex-col pr-10">
                  <h4 className="mb-6">View report</h4>
                  <div className="h-16 max-w-xs sm:max-w-xl mb-6 2xl:mb-20">
                    <h5>
                      The summary is an overview of how the valuation estimate
                      was reached and which comparable properties were used.
                    </h5>
                  </div>
                  <div className="flex space-x-10 drop-shadow-xl">
                    <Image
                      src="/boxwoodmeans-view_1.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="The valuation report has the valuation amount listed at the top. There are two graphs below it. There are property details listed above a map, and a list of comparable properties to the right. There are tabs at the top to switch views between valuation summary, market data, and sales comps."
                    />
                    <Image
                      src="/boxwoodmeans-view_2.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="A view of the market data page, the valuation amount is static at the top, and are visuals showing market metrics, and a graph with yearly rate trends."
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
                  <h4 className="mb-6">Adjust sales comps</h4>
                  <div className="h-16 max-w-xs sm:max-w-xl md:max-w-3xl mb-6 2xl:mb-20">
                    <h5>
                      The user is shown which comparable properties were used in
                      the valuation, and can adjust the different
                      characteristics and weighting of each to adjust the
                      valuation.
                    </h5>
                  </div>
                  <div className="flex space-x-10 drop-shadow-xl">
                    <Image
                      src="/boxwoodmeans-adjust_1.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="A map view of the sales comps used in the valuation report. The valuation amount listed at the top. There are property details listed above a map, and a list of comparable properties to the right. The weighting of the comparable properties can be edited, and each property can have its details editer or it can be removed. The user can switch to a grid view of the properties."
                    />
                    <Image
                      src="/boxwoodmeans-adjust_2.png"
                      className="
                                                    rounded-none
                                                    max-w-xs                                            
                                                    sm:max-w-2xl
                                                    "
                      alt="A grid view of the sales comps used in the valuation report. The valuation amount listed at the top. There are property details listed above a map, and a list of comparable properties is shown, each in it's column. Each property detail is listed in its own row. The weighting of the comparable properties can be edited, and each property can have its details editer or it can be removed. The user can switch to a map view of the properties."
                    />
                  </div>
                  <div className="max-w-xs sm:max-w-xl md:max-w-3xl mt-8 sm:mt-20">
                    <p className="text-sm text-slate-600 leading-normal">
                      There are two views for sales comps: a map view with
                      truncated detail of each listing, and the grid view which
                      lists out every detail line-by-line. The grid view is
                      similar to how a spreadsheet is utilized, each detail sits
                      on its own line so that it can be easily compared from
                      unit to unit. The selected property is anchored on the
                      left hand side.
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
