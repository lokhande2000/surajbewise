import { FormData } from '@/types/form';

export const submitContactForm = async (formData: FormData): Promise<Response> => {
  const response = await fetch('https://bewise-api-test.azurewebsites.net/api/wc/saveenqlead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit the form. Please try again later.');
  }

  return response;
};
