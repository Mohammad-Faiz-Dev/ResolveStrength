/**
 * blogData.js
 * Central data source for all blog categories.
 * Replace image paths with real generated/stock images when ready.
 * Each category has: 1 featured post + 5 grid posts.
 */

// SVG Icons for categories — valid HTML syntax for dangerouslySetInnerHTML
export const CATEGORY_ICONS = {
  "strength-training": {
    strength: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5l11 11M6.5 17.5l11-11M12 2v4M12 18v4M2 12h4M18 12h4M12 12l-2-2 4-4 4 4-2 2z"/></svg>`,
  },
  "cardio": {
    cardio: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><path d="M3 12h4l2-3 4 6 2-3h4"/></svg>`,
  },
  "yoga-mobility": {
    yoga: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v5M8 20l2-7M16 20l-2-7M9 12h6"/></svg>`,
  },
  "home-workouts": {
    home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
  },
  "recovery-wellness": {
    recovery: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9-9a9 9 0 0 0 9 9"/></svg>`,
  },
};

// Image placeholder SVG — valid HTML syntax
export const IMAGE_PLACEHOLDER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>`;

export const CATEGORIES = [
  {
    slug: "strength-training",
    label: "Strength Training",
    shortLabel: "Strength",
    description: "Build a foundation of raw power and structural resilience through science-backed programming.",
    icon: CATEGORY_ICONS["strength-training"].strength,
    accentColor: "#C8A96E", // gold
  },
  {
    slug: "cardio",
    label: "Cardio & Endurance",
    shortLabel: "Cardio",
    description: "Expand your aerobic ceiling and metabolic capacity with evidence-based endurance training.",
    icon: CATEGORY_ICONS["cardio"].cardio,
    accentColor: "#4A8C6A", // green
  },
  {
    slug: "yoga-mobility",
    label: "Yoga & Mobility",
    shortLabel: "Yoga",
    description: "Unlock joint freedom and body awareness through movement practices refined over centuries.",
    icon: CATEGORY_ICONS["yoga-mobility"].yoga,
    accentColor: "#8C7A9E", // soft purple
  },
  {
    slug: "home-workouts",
    label: "Home Workouts",
    shortLabel: "Home",
    description: "No gym required. Full-body programming designed for any space with minimal equipment.",
    icon: CATEGORY_ICONS["home-workouts"].home,
    accentColor: "#7A9EC8", // steel blue
  },
  {
    slug: "recovery-wellness",
    label: "Recovery & Wellness",
    shortLabel: "Recovery",
    description: "Supercharge adaptation and longevity with protocols rooted in sleep science and regenerative practice.",
    icon: CATEGORY_ICONS["recovery-wellness"].recovery,
    accentColor: "#C87A6E", // warm red
  },
];

export const BLOG_DATA = {
  "strength-training": {
    featured: {
      id: "st-featured",
      slug: "periodization-science-building-elite-strength",
      category: "Strength Training",
      title: "The Science of Periodization: How Elite Athletes Build Strength That Lasts",
      excerpt:
        "Linear progression works — until it doesn't. We break down the evidence behind undulating, block, and conjugate periodization models, helping you select the framework that matches your physiology and goals.",
      readTime: "11 min",
      tag: "Programming Deep Dive",
      image: "/blog/strength/featured-periodization.jpg",
    },
    posts: [
      {
        id: "st-1",
        slug: "compound-lifts-movement-patterns",
        category: "Strength Training",
        title: "The Big Five Movement Patterns: Why Compound Lifts Are Non-Negotiable",
        excerpt:
          "Push, pull, hinge, squat, carry — master these five and you've built a body that performs under any demand. A systematic breakdown of each pattern and how to load them safely.",
        readTime: "7 min",
        tag: "Fundamentals",
        image: "/blog/strength/compound-lifts.jpg",
      },
      {
        id: "st-2",
        slug: "progressive-overload-advanced-techniques",
        category: "Strength Training",
        title: "Beyond Adding Weight: 6 Advanced Methods of Progressive Overload",
        excerpt:
          "When the bar can't get heavier, the program must get smarter. Tempo manipulation, density blocks, and accommodating resistance are your next tools.",
        readTime: "6 min",
        tag: "Advanced",
        image: "/blog/strength/progressive-overload.jpg",
      },
      {
        id: "st-3",
        slug: "grip-strength-longevity-marker",
        category: "Strength Training",
        title: "Grip Strength Is a Longevity Marker: Here's How to Build It Deliberately",
        excerpt:
          "Research consistently links grip strength to all-cause mortality. We outline five targeted protocols that build crushing force while improving wrist and forearm health.",
        readTime: "5 min",
        tag: "Longevity",
        image: "/blog/strength/grip-strength.jpg",
      },
      {
        id: "st-4",
        slug: "neural-adaptations-first-8-weeks",
        category: "Strength Training",
        title: "What Actually Happens in Your Nervous System During the First 8 Weeks of Lifting",
        excerpt:
          "Early strength gains aren't muscular — they're neural. Understanding this changes how you program, how you warm up, and how you measure real progress.",
        readTime: "8 min",
        tag: "Neuroscience",
        image: "/blog/strength/neural-adaptations.jpg",
      },
      {
        id: "st-5",
        slug: "single-leg-training-case",
        category: "Strength Training",
        title: "The Case for Single-Leg Training: Fixing Imbalances Before They Become Injuries",
        excerpt:
          "Bilateral dominance patterns hide asymmetries that compound over years. Unilateral work exposes them, corrects them, and builds bulletproof athleticism in the process.",
        readTime: "6 min",
        tag: "Injury Prevention",
        image: "/blog/strength/single-leg.jpg",
      },
    ],
  },

  cardio: {
    featured: {
      id: "ca-featured",
      slug: "zone-2-training-complete-guide",
      category: "Cardio & Endurance",
      title: "Zone 2 Training: The Overlooked Foundation of Elite Cardiovascular Fitness",
      excerpt:
        "The world's best endurance athletes spend 80% of their training time in a zone most people skip entirely. We unpack the metabolic science behind low-intensity aerobic work and why it's the secret to long-term engine development.",
      readTime: "12 min",
      tag: "Endurance Science",
      image: "/blog/cardio/featured-zone2.jpg",
    },
    posts: [
      {
        id: "ca-1",
        slug: "vo2max-improvement-protocols",
        category: "Cardio & Endurance",
        title: "VO₂ Max Is Trainable: The Protocols That Move the Needle Fastest",
        excerpt:
          "VO₂ max is the single strongest predictor of longevity. Norwegian 4×4 intervals, sprint repeats, and threshold work — ranked by evidence and time-efficiency.",
        readTime: "7 min",
        tag: "VO₂ Max",
        image: "/blog/cardio/vo2max.jpg",
      },
      {
        id: "ca-2",
        slug: "running-economy-technique",
        category: "Cardio & Endurance",
        title: "Running Economy: The Hidden Variable Separating Good Runners from Great Ones",
        excerpt:
          "Two runners with identical VO₂ max can have wildly different race performances. Economy — how efficiently you convert oxygen to movement — is the differentiator.",
        readTime: "6 min",
        tag: "Technique",
        image: "/blog/cardio/running-economy.jpg",
      },
      {
        id: "ca-3",
        slug: "hiit-vs-liss-evidence",
        category: "Cardio & Endurance",
        title: "HIIT vs. LISS: What 40 Years of Research Actually Says",
        excerpt:
          "The debate has been simplified to absurdity. The truth is both modalities serve distinct physiological purposes — and elite programs use both strategically.",
        readTime: "9 min",
        tag: "Research Review",
        image: "/blog/cardio/hiit-liss.jpg",
      },
      {
        id: "ca-4",
        slug: "cardiac-output-method",
        category: "Cardio & Endurance",
        title: "The Cardiac Output Method: Building Your Aerobic Base from the Ground Up",
        excerpt:
          "Developed by strength coach Joel Jamieson, this low-intensity approach dramatically expands stroke volume and heart efficiency over 8–12 weeks. Here's the protocol.",
        readTime: "5 min",
        tag: "Programming",
        image: "/blog/cardio/cardiac-output.jpg",
      },
      {
        id: "ca-5",
        slug: "breathing-performance-link",
        category: "Cardio & Endurance",
        title: "The Breathing-Performance Link: How Respiratory Training Unlocks Endurance",
        excerpt:
          "Inspiratory muscle fatigue is real, and it limits performance before your legs do. Targeted diaphragm training and CO₂ tolerance work can change that equation.",
        readTime: "6 min",
        tag: "Breathwork",
        image: "/blog/cardio/breathing.jpg",
      },
    ],
  },

  "yoga-mobility": {
    featured: {
      id: "ym-featured",
      slug: "mobility-vs-flexibility-distinction",
      category: "Yoga & Mobility",
      title: "Mobility vs. Flexibility: Why the Distinction Changes Everything About How You Train",
      excerpt:
        "Passive flexibility is the range you have. Active mobility is the range you can control. Most training programs develop the first and ignore the second — creating the illusion of progress while injury risk quietly climbs.",
      readTime: "10 min",
      tag: "Foundations",
      image: "/blog/yoga/featured-mobility.jpg",
    },
    posts: [
      {
        id: "ym-1",
        slug: "hip-flexor-protocol-desk-workers",
        category: "Yoga & Mobility",
        title: "The Desk Worker's Hip Flexor Protocol: Undoing 8 Hours of Sitting in 20 Minutes",
        excerpt:
          "Chronic hip flexion shortens psoas, weakens glutes, and anteriorly tilts the pelvis — a cascade that causes back pain, knee issues, and reduced athletic output.",
        readTime: "5 min",
        tag: "Protocol",
        image: "/blog/yoga/hip-flexors.jpg",
      },
      {
        id: "ym-2",
        slug: "thoracic-spine-mobility-guide",
        category: "Yoga & Mobility",
        title: "Thoracic Spine Mobility: The Master Key to Shoulder Health and Posture",
        excerpt:
          "A stiff mid-back forces your shoulders, neck, and lumbar spine to compensate. Restoring thoracic extension and rotation resolves a cascade of downstream problems.",
        readTime: "6 min",
        tag: "Spine",
        image: "/blog/yoga/thoracic.jpg",
      },
      {
        id: "ym-3",
        slug: "yoga-for-strength-athletes",
        category: "Yoga & Mobility",
        title: "Yoga for Strength Athletes: A No-Fluff Integration Guide",
        excerpt:
          "You don't need to become a yogi. You need specific poses that address the exact tissues compressed by heavy training. Here's the 30-minute sequence that actually matters.",
        readTime: "7 min",
        tag: "Integration",
        image: "/blog/yoga/strength-athletes.jpg",
      },
      {
        id: "ym-4",
        slug: "ankle-mobility-squat-depth",
        category: "Yoga & Mobility",
        title: "Ankle Mobility Is the Hidden Limit on Your Squat Depth",
        excerpt:
          "Before you adjust your squat stance, elevate your heels, or blame your hips — check your dorsiflexion. Most people have significantly less than required for optimal mechanics.",
        readTime: "5 min",
        tag: "Assessment",
        image: "/blog/yoga/ankle-mobility.jpg",
      },
      {
        id: "ym-5",
        slug: "breath-movement-nervous-system",
        category: "Yoga & Mobility",
        title: "Breath, Movement, and the Nervous System: How Yoga Modulates Stress Physiology",
        excerpt:
          "Slow, diaphragmatic breathing during movement practice shifts the ANS toward parasympathetic dominance — measurably lowering cortisol and HRV variance within a single session.",
        readTime: "8 min",
        tag: "Neuroscience",
        image: "/blog/yoga/breath-nervous-system.jpg",
      },
    ],
  },

  "home-workouts": {
    featured: {
      id: "hw-featured",
      slug: "minimal-equipment-maximum-results",
      category: "Home Workouts",
      title: "Minimal Equipment, Maximum Adaptation: The Science of Effective Home Training",
      excerpt:
        "A gym membership is not a prerequisite for physiological adaptation. When programmed with intention, bodyweight and minimal-equipment training produces results that rival — and sometimes exceed — traditional gym protocols.",
      readTime: "9 min",
      tag: "Programming Science",
      image: "/blog/home/featured-minimal.jpg",
    },
    posts: [
      {
        id: "hw-1",
        slug: "bodyweight-progression-system",
        category: "Home Workouts",
        title: "The Complete Bodyweight Progression System: From Beginner to Advanced in 12 Months",
        excerpt:
          "Push-up to planche. Squat to pistol. Pulling to one-arm. A structured roadmap through bodyweight strength progressions with clear benchmarks at every stage.",
        readTime: "8 min",
        tag: "Progression",
        image: "/blog/home/bodyweight-progression.jpg",
      },
      {
        id: "hw-2",
        slug: "resistance-band-full-body",
        category: "Home Workouts",
        title: "Resistance Bands Are Underrated: A Full-Body Training System with $30 of Equipment",
        excerpt:
          "Variable resistance curves match natural strength curves better than free weights in many movements. We've designed a complete push/pull/leg split using only bands.",
        readTime: "6 min",
        tag: "Equipment",
        image: "/blog/home/resistance-bands.jpg",
      },
      {
        id: "hw-3",
        slug: "small-space-hiit-protocols",
        category: "Home Workouts",
        title: "6×6 Foot Space, Zero Noise: High-Intensity Protocols for Apartment Living",
        excerpt:
          "Low-impact doesn't mean low-intensity. These apartment-friendly HIIT protocols raise heart rate to zone 4–5 without jarring downstairs neighbors or needing more than a yoga mat.",
        readTime: "5 min",
        tag: "Apartment Friendly",
        image: "/blog/home/small-space.jpg",
      },
      {
        id: "hw-4",
        slug: "pull-up-bar-workout-library",
        category: "Home Workouts",
        title: "One Pull-Up Bar: 40 Exercises That Build a Complete Upper Body",
        excerpt:
          "A doorframe pull-up bar is the highest ROI piece of home fitness equipment. Here's how to systematically develop back width, bicep strength, core stability, and scapular health from a single anchor point.",
        readTime: "7 min",
        tag: "Equipment Guide",
        image: "/blog/home/pullup-bar.jpg",
      },
      {
        id: "hw-5",
        slug: "no-equipment-leg-day",
        category: "Home Workouts",
        title: "No Equipment Leg Day That Actually Produces Hypertrophy",
        excerpt:
          "The myth that bodyweight work can't grow legs falls apart when you apply mechanical tension principles, tempo manipulation, and proper loading through range of motion.",
        readTime: "6 min",
        tag: "Hypertrophy",
        image: "/blog/home/leg-day.jpg",
      },
    ],
  },

  "recovery-wellness": {
    featured: {
      id: "rw-featured",
      slug: "sleep-architecture-performance-guide",
      category: "Recovery & Wellness",
      title: "Sleep Architecture and Athletic Performance: A Complete Optimization Guide",
      excerpt:
        "Slow-wave sleep is when human growth hormone peaks. REM is when motor patterns consolidate. Understanding the structure of sleep — and how training, nutrition, and environment affect it — is the highest-leverage recovery intervention available.",
      readTime: "13 min",
      tag: "Sleep Science",
      image: "/blog/recovery/featured-sleep.jpg",
    },
    posts: [
      {
        id: "rw-1",
        slug: "cold-exposure-evidence-review",
        category: "Recovery & Wellness",
        title: "Cold Exposure for Recovery: Separating Robust Evidence from Viral Mythology",
        excerpt:
          "Cold water immersion blunts inflammation — which is useful post-competition but may impair hypertrophy when used after strength sessions. The timing matters enormously.",
        readTime: "8 min",
        tag: "Research Review",
        image: "/blog/recovery/cold-exposure.jpg",
      },
      {
        id: "rw-2",
        slug: "hrv-training-guide",
        category: "Recovery & Wellness",
        title: "HRV-Guided Training: How to Let Your Nervous System Set Your Intensity",
        excerpt:
          "Heart rate variability is the most accessible window into recovery status. Here's how to measure it correctly, interpret the data, and use it to make daily training decisions.",
        readTime: "7 min",
        tag: "Biometrics",
        image: "/blog/recovery/hrv.jpg",
      },
      {
        id: "rw-3",
        slug: "nutrition-recovery-timing",
        category: "Recovery & Wellness",
        title: "The Recovery Nutrition Window: What to Eat, When, and Why It Matters",
        excerpt:
          "Post-exercise nutrition isn't just about protein timing. Carbohydrate replenishment, micronutrient density, and anti-inflammatory compounds each play distinct roles in the 24-hour recovery cycle.",
        readTime: "6 min",
        tag: "Nutrition",
        image: "/blog/recovery/nutrition-timing.jpg",
      },
      {
        id: "rw-4",
        slug: "deload-week-programming",
        category: "Recovery & Wellness",
        title: "Deload Weeks Are Not Optional: The Physiology of Planned Undertraining",
        excerpt:
          "Supercompensation requires a stimulus, but also a trough. Athletes who program deloads systematically outperform those who train through fatigue — the research is unambiguous.",
        readTime: "5 min",
        tag: "Programming",
        image: "/blog/recovery/deload.jpg",
      },
      {
        id: "rw-5",
        slug: "sauna-protocol-recovery",
        category: "Recovery & Wellness",
        title: "Sauna as a Training Tool: Heat Shock Proteins, Plasma Volume, and Longevity",
        excerpt:
          "Regular sauna use mimics some cardiovascular adaptations of exercise and activates heat shock proteins that protect against cellular damage. Here's the protocol the evidence supports.",
        readTime: "7 min",
        tag: "Heat Therapy",
        image: "/blog/recovery/sauna.jpg",
      },
    ],
  },
};