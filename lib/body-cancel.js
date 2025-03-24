'use strict';

(async () => {
  //example get call
  const url = 'https://example.com/api';
  const method = 'GET';
  const options = {
    method,
    headers: {
      'Content-Type': 'text',
    },
  };
  const result = await fetch(url, options).then(async (res) => {
    const code = res.status;
    if (code === 200) return await res.text();
    await res.body.cancel(); // explicit cancellation
    const dest = `for ${method} ${url}`;
    throw new Error(`HTTP status code ${code} ${dest}`);
  });

  console.log(result);
})();
