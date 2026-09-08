export interface CreditItem {
  id: string;
  category: string;
  title: string;
  details: string;
  networkOrStudio: string;
  accoladeOrEpisodes: string;
  accentBorder: 'dark' | 'sand';
}

export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  price: string;
  description: string;
  focusAreas: string[];
  deliverables: string;
}

export interface RepresentationContact {
  type: string;
  agency: string;
  addressLine1: string;
  addressLine2: string;
  email?: string;
  notes?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  link: string;
  objective: string;
  notes: string;
}
