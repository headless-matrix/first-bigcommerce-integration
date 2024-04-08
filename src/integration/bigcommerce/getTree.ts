import request, { gql } from "graphql-request";
import { query } from "./query/getTree";


export const getTree: () => Promise<any> = () => {
    const variables = {}
    const BARER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9maXJzdC1iaWdjb21tZXJjZS1pbnRlZ3JhdGlvbi52ZXJjZWwuYXBwIl0sImVhdCI6MTg4NTYzNTE3NiwiaWF0IjoxNzEyNTczNzA0LCJpc3MiOiJCQyIsInNpZCI6MTAwMjk2NDg0NSwic3ViIjoiaWFqeDhkMDQyMmtmb2JmaHVvejgxbmx3dnNlczduIiwic3ViX3R5cGUiOjIsInRva2VuX3R5cGUiOjF9.aEV5rx1UaWJZ29rbdbIrhxODi9K-Rm8FSSLaxewi8ZHyL4LIjK16Y1dmQuwcLEY6fMcJx3DvdrXLsHO6UtzfYg";
    
    const ENDPOINT = "https://store-irzkz7wvyt.mybigcommerce.com/graphql";
    const auth = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${BARER_TOKEN}`,
    }

    return (
        request(`${ENDPOINT}`, gql`${query}`, variables, auth)
            .then((response) => response)
            .catch((e) => {
                console.error(e);
                return undefined;
            })
    )
};