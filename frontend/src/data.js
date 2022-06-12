import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { MdDashboard } from 'react-icons/md';
import { TiDocumentAdd } from 'react-icons/ti';

// Navbar Nab Item
export const navItem = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'About us',
    path: '/about',
  },
  {
    id: 3,
    title: 'Projects',
    path: '/projects',
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact',
  },
  {
    id: 4,
    title: 'Admin',
    path: '/admin/dashboard',
  },
];

export const navSignupLogin = [
  {
    id: 1,
    title: 'Login',
    path: '/login',
  },
  {
    id: 2,
    title: 'Signup',
    path: '/signup',
  },
];

// Fake Service Data
export const serviceData = [
  {
    _id: 1,
    name: 'Office Interior Design',
    price: 299,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    icon: '/images/icons/service-1.png',
  },
  {
    _id: 2,
    name: 'Showroom Design',
    price: 355,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    icon: '/images/icons/service-2.png',
  },
  {
    _id: 3,
    name: 'Residential/ Home',
    price: 200,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    icon: '/images/icons/service-3.png',
  },
];

// Fake Projects Data
export const projectData = [
  {
    _id: 1,
    name: 'Villa on Washington Avenue',
    location: 'Dhaka, Bangladesh',
    images: [
      {
        url: '/images/project-1.png',
      },
    ],
  },
  {
    _id: 2,
    name: 'Luxury villa in Rego Park',
    location: 'Dhaka, Bangladesh',
    images: [
      {
        url: '/images/project-2.png',
      },
    ],
  },
  {
    _id: 3,
    name: 'Gorgeous house',
    location: 'Dhaka, Bangladesh',
    images: [
      {
        url: '/images/project-3.png',
      },
    ],
  },
];

// Fake Testimonial user reviews
export const reviewsData = [
  {
    _id: 1,
    name: 'Nash Patrik',
    title: 'CEO, Manpol',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    image: '/images/user-1.png',
  },
  {
    _id: 2,
    name: 'Miriam Barron',
    title: 'CEO, Manpol',
    review: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    image: '/images/user-2.png',
  },
  {
    _id: 3,
    name: 'Bria Malone',
    title: 'CEO, Manpol',
    review: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    image: '/images/user-3.png',
  },
  {
    _id: 4,
    name: 'Miriam Barron',
    title: 'CEO, Manpol',
    review: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    image: '/images/user-2.png',
  },
  {
    _id: 5,
    name: 'Bria Malone',
    title: 'CEO, Manpol',
    review: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    image: '/images/user-3.png',
  },
  {
    _id: 6,
    name: 'Nash Patrik',
    title: 'CEO, Manpol',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    image: '/images/user-1.png',
  },
  {
    _id: 7,
    name: 'Miriam Barron',
    title: 'CEO, Manpol',
    review: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    image: '/images/user-2.png',
  },
];

// Admin Dashboard Sidebar
export const sidebarData = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: MdDashboard,
  },
  {
    id: 2,
    title: 'Add Services',
    path: '/admin/add-services',
    icon: TiDocumentAdd,
  },
  {
    id: 3,
    title: 'Order List',
    path: '/admin/order-list',
    icon: AiOutlineUnorderedList,
  },
  {
    id: 4,
    title: 'User List',
    path: '/user-list',
    icon: FiUsers,
  },
  {
    id: 4,
    title: 'Manage Services',
    path: '/admin/manage-services',
    icon: GoSettings,
  },
];
