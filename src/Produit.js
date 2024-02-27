export default class Produit {
  constructor(id, nom, qte, photo) {
    this._id = id;
    this._nom = nom;
    this._qte = qte;
    this._photo = photo;
    if(photo==""){
      this._photo="../assets/gris.png"
  }

    
  }
  get id() {
    return this._id;
  }
  get nom() {
    return this._nom;
  }
  get qte() {
    return this._qte;
  }
  get photo(){
    return this._photo;
  }

  print() {
    return `${this.qte} ${this._nom}`;
  }
  add1p() {
    this._qte++;
  }
  delete1p() {
    this._qte--;
  }
}
