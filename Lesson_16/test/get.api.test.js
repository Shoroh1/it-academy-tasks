const axios = require('axios');
const {Validator} = require('jsonschema');
const getUsers = require('../testData/getUsers.v1.json');

const validator = new Validator();
describe('API Tests', () => {
    let result;
    beforeAll(async() => {
        result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users',
            {
                headers: {
                    'accept':
                        'text/plain; v=1.0'
                }
            })
    })
    test('GET /api/v1/Users, status 200', async () => {
        expect(result.status).toEqual(200)
    })

    test('GET /api/v1/Users, jsonschema', async () => {
        const validationResult = await validator.validate(result.data, getUsers)
        expect(validationResult.valid).toEqual(true)
    })
})