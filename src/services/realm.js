import Realm from 'realm'

import AuthorizationSchema from '../schemas/AuthorizationSchema';
import EvolutionSchema from '../schemas/EvolutionSchema';

export default function getRealm(){
    return Realm.open({
        schema: [Autorizations, Evolutions]
    })
}

const Autorizations = {
    name: 'autorizations',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
            hospital: 'string',
            beneficiario: 'string',
            evolucoes: "evolution[]"
    }
}

const Evolutions = {
    name: 'evolution',
    primaryKey: 'id',
    properties: {
        id: 'string',
        description: 'string',
        owners: {type: 'linkingObjects', objectType: 'autorizations', property: 'evolucoes'}
    }
}