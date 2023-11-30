import React from "react";
import { Image } from "@nextui-org/react";
import { Vspacer } from "@/components/vspacer";

export const WayWiser = () => {
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
            WayWiser is a web and mobile app that provides tools for its users
            to coordinate with a select team of people to care for their aging
            parents and/or other elders.
          </p>
          <p>
            To help combat the risk of elderly fraud and financial scams,
            WayWiser wanted to add the ability to connect to financial accounts
            so that users could monitor their elder&apos;s financial activity in
            the same environment that they coordinate other aspects of care.
          </p>
        </div>
      </div>

      <Vspacer />

      {/* WAYWISER - Known */}
      <div className="flex flex-row mx-4 sm:mx-20">
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

        {/* KNOWN DESCRIPTION */}
        <div className="px-4 sm:px-12 max-w-4xl">
          <h3 className="mb-2">Known</h3>
          <h4 className="leading-relaxed sm:leading-normal">
            The{" "}
            <span className="font-bold bg-high px-1">
              {" "}
              risk of elderly financial abuse decreases
            </span>{" "}
            when it is known that their financial accounts are actively being
            monitored.
          </h4>
        </div>
      </div>

      {/* LINE SPACER - EMPTY - NO MARGINS */}
      <Vspacer />

      {/* WAYWISER - Proposed */}
      <div className="flex flex-row mx-4 sm:mx-20 scroll-mt-7">
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

        {/* PROPOSED DESCRIPTION */}
        <div className="px-4 sm:px-12 max-w-4xl">
          <h3 className="mb-2">Proposed</h3>
          <h4 className="leading-relaxed sm:leading-normal">
            Allow users to connect their elder&apos;s financial accounts to
            Waywiser, so that
            <span className="font-bold bg-high px-1">
              financial activity can be viewed and monitored directly in the
              WayWiser app.
            </span>
          </h4>
        </div>
      </div>

      {/* LINE SPACER - EMPTY - NO MARGINS */}
      <Vspacer />

      {/* WAYWISER - Proposed thumbnails */}
      <div className="flex flex-row max-w-8xl mx-4 sm:mx-20">
        {/* LINE SPACER */}
        <div className="shrink-0 grid grid-cols-3 w-10 sm:w-12 place-items-center">
          <div className=""></div>
          <div className="w-px min-h-full bg-slate-300"></div>
          <div className=""></div>
        </div>

        <div className="flex flex-row lg:max-w-8xl max-w-5xl px-7">
          <div className="pb-16">
            <div className="grid grid-cols-4 gap-4 md:gap-8 auto-rows-max">
              <div className="text-center">
                <h5 className="hidden sm:block">
                  Connect financial
                  <br />
                  account to WayWiser
                </h5>
                <h5 className="sm:hidden">Connect</h5>
              </div>
              <div className="text-center">
                <h5 className="hidden sm:block">
                  Monitor finances
                  <br />
                  in WayWiser
                </h5>
                <h5 className="sm:hidden">Monitor</h5>
              </div>
              <div className="text-center">
                <h5 className="hidden sm:block">
                  Set alert
                  <br />
                  notifications
                </h5>
                <h5 className="sm:hidden">Notify</h5>
              </div>
              <div className="text-center">
                <h5 className="hidden sm:block">
                  Share alerts, balances,
                  <br />
                  or transactions
                </h5>
                <h5 className="sm:hidden">Share</h5>
              </div>

              {/* *** Connect *** */}
              <div className="flex place-content-center">
                <Image
                  src="/waywiser_Connect.png"
                  width={179}
                  height={343}
                  className="rounded-none"
                  alt="Thumbnail sketch of Connecting a financial account to WayWiser using Plaid"
                />
              </div>
              {/* *** Monitor *** */}
              <div className="flex place-content-center">
                <Image
                  src="/waywiser_Monitor.png"
                  width={179}
                  height={343}
                  className="rounded-none"
                  alt="Thumbnail sketch of monitoring multiple financial accounts in WayWiser"
                />
              </div>
              {/* *** Notifications *** */}
              <div className="flex object-center">
                <Image
                  src="/waywiser_Setalerts.png"
                  width={179}
                  height={343}
                  className="rounded-none"
                  alt="Thumbnail sketch of setting financial alert notifications"
                />
              </div>

              {/* *** Share *** */}
              <div className="flex object-center">
                <Image
                  src="/waywiser_Share.png"
                  width={179}
                  height={343}
                  className="rounded-none"
                  alt="Thumbnail sketch of sharing an alert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END - Proposed thumbnails */}

      {/* WAYWISER - Designs */}
      <div className="flex flex-nowrap min-w-full max-w-full overflow-x-scroll scroll-mt-7 scroll-pl-20 snap-x">
        <section className="flex flex-nowrap bg-bggray py-16 2xl:py-20 shrink-0">
          {/* Designs - Onboarding */}
          <div className="flex flex-col ml-20 sm:ml-40 pr-10 snap-start">
            <div className="flex mb-2">
              <h3>Onboarding</h3>
            </div>

            <div className="flex flex-row">
              {/* Establish connection */}
              <div className="flex flex-col pr-40">
                <h4 className="mb-4">Establish connection</h4>
                <div className="sm:h-16 max-w-xs sm:max-w-md mb-10 2xl:mb-20">
                  <h5>
                    Plaid is used to establish a secure connection between the
                    financial institution and WayWiser.
                  </h5>
                </div>
                <div className="flex space-x-10 shrink-0 drop-shadow-xl">
                  <Image
                    src="/waywiser-onboarding_1.png"
                    className="w-44"
                    alt="Design of a screen from Plaid showing how WayWiser will use Plaid to securely link to the users bank account"
                  />
                  <Image
                    src="/waywiser-onboarding_2.png"
                    className="w-44"
                    alt="Design of the success screen in Plaid when the bank has been connected to WayWiser"
                  />
                  <Image
                    src="/waywiser-onboarding_3.png"
                    className="w-44"
                    alt="Design of the success screen in WayWiser when financial accounts are successfully connected. It shows multiple accounts connected to WayWiser and their respective balances."
                  />
                </div>
              </div>
              {/* END Establish connection */}

              {/* Set Permissions */}
              <div className="flex flex-col snap-start">
                <div className="flex flex-col pr-10 max-w-sm sm:max-w-md">
                  <h4 className="mb-4">Set permissions</h4>
                  <div className="sm:h-16 max-w-xs sm:max-w-md mb-10 2xl:mb-20">
                    <h5>
                      The user can manage who has read-access to the financial
                      accounts.
                    </h5>
                  </div>
                  <div className="flex space-x-10 self-center drop-shadow-xl">
                    <Image
                      src="/waywiser-onboarding_4.png"
                      className="w-44 object-center"
                      alt="An onboarding screen that lists names of people that the user can check and uncheck to give access permission into the financial feature."
                    />
                  </div>
                  <div className="max-w-xs sm:max-w-md mt-10 sm:mt-16">
                    <p className="text-sm text-slate-600 leading-normal pb-2">
                      Individual permissions are usually established when the
                      user is first setting up their WayWiser account, but it is
                      important to reiterate their selection here, and give them
                      the chance to review and edit.
                    </p>
                    <p className="text-sm text-slate-600 leading-normal">
                      It saves the user from doing the guesswork, or having to
                      leave the flow to see who has access.
                    </p>
                  </div>
                </div>
              </div>
              {/* END - Permissions */}
            </div>
          </div>
          {/* END - Onboarding content */}

          {/* Designs - Financial monitoring */}
          <div className="flex flex-col ml-20 sm:ml-40 pr-10 snap-start">
            <div className="flex mb-2">
              <h3>Financial monitoring</h3>
            </div>
            <div className="flex flex-row">
              {/* Monitor multiple accounts */}
              <div className="flex flex-col pr-40">
                <h4 className="mb-4">Monitor multiple accounts</h4>
                <div className="sm:h-16 max-w-xs sm:max-w-md mb-10 2xl:mb-20">
                  <h5>
                    Users can connect multiple financial accounts from different
                    financial institutions.
                  </h5>
                </div>
                <div className="flex space-x-10 shrink-0 self-center drop-shadow-xl">
                  <Image
                    src="/waywiser-monitoring_1.png"
                    className="w-44"
                    alt="The main financial dashboard of WayWiser, the user can see their connected bank accounts and respective balances. There is a button to add more accounts, and a list of the most recent transactions that have caused an alert."
                  />
                </div>
                <div className="max-w-xs sm:max-w-md mt-10 sm:mt-16">
                  <p className="text-sm text-slate-600 leading-normal">
                    Aggregating different accounts eliminates the need to log in
                    to multiple banking apps to check balances or activity.
                    It&apos;s as simple as at-a-glance monitoring.
                  </p>
                </div>
              </div>
              {/* END Monitor multiple accounts */}

              {/* View transaction activity */}
              <div className="flex flex-row snap-start">
                <div className="flex flex-col pr-10">
                  <h4 className="mb-4">View transaction activity & details</h4>
                  <div className="sm:h-16 max-w-xs sm:max-w-xl mb-10 2xl:mb-20">
                    <h5>
                      For each financial account, the user can view the balance,
                      transaction activity, and transaction details.
                    </h5>
                  </div>
                  <div className="flex space-x-10 self-center drop-shadow-xl">
                    <Image
                      src="/waywiser-monitoring_2.png"
                      className="w-44 object-center"
                      alt="An individual bank account view. The bank name, last four account numbers, and current balance is listed at the top. The user can view the three most recent transactions with an option to see more. They can switch to an alerts history tab."
                    />
                    <Image
                      src="/waywiser-monitoring_3.png"
                      className="w-44 object-center"
                      alt="A detailed view of a single transaction. The name of the vendor is at the top, then listed below is the transaction amount, the account used, location and date and time. There are two buttons at the bottom one to send these details as a message or to post it to the Circle."
                    />
                  </div>
                  <div className="max-w-xs sm:max-w-lg mt-10 sm:mt-16">
                    <p className="text-sm text-slate-600 leading-normal">
                      It&apos;s important to preserve the details of any
                      transaction activity to give the user as much context as
                      possible around the transaction. It is also important to
                      format the data in a way that&apos;s easy to read and scan
                      through.
                    </p>
                  </div>
                </div>
              </div>
              {/* END View transaction activity */}
            </div>
          </div>
          {/* END - Financial monitoring */}

          {/* Designs - Alert notifications */}
          <div className="flex flex-col ml-20 sm:ml-40 pr-10 snap-start">
            <div className="flex mb-2">
              <h3>Alert notifications</h3>
            </div>

            <div className="flex flex-row">
              {/* Set alerts */}
              <div className="flex flex-col pr-40">
                <h4 className="mb-4">Set alerts</h4>
                <div className="sm:h-16 max-w-xs sm:max-w-lg mb-10 2xl:mb-20">
                  <h5>
                    Notifications on financial activity can be delivered via
                    multiple channels, allowing the user to passively monitor
                    the account.
                  </h5>
                </div>
                <div className="flex space-x-10 shrink-0 self-center drop-shadow-xl">
                  <Image
                    src="/waywiser-monitoring_1.png"
                    className="w-44"
                    alt="The main financial dashboard of WayWiser, the user can see their connected bank accounts and respective balances. There is a list of the most recent transactions that have caused an alert."
                  />
                  <Image
                    src="/waywiser-setalerts.png"
                    className="w-44 object-center"
                    alt="The alert settings page of WayWiser where users can customize what triggers an alert notification. The user can get alerted when there is a change in balance, when there is a transaction, and where there is a cash withdrawal. The user can specify the amount for each alert and how they want to receive the notification(email, text, push)."
                  />
                </div>
                <div className="max-w-xs sm:max-w-lg mt-10 sm:mt-16">
                  <p className="text-sm text-slate-600 leading-normal">
                    The initial phase of the alerting feature offers basic
                    settings around account behavior. Considering the type of
                    transactional data that can be passed through from Plaid,
                    this can evolve into much more complex alerting, such as
                    location-based alerts or alerts based on anomalies in
                    elderly&apos;s habits.
                  </p>
                </div>
              </div>
              {/* END Set alerts */}
            </div>
          </div>
          {/* END - Alert notifications */}

          {/* Designs - Share activity */}
          <div className="flex flex-col ml-20 sm:ml-40 pr-10 snap-start">
            <div className="flex mb-2">
              <h3>Share activity</h3>
            </div>

            <div className="flex flex-row">
              {/* Coordinate with the group */}
              <div className="flex flex-col pr-40">
                <h4 className="mb-4">Coordinate with the group</h4>
                <div className="h-20 max-w-xs sm:max-w-xl mb-10 2xl:mb-20">
                  <h5 className="hidden sm:block">
                    When a (primary) user creates a WayWiser account, they
                    create a “Trusted Circle” that consists of team members
                    (secondary users). This goal of this team is to care for a
                    select elder–usually an aging parent. This Circle is a
                    private and secure group.
                  </h5>
                  <h5 className="sm:hidden">
                    This goal of the WayWiser Circle is to care for a select
                    elder, usually an aging parent. This Circle is a private and
                    secure group.
                  </h5>
                </div>
                <div className="flex flex-col space-x-10 shrink-0 self-center">
                  <div className="flex space-x-10 shrink-0 drop-shadow-xl">
                    <div className="hidden sm:block group h-[332px] w-[320px] relative">
                      <div
                        className="
                          h-[332px] w-[320px] 
                          bg-center bg-no-repeat bg-cover
                          bg-[url('/waywiser-share_1.png')]"
                      >
                        <div className="opacity-0">
                          <Image
                            src="/waywiser-share_1-mobile.png"
                            alt="Four circles representing the participants of a Trusted Circle. The elder is in the middle, surrounded by a primary user and two secondary users. A dotted line in a circle connects the primary and secondary users."
                          />
                        </div>
                      </div>
                      <div
                        className="
                          h-[332px] w-[320px] 
                          bg-center bg-no-repeat bg-cover
                          transition-opacity  
                          group-hover:opacity-100 opacity-0 
                          duration-700 ease-in-out 
                          absolute top-0 left-0 
                          bg-[url('/waywiser-share_1-hover.png')]"
                      ></div>
                    </div>
                    <div className="sm:hidden">
                      <Image
                        src="/waywiser-share_1-mobile.png"
                        className="w-80"
                        alt="Four circles representing the participants of a Trusted Circle. The elder is in the middle, surrounded by a primary user and two secondary users. A dotted line in a circle connects the primary and secondary users."
                      />
                    </div>
                  </div>
                </div>
                <div className="max-w-xs sm:max-w-xl mt-20">
                  <p className="hidden sm:block text-sm text-slate-600 leading-normal">
                    WayWiser provides this circle with tools to care for the
                    elder: they can coordinate schedules and appointments
                    through the WayWiser calendar; they can store important
                    documents like an insurance card or doctor&apos;s notes;
                    most importantly, conversations around care can be had on
                    the app-they don&apos;t have to get lost in different
                    threads of text messages. The activity feed used to share
                    updates to the group also provides a historical log of the
                    care the elder has received.
                  </p>
                  <p className="sm:hidden text-sm text-slate-600 leading-normal">
                    WayWiser provides this circle with tools to care for their
                    elder. They can coordinate schedules & appointments with the
                    calendar, store important documents, and keep important
                    conversations about care all in one place.
                  </p>
                </div>
              </div>
              {/* END Coordinate with the group */}

              {/* Share alerts */}
              <div className="flex flex-col pr-40 snap-start">
                <h4 className="mb-4">Share alerts</h4>
                <div className="sm:h-16 max-w-xs sm:max-w-2xl mb-10 2xl:mb-16">
                  <h5>
                    Financial alerts can be shared with the Trusted Circle
                  </h5>
                </div>
                <div className="flex space-x-10 shrink-0 self-center drop-shadow-xl">
                  <Image
                    src="/waywiser-share_2.png"
                    className="w-44"
                    alt="The main financial dashboard of WayWiser with a list of the most recent transactions that have caused an alert."
                  />
                  <Image
                    src="/waywiser-share_3.png"
                    className="w-44"
                    alt="A detailed view of an alert transaction. The trigger of the alert, Large Transaction is at the top, followed by the amount, then the account used, the vendor, location, and date and time. There is a big share button at the bottom."
                  />
                  <Image
                    src="/waywiser-share_4.png"
                    className="w-44"
                    alt="A view of the user sharing the alert transaction. The user can choose who to share it with, with those with financial access or to everyone in the Circle. There is a list of users it is visible to and a comment box. The user has written Does anyone have any idea what dad bought at Walmart? as the comment."
                  />
                  <Image
                    src="/waywiser-share_5.png"
                    className="w-44"
                    alt="A view of the activity feed with the alert transaction posted. There is a comment from the user above the alert details. The post shows the alert trigger of Large Transaction, the amount, account, vendor, location, and date and time. There is a successfully posted message at the bottom."
                  />
                </div>
                <div className="max-w-xs sm:max-w-xl mt-10 sm:mt-16">
                  <p className="text-sm text-slate-600 leading-normal pb-2">
                    A big part of monitoring for scams is to be able to react
                    quickly to suspicious activity. When the user receives a
                    financial alert in the WayWiser app, they can share that
                    alert to the Trusted Circle.
                  </p>
                  <p className="text-sm text-slate-600 leading-normal">
                    The shared alert highlights the important information of
                    what and when(and if possible, where) to quickly set the
                    context of the questionable activity.
                  </p>
                </div>
              </div>
              {/* END Share alerts */}

              {/* Share balances & transactions */}
              <div className="flex flex-col pr-40 snap-start">
                <h4 className="mb-4">Share balances & transactions</h4>
                <div className="sm:h-16 max-w-xs sm:max-w-xl mb-10 2xl:mb-20">
                  <h5>
                    Other financial activity such as balances and transactions
                    can also be shared with the Trusted Circle
                  </h5>
                </div>
                <div className="flex space-x-10 shrink-0 self-center drop-shadow-xl">
                  <Image
                    src="/waywiser-share_6.png"
                    className="w-44"
                    alt="An individual bank account view. The three most recent transactions are listed each showing vendor name, date of transaction, and amount transacted."
                  />
                  <Image
                    src="/waywiser-share_8.png"
                    className="w-44"
                    alt="A detailed view of a single transaction. The name of the vendor is at the top, then listed below is the transaction amount, the account used, location and date and time. There are two buttons at the bottom one to send these details as a message or to post it to the Circle."
                  />
                  <Image
                    src="/waywiser-share_7.png"
                    className="w-44"
                    alt="A view of the user sharing the transaction. The user can choose who to share it with, with those with financial access or to everyone in the Circle. There is a list of users it is visible to and a comment box. The user has written Hey @Mary, thanks for taking Dad to the grocery store. Can you comment back with the receipt? Thank you! as the comment."
                  />
                  <Image
                    src="/waywiser-share_9.png"
                    className="w-44"
                    alt="A view of the activity feed with the transaction posted. There is a comment from the user above the transaction details. The post shows the vendor, the amount, account used, location, and date and time. There is a successfully posted message at the bottom."
                  />
                </div>
                <div className="max-w-xs sm:max-w-xl mt-10 sm:mt-16">
                  <p className="text-sm text-slate-600 leading-normal pb-2">
                    Going beyond monitoring for fraud, the ability to share
                    balances & transactions provides the user a convenient way
                    to keep track of finances amongst Circle members.
                  </p>
                  <p className="text-sm text-slate-600 leading-normal">
                    Conversations around a specific transaction activity can be
                    kept in its own dedicated thread, with the ability to add
                    photos, such as of receipts, to provide context.
                  </p>
                </div>
              </div>
              {/* END Share alerts */}
            </div>
          </div>
          {/* END - Alert notifications */}
        </section>
      </div>
      {/* END - Designs */}
    </section>
  );
};
