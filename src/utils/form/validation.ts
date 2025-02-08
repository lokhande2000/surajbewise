import { z } from 'zod';

import { FormData, FormErrors } from '@/types/form';

// export const validateContactForm = (formData: FormData): FormErrors => {
//   const newErrors: FormErrors = {};
//   const { firstName, institutionName, phoneNumber, email } = formData;

//   if (!firstName.trim()) newErrors.firstName = 'First Name is required.';
//   if (!institutionName.trim()) newErrors.institutionName = 'Institution Name is required.';
//   if (!phoneNumber.trim()) {
//     newErrors.phoneNumber = 'Phone Number is required.';
//   } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
//     newErrors.phoneNumber = 'Invalid phone number. It should be 10 digits.';
//   }
//   if (!email.trim()) {
//     newErrors.email = 'Email Address is required.';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     newErrors.email = 'Invalid email address.';
//   }

//   return newErrors;
// };

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required.'),
  institutionName: z.string().min(1, 'Institution Name is required.'),
  phoneNumber: z
    .string()
    .min(10, 'Phone Number is required.')
    .max(10, 'Phone Number must be 10 digits.')
    .regex(/^[0-9]+$/, 'Invalid phone number. It should be 10 digits.'),
  email: z.string().min(1, 'Email Address is required.').email('Invalid email address.'),
  message: z.string().optional(), 
});


export type ContactFormData = z.infer<typeof contactFormSchema>;
