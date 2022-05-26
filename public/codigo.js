class celular {
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.ram = ram;
		this.encendido = false;
	}
	presionarBotonEncendido(){
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("celular apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if (this.encendido == true) {
			alert("reiniciando celular");
		} else {
			alert("el celular está apagado");
		}
	}
	tomarFotos(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
	}
	grabarVideo(){
		alert(`video grabado en una resolucion de: ${this.resolucionDeCamara}`)
	}
	mobileInfo(){
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.ram}</b></br>
		`;
	}

}


class CelularAltagama extends celular{
	constructor(color,peso,tamaño,rdc,ram,rdce) {
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}
	reconocimeintoFacial(){
		alert("Vamos a iniciar un reconocimiento facial")
	}
	infoAltagama(){
		return this.mobileInfo() + `Resolucion de Camara Trasera:${this.resolucionDeCamaraExtra}`
	}
	presionarBotonEncendido(){
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("celular apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if (this.encendido == true) {
			alert("reiniciando celular");
		} else {
			alert("el celular está apagado");
		}
	}
	tomarFotos(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
	}
	grabarVideo(){
		alert(`video grabado en una resolucion de: ${this.resolucionDeCamara}`)
	}
}

// celular1 = new celular("rojo","150g","5'","HD","1GB");
// celular2 = new celular("blanco","155g","5.4'","FullHD","2GB");
// celular3 = new celular("negro","146g","5.9'","FullHD","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltagama("rojo","130g","5.2'","4k","3GB", "FullHD")
celular2 = new CelularAltagama("negro","142g","6","4k","4GB","HD")

celular1.presionarBotonEncendido();
celular1.reiniciar();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.grabarVideoLento();
celular1.reconocimeintoFacial();

document.write(`
	${celular1.infoAltagama()} <br><br>
	${celular2.infoAltagama()} <br>
	`)

/*Los problemas A y B estan resueltos aqui*/
