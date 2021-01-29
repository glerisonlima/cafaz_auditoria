export default class EvolutionSchema{
    static schema = {
        name: 'evoluction',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            description: 'string' 
        }
    }
}