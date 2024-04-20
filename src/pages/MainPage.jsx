import logo_black from "../assets/prana-logo-black.png";
import { Radio } from "@material-tailwind/react";
function MainPage() {
  return (
    <div>
      {/***********************************************HERO SECTION*******************************************************/}
      <main className="bg-hero-image h-dvh bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <img loading="lazy" fetchPriority="high" className="h-auto" src={logo_black} alt="" />
      </main>
      {/***********************************************PRANA INFO SECTION*******************************************************/}
      <section className="bg-hero-image2 h-dvh bg-center bg-cover bg-no-repeat flex flex-col gap-3 md:gap-16 justify-center items-center">
        <img loading="lazy" className="scale-50 md:scale-75" src={logo_black} alt="" />
        <p className="w-80 md:w-96 xl:w-[60rem] text-xs md:text-lg">
          Exploring the "new normal" post-COVID-19 era, this web-based critical
          interaction project, "Prana-Breath," delves into our evolved
          relationship with air and breath. Amidst the pandemic's
          recontextualization of air as a communal resource and breath as a
          deeply personal act, the game navigates through urban post-pandemic
          indoor and outdoor settings. Players engage in a journey reflecting on
          air quality's impact on health and society, identifying with personas
          ranging fromSleeper to Guardian. Participants are exposed to scenarios
          that challenge their perceptions and urge them to reflect and take
          action, redefining their relationship with the air they breathe.
        </p>
      </section>
      {/***********************************************QUESTION 1 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-2 md:py-5 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            You wake up feeling groggy and slightly out of sorts despite having
            slept well.
          </b>
          <b>What is your immediate reaction?</b>
        </div>
      </section>
      {/*********************************************** ANSWER 1 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-2 md:py-5 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-2 md:py-16 backdrop-blur-sm bg-white/40 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <Radio name="type" id="sleeper" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper">
                I shrug it off as just a bad morning; things like this happen
                and it's probably nothing serious.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snoozer" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer">
                I'm concerned but feel too overwhelmed to deal with it right
                now, hoping it'll pass soon.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker">
                I start researching possible causes for feeling unwell in the
                morning and ways to improve my well-being.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator">
                I consider creating a gadget that helps track health signals
                while sleeping to prevent future issues.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint">
                I decide to advocate for better lifestyle habits within my
                community to enhance overall well-being.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist">
                I review my evening routine and plan regular checks to maintain
                a healthy living environment.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary">
                I dream of a future where everyone's living spaces are optimized
                for health and propose this idea online.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="guardian" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="guardian">
                I check if my family members are experiencing similar feelings
                and consider ways to ensure our home supports our health.
              </label>
            </div>
          </div>
        </div>
      </section>
      {/***********************************************QUESTION 2 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-2 md:py-5  bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            As the day progresses, you notice that you’re feeling unusually
            fatigued and your concentration is waning. Despite having a normal
            workload, you find it challenging to stay focused.
          </b>
          <b>What is your immediate reaction?</b>
        </div>
      </section>
      {/*********************************************** ANSWER 2 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-2 md:py-5 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-3 md:py-16 backdrop-blur-sm bg-white/30 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Radio name="type" id="sleeper2" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper2">
                I decide it's just one of those days where I’m not at my best
                and do nothing about it, assuming it’ll pass.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snoozer2" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer2">
                I recognize something might be off but tell myself I just need
                to get through the day and rest tonight.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker2" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker2">
                I take a break to assess what might be affecting me and look up
                ways to boost energy and focus naturally.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator2" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator2">
                I start brainstorming a personal health monitoring tool that
                could alert me when my stats indicate fatigue.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint2" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint2">
                I use this opportunity to promote workplace wellness and suggest
                a midday group wellness activity to my peers.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist2" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist2">
                I evaluate my recent sleep patterns and daily habits to identify
                any changes that might be impacting my focus
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary2" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary2">
                I imagine integrating an environment adaptive system into
                workspaces that optimizes conditions for health and
                productivity."
              </label>
            </div>
          </div>
        </div>
      </section>
      {/***********************************************QUESTION 3 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-2 md:py-5  bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            After several days, you start experiencing consistent headaches and
            occasional dizziness, which you suspect might be related to your
            environment.
          </b>
          <b>How do you respond to these recurring symptoms?</b>
        </div>
      </section>
      {/*********************************************** ANSWER 3 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-3 md:py-16 backdrop-blur-sm bg-white/30 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Radio name="type" id="sleeper3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper3">
                I convince myself it's probably stress or lack of sleep and
                avoid thinking it could be something in my environment.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snoozer3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer3">
                I acknowledge that something might be wrong, but feel too
                stressed to tackle the issue directly, hoping it resolves
                itself.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker3">
                I start documenting my symptoms and environmental conditions,
                planning to discuss them with a healthcare provider.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator3">
                I experiment with changes to my immediate surroundings to see if
                there's any improvement in my symptoms.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint3">
                I organize a meeting to discuss environmental health at work and
                advocate for regular health and safety audits
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist3">
                I look into more ergonomic and health-supportive adjustments for
                my workspace, considering expert advice.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary3">
                I envision a holistic health management system that integrates
                environmental sensors with personal health devices
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="guardian3" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="guardian3">
                I ensure that everyone in my vicinity is aware of potential
                symptoms and encourage them to monitor their health.
              </label>
            </div>
          </div>
        </div>
      </section>
      {/***********************************************QUESTION 4 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7  bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            As the symptoms like headaches and occasional dizziness persist, you
            start to reflect more deeply on their potential causes and impacts
            on your daily life. Before taking any action, you consider how this
            situation affects your mood, productivity, and interactions.
          </b>
          <b>What are your thoughts during this introspection?</b>
        </div>
      </section>
      {/*********************************************** ANSWER 4 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-3 md:py-16 backdrop-blur-sm bg-white/30 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Radio name="type" id="sleeper4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper4">
                I think these symptoms are just random fluctuations in my
                health. It’s nothing serious, probably just stress or bad luck.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snoozer4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer4">
                I’m starting to worry there might be a reason for feeling this
                way, but it’s probably too complicated to figure out.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker4">
                I ponder whether my lifestyle or environment might be
                influencing these symptoms. I’m compiling a list of changes and
                patterns to discuss with a professional.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator4">
                I wonder if there’s a way to use technology to track these
                symptoms better. Could a new gadget help me understand what’s
                triggering them?
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint4">
                These symptoms are a wake-up call. How many others are suffering
                silently? I feel urged to raise awareness about potential unseen
                health threats.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist4">
                I’m evaluating how these symptoms are affecting my work and
                personal life. It might be time to look at some data and
                possibly consult with experts soon.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary4">
                I reflect on the broader implications of such health issues.
                Could we live in a world where environmental health is
                seamlessly integrated into our daily lives?
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="guardian4" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="guardian4">
                I’m concerned about how these symptoms might affect not just me
                but also those around me, especially the vulnerable. I need to
                keep an eye on my family and friends too.
              </label>
            </div>
          </div>
        </div>
      </section>
      {/***********************************************QUESTION 5 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7  bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            After reflecting on your persistent symptoms, you become curious
            about their potential causes and decide to explore further. You
            encounter various sources linking these health issues to air
            quality. As you sift through articles, blogs, and social media
            discussions,
          </b>
          <b>how do you assess and react to this specific information?</b>
        </div>
      </section>
      {/*********************************************** ANSWER 5 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-3 md:py-16 backdrop-blur-sm bg-white/30 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Radio name="type" id="sleeper5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper5">
                I briefly consider the air quality articles but remain
                skeptical, preferring to believe it's just seasonal allergies or
                something similar.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snoozer5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer5">
                I acknowledge the links to air quality might be real, but feel
                too overwhelmed to dive deeper and hope the situation improves
                on its own.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker5">
                I delve into scientific research and data on air quality
                impacts, eager to understand the nuances and how I might protect
                myself better.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator5">
                Intrigued by the connection to air quality, I start
                conceptualizing a device that could monitor indoor air and alert
                to harmful changes.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint5">
                I become an advocate for clean air, using my platforms to
                educate others about the importance of good air quality and its
                impact on health.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist5">
                I sit through the most reliable sources to find actionable steps
                that can be taken to improve air quality in my home and
                workplace.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary5">
                Seeing the broader implications of air quality, I start
                formulating ideas for systemic changes that could ensure cleaner
                air for future generations.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="guardian5" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="guardian5">
                Concerned especially for the vulnerable, I gather all reliable
                information on how to mitigate poor air quality effects and
                share these resources with the community.
              </label>
            </div>
          </div>
        </div>
      </section>
      {/***********************************************QUESTION 6 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            Equipped with a newfound understanding of the impacts of air
            quality, you begin to notice the distinct differences between the
            air you share with others and your personal breathing space. Indoor
            air control seems crucial, yet the outdoor air, laden with pollen,
            also affects your personal breath and overall well-being.
            Considering the shared nature of air and the intimate aspect of
            breath,
          </b>
          <b>how do you process and respond to this information?</b>
        </div>
      </section>
      {/*********************************************** ANSWER 6 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-3 md:py-16 backdrop-blur-sm bg-white/30 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Radio name="type" id="sleeper6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper6">
                I acknowledge there might be a difference, but I don't see it as
                something that affects me personally enough to warrant action.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snoozer6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer6">
                I see the importance but feel powerless to change anything about
                the air quality, both indoors and outdoors.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker6">
                I dive deeper into studies about indoor air purification and the
                effects of outdoor allergens to fully understand how both affect
                our health distinctly.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator6">
                Inspired, I start designing a dual-function device that can
                optimize indoor air quality while alerting to high outdoor
                pollen levels.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint6">
                Motivated by the community impact, I initiate a public health
                campaign to raise awareness about the critical need for both
                personal and communal air quality management.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist6">
                I begin comparing different methods to manage indoor air quality
                and start a local initiative to plant more trees to naturally
                filter the outdoor air.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary6">
                I conceptualize a new urban design model that integrates
                advanced air purification technology with green living spaces to
                harmonize indoor and outdoor air quality.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="guardian6" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="guardian6">
                Concerned especially about vulnerable groups, I develop
                educational programs on managing indoor environments for schools
                and senior centers, while advocating for better pollen control
                in public spaces.
              </label>
            </div>
          </div>
        </div>
      </section>
      {/***********************************************QUESTION 7 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7   bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            After understanding the impact of air quality on your health, you
            decide to take personal actions to improve the air you breathe in
            your immediate surroundings.
          </b>
          <b>
            What steps do you take to ensure your own space supports your health
            and well-being?
          </b>
        </div>
      </section>
      {/*********************************************** ANSWER 7 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-3 md:py-16 backdrop-blur-sm bg-white/30 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Radio name="type" id="sleeper7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper7">
                I make minimal changes, such as occasionally opening windows to
                let in fresh air, but mostly maintain my usual routine.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snoozer7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer7">
                Feeling a bit more empowered, I purchase an air purifier and
                start using hypoallergenic bedding to mitigate symptoms.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker7">
                I invest in a high-quality air purification system and regularly
                monitor my indoor air quality with smart sensors.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator7">
                I design a custom ventilation solution tailored to my home's
                specific needs, incorporating smart technology for real-time air
                quality feedback.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint7">
                While improving my own air, I also start planning how I can help
                others, beginning with sharing tips on social media about easy
                home improvements for better air quality.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist7">
                I conduct thorough research to find the most effective and
                cost-efficient air purifiers and green plants that improve
                indoor air quality.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary7">
                I explore and integrate biophilic design elements into my living
                space, enhancing air quality with both technology and natural
                solutions.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="guardian7" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="guardian7">
                I ensure my actions are safe for everyone in my household,
                particularly focusing on the needs of children and the elderly
                by choosing air quality improvements that benefit everyone’s
                health.
              </label>
            </div>
          </div>
        </div>
      </section>
      {/***********************************************QUESTION 8 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7  bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[20rem] md:w-[30rem] px-6 py-7 md:py-32 backdrop-blur-sm bg-white/30 rounded-2xl text-center flex flex-col gap-10 text-base md:text-xl font-semibold">
          <b>
            Motivated by the improvements you've seen in your personal
            environment, you now look to extend your impact to the community.
          </b>
          <b>
          What initiative do you undertake or join to help improve the
            communal air quality?
          </b>
        </div>
      </section>
      {/*********************************************** ANSWER 8 SECTION*******************************************************/}
      <section className="bg-qa-bg-image py-4 md:py-7 bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[22rem] md:w-[45rem] px-6 py-3 md:py-16 backdrop-blur-sm bg-white/30 rounded-2xl flex flex-col gap-10 text-xs md:text-base">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Radio name="type" id="sleeper8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="sleeper8">
              I attend a community meeting about local environmental issues when invited, though I mainly listen rather than actively participate.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="snooze8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="snoozer8">
              I join a local environmental group that meets occasionally to clean up parks, feeling more involved but still a bit hesitant to take on a bigger role.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="seeker8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="seeker8">
              I organize a series of workshops at the local library to educate people about air quality management at home and in the community.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="innovator8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="innovator8">
              I collaborate with local businesses to develop community-wide air monitoring systems that provide real-time data to all residents.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="saint8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="saint8">
              I spearhead a campaign for new local regulations on industrial emissions and organize community rallies to support cleaner air laws.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="realist8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="realist8">
              I partner with city planners to implement more green spaces and promote urban tree planting as practical steps toward improving air quality.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="visionary8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="visionary8">
              I propose an innovative city-wide project that integrates sustainable living with urban development to local government, aiming to set a benchmark for future cities.
              </label>
            </div>
            <div className="flex items-center">
              <Radio name="type" id="guardian8" ripple={true} />
              <label className="hover:cursor-pointer" htmlFor="guardian8">
              I initiate a program in schools to teach children about the importance of clean air, including practical activities they can do to make a difference.
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
