import request, { gql } from "graphql-request";
import { query } from "./query/getTree";


export const getTree: () => Promise<any> = () => {
    const variables = {}
    const BARER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaHR0cHM6Ly9iaWdjb21tZXJjZS1jYXRlZ29yeS52ZXJjZWwuYXBwIl0sImVhdCI6MTg4NTYzNTE3NiwiaWF0IjoxNjk1ODEyOTk1LCJpc3MiOiJCQyIsInNpZCI6MTAwMjk2NDg2Mywic3ViIjoidHE2dDhkYXRpaTdsMDJkb2xrM3Q0MjR3emQ4c2k5cSIsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxfQ.fpReJwHbaL4m-dtsXAFjJjCfjR18F3oNXlgqY1UtR-0neyb0as2Pec5Tdgg2COLH3k6osnnZQh1uoPc_crJJkA";
    const auth = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${BARER_TOKEN}`,
    }
    return (
        request('https://store-vhdd9nv8ef.mybigcommerce.com/graphql', gql`${query}`, variables, auth)
            .then((response) => response)
            .catch((e) => {
                console.error(e);
                return undefined;
            })
    )
};