export interface Email {
    id_email: number;
    name_email: string;
    email: string;
    status: 'pendiente' | 'revisado';
    description: string;
    phone_number: string;
  }
  