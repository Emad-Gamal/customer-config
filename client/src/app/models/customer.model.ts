
export interface Customer{
    customerID: {
        type: Number
    },
    name: {
        first: String,
        last: String
    },
    birthday: {
        type: String
    },
    gender: {
        type: String
    },
    lastContact: {
        type: String,
    },
    customerLifetimeValue: {
        type: Number
    }
}
