import React from 'react';
import { IconType } from 'react-icons';
import { FaBook, FaRegFileAlt, FaRobot, FaVideo, FaTv, FaShareAlt } from 'react-icons/fa';

export type ProcessStep = {
  id: number;
  number: string;
  title: string;
  description: string;
  iconName: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: '1',
    title: 'Understand Your Brand',
    description: 'We learn about your brand, target audience, and content goals through a detailed consultation.',
    iconName: 'book',
  },
  {
    id: 2,
    number: '2',
    title: 'AI Script Creation',
    description: 'Our AI generates engaging video scripts tailored to your brand voice and audience interests.',
    iconName: 'file',
  },
  {
    id: 3,
    number: '3',
    title: 'AI Avatars & Voiceover',
    description: 'We create professional AI avatars and natural-sounding voiceovers to bring your content to life.',
    iconName: 'robot',
  },
  {
    id: 4,
    number: '4',
    title: 'Professional Editing',
    description: 'Our editing team in Philippines and India transforms raw content into polished, engaging videos.',
    iconName: 'video',
  },
  {
    id: 5,
    number: '5',
    title: 'Multi-Format Creation',
    description: 'We create both long-form content and 3-5 short-form clips optimized for different platforms.',
    iconName: 'tv',
  },
  {
    id: 6,
    number: '6',
    title: 'Cross-Platform Publishing',
    description: 'We publish your videos across YouTube, TikTok, Instagram, LinkedIn, Twitter and Facebook.',
    iconName: 'share',
  },
]; 