import { ApiCall } from "tsrpc";
import { ReqGetTestData, ResGetTestData } from "../shared/protocols/PtlGetTestData";

export default async function (call: ApiCall<ReqGetTestData, ResGetTestData>) {
    // TODO
    call.error('API Not Implemented');
}