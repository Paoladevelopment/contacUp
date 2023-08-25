export const subirInfo = async (data) => {
  try {
    const response = await fetch(
      'https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/items',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return await response.json();
  } catch (error) {
    return 'error en el servidor';
  }
};
