import request, { gql } from "graphql-request";
import { query } from "./query/getTree";


export const getTree: () => Promise<any> = () => {
    const variables = {}
    const BARER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOltdLCJlYXQiOjE4ODU2MzUxNzYsImlhdCI6MTcxMjU2NzQ0MywiaXNzIjoiQkMiLCJzaWQiOjEwMDI5NjQ4NDUsInN1YiI6Imlhang4ZDA0MjJrZm9iZmh1b3o4MW5sd3ZzZXM3biIsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoyfQ.yqBnpWIIvKK0ngKK0GjUakvMnswDQrE_7nX6fOquq8dxcR-yHqkFsx4zLTVpbGeg12g9HrIgE8fto4jCVd09CQ";
    
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