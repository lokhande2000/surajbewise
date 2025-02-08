import { FORM_VALIDATION_MESSAGES } from '@/constants/form';
import { FormData, FormErrors } from '@/types/form';

export const validateContactForm = (formData: FormData): FormErrors => {
  const newErrors: FormErrors = {};
  const { Name, institutionName, phoneNumber, email } = formData;

  if (!Name.trim()) newErrors.Name = FORM_VALIDATION_MESSAGES.NAME_REQUIRED;
  if (!institutionName.trim()) newErrors.institutionName = FORM_VALIDATION_MESSAGES.INSTITUTION_REQUIRED;
  if (!phoneNumber.trim()) {
    newErrors.phoneNumber = FORM_VALIDATION_MESSAGES.PHONE_REQUIRED;
  } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
    newErrors.phoneNumber = FORM_VALIDATION_MESSAGES.PHONE_INVALID;
  }
  if (!email.trim()) {
    newErrors.email = FORM_VALIDATION_MESSAGES.EMAIL_REQUIRED;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = FORM_VALIDATION_MESSAGES.EMAIL_INVALID;
  }

  return newErrors;
};
