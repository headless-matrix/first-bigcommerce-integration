export async function graphQlFetch( {query, variables, cache = 'force-cache'} ){
    const BARER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOltdLCJlYXQiOjE4ODU2MzUxNzYsImlhdCI6MTY5Nzc5ODgxOCwiaXNzIjoiQkMiLCJzaWQiOjEwMDI5NjQ4NjMsInN1YiI6InRxNnQ4ZGF0aWk3bDAyZG9sazN0NDI0d3pkOHNpOXEiLCJzdWJfdHlwZSI6MiwidG9rZW5fdHlwZSI6MX0.UY_Qr-32w8gfoS8JkC_BkvC-GS5dodgI0DhkqSL8Xq96N9xNZWTHks1bytcFhSXJ-vgaqhyyAjk7lcN__2FUsw";
  //const endpoint = "https://ms-sandbox.mybigcommerce.com/graphql";
  const endpoint = "https://store-vhdd9nv8ef.mybigcommerce.com/graphql";


  const reinvalidate = (cache == 'force-cache') ? {} : { revalidate: 900 }  // 15 minutes

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