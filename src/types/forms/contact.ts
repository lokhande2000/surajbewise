export interface FormData {
  Name: string;
  institutionName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export interface FormErrors {
  Name?: string;
  institutionName?: string;
  phoneNumber?: string;
  email?: string;
}

export interface ContactFormProps {
  text: string;
  onClose: () => void;
}
