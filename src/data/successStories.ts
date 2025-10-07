export interface SuccessStory {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "From Wheelchair to Walking: Maria's Journey to Independence",
    excerpt: "After a severe stroke, Maria arrived at Meadowbrook unable to walk. Through dedicated physical therapy and our comprehensive care program, she regained her independence and returned home to her family.",
    content: "Maria Rodriguez, a 68-year-old grandmother, suffered a severe stroke that left her unable to walk or perform basic daily activities. When she arrived at Meadowbrook Rehabilitation, she was confined to a wheelchair and struggling with depression. Our multidisciplinary team, including physical therapists, occupational therapists, and speech therapists, worked together to create a personalized recovery plan. Through intensive therapy sessions, Maria gradually regained strength in her legs. The turning point came when she took her first steps with a walker after three weeks of dedicated work. Her family was overjoyed to see her progress, and after two months of comprehensive rehabilitation, Maria walked out of our facility independently. Today, she enjoys gardening with her grandchildren and credits Meadowbrook for giving her back her life.",
    author: "Dr. Sarah Johnson, Physical Therapist",
    date: "March 15, 2024",
    category: "Physical Recovery",
    image: "/images/care-services/hero.png",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Memory Care Success: Robert's Cognitive Improvement",
    excerpt: "Robert's family was concerned about his memory decline, but our specialized memory care program helped him maintain his cognitive abilities and quality of life.",
    content: "Robert Thompson, 82, was experiencing significant memory loss and confusion when his family brought him to Meadowbrook. His daughter was worried he might need to be moved to a more restrictive facility. Our memory care specialists conducted a comprehensive assessment and developed a personalized cognitive stimulation program. Through memory exercises, social activities, and medication management, Robert's cognitive function stabilized and even improved in some areas. The structured daily routine and engaging activities helped him maintain his independence while providing the support he needed. His family was amazed by the positive changes they saw during their visits. Robert now participates in group activities, maintains meaningful relationships with other residents, and his family feels confident in his care. The memory care program at Meadowbrook has given Robert and his family peace of mind and hope for the future.",
    author: "Dr. Michael Chen, Memory Care Specialist",
    date: "February 28, 2024",
    category: "Memory Care",
    image: "/images/care-services/memoryCare.png",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Cardiac Recovery: John's Return to Active Living",
    excerpt: "After triple bypass surgery, John was determined to get back to his active lifestyle. Our cardiac rehabilitation program helped him achieve his goals safely and effectively.",
    content: "John Williams, a 65-year-old retired teacher, underwent triple bypass surgery and was concerned about his ability to return to his active lifestyle. He had always been physically active, enjoying hiking and cycling, and was worried that his heart condition would limit these activities. Our cardiac rehabilitation team designed a comprehensive program that included monitored exercise, nutrition counseling, and stress management. John started with gentle exercises and gradually increased his activity level under careful supervision. The program included education about heart-healthy living and techniques for managing his condition. After completing the 12-week program, John was not only able to return to his favorite activities but was actually in better cardiovascular shape than before his surgery. He now leads a hiking group for other seniors and credits Meadowbrook's cardiac rehab program with giving him a new lease on life. His story inspires other patients facing similar challenges.",
    author: "Dr. Lisa Martinez, Cardiac Rehabilitation Specialist",
    date: "February 10, 2024",
    category: "Cardiac Recovery",
    image: "/images/care-services/cardio 1.png",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Occupational Therapy Triumph: Sarah's Return to Independence",
    excerpt: "A car accident left Sarah with limited hand function. Our occupational therapy team helped her regain the skills needed to live independently and return to work.",
    content: "Sarah Mitchell, a 34-year-old graphic designer, was involved in a serious car accident that resulted in significant hand and arm injuries. She was devastated at the thought of not being able to work or care for herself independently. Our occupational therapy team immediately began working with Sarah to assess her functional abilities and develop a comprehensive treatment plan. The therapy included hand exercises, adaptive equipment training, and work simulation activities. Sarah's determination, combined with our therapists' expertise, led to remarkable progress. She learned new ways to perform daily tasks and adapted her work techniques to accommodate her limitations. After six months of intensive therapy, Sarah not only returned to work but also started her own design business. She now volunteers at Meadowbrook, sharing her story with other patients and showing them that recovery is possible. Her success story demonstrates the power of occupational therapy in helping people reclaim their independence and pursue their dreams.",
    author: "Jennifer Adams, Occupational Therapist",
    date: "January 25, 2024",
    category: "Occupational Therapy",
    image: "/images/care-services/occupationalTherapy.png",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Long-term Care Excellence: The Johnson Family's Peace of Mind",
    excerpt: "When Mrs. Johnson needed long-term care, her family found comfort in knowing she was receiving compassionate, professional care at Meadowbrook.",
    content: "The Johnson family faced a difficult decision when their 89-year-old matriarch, Eleanor, required long-term care due to advanced dementia and mobility issues. They had tried home care but found it increasingly challenging to meet her complex needs. After touring several facilities, they chose Meadowbrook because of our reputation for compassionate care and family involvement. Eleanor's transition was made smooth by our dedicated staff, who took time to understand her preferences and routines. The family was impressed by the personalized care plan that addressed not just Eleanor's medical needs but also her emotional and social well-being. Regular family meetings kept everyone informed about her progress, and the staff's genuine care for Eleanor was evident in every interaction. Two years later, Eleanor is thriving in our community, participating in activities she enjoys, and her family has peace of mind knowing she's receiving the best possible care. The Johnson family often shares their positive experience with others facing similar decisions, recommending Meadowbrook as a place where dignity, respect, and quality of life are prioritized.",
    author: "Mary Thompson, Long-term Care Coordinator",
    date: "January 12, 2024",
    category: "Long-term Care",
    image: "/images/care-services/longTermCare.png",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Respite Care Relief: Supporting the Caregiver",
    excerpt: "When caring for her husband became overwhelming, Jane found the support she needed through our respite care program, allowing her to recharge while ensuring quality care for her loved one.",
    content: "Jane Peterson had been caring for her husband, Frank, who has Parkinson's disease, for over five years. The physical and emotional demands of caregiving were taking a toll on her health and well-being. She was hesitant to seek help, feeling guilty about needing a break from caring for her husband. Our respite care program provided the perfect solution. Frank stayed with us for two weeks while Jane took a much-needed vacation to visit her children. During his stay, Frank received excellent care and even participated in activities he enjoyed. The experience was so positive that Jane now regularly uses our respite care services, allowing her to maintain her own health while ensuring Frank receives the best possible care. She often tells other caregivers that taking care of yourself is not selfish—it's necessary to be the best caregiver you can be. Our respite care program has given Jane the support she needed to continue caring for Frank at home while maintaining her own quality of life.",
    author: "Susan Davis, Respite Care Coordinator",
    date: "December 20, 2023",
    category: "Respite Care",
    image: "/images/care-services/respiteCarepng.png",
    readTime: "3 min read"
  }
];

export const categories = ["All", "Physical Recovery", "Memory Care", "Cardiac Recovery", "Occupational Therapy", "Long-term Care", "Respite Care"];
