export default class AuthorizationSchema {
    static schema = {
        name: 'authorization',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            hospital: 'string',
            beneficiario: 'string',
        }
    }
}