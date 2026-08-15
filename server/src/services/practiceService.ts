import { practiceRepository } from '../repositories/practiceRepository.js';

export const practiceService = {
  getPracticeInfo: async () => {
    const practice = await practiceRepository.getPractice();
    if (!practice) {
      // Fallback object if seed hasn't been run yet
      return {
        id: 'harmony-dental-id',
        name: 'Harmony Dental Care',
        specialty: 'Comprehensive & Cosmetic Dentistry',
        description: 'Personalized dental care built around listening, clear guidance, and treatment plans designed specifically for your long-term oral health.',
        phone: '+1 (555) 234-5678',
        email: 'hello@harmonydental.demo',
        address: '123 Healthcare Way, Suite 400',
        city: 'San Diego',
        state: 'CA',
        country: 'USA',
        postalCode: '92101',
        timezone: 'America/Los_Angeles',
        website: 'https://harmonydental.demo',
      };
    }
  return practice;
  },
};
