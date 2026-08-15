import { doctorsRepository } from '../repositories/doctorsRepository.js';

export const doctorsService = {
  getDoctors: async () => {
    const doctors = await doctorsRepository.getAll();
    return doctors.map((doc: any) => ({
      ...doc,
      credentials: typeof doc.credentials === 'string' ? JSON.parse(doc.credentials) : doc.credentials,
    }));
  },
  getDoctorById: async (id: string) => {
    const doc = await doctorsRepository.getById(id);
    if (!doc) return null;
    return {
      ...doc,
      credentials: typeof doc.credentials === 'string' ? JSON.parse(doc.credentials) : doc.credentials,
    };
  },
};
