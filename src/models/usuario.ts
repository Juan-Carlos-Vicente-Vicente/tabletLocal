export class Usuario {
    constructor(
        public identifier: string
        , public name: string
        , public firstname: string
        , public secondname: string
        , public sex: string
        , public dateofbirth: string
        , public height: string
        , public job: string
        , public job_grade: number
        , public bank_money: number
        , public phone_number: string
        , public license: []
        , public phone_calls: []
        , public validated: boolean
        , public house_id: null
        , public vehiclemodel: string
        , public vehicleplate: string
    ) { }
}