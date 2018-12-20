class spritList{
    
    /**
     * Konstruktor, um eine Sprite Liste zu erstellen
     */
    constructor(){
        this.elements = new Array();

    }
    /**
     * füge Elemente zur Liste hinzu
     * @param {*} sp sprite für die Liste
     */
    addSprite(sp){
        this.elements.push(sp);
    }

    update(){
        for(var i=0; i< this.elements.length; i++){
            this.elements[i].update();
        }
    }
}