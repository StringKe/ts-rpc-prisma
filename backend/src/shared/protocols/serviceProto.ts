import { ServiceProto } from 'tsrpc-proto';
import { ReqAddData, ResAddData } from './PtlAddData';
import { ReqGetData, ResGetData } from './PtlGetData';
import { ReqGetTestData, ResGetTestData } from './PtlGetTestData';

export interface ServiceType {
    api: {
        "AddData": {
            req: ReqAddData,
            res: ResAddData
        },
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        },
        "GetTestData": {
            req: ReqGetTestData,
            res: ResGetTestData
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 2,
    "services": [
        {
            "id": 0,
            "name": "AddData",
            "type": "api"
        },
        {
            "id": 1,
            "name": "GetData",
            "type": "api"
        },
        {
            "id": 2,
            "name": "GetTestData",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddData/ReqAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "email",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "name",
                                "type": {
                                    "type": "Union",
                                    "members": [
                                        {
                                            "id": 0,
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "type": {
                                                "type": "Literal",
                                                "literal": null
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlAddData/ResAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlGetData/ReqGetData": {
            "type": "Interface"
        },
        "PtlGetData/ResGetData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "PtlGetTestData/ReqGetTestData": {
            "type": "Interface"
        },
        "PtlGetTestData/ResGetTestData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
};