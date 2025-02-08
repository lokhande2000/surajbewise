export const FORM_VALIDATION_MESSAGES = {
  NAME_REQUIRED: 'Name is required.',
  INSTITUTION_REQUIRED: 'Institution Name is required.',
  PHONE_REQUIRED: 'Phone Number is required.',
  PHONE_INVALID: 'Invalid phone number. It should be 10 digits.',
  EMAIL_REQUIRED: 'Email Address is required.',
  EMAIL_INVALID: 'Invalid email address.',
} as const;

export const API_ENDPOINTS = {
  CONTACT_FORM: 'https://bewise-api-test.azurewebsites.net/api/wc/saveenqlead',
} as const;
