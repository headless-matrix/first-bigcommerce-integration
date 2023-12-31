import request, { gql } from "graphql-request";
import { query } from "./query/getTree";


export const getTree: () => Promise<any> = () => {
    const variables = {}
    const BARER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9maXJzdC1iaWdjb21tZXJjZS1pbnRlZ3JhdGlvbi52ZXJjZWwuYXBwIl0sImVhdCI6MTg4NTYzNTE3NiwiaWF0IjoxNjk3ODExOTgzLCJpc3MiOiJCQyIsInNpZCI6MTAwMjk2NDg2Mywic3ViIjoidHE2dDhkYXRpaTdsMDJkb2xrM3Q0MjR3emQ4c2k5cSIsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxfQ.LWUi5FNhTbj_qZl3pccYX0ko9Ak0zrMhaGf2ByG861Y3uhDwhttBuzVE5vPMG7VJyKosWMPf3hMo3QzMIeqS6w";
    
    const ENDPOINT = "https://store-vhdd9nv8ef.mybigcommerce.com/graphql";
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