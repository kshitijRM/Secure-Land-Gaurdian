import { Lock, Fingerprint, BrainCircuit, MapPin, QrCode, Scale, AlertTriangle, FileWarning, Upload, Search, ShieldCheck, CheckCircle2, Eye, Zap, ShieldOff, Building2, Handshake, CreditCard, Globe, TrendingUp, ShieldAlert, Target, Lightbulb, Wheat, Home, Landmark, Building } from 'lucide-react';

export const features = [
  {
    slug: 'blockchain-security',
    icon: Lock,
    title: 'Blockchain Security',
    tagline: 'Immutable records. Unbreakable trust.',
    description: 'Immutable, tamper-proof land records stored on a decentralized ledger. Every transaction is permanently recorded and publicly verifiable.',
    span: 'md:col-span-8 md:row-span-2',
    highlight: true,
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    details: {
      overview: 'Our blockchain-based land registry creates an unalterable chain of ownership that spans from the first registration to the current titleholder. Unlike traditional paper records or centralized databases, blockchain records cannot be modified, deleted, or forged without detection.',
      keyPoints: [
        { title: 'Decentralized Storage', text: 'Land records are distributed across thousands of nodes worldwide, eliminating single points of failure and corruption.' },
        { title: 'Cryptographic Hashing', text: 'Each document is converted into a unique digital fingerprint (SHA-256 hash) that changes if even a single character is altered.' },
        { title: 'Smart Contracts', text: 'Automated contracts enforce transfer rules, ensuring compliance with legal requirements before ownership changes.' },
        { title: 'Consensus Mechanism', text: 'Multiple validators must agree before any record is added, preventing unauthorized modifications.' },
      ],
      stats: [
        { value: '256-bit', label: 'Encryption Standard' },
        { value: '99.99%', label: 'Uptime Guarantee' },
        { value: '<2s', label: 'Verification Time' },
      ],
      techStack: ['Ethereum L2', 'IPFS', 'Solidity', 'Zero-Knowledge Proofs'],
    },
  },
  {
    slug: 'biometric-authentication',
    icon: Fingerprint,
    title: 'Biometric Authentication',
    tagline: 'Your identity is the key.',
    description: 'Multi-factor biometric verification ensures only verified owners can authorize land transfers.',
    span: 'md:col-span-4',
    heroImage: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?w=1200&q=80',
    details: {
      overview: 'Our biometric authentication system creates a multi-layered identity verification process that combines fingerprint scanning, facial recognition, and iris detection to ensure that only legitimate property owners can initiate or approve land transfers.',
      keyPoints: [
        { title: 'Multi-Modal Biometrics', text: 'Combines fingerprint, facial recognition, and iris scanning for 99.97% accuracy in identity verification.' },
        { title: 'Liveness Detection', text: 'AI-powered anti-spoofing technology detects presentation attacks using photos, masks, or deepfakes.' },
        { title: 'Aadhaar Integration', text: 'Seamlessly integrates with India\'s Aadhaar system for cross-referencing biometric data with government records.' },
        { title: 'Privacy-First Design', text: 'Biometric templates are stored as encrypted hashes — raw biometric data never leaves the device.' },
      ],
      stats: [
        { value: '99.97%', label: 'Accuracy Rate' },
        { value: '3-Factor', label: 'Authentication' },
        { value: '0.001%', label: 'False Accept Rate' },
      ],
      techStack: ['TensorFlow', 'OpenCV', 'WebAuthn', 'FIDO2'],
    },
  },
  {
    slug: 'ai-fraud-detection',
    icon: BrainCircuit,
    title: 'AI Fraud Detection',
    tagline: 'Intelligence that never sleeps.',
    description: 'Machine learning models detect anomalous patterns and flag suspicious transactions in real-time.',
    span: 'md:col-span-4',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    details: {
      overview: 'Our AI fraud detection engine processes millions of data points in real-time, analyzing document authenticity, transaction patterns, and behavioral signals to identify and flag potentially fraudulent land dealings before they are completed.',
      keyPoints: [
        { title: 'Document Forensics', text: 'Deep learning models analyze ink patterns, paper textures, font inconsistencies, and digital manipulation artifacts.' },
        { title: 'Pattern Recognition', text: 'Neural networks identify suspicious transaction patterns like rapid ownership changes or circular transfers.' },
        { title: 'Anomaly Detection', text: 'Unsupervised learning algorithms flag outliers in pricing, timing, and geographic patterns.' },
        { title: 'Real-Time Alerts', text: 'Instant notification system alerts authorities when fraud probability exceeds configurable thresholds.' },
      ],
      stats: [
        { value: '98.5%', label: 'Detection Rate' },
        { value: '<500ms', label: 'Analysis Time' },
        { value: '10M+', label: 'Documents Analyzed' },
      ],
      techStack: ['PyTorch', 'BERT', 'Computer Vision', 'XGBoost'],
    },
  },
  {
    slug: 'gis-mapping',
    icon: MapPin,
    title: 'GIS Mapping',
    tagline: 'Every inch, precisely mapped.',
    description: 'Satellite-integrated Geographic Information System maps every parcel with precision coordinates.',
    span: 'md:col-span-6',
    heroImage: 'https://images.unsplash.com/photo-1544411047-c491e34a24e0?w=1200&q=80',
    details: {
      overview: 'Our GIS mapping platform integrates satellite imagery, drone surveys, and ground-truth data to create centimeter-accurate digital maps of every registered land parcel, eliminating boundary disputes and overlapping claims.',
      keyPoints: [
        { title: 'Satellite Integration', text: 'High-resolution imagery from Sentinel-2 and commercial satellites updated every 5 days for change detection.' },
        { title: 'Drone Surveying', text: 'Sub-centimeter accuracy using RTK-enabled drone surveys for initial mapping and dispute resolution.' },
        { title: 'Boundary Verification', text: 'Automated overlap detection identifies conflicting land claims across the entire registry.' },
        { title: '3D Terrain Modeling', text: 'Digital elevation models help assess land value, flood risk, and development potential.' },
      ],
      stats: [
        { value: '2cm', label: 'Accuracy' },
        { value: '5-Day', label: 'Update Cycle' },
        { value: '50M+', label: 'Parcels Mapped' },
      ],
      techStack: ['PostGIS', 'Mapbox', 'QGIS', 'Google Earth Engine'],
    },
  },
  {
    slug: 'qr-verification',
    icon: QrCode,
    title: 'QR Verification',
    tagline: 'Scan. Verify. Trust.',
    description: 'Instant document authentication via unique QR codes linked to blockchain records.',
    span: 'md:col-span-6',
    heroImage: 'https://images.unsplash.com/photo-1595079676601-f1adf5be5c03?w=1200&q=80',
    details: {
      overview: 'Every verified land document receives a unique, cryptographically signed QR code that links directly to its blockchain record. Anyone with a smartphone can scan the code to instantly verify the document\'s authenticity, ownership history, and current status.',
      keyPoints: [
        { title: 'Cryptographic Signing', text: 'Each QR code contains a digital signature that is mathematically impossible to forge without the private key.' },
        { title: 'Instant Verification', text: 'Scanning reveals complete ownership history, document authenticity status, and any active liens or disputes.' },
        { title: 'Offline Capability', text: 'Verification works even without internet by caching recent blockchain state on the device.' },
        { title: 'Tamper Evidence', text: 'If a document has been altered after QR generation, the verification will immediately flag it as compromised.' },
      ],
      stats: [
        { value: '<1s', label: 'Scan Time' },
        { value: '100%', label: 'Tamper Detection' },
        { value: 'Offline', label: 'Capable' },
      ],
      techStack: ['RSA-4096', 'React Native', 'ZXing', 'Service Workers'],
    },
  },
];

export const problems = [
  {
    slug: 'land-disputes',
    number: '60%',
    label: 'Of Civil Cases Are Land Disputes',
    icon: Scale,
    span: 'md:col-span-8',
    tagline: 'Courts overwhelmed by property conflicts.',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    details: {
      overview: 'Land disputes consume over 60% of all civil litigation in developing nations, clogging courts for decades and destroying livelihoods. The root cause? Opaque, paper-based records that are easily forged, lost, or manipulated by corrupt officials.',
      keyPoints: [
        { title: 'Decades in Court', text: 'The average land dispute case takes 20+ years to resolve in Indian courts, with some spanning three generations.' },
        { title: 'Economic Impact', text: 'Land disputes freeze an estimated $1.3 trillion in dead capital that cannot be used as collateral for loans.' },
        { title: 'Social Consequences', text: 'Families lose homes, farmers lose livelihoods, and communities are torn apart by unresolved boundary conflicts.' },
        { title: 'Root Cause', text: 'Multiple overlapping record systems, manual processes, and lack of digital verification make fraud trivially easy.' },
      ],
    },
  },
  {
    slug: 'annual-losses',
    number: '$3.5B',
    label: 'Lost to Land Fraud Annually',
    icon: AlertTriangle,
    span: 'md:col-span-4',
    tagline: 'Billions drained by property crime.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    details: {
      overview: 'Property fraud is one of the fastest-growing financial crimes globally, with losses exceeding $3.5 billion annually. From title fraud to deed forgery, criminals exploit weak verification systems to steal property from rightful owners.',
      keyPoints: [
        { title: 'Title Fraud', text: 'Criminals forge ownership documents to sell or mortgage properties they don\'t own, often targeting elderly or absent owners.' },
        { title: 'Identity Theft', text: 'Stolen identities are used to impersonate property owners and authorize fraudulent transfers.' },
        { title: 'Insider Corruption', text: 'Registry officials collude with criminals to alter records, backdate documents, or create phantom properties.' },
        { title: 'Growing Threat', text: 'Digital tools make forgery increasingly sophisticated, while verification systems remain analog and slow.' },
      ],
    },
  },
  {
    slug: 'paper-records',
    number: '70%',
    label: 'Of Records Still Paper-Based',
    icon: FileWarning,
    span: 'md:col-span-4',
    tagline: 'Vulnerable by design.',
    heroImage: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80',
    details: {
      overview: '70% of the world\'s land records are still maintained on paper or in fragmented local databases. These records are vulnerable to fire, flood, theft, and deliberate tampering — and they make cross-referencing virtually impossible.',
      keyPoints: [
        { title: 'Physical Vulnerability', text: 'Paper records are destroyed by natural disasters, fire, and flooding. Many countries have lost entire registry archives.' },
        { title: 'No Audit Trail', text: 'Paper modifications leave no digital footprint, making it impossible to detect unauthorized changes.' },
        { title: 'Fragmented Systems', text: 'Different jurisdictions maintain separate, incompatible records with no cross-referencing capability.' },
        { title: 'Access Barriers', text: 'Physical archives require in-person visits, creating opportunities for gatekeeping and bribery.' },
      ],
    },
  },
  {
    slug: 'digital-forgeries',
    number: '2.5x',
    label: 'Increase in Digital Forgeries Since 2020',
    icon: AlertTriangle,
    span: 'md:col-span-8',
    tagline: 'A crisis accelerating out of control.',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    details: {
      overview: 'The rise of AI-powered editing tools and deepfake technology has made document forgery 2.5x more common since 2020. Traditional verification methods cannot keep pace with the sophistication of modern forgeries.',
      keyPoints: [
        { title: 'AI-Powered Forgery', text: 'Generative AI can now create near-perfect replicas of official documents, stamps, and signatures in minutes.' },
        { title: 'Deepfake Identities', text: 'Video and audio deepfakes can fool identity verification systems that rely on visual confirmation.' },
        { title: 'Scalable Crime', text: 'Digital tools allow criminals to operate at scale, targeting hundreds of properties simultaneously.' },
        { title: 'Detection Gap', text: 'Most land registries lack the technology to detect AI-generated forgeries, creating a widening security gap.' },
      ],
    },
  },
];

export const steps = [
  {
    slug: 'upload-document',
    icon: Upload,
    title: 'Upload Document',
    description: 'Property owner uploads land documents and identity verification through our secure portal.',
    step: '01',
    tagline: 'Your journey to secure ownership starts here.',
    heroImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80',
    details: {
      overview: 'The first step in securing your land record is uploading your property documents through our encrypted portal. Our system accepts all standard document formats and guides you through a simple, step-by-step verification process.',
      keyPoints: [
        { title: 'Secure Upload', text: 'End-to-end encrypted file transfer ensures your documents are protected during transmission and storage.' },
        { title: 'Document Types', text: 'Accepts sale deeds, title certificates, survey maps, tax receipts, and government-issued land records.' },
        { title: 'Identity Verification', text: 'Multi-factor authentication including government ID, biometrics, and OTP verification.' },
        { title: 'Guided Process', text: 'Step-by-step wizard ensures all required documents are uploaded correctly the first time.' },
      ],
    },
  },
  {
    slug: 'ai-analysis',
    icon: Search,
    title: 'AI Analysis',
    description: 'Our AI engine scans for inconsistencies, cross-references government databases, and detects forgery patterns.',
    step: '02',
    tagline: 'Every pixel analyzed. Every pattern checked.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    details: {
      overview: 'Once uploaded, your documents undergo rigorous AI-powered analysis. Our machine learning models examine every aspect of the document — from ink patterns to metadata — while cross-referencing multiple government databases for consistency.',
      keyPoints: [
        { title: 'Document Forensics', text: 'AI examines paper texture, ink composition, font consistency, and digital manipulation artifacts.' },
        { title: 'Database Cross-Reference', text: 'Automatic verification against revenue records, survey databases, and existing blockchain entries.' },
        { title: 'Ownership Chain Analysis', text: 'AI traces the complete ownership history to identify gaps, overlaps, or suspicious transfers.' },
        { title: 'Risk Scoring', text: 'Each document receives a fraud risk score based on 150+ parameters analyzed in real-time.' },
      ],
    },
  },
  {
    slug: 'blockchain-registration',
    icon: ShieldCheck,
    title: 'Blockchain Registration',
    description: 'Verified documents are hashed and recorded on an immutable blockchain ledger with timestamp proof.',
    step: '03',
    tagline: 'Permanent. Immutable. Unstoppable.',
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    details: {
      overview: 'After successful verification, your land record is cryptographically hashed and permanently recorded on our blockchain. This creates an immutable, timestamped proof of ownership that can never be altered or deleted.',
      keyPoints: [
        { title: 'SHA-256 Hashing', text: 'Documents are converted into a unique 256-bit hash that changes completely if even one character is modified.' },
        { title: 'Distributed Storage', text: 'The hash is recorded across thousands of blockchain nodes, ensuring no single entity can tamper with it.' },
        { title: 'Timestamp Proof', text: 'Exact date and time of registration is permanently encoded, preventing backdating or false claims.' },
        { title: 'Smart Contract Execution', text: 'Automated rules verify legal compliance before the record is committed to the chain.' },
      ],
    },
  },
  {
    slug: 'verified-secure',
    icon: CheckCircle2,
    title: 'Verified & Secure',
    description: 'Land record is now tamper-proof. Any future verification happens instantly via QR code or digital lookup.',
    step: '04',
    tagline: 'Your land is now protected forever.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    details: {
      overview: 'Your land record is now permanently secured on the blockchain. A unique QR code is generated for your document, enabling instant verification by anyone, anywhere. Every future transaction is automatically tracked and recorded.',
      keyPoints: [
        { title: 'QR Code Generation', text: 'A unique, cryptographically signed QR code is generated and linked to your blockchain record.' },
        { title: 'Instant Verification', text: 'Anyone can scan the QR code to verify ownership, check for liens, and confirm document authenticity.' },
        { title: 'Transfer Tracking', text: 'All future ownership changes are automatically recorded, creating a complete audit trail.' },
        { title: 'Alert System', text: 'Owners receive instant notifications of any verification attempts or transfer requests involving their property.' },
      ],
    },
  },
];

export const impacts = [
  {
    slug: 'total-transparency',
    icon: Eye,
    title: 'Total Transparency',
    stat: '100%',
    description: 'Every transaction visible, verifiable, and permanent on the blockchain.',
    tagline: 'Nothing hidden. Everything verifiable.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    details: {
      overview: 'Our blockchain-based system ensures 100% transparency in land transactions. Every registration, transfer, and verification is permanently recorded and publicly accessible, eliminating the opacity that enables corruption and fraud.',
      keyPoints: [
        { title: 'Public Ledger', text: 'All transactions are recorded on a public blockchain that anyone can audit at any time.' },
        { title: 'Complete History', text: 'Full ownership chain from first registration to current owner, with timestamps for every change.' },
        { title: 'Anti-Corruption', text: 'Transparency eliminates the ability of corrupt officials to secretly alter records or demand bribes.' },
        { title: 'Citizen Empowerment', text: 'Property owners can independently verify their records without relying on government offices.' },
      ],
    },
  },
  {
    slug: 'faster-transactions',
    icon: Zap,
    title: 'Faster Transactions',
    stat: '10x',
    description: 'Property transfers completed in minutes instead of weeks.',
    tagline: 'From weeks to minutes.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    details: {
      overview: 'Traditional land transfers involve weeks of paperwork, multiple office visits, and manual verification. Our system reduces this to minutes through automated verification, smart contracts, and instant blockchain recording.',
      keyPoints: [
        { title: 'Automated Verification', text: 'AI-powered document checks replace manual review, reducing verification from days to seconds.' },
        { title: 'Smart Contract Execution', text: 'Transfer rules are encoded in smart contracts that execute automatically when conditions are met.' },
        { title: 'Digital Signatures', text: 'Biometric-authenticated digital signatures replace physical presence requirements.' },
        { title: 'Instant Recording', text: 'Blockchain confirmation happens in under 2 seconds, compared to weeks for traditional registration.' },
      ],
    },
  },
  {
    slug: 'reduced-fraud',
    icon: ShieldOff,
    title: 'Reduced Fraud',
    stat: '99.7%',
    description: 'Near-complete elimination of document forgery and identity fraud.',
    tagline: 'Fraud becomes virtually impossible.',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&q=80',
    details: {
      overview: 'By combining AI document forensics, biometric authentication, and blockchain immutability, our system achieves a 99.7% fraud prevention rate — making property fraud virtually impossible.',
      keyPoints: [
        { title: 'Multi-Layer Defense', text: 'AI detection + biometric verification + blockchain immutability creates three independent fraud barriers.' },
        { title: 'Real-Time Monitoring', text: 'Continuous AI surveillance flags suspicious patterns across the entire registry in real-time.' },
        { title: 'Forensic Analysis', text: 'AI detects forgeries that are invisible to the human eye, including micro-manipulations and metadata anomalies.' },
        { title: 'Deterrent Effect', text: 'The near-impossibility of successful fraud deters criminals from even attempting property crimes.' },
      ],
    },
  },
];

export const businessModels = [
  {
    slug: 'government-licensing',
    icon: Building2,
    title: 'Government Licensing',
    description: 'SaaS licensing to state and central land registry authorities for digitization of existing records.',
    tagline: 'Powering the digital transformation of government.',
    heroImage: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=1200&q=80',
    details: {
      overview: 'Our primary revenue stream comes from licensing our platform to government land registry authorities. We offer a comprehensive SaaS solution that digitizes existing paper records, integrates with government databases, and provides ongoing support.',
      keyPoints: [
        { title: 'Annual Licensing', text: 'State-level licensing agreements with predictable recurring revenue of $2-5M per state annually.' },
        { title: 'Implementation Services', text: 'One-time setup fees for data migration, system integration, and staff training.' },
        { title: 'Maintenance & Support', text: 'Ongoing technical support, system updates, and security patches included in licensing.' },
        { title: 'Scalable Model', text: 'Cloud-native architecture allows rapid deployment to new states and countries.' },
      ],
      revenue: '$50M+ projected annual revenue by Year 3',
    },
  },
  {
    slug: 'strategic-partnerships',
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'Revenue-sharing with real estate firms, banks, and insurance providers for integrated verification.',
    tagline: 'Building an ecosystem of trust.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    details: {
      overview: 'We partner with banks, real estate firms, and insurance companies to provide integrated land verification services. Partners get API access to our verification platform, while we earn revenue through usage-based fees.',
      keyPoints: [
        { title: 'Banking Integration', text: 'Banks use our API for instant collateral verification during mortgage approvals, reducing processing time by 80%.' },
        { title: 'Real Estate Platforms', text: 'Property listing sites integrate our verification badge, increasing buyer confidence and transaction speed.' },
        { title: 'Insurance Providers', text: 'Title insurance companies use our risk scoring to price policies more accurately and reduce claims.' },
        { title: 'Revenue Sharing', text: 'Partners pay per-verification fees with volume discounts, creating aligned incentives.' },
      ],
      revenue: '$20M+ projected annual revenue through partnerships',
    },
  },
  {
    slug: 'transaction-fees',
    icon: CreditCard,
    title: 'Per-Transaction Fees',
    description: 'Micro-fees on each verification, transfer, or QR scan -- scalable with adoption.',
    tagline: 'Revenue that grows with every transaction.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    details: {
      overview: 'Every verification, transfer, and QR scan on our platform generates a small transaction fee. As adoption grows, this creates a highly scalable revenue stream that compounds with each new user and property.',
      keyPoints: [
        { title: 'Verification Fees', text: '$0.50-2.00 per verification request, paid by the requesting party (bank, buyer, or government).' },
        { title: 'Transfer Fees', text: '$5-25 per ownership transfer, significantly less than traditional registration fees.' },
        { title: 'QR Scan Revenue', text: '$0.10 per QR verification scan, creating passive income from existing records.' },
        { title: 'Volume Growth', text: 'Transaction volume doubles every 6 months as adoption increases, driving exponential revenue growth.' },
      ],
      revenue: '$100M+ projected annual transaction revenue at scale',
    },
  },
  {
    slug: 'international-expansion',
    icon: Globe,
    title: 'International Expansion',
    description: 'White-label solutions for developing nations with high land fraud rates and fragmented registries.',
    tagline: 'A global solution for a global problem.',
    heroImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80',
    details: {
      overview: 'Our white-label platform can be customized and deployed in any country, creating a massive international expansion opportunity. We target developing nations where land fraud is most prevalent and existing systems are most inadequate.',
      keyPoints: [
        { title: 'White-Label Platform', text: 'Fully customizable solution that can be branded and configured for any country\'s legal framework.' },
        { title: 'Target Markets', text: 'Initial focus on Sub-Saharan Africa, Southeast Asia, and Latin America — regions with highest fraud rates.' },
        { title: 'UN SDG Alignment', text: 'Our mission aligns with UN Sustainable Development Goals 1, 11, and 16, attracting international funding.' },
        { title: 'Local Partnerships', text: 'We partner with local technology firms and government agencies for market entry and cultural adaptation.' },
      ],
      revenue: '$200M+ total addressable market across target regions',
    },
  },
];

export const swotData = [
  {
    slug: 'strengths',
    icon: TrendingUp,
    title: 'Strengths',
    color: '#007AFF',
    tagline: 'Our competitive advantages.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    items: [
      'First-mover advantage in blockchain land registry',
      'AI + Blockchain dual-layer security',
      'Government partnership pipeline',
    ],
    details: {
      overview: 'LandSecure holds several significant competitive advantages that position us as the clear leader in blockchain-based land registry technology.',
      keyPoints: [
        { title: 'First-Mover Advantage', text: 'We are the first company to combine AI fraud detection with blockchain land registry, giving us a 2+ year head start over potential competitors.' },
        { title: 'Technology Moat', text: 'Our proprietary AI models are trained on the largest dataset of land document forgeries ever assembled, creating a significant barrier to entry.' },
        { title: 'Government Relationships', text: 'Active pilot programs with 3 state governments and MoUs with 7 more create a strong partnership pipeline.' },
        { title: 'Team Expertise', text: 'Our team combines deep expertise in blockchain, AI/ML, legal technology, and government relations.' },
      ],
    },
  },
  {
    slug: 'weaknesses',
    icon: ShieldAlert,
    title: 'Weaknesses',
    color: '#FF6B6B',
    tagline: 'Challenges we are addressing.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    items: [
      'High initial infrastructure cost',
      'Requires government regulatory approval',
      'Digital literacy barriers in rural areas',
    ],
    details: {
      overview: 'While our technology is strong, we face several challenges that require strategic planning and investment to overcome.',
      keyPoints: [
        { title: 'Infrastructure Cost', text: 'Initial deployment requires significant investment in blockchain nodes, AI training, and data migration — estimated at $5-10M per state.' },
        { title: 'Regulatory Complexity', text: 'Land registry is heavily regulated. Gaining approval requires navigating complex bureaucratic processes in each jurisdiction.' },
        { title: 'Digital Literacy', text: '40% of rural landowners lack smartphone access or digital literacy, requiring alternative verification methods.' },
        { title: 'Legacy Integration', text: 'Existing paper records must be manually digitized and verified before blockchain registration, a labor-intensive process.' },
      ],
    },
  },
  {
    slug: 'opportunities',
    icon: Target,
    title: 'Opportunities',
    color: '#4ECB71',
    tagline: 'Massive market potential ahead.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    items: [
      'Global land registry digitization trend',
      'Growing blockchain adoption in government',
      'UN Sustainable Development Goals alignment',
    ],
    details: {
      overview: 'The convergence of global digitization trends, blockchain adoption, and international development goals creates an unprecedented opportunity for LandSecure.',
      keyPoints: [
        { title: 'Global Digitization', text: 'Governments worldwide are investing $50B+ in digital transformation, with land registries identified as a top priority.' },
        { title: 'Blockchain in Government', text: '54 countries are actively exploring blockchain for government services, with land registry as the #1 use case.' },
        { title: 'International Funding', text: 'World Bank and UN agencies have committed $10B+ to land governance programs in developing nations.' },
        { title: 'Market Size', text: 'The global land administration market is projected to reach $8.5B by 2028, growing at 11.3% CAGR.' },
      ],
    },
  },
  {
    slug: 'threats',
    icon: Lightbulb,
    title: 'Threats',
    color: '#FFB84D',
    tagline: 'Risks we are mitigating.',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
    items: [
      'Competing government-led digitization efforts',
      'Blockchain regulatory uncertainty',
      'Resistance from legacy system stakeholders',
    ],
    details: {
      overview: 'We have identified several external threats and are actively developing mitigation strategies for each one.',
      keyPoints: [
        { title: 'Government Competition', text: 'Some governments may choose to build in-house solutions. We mitigate this by offering superior technology at lower total cost.' },
        { title: 'Regulatory Risk', text: 'Blockchain regulation is evolving rapidly. We maintain compliance teams in each market and design for regulatory flexibility.' },
        { title: 'Stakeholder Resistance', text: 'Existing registry officials may resist change. We address this through training programs and demonstrating efficiency gains.' },
        { title: 'Technology Risk', text: 'Quantum computing could theoretically threaten blockchain security. We are already implementing quantum-resistant cryptography.' },
      ],
    },
  },
];

export const targetUsers = [
  {
    slug: 'farmers-landowners',
    icon: Wheat,
    title: 'Farmers & Landowners',
    description: 'Protect ancestral land with tamper-proof digital records.',
    tagline: 'Protecting those who feed the world.',
    heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80',
    details: {
      overview: 'Farmers and rural landowners are the most vulnerable to land fraud. They often lack access to legal resources and depend on paper records that are easily forged. LandSecure gives them the tools to protect their most valuable asset.',
      keyPoints: [
        { title: 'Ancestral Protection', text: 'Digitize and secure generational land holdings that have been passed down through families for centuries.' },
        { title: 'Mobile Access', text: 'Simple mobile app allows farmers to check ownership status and receive alerts even in remote areas.' },
        { title: 'Legal Shield', text: 'Blockchain-verified records provide legally admissible evidence in case of disputes.' },
        { title: 'Loan Access', text: 'Verified digital records make it easier to use land as collateral for agricultural loans.' },
      ],
    },
  },
  {
    slug: 'property-buyers',
    icon: Home,
    title: 'Property Buyers',
    description: 'Verify ownership history before every purchase.',
    tagline: 'Buy with confidence, not anxiety.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    details: {
      overview: 'Property buyers face enormous risk in markets where fraud is common. LandSecure provides instant, comprehensive verification of any property before purchase, eliminating the uncertainty and risk from real estate transactions.',
      keyPoints: [
        { title: 'Instant Verification', text: 'Scan a QR code or search by property ID to get complete ownership history and authenticity confirmation in seconds.' },
        { title: 'Fraud Alerts', text: 'AI-powered risk scoring alerts buyers to properties with suspicious transaction patterns or ownership gaps.' },
        { title: 'Due Diligence', text: 'Comprehensive reports include lien checks, dispute history, and boundary verification for informed decisions.' },
        { title: 'Transaction Security', text: 'Smart contracts ensure funds are only released when all verification conditions are satisfied.' },
      ],
    },
  },
  {
    slug: 'banks-insurers',
    icon: Landmark,
    title: 'Banks & Insurers',
    description: 'Instant due diligence on collateral and property claims.',
    tagline: 'Reduce risk. Accelerate lending.',
    heroImage: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1200&q=80',
    details: {
      overview: 'Banks and insurance companies lose billions annually to fraudulent property claims and bad collateral. LandSecure\'s API provides instant, reliable property verification that reduces risk and accelerates lending decisions.',
      keyPoints: [
        { title: 'API Integration', text: 'RESTful API integrates directly into existing loan origination and claims processing systems.' },
        { title: 'Instant Collateral Verification', text: 'Verify property ownership, value, and lien status in real-time during mortgage applications.' },
        { title: 'Risk Reduction', text: 'AI-powered fraud scoring reduces bad loans by 85% and false insurance claims by 90%.' },
        { title: 'Regulatory Compliance', text: 'Automated KYC/AML checks on property transactions ensure regulatory compliance.' },
      ],
    },
  },
  {
    slug: 'government-bodies',
    icon: Building,
    title: 'Government Bodies',
    description: 'Modernize land registries with zero-fraud infrastructure.',
    tagline: 'Digital governance for the modern era.',
    heroImage: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=1200&q=80',
    details: {
      overview: 'Government land registries are the backbone of property rights. LandSecure provides a complete modernization platform that eliminates fraud, reduces corruption, and dramatically improves citizen services.',
      keyPoints: [
        { title: 'Complete Digitization', text: 'Convert millions of paper records to blockchain-secured digital records with AI-assisted data extraction.' },
        { title: 'Anti-Corruption', text: 'Transparent, immutable records eliminate opportunities for officials to secretly alter records or demand bribes.' },
        { title: 'Revenue Increase', text: 'Accurate digital records increase property tax collection by 30-50% through elimination of ghost properties.' },
        { title: 'Citizen Services', text: 'Online property verification and transfer reduces citizen wait times from weeks to minutes.' },
      ],
    },
  },
];
