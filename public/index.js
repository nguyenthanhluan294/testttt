@Page({
    templateUrl: 'build/public/index.html'
})
let contacts = (contact) => {
    let ct = {
        id: contact.sfid,
        firstname: contact.firstname,
        lastname: contact.lastname,
        phone: contact.phone,
        mobiphone: contact.mobiphone
    }
    return ct;
};
export class index {

    ngOnInit() {
        this.http.get('/contact').map(response => response.json().map(contacts)).subscribe(conta => this.conta = conta);
    }
}