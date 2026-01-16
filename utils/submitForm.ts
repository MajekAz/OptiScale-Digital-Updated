
export const submitForm = async (data: any) => {
  try {
    // Ensuring the endpoint matches the user request exactly
    const response = await fetch('https://optiscaledigital.co.uk/sendform.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok || result.status === 'error') {
      throw new Error(result.message || `Server returned ${response.status}`);
    }

    return result;
  } catch (error) {
    console.error("Form submission error:", error);
    throw error;
  }
};
