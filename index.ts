export class movel {
    constructor ( public nome: string, public material: string ){

    }
    puxar(): string {
        return`${this.nome} puxada`
    }
}