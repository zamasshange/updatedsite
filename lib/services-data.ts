export type ServiceArticleSection = {
  heading: string
  content: string
}

export type ServiceItem = {
  slug: string
  title: string
  shortDescription: string
  iconKey: string
  logoSrc?: string
  color: string
  textColor: string
  bgColor: string
  deliveryTime: string
  idealFor: string[]
  deliverables: string[]
  process: string[]
  articleTitle: string
  articleIntro: string
  articleSections: ServiceArticleSection[]
  contactMessage: string
}

export const servicesData: ServiceItem[] = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Beautiful, user-centered designs from wireframes to polished interfaces that convert.",
    iconKey: "Palette",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "3 to 10 days per screen or flow",
    idealFor: ["Startups launching an MVP", "Businesses redesigning old interfaces", "Creators who want premium digital presence"],
    deliverables: ["User flow map", "Wireframes and high-fidelity screens", "Clickable prototype", "Design system style guide"],
    process: ["Discovery call and goals alignment", "Wireframing and UX structure", "Visual design exploration", "Feedback rounds and handoff"],
    articleTitle: "Design That Sells Before You Speak",
    articleIntro: "Great design is not decoration. It is strategy made visible, and every pixel has a job to do.",
    articleSections: [
      {
        heading: "How We Position Your Brand Visually",
        content: "We design around perception first. Color, spacing, typography, and hierarchy are selected to communicate trust and premium quality from the first 3 seconds."
      },
      {
        heading: "How We Improve User Behavior",
        content: "We remove friction points and make core actions obvious. This improves engagement, decreases drop-off, and creates stronger conversion patterns."
      }
    ],
    contactMessage: "Hi Zama, I am interested in your UI/UX Design service. Please share the process, timeline, and what you need from me to get started."
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Modern, responsive websites built for speed, SEO, and conversion.",
    iconKey: "Globe",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "1 to 4 weeks depending on scope",
    idealFor: ["Personal brands", "Service businesses", "Product launch pages"],
    deliverables: ["Responsive website", "SEO-ready structure", "Performance optimization", "Deployment and QA"],
    process: ["Architecture planning", "Frontend development", "Testing across devices", "Launch and support"],
    articleTitle: "A Website That Works Like a Sales Team",
    articleIntro: "Your website should not just look good. It should communicate value fast and turn visitors into conversations.",
    articleSections: [
      {
        heading: "Performance and Trust",
        content: "Faster websites feel more professional. We optimize loading, layout stability, and responsiveness so users stay longer and bounce less."
      },
      {
        heading: "Conversion-Focused Build",
        content: "Every section is structured with intent: what to say, where to place it, and how to guide visitors toward contact or purchase actions."
      }
    ],
    contactMessage: "Hi Zama, I want your Web Development service for my project. Please send timeline, deliverables, and the best way to start."
  },
  {
    slug: "app-development",
    title: "App Development",
    shortDescription: "Cross-platform Flutter apps for iOS and Android from a single codebase.",
    iconKey: "Smartphone",
    color: "from-[#02569B] to-[#0175C2]",
    textColor: "text-[#02569B]",
    bgColor: "bg-[#02569B]/10",
    deliveryTime: "2 to 8 weeks based on app complexity",
    idealFor: ["Founders with app ideas", "Businesses digitizing services", "Teams needing iOS + Android quickly"],
    deliverables: ["Flutter application", "Backend/API integration", "Testing and bug fixing", "Store-ready build guidance"],
    process: ["Feature planning", "UI implementation", "Business logic and integrations", "Testing and release prep"],
    articleTitle: "From Idea to App Store-Ready Product",
    articleIntro: "An app should feel smooth, clear, and reliable. The goal is to ship something users want to keep opening.",
    articleSections: [
      {
        heading: "Build Once, Launch Smart",
        content: "Flutter enables fast cross-platform delivery without sacrificing quality. This reduces timeline and keeps your product consistent."
      },
      {
        heading: "Real-World Product Thinking",
        content: "We focus on onboarding, retention loops, and intuitive navigation so the app is not just built, but actually used."
      }
    ],
    contactMessage: "Hi Zama, I am interested in App Development. I would like to discuss features, timeline, and estimated delivery."
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Complete strategy, content planning, publishing, and community engagement.",
    iconKey: "Share2",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "First strategy in 3 days, ongoing monthly execution",
    idealFor: ["Founders with no posting consistency", "Brands needing daily management", "Creators scaling multiple channels"],
    deliverables: ["Monthly content strategy", "Posting calendar", "Caption and hashtag framework", "Weekly performance reports"],
    process: ["Audit and positioning", "Content planning", "Execution and engagement", "Optimization loops"],
    articleTitle: "Consistency Is the New Growth Hack",
    articleIntro: "Social growth is no longer random. Structured systems and clear brand voice are what move accounts forward.",
    articleSections: [
      {
        heading: "Strategic Content, Not Guesswork",
        content: "Every post type is mapped to a purpose: reach, authority, trust, or conversion. This creates focused growth instead of noisy activity."
      },
      {
        heading: "What Ongoing Management Solves",
        content: "Daily execution removes inconsistency, improves audience relationship quality, and allows your brand to stay relevant continuously."
      }
    ],
    contactMessage: "Hi Zama, I want Social Media Management support. Please share your packages, deliverables, and expected start timeline."
  },
  {
    slug: "promo-videos",
    title: "Promo Videos",
    shortDescription: "Engaging promotional videos for apps, brands, websites, and social content.",
    iconKey: "Video",
    color: "from-[#FF0000] to-[#cc0000]",
    textColor: "text-[#FF0000]",
    bgColor: "bg-[#FF0000]/10",
    deliveryTime: "2 to 7 days per video",
    idealFor: ["App launches", "Brand campaign rollouts", "Creators promoting products or services"],
    deliverables: ["Script direction", "Video edit and effects", "Platform-specific export formats", "Thumbnail suggestion"],
    process: ["Brief and concept", "Editing and motion treatment", "Feedback revisions", "Final export delivery"],
    articleTitle: "Short Videos, Long Impact",
    articleIntro: "Promo videos compress your value into seconds. The right pacing and story turn casual viewers into interested leads.",
    articleSections: [
      {
        heading: "Narrative Before Effects",
        content: "Strong hooks, clear message, and smart pacing matter more than flashy transitions. We build narrative structure first."
      },
      {
        heading: "Made for Platform Behavior",
        content: "Each cut is optimized for scroll culture and audience attention windows on Reels, TikTok, Shorts, and paid ads."
      }
    ],
    contactMessage: "Hi Zama, I need Promo Videos for my brand/project. Please share turnaround time and what assets you need from me."
  },
  {
    slug: "instagram-growth",
    title: "Instagram Growth",
    shortDescription: "Targeted strategies for followers, engagement, and profile conversion.",
    iconKey: "Instagram",
    logoSrc: "/Instagram_icon.png",
    color: "from-purple-500 via-pink-500 to-orange-400",
    textColor: "text-pink-500",
    bgColor: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-400/10",
    deliveryTime: "Initial growth strategy in 48 hours",
    idealFor: ["Creators building authority", "Businesses driving leads from IG", "Personal brands scaling niche audiences"],
    deliverables: ["Profile optimization", "Reels strategy and content pillars", "Growth playbook", "Weekly analytics insights"],
    process: ["Account audit", "Content + cadence strategy", "Execution support", "Weekly optimization"],
    articleTitle: "Instagram Growth Built on Strategy, Not Hype",
    articleIntro: "Real Instagram growth is the result of positioning, consistency, and content that matches audience intent.",
    articleSections: [
      {
        heading: "Profile and Content Alignment",
        content: "Your profile must immediately answer who you help and why you matter. Then content reinforces that promise with consistency."
      },
      {
        heading: "Growth That Converts",
        content: "Follower count is only one metric. We optimize for qualified audience, meaningful engagement, and actions that lead to opportunities."
      }
    ],
    contactMessage: "Hi Zama, I want help with Instagram Growth. Please share your strategy approach, expected results, and timeline."
  },
  {
    slug: "tiktok-marketing",
    title: "TikTok Marketing",
    shortDescription: "Viral-ready content strategy and algorithm-driven growth systems.",
    iconKey: "TikTok",
    logoSrc: "/tiktok_icon.webp",
    color: "from-black to-gray-800",
    textColor: "text-foreground",
    bgColor: "bg-gradient-to-br from-black/5 to-gray-800/10",
    deliveryTime: "Strategy setup in 2 to 3 days",
    idealFor: ["Creators chasing rapid reach", "Brands targeting younger audiences", "Businesses testing short-form acquisition"],
    deliverables: ["Content hook library", "Trend mapping", "Post framework and cadence", "Performance review cadence"],
    process: ["Account scan and audience targeting", "Hook and creative strategy", "Posting and testing", "Iteration cycles"],
    articleTitle: "Building Momentum on TikTok",
    articleIntro: "TikTok rewards clarity, speed, and relevance. The goal is not random virality, but repeatable performance.",
    articleSections: [
      {
        heading: "The Hook Economy",
        content: "First seconds decide everything. We craft hooks that make the right audience stop, watch, and continue."
      },
      {
        heading: "Iterative Growth Model",
        content: "Results come from cycles of testing, learning, and refining. We build systems that improve output week by week."
      }
    ],
    contactMessage: "Hi Zama, I am interested in TikTok Marketing. Please send your process, timeline, and expected delivery."
  },
  {
    slug: "twitter-x-growth",
    title: "Twitter/X Growth",
    shortDescription: "Authority-building strategy using threads, engagement systems, and positioning.",
    iconKey: "Twitter",
    logoSrc: "/Twitter_icon.jpg",
    color: "from-[#1DA1F2] to-[#0d8bd9]",
    textColor: "text-[#1DA1F2]",
    bgColor: "bg-[#1DA1F2]/10",
    deliveryTime: "Positioning + thread framework in 2 days",
    idealFor: ["Founders building thought leadership", "Creators building audience trust", "Brands growing text-first presence"],
    deliverables: ["Content pillars", "Thread templates", "Engagement playbook", "Weekly growth checkpoints"],
    process: ["Niche positioning", "Content architecture", "Engagement and relationship strategy", "Analytics-driven refinements"],
    articleTitle: "Turn Tweets Into Authority",
    articleIntro: "Twitter/X rewards clear thinking and consistency. Great growth comes from message quality and strategic participation.",
    articleSections: [
      {
        heading: "Threads That Build Credibility",
        content: "We design thread structures that educate and position you as the go-to voice in your niche."
      },
      {
        heading: "Strategic Engagement",
        content: "Replies and conversation loops are used intentionally to increase discoverability and strengthen network effects."
      }
    ],
    contactMessage: "Hi Zama, I want support for Twitter/X Growth. Please share how you approach content and audience growth."
  },
  {
    slug: "youtube-growth",
    title: "YouTube Growth",
    shortDescription: "SEO optimization, content strategy, and subscriber growth systems.",
    iconKey: "YouTube",
    logoSrc: "/Youtube_icon.png",
    color: "from-[#FF0000] to-[#cc0000]",
    textColor: "text-[#FF0000]",
    bgColor: "bg-[#FF0000]/10",
    deliveryTime: "Channel strategy blueprint in 3 to 5 days",
    idealFor: ["Creators scaling long-form content", "Educational brands", "Businesses building evergreen visibility"],
    deliverables: ["Channel and metadata optimization", "Title/thumbnail strategy", "Content plan", "Analytics reporting framework"],
    process: ["Channel audit", "SEO + content framework", "Publishing structure", "Performance optimization"],
    articleTitle: "YouTube Growth Through Intent",
    articleIntro: "YouTube is search plus storytelling. Channels win when value and discoverability are designed together.",
    articleSections: [
      {
        heading: "Content That Compounds",
        content: "We build topic clusters that stack over time, so each upload strengthens overall channel momentum."
      },
      {
        heading: "Packaging for Click + Watch",
        content: "Titles and thumbnails are engineered for click-through while scripts and structure optimize retention."
      }
    ],
    contactMessage: "Hi Zama, I want YouTube Growth support. Please send your plan for SEO, thumbnails, and audience growth."
  },
  {
    slug: "twitch-streaming",
    title: "Twitch Streaming",
    shortDescription: "Community-first growth with retention and engagement systems for streamers.",
    iconKey: "Twitch",
    logoSrc: "/Twitch_icon.png",
    color: "from-[#9146FF] to-[#7b2fff]",
    textColor: "text-[#9146FF]",
    bgColor: "bg-[#9146FF]/10",
    deliveryTime: "Growth setup in 3 days",
    idealFor: ["New streamers", "Creators moving to live content", "Established streamers seeking structure"],
    deliverables: ["Stream content strategy", "Community engagement flow", "Collaboration/raid plan", "Retention improvement checklist"],
    process: ["Channel audit", "Programming strategy", "Engagement mechanics", "Iteration and scaling"],
    articleTitle: "Turn Streams Into Community",
    articleIntro: "Twitch growth is built in chat, culture, and consistency. We shape a stream environment people return to.",
    articleSections: [
      {
        heading: "Viewer Retention Tactics",
        content: "We improve intro structure, pacing, and interaction moments so people stay longer and become regulars."
      },
      {
        heading: "Community Experience Design",
        content: "From moderation tone to reward loops, every part of the stream is designed to build loyalty and identity."
      }
    ],
    contactMessage: "Hi Zama, I am interested in Twitch Streaming growth support. Please send your process and expected delivery timeline."
  },
  {
    slug: "spotify-music",
    title: "Spotify & Music",
    shortDescription: "Music growth strategy for streams, playlist opportunities, and audience expansion.",
    iconKey: "Spotify",
    logoSrc: "/Spotify_Icon.png",
    color: "from-[#1DB954] to-[#169c46]",
    textColor: "text-[#1DB954]",
    bgColor: "bg-[#1DB954]/10",
    deliveryTime: "Campaign setup in 2 to 4 days",
    idealFor: ["Independent artists", "Music labels", "Producers releasing singles/EPs"],
    deliverables: ["Release promotion plan", "Playlist outreach framework", "Short-form promo strategy", "Post-release analytics review"],
    process: ["Music positioning", "Pre-release planning", "Launch execution", "Post-launch optimization"],
    articleTitle: "Music Marketing That Extends Beyond Release Day",
    articleIntro: "The release is only the start. Consistent promotion strategy turns a drop into sustained discovery.",
    articleSections: [
      {
        heading: "Audience Pathway",
        content: "We map how listeners discover, engage, and return so each campaign builds a stronger fan base."
      },
      {
        heading: "Content + Distribution Mix",
        content: "Smart platform distribution and short-form storytelling are combined to maximize stream momentum."
      }
    ],
    contactMessage: "Hi Zama, I want help with Spotify & Music promotion. Please share your strategy and campaign timeline."
  },
  {
    slug: "organic-growth",
    title: "Organic Growth",
    shortDescription: "Sustainable audience growth through trust, positioning, and consistency.",
    iconKey: "TrendingUp",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "Strategy and content system in 3 days",
    idealFor: ["Brands avoiding ad dependency", "Creators building long-term authority", "Businesses focused on trust-based growth"],
    deliverables: ["Organic growth plan", "Content distribution model", "Engagement playbook", "Monthly optimization reviews"],
    process: ["Audit and benchmark", "Strategy build", "Execution support", "Performance loop"],
    articleTitle: "Sustainable Growth Without Paid Dependency",
    articleIntro: "Organic growth compounds when systems are strong. This is about reliable momentum, not short spikes.",
    articleSections: [
      {
        heading: "Authority-Driven Strategy",
        content: "We align content to expertise and audience needs to create trust at scale."
      },
      {
        heading: "Compounding Distribution",
        content: "One asset is repurposed smartly across channels so output stays high while effort remains efficient."
      }
    ],
    contactMessage: "Hi Zama, I need an Organic Growth strategy. Please send deliverables and how long implementation takes."
  },
  {
    slug: "community-management",
    title: "Community Management",
    shortDescription: "Build and maintain healthy, engaged digital communities around your brand.",
    iconKey: "Users",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "Community management setup within 48 hours",
    idealFor: ["Brands with active comment volume", "Creators scaling audience size", "Teams needing reliable moderation"],
    deliverables: ["Engagement guidelines", "Moderation and response framework", "Escalation protocol", "Weekly sentiment report"],
    process: ["Tone and policy setup", "Daily management workflow", "Moderation and escalation", "Insights and improvements"],
    articleTitle: "Community Is a Brand Asset",
    articleIntro: "How your audience feels when interacting with your brand determines retention and reputation.",
    articleSections: [
      {
        heading: "Why Management Matters",
        content: "Fast, thoughtful responses convert passive followers into loyal advocates."
      },
      {
        heading: "Structure Behind the Scenes",
        content: "Clear systems for moderation and engagement reduce chaos and protect brand trust."
      }
    ],
    contactMessage: "Hi Zama, I am interested in Community Management support. Please share your workflow and delivery expectations."
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    shortDescription: "ROI-focused ad campaigns with targeting, creative testing, and optimization.",
    iconKey: "Target",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "Campaign launch in 3 to 5 days",
    idealFor: ["Businesses scaling lead generation", "Ecommerce brands", "Founders validating offers quickly"],
    deliverables: ["Campaign strategy", "Audience targeting setup", "Creative/ad copy direction", "Performance optimization reports"],
    process: ["Offer and funnel audit", "Campaign setup", "Testing and optimization", "Scaling winners"],
    articleTitle: "Ads That Are Built for Return",
    articleIntro: "Paid growth only works when creative, targeting, and conversion are aligned around a clear offer.",
    articleSections: [
      {
        heading: "Creative + Conversion Alignment",
        content: "We match ad message with landing page intent to improve cost efficiency."
      },
      {
        heading: "Performance-Led Optimization",
        content: "Budgets are shifted based on live performance signals to keep improving ROAS and lead quality."
      }
    ],
    contactMessage: "Hi Zama, I want Paid Advertising help. Please share your setup process and expected campaign delivery timeline."
  },
  {
    slug: "analytics-insights",
    title: "Analytics & Insights",
    shortDescription: "Actionable performance analysis with clear dashboards and strategic recommendations.",
    iconKey: "BarChart3",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "Initial report in 2 to 4 days",
    idealFor: ["Teams making growth decisions", "Founders needing clear KPIs", "Brands tracking campaign effectiveness"],
    deliverables: ["Custom KPI dashboard", "Performance trend analysis", "Competitor benchmark summary", "Actionable recommendations"],
    process: ["Data collection", "Signal extraction", "Insight framing", "Strategy recommendations"],
    articleTitle: "Data That Leads to Decisions",
    articleIntro: "Numbers are only useful when translated into next actions. We focus on insight clarity, not dashboard noise.",
    articleSections: [
      {
        heading: "From Metrics to Meaning",
        content: "We isolate what is moving the business and remove vanity metrics that distract from outcomes."
      },
      {
        heading: "Decision Framework",
        content: "Every report includes clear actions: what to keep, what to change, and what to test next."
      }
    ],
    contactMessage: "Hi Zama, I need Analytics & Insights support. Please send your reporting scope and delivery time."
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    shortDescription: "Strategic influencer partnerships to increase reach, trust, and campaign performance.",
    iconKey: "Megaphone",
    color: "from-primary to-primary/80",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
    deliveryTime: "Partner shortlist in 3 to 6 days",
    idealFor: ["Brands launching products", "Businesses entering new markets", "Campaigns needing social proof at scale"],
    deliverables: ["Influencer shortlist", "Collaboration strategy", "Campaign messaging guide", "Post-campaign performance review"],
    process: ["Campaign objective mapping", "Creator research and vetting", "Collaboration rollout", "Performance analysis"],
    articleTitle: "Influencer Marketing With Strategic Fit",
    articleIntro: "The right creator match beats pure follower count. We optimize for audience relevance and brand alignment.",
    articleSections: [
      {
        heading: "Creator-Brand Match",
        content: "We evaluate tone, audience overlap, and trust signals to select partners that genuinely fit your brand."
      },
      {
        heading: "Execution With Measurement",
        content: "Partnerships are managed with clear deliverables, timelines, and metrics so campaign value is measurable."
      }
    ],
    contactMessage: "Hi Zama, I am interested in Influencer Marketing. Please share your process, timelines, and how collaborations are managed."
  }
]

export const servicesBySlug = Object.fromEntries(
  servicesData.map((service) => [service.slug, service])
) as Record<string, ServiceItem>
