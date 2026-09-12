// All project content for the interactive portfolio
// Order within "current" reflects requested display sequence:
// Srinivas Villa, Nilesh Agarwal, B-250, Vinesh Reddy, Keethireddypalli Farmhouse, Yedukondalu

const PROJECTS = {

  college: [
    {
      id: "hotel",
      group: "college",
      title: "Five Star Hotel & Conventional Centre",
      subtitle: "B.Arch Semester 8 Design Thesis",
      cover: "assets/college/cover.jpg",
      role: "Sole designer — full design development from site analysis through working drawings",
      tools: ["AutoCAD", "SketchUp", "Lumion", "Photoshop"],
      description: "An 11-acre hospitality masterplan combining a five-star hotel with a large-format conventional centre, sited at a major junction in Hyderabad. The design explores a stepped, terraced massing strategy — receding volumes that create varied balcony heights, shading, and a distinctive silhouette — while resolving a complex program across two connected blocks.",
      stats: [
        ["Site Area", "11 Acres (44,515 sqm)"],
        ["Total Built-up", "42,900 sqm"],
        ["Hotel Rooms", "274 total"],
        ["Parking", "15,350 sqm"],
      ],
      details: [
        "Site area of 11 acres at Mindspace Road, Rangareddy, Hyderabad, bounded by two primary roads enabling separate public and service entries.",
        "Massing concept built on a series of gradually receding and advancing terraces — a stepped strategy that varies balcony heights across the facade, integrates the building with its surroundings, and maximizes sunlight exposure per level.",
        "274 hotel rooms across standard single, elite, suite, and presidential suite categories, supported by banquet halls, restaurants, a spa, a gym, and a pool.",
        "A separate conventional centre with two 1,000-capacity halls, ballrooms, an exhibition hall, and dedicated meeting rooms — 11,400 sqm built-up.",
      ],
      sheets: [
        { img: "assets/college/site-analysis.jpg", label: "Site Analysis" },
        { img: "assets/college/concept.jpg", label: "Concept, Zoning & Area Statements" },
        { img: "assets/college/site-plan.jpg", label: "Site Plan" },
        { img: "assets/college/site-views.jpg", label: "Site Views" },
        { img: "assets/college/ground-floor-plan.jpg", label: "Hotel — Ground Floor Plan" },
        { img: "assets/college/first-floor-plan.jpg", label: "Hotel — First Floor Plan" },
        { img: "assets/college/third-floor-plan.jpg", label: "Hotel — Third Floor Plan" },
        { img: "assets/college/fifth-floor-plan.jpg", label: "Hotel — Fifth Floor Plan" },
        { img: "assets/college/hotel-sections.jpg", label: "Hotel Sections" },
        { img: "assets/college/hotel-elevations.jpg", label: "Hotel Elevations — West & North" },
        { img: "assets/college/hotel-views.jpg", label: "Hotel Views" },
        { img: "assets/college/conv-ground-floor.jpg", label: "Conventional Centre — Ground Floor" },
        { img: "assets/college/conv-floor-plans.jpg", label: "Conventional Centre — First & Second Floor" },
        { img: "assets/college/conv-third-floor.jpg", label: "Conventional Centre — Third Floor" },
        { img: "assets/college/conv-sections-elevations.jpg", label: "Conventional Centre — Sections & Elevations" },
        { img: "assets/college/conv-views.jpg", label: "Conventional Centre Views" },
      ]
    }
  ],

  internship: [
    {
      id: "naveen",
      group: "internship",
      title: "Residence for Mr. Naveen",
      subtitle: "Banashankari · Internship, Maya Architects",
      cover: "assets/internships/naveen-residence.jpg",
      role: "Space planning and 3D presentation drawings",
      tools: ["AutoCAD", "SketchUp", "Lumion", "Photoshop"],
      description: "Initial-stage presentation drawings for a G+3 residence, developed to give the client a clear read of space planning before construction — 2D floor plans paired with matching 3D isometric cutaways for every level.",
      details: [
        "Full floor-by-floor layout: ground floor parking, foyer, living, dining, kitchen, and pooja room; first floor living and kitchen with bedroom; second floor children's and master bedrooms; third floor guest bedroom and AV room; terrace with open terrace and planter boxes.",
        "Each floor plan is paired with a matching isometric 3D cutaway view, giving the client an immediate spatial read without needing to interpret 2D drawings alone.",
      ],
      sheets: [
        { img: "assets/internships/naveen-residence.jpg", label: "Floor Plans & 3D Isometric Views — All Floors" },
      ]
    },
    {
      id: "suman",
      group: "internship",
      title: "Residence for Smt. Sumankrishnappa",
      subtitle: "Internship, Maya Architects",
      cover: "assets/internships/suman-residence.jpg",
      role: "Space planning and 3D presentation drawings",
      tools: ["AutoCAD", "SketchUp", "Lumion", "Photoshop"],
      description: "A G+4 residence presented the same way — clean floor plans matched with isometric 3D views per floor for immediate client clarity on space planning.",
      details: [
        "Ground floor dedicated to parking and lift access; first floor family, dining, and living areas with a guest bedroom; second and third floors with master and additional bedrooms, lounges, and balconies; fourth floor bar, lounge, and terrace garden.",
        "Consistent visual language across all five floors, making the whole home easy to walk through in a single sheet set.",
      ],
      sheets: [
        { img: "assets/internships/suman-residence.jpg", label: "Floor Plans & 3D Isometric Views — All Floors" },
      ]
    },
    {
      id: "nisarga",
      group: "internship",
      title: "Nisarga Inn — Interior Design",
      subtitle: "Hotel & Restaurant Interiors · Internship",
      cover: "assets/internships/nisarga-suite-angles.jpg",
      role: "Complete interior design and furniture placement",
      tools: ["AutoCAD", "SketchUp", "Lumion", "Photoshop"],
      description: "Complete interior design and furniture placement for a hotel and restaurant, focused on a warm, contemporary material palette — dark timber, upholstered headboards, and layered cove lighting.",
      details: [
        "Guest suite designed with a floating upholstered bed, fluted-timber feature wall, and a seating nook — shown here across three angles of the same room for a full spatial read.",
        "A second guest room variation with a softer palette, sheer drapery, and a wall-mounted TV and study console.",
      ],
      sheets: [
        { img: "assets/internships/nisarga-suite-angles.jpg", label: "Guest Suite — Three Angles" },
        { img: "assets/internships/nisarga-room2.jpg", label: "Guest Room — Alternate Layout" },
      ]
    },
  ],

  current: [
    {
      id: "srinivas",
      group: "current",
      title: "Srinivas Villa",
      subtitle: "Floor Plan, Interior & Toilet Design · Praveen Architects",
      cover: "assets/current/srinivas-plan-ground.jpg",
      role: "Floor planning, interior working drawings, and toilet design",
      tools: ["AutoCAD", "SketchUp", "Photoshop"],
      description: "A large luxury villa taken from floor plan through to full interior working drawings and bathroom detailing — spa and salon, home theatre and bar lounge, multi-car driveway, and a fluted-marble master toilet finished with cove lighting.",
      details: [
        "Floor plans covering an office room, spa and salon, lift, servant and watchman quarters, and a multi-bay driveway with a pool service area, developed across ground, first, second, and terrace floors.",
        "Full interior working drawings across the entrance foyer, dining, master bedroom, home theatre, and bar lounge — material call-outs, lighting layout, and construction sections for each space.",
        "Master bedroom toilet designed with a single-marble and fluted-marble material palette, finished with cove lighting.",
      ],
      sheets: [
        { img: "assets/current/srinivas-reference-sheet.jpg", label: "Floor Plans & Interior Reference" },
        { img: "assets/current/srinivas-plan-second.jpg", label: "Floor Plan — Second Floor" },
        { img: "assets/current/srinivas-plan-terrace.jpg", label: "Floor Plan — Terrace Floor" },
        { img: "assets/current/srinivas-interior-master-bedroom-a.jpg", label: "Interior Detail — Master Bedroom, Sheet A" },
        { img: "assets/current/srinivas-interior-master-bedroom-b.jpg", label: "Interior Detail — Master Bedroom, Sheet B" },
        { img: "assets/current/srinivas-interior-master-bedroom-c.jpg", label: "Interior Detail — Master Bedroom, Sheet C" },
        { img: "assets/current/srinivas-interior-home-theater-1.jpg", label: "Interior Detail — Home Theatre, Sheet 1" },
        { img: "assets/current/srinivas-interior-home-theater-2.jpg", label: "Interior Detail — Home Theatre, Sheet 2" },
        { img: "assets/current/srinivas-interior-home-theater-3.jpg", label: "Interior Detail — Home Theatre, Sheet 3" },
        { img: "assets/current/srinivas-interior-bar-lounge.jpg", label: "Interior Detail — Bar Lounge" },
        { img: "assets/current/srinivas-toilet-floor-plan.jpg", label: "Master Bedroom Toilet — Floor Plan" },
        { img: "assets/current/srinivas-toilet-view-1.jpg", label: "Master Bedroom Toilet — View 1" },
        { img: "assets/current/srinivas-toilet-view-2.jpg", label: "Master Bedroom Toilet — View 2" },
        { img: "assets/current/srinivas-toilet-view-3.jpg", label: "Master Bedroom Toilet — View 3" },
      ]
    },
    {
      id: "nilesh",
      group: "current",
      title: "Nilesh Agarwal Residence",
      subtitle: "Facade Design · Praveen Architects",
      cover: "assets/current/nilesh-option1.jpg",
      role: "Facade design — two design options",
      tools: ["SketchUp", "Enscape", "Photoshop"],
      description: "Two distinct facade directions developed on the same residential massing — one materially rich, one stripped-back and minimal.",
      details: [
        "Option 1 — facade design with projecting travertine marble volumes, layered architectural lighting, ground-level landscaping, and planter boxes integrated into the elevation.",
        "Option 2 — a minimal design in fully textured paint finish with sculpted vertical curved projections, restrained landscaping, and precise lighting to model the form at night.",
      ],
      sheets: [
        { img: "assets/current/nilesh-option1.jpg", label: "Option 1 — Travertine Marble Facade" },
        { img: "assets/current/nilesh-option2.jpg", label: "Option 2 — Minimal Textured Facade" },
      ]
    },
    {
      id: "b250",
      group: "current",
      title: "B-250, Sainikpuri",
      subtitle: "Toilet Design & Detailing · Praveen Architects",
      cover: "assets/current/b250-toilet-1.jpg",
      role: "Toilet design and construction detailing",
      tools: ["AutoCAD", "Photoshop"],
      description: "Detailed toilet design and construction documentation across three bathrooms in a residence — plans, elevations, sections, and material call-outs, taken through to 3D-rendered previews.",
      details: [
        "Parent's bedroom toilet — full elevation and section set with marble, tile, and veneer specification, cove lighting, and niche details.",
        "Toilet and dresser with dark marble cladding, a glass shower partition, and profile lighting detailing.",
        "A third 'purpose room' toilet in a warm grey stone palette with an organic freeform mirror.",
      ],
      sheets: [
        { img: "assets/current/b250-toilet-1.jpg", label: "Parent's Bedroom Toilet — Plan, Sections & Elevations" },
        { img: "assets/current/b250-toilet-2.jpg", label: "Parent's Bedroom Toilet — Details & 3D Views" },
        { img: "assets/current/b250-toilet-3.jpg", label: "Toilet / Dresser — Elevations & Sections" },
        { img: "assets/current/b250-toilet-4.jpg", label: "Toilet / Dresser — Details & 3D Views" },
      ]
    },
    {
      id: "vinesh",
      group: "current",
      title: "Vinesh Reddy Office Building",
      subtitle: "Floor Plan & Space Planning · Praveen Architects",
      cover: "assets/current/vinesh-floor-1.jpg",
      role: "Floor plan and space planning for a full commercial office building",
      tools: ["AutoCAD", "Photoshop"],
      description: "A full space-planning exercise for a multi-storey commercial office building, organizing a wide brief — from client hospitality to executive leadership — across five floors plus a rooftop residence.",
      details: [
        "Ground floor: parking, watchman room, and reception and waiting.",
        "First floor: dining, pantry, and a chill-out and waiting lounge, alongside a dormitory and play zone.",
        "Second and third floors: open workspace, conference room, and executive cabins.",
        "Fourth floor: three MD cabins and two executive cabins.",
        "Rooftop: terrace garden and a private 1BHK accommodation for client stay.",
      ],
      sheets: [
        { img: "assets/current/vinesh-floor-1.jpg", label: "Ground Floor" },
        { img: "assets/current/vinesh-floor-2.jpg", label: "First Floor" },
        { img: "assets/current/vinesh-floor-3.jpg", label: "Second Floor" },
        { img: "assets/current/vinesh-floor-4.jpg", label: "Third & Fourth Floor" },
        { img: "assets/current/vinesh-floor-5.jpg", label: "Terrace & Client Accommodation" },
      ]
    },
    {
      id: "keethireddypalli",
      group: "current",
      title: "Keethireddypalli Farmhouse",
      subtitle: "Floor Plan & Space Planning · Praveen Architects",
      cover: "assets/current/farmhouse-plan1-ground.jpg",
      role: "Floor plan design and space planning per client requirement",
      tools: ["AutoCAD", "Photoshop"],
      description: "Two alternate G+1 farmhouse layouts developed for the client to choose between — each with a pool, a landscaped lawn, and multi-car parking, but different approaches to the driveway, pool geometry, and room arrangement.",
      details: [
        "Plan 1 — a rectilinear layout with a large square lawn, a straight parking bay, and a rectangular pool bordering the living spaces.",
        "Plan 2 — a more resort-like layout with a curved entry driveway, organic freeform ponds, and a rectangular pool set closer to the main living block.",
      ],
      sheets: [
        { img: "assets/current/farmhouse-plan1-ground.jpg", label: "Option 1 — Ground Floor" },
        { img: "assets/current/farmhouse-plan1-first.jpg", label: "Option 1 — First Floor" },
        { img: "assets/current/farmhouse-plan2-ground.jpg", label: "Option 2 — Ground Floor" },
        { img: "assets/current/farmhouse-plan2-first.jpg", label: "Option 2 — First Floor" },
      ]
    },
    {
      id: "yedukondalu",
      group: "current",
      title: "Mr. Yedukondalu Residence",
      subtitle: "Facade Design · Praveen Architects",
      cover: "assets/current/yedukondalu-1.jpg",
      role: "Facade design with vertical louvers and lighting",
      tools: ["SketchUp", "Enscape", "Photoshop"],
      description: "Facade design built around vertical timber louvers with a circular cut-out near the balcony, minimal stone cladding, and cove lighting — explored across several closely related elevation variations for the same building.",
      details: [
        "A signature circular window punched through the louvered screen, paired with dark stone cladding accents framed in linear cove light.",
        "Several minimal variations on the same facade language, refining proportions and material balance across the elevation.",
      ],
      sheets: [
        { img: "assets/current/yedukondalu-1.jpg", label: "Elevation — Variation 1" },
        { img: "assets/current/yedukondalu-2.jpg", label: "Elevation — Variation 2" },
        { img: "assets/current/yedukondalu-3.jpg", label: "Elevation — Variation 3" },
        { img: "assets/current/yedukondalu-4.jpg", label: "Elevation — Variation 4" },
        { img: "assets/current/yedukondalu-5.jpg", label: "Elevation — Variation 5" },
      ]
    },
  ]
};
