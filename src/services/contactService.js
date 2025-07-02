import { API_CONFIG, DEFAULT_HEADERS } from '../config/api.config';

/**
 * Service to handle contact form submissions
 */
class ContactService {
  /**
   * Submit contact form data to the webhook
   * @param {Object} formData - The form data to submit
   * @param {string} formData.name - User's name
   * @param {string} formData.email - User's email
   * @param {string} formData.message - User's message
   * @returns {Promise<Object>} - The response from the server
   */
  static async submitContactForm(formData) {
    try {
      if (!API_CONFIG.CONTACT_FORM) {
        throw new Error('Contact form webhook URL is not configured');
      }

      const response = await fetch(API_CONFIG.CONTACT_FORM, {
        method: 'POST',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Add any additional fields required by your webhook
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error; // Re-throw to handle in the component
    }
  }
}

export default ContactService;
