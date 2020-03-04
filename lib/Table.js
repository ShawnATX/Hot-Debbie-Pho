class Table  {
    constructor(name, phone, email, party, uniqueId){

        this.name = name;
        this.phone = phone;
        this.email = email;
        this.party = party;
        this.uniqueId = uniqueId;
    }

    getName() {
        return this.name;
    }

    getPhone() {
        return this.phone;
    }

    getemail() {
        return this.email;
    }

    getParty(){
        return this.party;
    }

    getUniqueId(){
        return this.uniqueId;
    }
}


module.exports = Table;