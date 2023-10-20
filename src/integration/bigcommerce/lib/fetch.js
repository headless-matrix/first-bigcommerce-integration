export async function graphQlFetch( {query, variables, cache = 'force-cache'} ){
  const BARER_TOKEN =  process.env.BIGCOMMERCE_BARER_TOKEN;
  const endpoint = process.env.BIGCOMMERCE_ENDPOINT;

  //const reinvalidate = (cache == 'force-cache') ? {} : { revalidate: 900 }  // 15 minutes
  const reinvalidate = 'force-cache';

  const result = await fetch(`${endpoint}`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BARER_TOKEN}`, // use auto-generated token
    },
    body: JSON.stringify({
      query: `${query}`,
      variables: variables
    }),
    cache,
    next: { reinvalidate } // 15 minutes
  })    
    .catch((error) => console.error(error));

    const body = await result.json();

    return body;
      
}