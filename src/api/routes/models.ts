import _ from 'lodash';


export default {

    prefix: '/v1',

    get: {
        '/models': async () => {
            return {
                "data": [
                    {
                        "id": "step",
                        "object": "model",
                        "owned_by": "step-free-api",
                        "description": "Default StepChat model"
                    },
                    {
                        "id": "step2",
                        "object": "model",
                        "owned_by": "step-free-api",
                        "description": "StepChat model with exampleId 6710ff1a80c0c9de0ffa887c"
                    },
                    {
                        "id": "step2-creator-2",
                        "object": "model",
                        "owned_by": "step-free-api",
                        "description": "StepChat model with creator-2 capabilities"
                    },
                    {
                        "id": "stepO1-3",
                        "object": "model",
                        "owned_by": "step-free-api",
                        "description": "StepChat model with O1-3 capabilities"
                    },
                    {
                        "id": "deepseek-r1",
                        "object": "model",
                        "owned_by": "step-free-api",
                        "description": "StepChat model with ds-r1 capabilities"
                    }
                ]
            };
        }

    }

}