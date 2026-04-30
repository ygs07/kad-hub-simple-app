import type { ICTClass } from '../types';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const CLASSES: ICTClass[] = [
  {
    id: '1',
    name: 'Frontend Web Development',
    description: 'Master modern web development with Vue.js, Tailwind CSS, and Vite.',
    price: 0,
    startTime: '09:00',
    endTime: '11:00',
    days: WEEKDAYS,
    capacity: 20,
    currentStudents: 15,
    category: 'Development'
  },
  {
    id: '2',
    name: 'Python for Data Science',
    description: 'Learn data analysis, visualization, and machine learning with Python.',
    price: 50000,
    startTime: '11:30',
    endTime: '13:30',
    days: WEEKDAYS,
    capacity: 20,
    currentStudents: 18,
    category: 'Data'
  },
  {
    id: '3',
    name: 'Cyber Security Fundamentals',
    description: 'Understand the basics of network security, cryptography, and ethical hacking.',
    price: 75000,
    startTime: '14:00',
    endTime: '16:00',
    days: WEEKDAYS,
    capacity: 20,
    currentStudents: 20, // Full
    category: 'Security'
  },
  {
    id: '4',
    name: 'UI/UX Design Masterclass',
    description: 'Design beautiful and user-friendly interfaces using Figma and Adobe XD.',
    price: 0,
    startTime: '09:00',
    endTime: '11:00',
    days: WEEKDAYS,
    capacity: 20,
    currentStudents: 10,
    category: 'Design'
  },
  {
    id: '5',
    name: 'Mobile App Development (Flutter)',
    description: 'Build high-performance cross-platform mobile apps with Flutter and Dart.',
    price: 60000,
    startTime: '11:30',
    endTime: '13:30',
    days: WEEKDAYS,
    capacity: 20,
    currentStudents: 5,
    category: 'Development'
  },
  {
    id: '6',
    name: 'Cloud Computing with AWS',
    description: 'Learn to deploy and manage scalable applications on Amazon Web Services.',
    price: 100000,
    startTime: '14:00',
    endTime: '16:00',
    days: WEEKDAYS,
    capacity: 20,
    currentStudents: 12,
    category: 'Cloud'
  }
];
