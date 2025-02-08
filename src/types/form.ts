export interface FormData {
  firstName: string;
  institutionName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export interface FormErrors {
  firstName?: string;
  institutionName?: string;
  phoneNumber?: string;
  email?: string;
}

export interface ToastData {
  type: 'error' | 'success';
  message: string;
}

export interface ContactFormProps {
  text: string;
  onClose: () => void;
}
