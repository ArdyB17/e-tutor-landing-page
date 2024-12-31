export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "For Students",
    link: "#",
    children: [
      { id: 'st1', title: 'Find Tutors', link: '#' },
      { id: 'st2', title: 'Study Resources', link: '#' },
      { id: 'st3', title: 'Schedule Classes', link: '#' }
    ]
  },
  {
    id: 3,
    title: "Resources",
    link: "#",
    children: [
      { id: 'r1', title: 'Blog', link: '#' },
      { id: 'r2', title: 'Tutorials', link: '#' },
      { id: 'r3', title: 'FAQs', link: '#' }
    ]
  },
  {
    id: 4,
    title: "About us",
    link: "#",
  },
  {
    id: 5,
    title: "Contact us",
    link: "#",
  }
];

export const authButtons = {
  signIn: {
    title: "Sign In",
    link: "/signin",
  },
  register: {
    title: "Register",
    link: "/register",
  }
};


export const TestimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science Student",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "E-Tutor has completely transformed my learning experience. The personalized approach and expert tutors helped me excel in my programming courses.",
    rating: 5,
    subject: "Programming",
    university: "Stanford University"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Engineering Student",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "The flexibility of learning at my own pace combined with the quality of instruction is unmatched. I've improved significantly in my studies.",
    rating: 5,
    subject: "Engineering",
    university: "MIT"
  },
  {
    id: 3,
    name: "Emily Martinez",
    role: "Mathematics Student",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "The tutors here are incredibly knowledgeable and patient. They break down complex concepts into easily digestible pieces.",
    rating: 5,
    subject: "Mathematics",
    university: "Harvard University"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Physics Student",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "I was struggling with advanced physics concepts until I found E-Tutor. The interactive sessions and practice problems made all the difference.",
    rating: 5,
    subject: "Physics",
    university: "Berkeley"
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Data Science Student",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    text: "The platform is user-friendly and the tutors are always available when I need help. It's been invaluable for my studies.",
    rating: 5,
    subject: "Data Science",
    university: "Cornell University"
  },
  {
    id: 6,
    name: "James Anderson",
    role: "Chemistry Student",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    text: "The quality of education and support I've received here is outstanding. It's helped me maintain my top grades consistently.",
    rating: 5,
    subject: "Chemistry",
    university: "Yale University"
  }
];