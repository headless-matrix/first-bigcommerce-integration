export async function graphQlFetch( {query, variables, cache = 'force-cache'} ){
    const BARER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9zdG9yZS12aGRkOW52OGVmLm15YmlnY29tbWVyY2UuY29tIl0sImVhdCI6MTg4NTYzNTE3NiwiaWF0IjoxNjk1Mzc0MTU1LCJpc3MiOiJCQyIsInNpZCI6MTAwMjk2NDg2Mywic3ViIjoidHE2dDhkYXRpaTdsMDJkb2xrM3Q0MjR3emQ4c2k5cSIsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxfQ.mMEtmdQYM5sFvfNeA8r1nvB38vAtxTrLP2RfZw-aCGm_iTpb2Yb38qfQAsjgISHaUsTgX-kZpJY2S-K-hgvbyQ";
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