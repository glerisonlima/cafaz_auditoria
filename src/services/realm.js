import Realm from 'realm'

import AuthorizationSchema from '../schemas/AuthorizationSchema';

export default function getRealm(){
    return Realm.open({
        schema: [AuthorizationSchema]
    })
}