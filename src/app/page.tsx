export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20 pt-24 md:px-10 lg:px-16">
        <section className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Future-Ready Indian Marketing Agency Blueprint
            </span>
            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
              Aurora Pulse Collective — India&apos;s hybrid storytelling &
              intelligence-led marketing studio built for 2025 and beyond.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              A business strategy marrying regional cultural intuition, AI-led
              experimentation, and performance ownership. Designed to help
              challenger brands, high-growth startups, and progressive legacy
              businesses capture India’s next billion digital consumers.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Signature Angle",
                  detail:
                    "Story-commerce journeys blending vernacular creators, AI copilots, and shoppable micro-experiences.",
                },
                {
                  title: "North Star Metric",
                  detail:
                    "Client growth multiplier: 3x media efficiency or 25% revenue lift within 9 months.",
                },
                {
                  title: "Launch Geography",
                  detail:
                    "South & West India urban micro-markets with high D2C density and tier-2 spillover.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold text-emerald-200">
              Immediate Priorities (0–90 days)
            </h2>
            <ol className="mt-6 space-y-4 text-sm text-slate-200">
              <li>
                <span className="font-semibold text-emerald-300">01 ·</span>{" "}
                Validate 50 high-fit accounts via primary interviews with D2C,
                BFSI, and premium hospitality decision makers.
              </li>
              <li>
                <span className="font-semibold text-emerald-300">02 ·</span>{" "}
                Assemble core triad: brand strategist, growth scientist, and
                creator partnerships lead (full-time + fractional).
              </li>
              <li>
                <span className="font-semibold text-emerald-300">03 ·</span>{" "}
                Build Aurora Lab — modular AI + data stack for insight mining,
                campaign simulations, and multilingual content automation.
              </li>
            </ol>
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">Business Concept & Vision</h2>
            <p className="max-w-3xl text-slate-300">
              Aurora Pulse Collective positions itself as a hybrid storytelling
              and intelligence studio that choreographs hyperlocal influence
              with measurable growth. The agency promises deep cultural insight
              + predictive experimentation + accountable media operations.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
              <h3 className="text-lg font-semibold text-emerald-200">
                Vision Pillars
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-emerald-100">
                <li>
                  Immersive storytelling built on regional archetypes sourced
                  from on-ground insight cells and AI ethnographic scanning.
                </li>
                <li>
                  Creator-commerce fusion: co-create limited drops and live
                  shopping experiences syncing influencers and local retailers.
                </li>
                <li>
                  Accountability engine: unified growth dashboards combining
                  brand health, community sentiment, and revenue impact.
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Strategic Differentiators
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
                <li>
                  Proprietary Culture Heatmaps identifying vernacular keywords,
                  rituals, and emerging micro-communities for each state.
                </li>
                <li>
                  AI co-creation pods for creative drafts, synthetic campaign
                  previews, and rapid multilingual adaptation.
                </li>
                <li>
                  Performance-linked retainers with transparent risk-reward
                  sharing and embedded revenue operations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">Market Research & Gap Analysis</h2>
            <p className="max-w-3xl text-slate-300">
              India’s marketing landscape is crowded yet siloed. Aurora Pulse is
              engineered to connect gaps between traditional agencies, creator
              networks, and analytics firms.
            </p>
          </header>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-1 text-sm md:grid-cols-4">
              {[
                {
                  label: "Gap",
                  details: [
                    "Fragmented regional storytelling",
                    "Creator engagement plateau post-launch",
                    "Limited AI adoption beyond ads automation",
                    "Opaque pricing + low accountability",
                  ],
                },
                {
                  label: "Impact on Brands",
                  details: [
                    "National campaigns feel generic in tier-2+ cities.",
                    "Short-lived buzz without sustainable community building.",
                    "Slow experimentation and missed cultural trends.",
                    "Marketing viewed as cost centre versus growth partner.",
                  ],
                },
                {
                  label: "Opportunity",
                  details: [
                    "Regional narrative labs cross-referencing ethnography + social listening.",
                    "Creator CRM to orchestrate recurring collabs and commerce drops.",
                    "AI-assisted strategy sprints and rapid prototype testing.",
                    "Hybrid retainers that blend base fee, success fee, and IP licensing.",
                  ],
                },
                {
                  label: "Validating Signals",
                  details: [
                    "D2C and BFSI funding for Bharat-focussed growth teams.",
                    "UPI-driven commerce maturity enabling shoppable storytelling.",
                    "Brands seeking multilingual martech stacks post-2024 elections.",
                    "Global investors favouring accountable marketing spend.",
                  ],
                },
              ].map((column) => (
                <div key={column.label} className="border-t border-white/5 p-6 md:border-l md:first:border-l-0 md:first:border-t-0">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
                    {column.label}
                  </h3>
                  <ul className="mt-4 space-y-3 leading-relaxed text-slate-200">
                    {column.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">Business Model & Revenue Streams</h2>
            <p className="max-w-3xl text-slate-300">
              Blend annuity-style retainers with upside participation and modular
              productised services to stabilise cash flow while scaling value.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Strategic Retainer (40% revenue)",
                points: [
                  "Monthly ₹3–6L base fee covering insight pods, brand strategy, CXO reporting.",
                  "Quarterly narrative labs, roadmap recalibration, and Aurora dashboards.",
                  "Commitment: 12-month contracts with quarterly business reviews.",
                ],
              },
              {
                title: "Performance Pods (35% revenue)",
                points: [
                  "Success fee (5–10% of attributable revenue / media savings).",
                  "Managed growth loops: influencer commerce, referral flywheels, loyalty stacks.",
                  "Custom AI automation (chat journeys, lead grading) billed as add-on.",
                ],
              },
              {
                title: "Productised IP (25% revenue)",
                points: [
                  "Aurora Culture Heatmaps subscription for category benchmarking.",
                  "Creator CRM access with revenue share on co-created product drops.",
                  "Workshops & executive immersions on AI storytelling, priced per cohort.",
                ],
              },
            ].map((model) => (
              <div
                key={model.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-200">
                  {model.title}
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
                  {model.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">Legal Setup & Registrations (India)</h2>
            <p className="max-w-3xl text-slate-300">
              Sequence compliance and IP protection early to accelerate corporate
              onboarding and enterprise trust.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Entity & Compliance Flow (Weeks 0–6)
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-200">
                <li>
                  Register as Private Limited in Karnataka for easier VC access
                  and talent incentives; secure CIN & PAN (₹15K).
                </li>
                <li>
                  Apply for GST (mandatory once turnover &gt; ₹20L; recommended
                  from day one) and open current account with digital banking
                  partner.
                </li>
                <li>
                  MSME (Udyam) registration to unlock government tenders,
                  concessional loans, and fintech offers.
                </li>
                <li>
                  Trademark “Aurora Pulse Collective” + logo across class 35, 41,
                  42 (₹12K government fee + legal retainer).
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
              <h3 className="text-lg font-semibold text-emerald-200">
                Operational Governance (Weeks 4–12)
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-emerald-100">
                <li>
                  Draft Master Service Agreement, NDA, and IP assignment ensuring
                  shared-risk retainers are enforceable.
                </li>
                <li>
                  Implement data protection policy mapped to DPDP Act & GDPR-lite
                  for multinational clients.
                </li>
                <li>
                  Setup ESOP pool (10%) for core team with 4-year vesting to
                  attract growth talent.
                </li>
                <li>
                  Register with relevant influencer marketing self-regulatory
                  bodies (ASCI code of ethics adherence).
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">
              Initial Investment & Cost Breakdown (First 12 Months)
            </h2>
            <p className="max-w-3xl text-slate-300">
              Lean capital deployment focussed on insight infrastructure, core
              squad, and experience design.
            </p>
          </header>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-1 text-sm md:grid-cols-5">
              {[
                ["Human Capital (core team salaries)", "₹72L", "Brand strategist, growth scientist, creator partnerships lead, AI engineer (mix full-time + fractional)."],
                ["Insight & AI Stack", "₹24L", "Data subscriptions, AI tooling (OpenAI, Jasper, ElevenLabs), custom dashboard build, cloud credits."],
                ["Workspace & Ops", "₹9L", "Hybrid studio space (flex membership), hardware, compliance, accounting, legal retainers."],
                ["Marketing & BD", "₹12L", "Flagship case study production, industry events, category reports, outbound tooling."],
                ["Working Capital & Contingency", "₹18L", "3-month runway buffer, experimentation fund for pilot campaigns."],
              ].map(([label, cost, note]) => (
                <div
                  key={label}
                  className="border-t border-white/5 p-6 md:border-l md:first:border-l-0 md:first:border-t-0"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
                    {label}
                  </h3>
                  <p className="mt-4 text-lg font-semibold text-slate-100">
                    {cost}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Projected break-even: Month 10 with five anchor retainers (₹4L avg)
            plus two performance pods hitting 6% success fee threshold.
          </p>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">Service Portfolio & Innovation Tracks</h2>
            <p className="max-w-3xl text-slate-300">
              Build modular, tech-enabled services that elevate strategic impact
              while keeping execution nimble.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Culture & Narrative Lab",
                bullets: [
                  "Regional rituals mapping, semiotics, and social listening fused via AI ethnography.",
                  "Quarterly brand myth-making workshops aligning founders, CXOs, and creators.",
                  "Narrative prototyping using volumetric moodboards, voice clones, and AR previews.",
                ],
              },
              {
                title: "Growth & Commerce Pods",
                bullets: [
                  "Influencer + retailer fusion campaigns with live commerce, UPI-linked CTAs.",
                  "Lifecycle automation: WhatsApp flows, loyalty gamification, predictive upsell journeys.",
                  "Revenue command centre benchmarking CAC/LTV, retention, and regional adoption.",
                ],
              },
              {
                title: "Earned & Reputation Engine",
                bullets: [
                  "Smart PR using data-backed storylines and AI press kit assembly in regional languages.",
                  "Thought leadership sprints with founders via synthetic interviews and ghostwritten essays.",
                  "Crisis radar blending sentiment tracking, misinformation sweeps, and rapid response playbooks.",
                ],
              },
              {
                title: "Content Automation Studio",
                bullets: [
                  "Multilingual video, audio, and micro-copy generation at scale with human QA layers.",
                  "Shoppable content microsites and interactive narratives built on no-code stacks.",
                  "Closed-loop feedback applying engagement learnings into next creative sprint.",
                ],
              },
              {
                title: "Innovation Ventures Desk",
                bullets: [
                  "Co-create IP with creators (podcasts, docuseries, product capsules) with revenue sharing.",
                  "Run brand hackathons with incubators and universities for fresh concept pipelines.",
                  "Launch Aurora Labs Demo Day each quarter to showcase experiments to clients.",
                ],
              },
              {
                title: "People & Community Programs",
                bullets: [
                  "Creator guild with tiered benefits, training, and shared analytics dashboard.",
                  "Brand leadership circles for CMOs, growth heads, and regional sales managers.",
                  "Internal AI academy upskilling staff on promptcraft, automation, and ethics.",
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-200">
                  {service.title}
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">Tools & Tech Stack</h2>
            <p className="max-w-3xl text-slate-300">
              Curated mix of AI, analytics, collaboration, and automation tools
              to power insight-led execution.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                category: "Intelligence & Research",
                items: [
                  "Anthropic Claude & OpenAI GPT-4o for culture synthesis and creative ideation.",
                  "Listen First, Brandwatch, and Sprinklr for multilingual social listening.",
                  "Statista, Tracxn, Razorpay FTX for market data and category benchmarks.",
                  "In-house Aurora Heatmap (Notion + Supabase) capturing regional trend signals.",
                ],
              },
              {
                category: "Creation & Experience",
                items: [
                  "Runway, Pika Labs, and Kaiber for AI video; Midjourney & Adobe Firefly for visual design.",
                  "Webflow, Typedream, and Relume for rapid microsite deployment.",
                  "Descript, ElevenLabs, and Murf for voice and audio localisation.",
                  "Fjord & Figma variables for interactive storytelling boards.",
                ],
              },
              {
                category: "Growth Ops & Automation",
                items: [
                  "HubSpot + Zapier + Make for lead orchestration and revenue attribution.",
                  "CleverTap, MoEngage for lifecycle automation; Interakt for WhatsApp commerce.",
                  "Tableau & Looker Studio for real-time executive dashboards.",
                  "Harpa AI agents for competitor tracking and campaign QA.",
                ],
              },
            ].map((stack) => (
              <div
                key={stack.category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-200">
                  {stack.category}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
                  {stack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold">Execution Roadmap</h2>
            <p className="max-w-3xl text-slate-300">
              Layered milestones to build credibility, prove value, and scale
              intelligently over 18 months.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Phase 01 · Foundation (0–3 Months)",
                steps: [
                  "Close three paid pilot projects with D2C fashion, fintech, and hospitality brands.",
                  "Publish flagship report: “India’s Creator-Commerce Playbook 2025”.",
                  "Launch Aurora Lab beta dashboard and onboard first five creators into guild.",
                ],
              },
              {
                phase: "Phase 02 · Traction (3–9 Months)",
                steps: [
                  "Secure five 12-month retainers; implement success-fee SLAs.",
                  "Host regional storytelling salons in Bengaluru, Mumbai, and Hyderabad.",
                  "Productise AI automation templates (WhatsApp workflows, lead scoring) as paid add-ons.",
                ],
              },
              {
                phase: "Phase 03 · Scale (9–18 Months)",
                steps: [
                  "Expand to Delhi NCR; onboard sector experts in BFSI and health-tech.",
                  "Launch venture desk for co-created IP; sign two revenue-sharing partnerships.",
                  "Invest in martech integrations and explore SEA expansion alliances.",
                ],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-200">
                  {phase.phase}
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
                  {phase.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-emerald-200">
                Go-to-Market Flywheel
              </h2>
              <ol className="space-y-4 text-sm leading-relaxed text-slate-200">
                <li>
                  <span className="font-semibold text-emerald-300">
                    1. Build Proof
                  </span>{" "}
                  — Launch with two hero case studies (creator-commerce + AI
                  automation), capture testimonials, convert into immersive
                  micro-sites.
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">
                    2. Capture Demand
                  </span>{" "}
                  — Monthly “Aurora Signals” newsletter with region-wise insights
                  and FOMO-driven invites to private labs.
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">
                    3. Scale Relationships
                  </span>{" "}
                  — Launch executive cohort for CMOs/growth leaders; embed
                  community-generated briefs into service roadmap.
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">
                    4. Monetise IP
                  </span>{" "}
                  — Offer Aurora Heatmaps + automation templates via subscription
                  and license co-created content IP to OTT/brand partners.
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
              <h3 className="text-lg font-semibold text-emerald-100">
                Key Success Metrics
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-emerald-100">
                <li>Client Net Revenue Retention &gt; 130% by month 18.</li>
                <li>Creator guild engagement (active contributors) &gt; 65%.</li>
                <li>Campaign experimentation cycle reduced to 10 days.</li>
                <li>Thought leadership share of voice in top 5 marketing media.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
