// data/servicedata.ts
import { FiActivity, FiUser, FiHeart, FiFeather, FiWind, FiDroplet, FiEye, FiScissors, FiSmile, FiThermometer, FiZap } from 'react-icons/fi';

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const services: Service[] = [
  {
    title: 'Gynecological Disorders & Infertility',
    description: 'Treatment for menstrual irregularities, PCOD, leucorrhea, uterine fibroids, breast disorders, recurrent miscarriages, and anemia.',
    icon: FiHeart,
  },
  {
    title: 'Male Health Issues',
    description: 'Addressing sperm deficiencies, lack of libido, nerve weakness, and prostate problems.',
    icon: FiUser,
  },
  {
    title: 'Bone, Joint & Muscle Disorders',
    description: 'Management of neck pain, cervical issues, disc problems, sciatica, knee pain, heel pain, arthritis, and numbness in limbs.',
    icon: FiActivity,
  },
  {
    title: 'Mental Health',
    description: 'Treatment for headaches, migraines, dizziness, insomnia, anxiety, stress, and memory issues.',
    icon: FiSmile,
  },
  {
    title: 'Skin Disorders',
    description: 'Care for allergies, itching, eczema, acne, and psoriasis.',
    icon: FiFeather,
  },
  {
    title: 'Anorectal Disorders',
    description: 'Treatment for hemorrhoids and fissures.',
    icon: FiDroplet,
  },
  {
    title: 'Digestive Disorders',
    description: 'Management of bloating, indigestion, acidity, constipation, liver issues, and appetite loss.',
    icon: FiThermometer,
  },
  {
    title: 'Urinary Disorders',
    description: 'Care for kidney stones, burning urination, frequent urination, and urinary infections.',
    icon: FiDroplet,
  },
  {
    title: 'Respiratory Disorders',
    description: 'Treatment for asthma, chronic cough, cold, and pneumonia.',
    icon: FiWind,
  },
  {
    title: 'Hair Disorders',
    description: 'Addressing hair fall, premature graying, and dandruff.',
    icon: FiScissors,
  },
  {
    title: 'Metabolic & Lifestyle Disorders',
    description: 'Management of obesity, high cholesterol, thyroid issues, hypertension, diabetes, heart diseases, kidney problems, and edema.',
    icon: FiZap,
  },
  {
    title: 'Eye Disorders',
    description: 'Treatment for various eye-related issues.',
    icon: FiEye,
  },
];
