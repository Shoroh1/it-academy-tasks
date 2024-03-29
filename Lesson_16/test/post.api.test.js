const axios = require('axios');
const {Validator} = require('jsonschema');
const postUsers = require('../testData/postUsers.v1.json');

const validator = new Validator();

describe('Post Api Test', () => {
    let result;
    beforeAll(async () => {
        result = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users',
            {
                "id": 0,
                "userName": "string",
                "password": "string",
            }, {
                headers: {
                    'accept':
                        'text/plain; v=1.0'
                }
            })
    })
    test('POST /api/v1/Users, status 200', async () => {
        expect(result.status).toEqual(200)
    })

    test('POST /api/v1/Users, jsonschema', async () => {
        expect(result).toBeValidSchema(postUsers)
    })
})