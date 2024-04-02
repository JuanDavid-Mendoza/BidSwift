import Recaudo from "../layer/logic/pagos/Recaudo";
import Inventario from "../layer/logic/registro_productos/Inventario";
import Despacho from "../layer/view/envios/Despacho";
import Publicacion from "../layer/view/subasta/Publicacion";

interface ClaseConstructor {
  new(): any;
}

const clasesDisponibles: { [key: string]: ClaseConstructor } = {
  "Inventario": Inventario,
  "Despacho": Despacho,
  "Recaudo": Recaudo,
  "Publicacion": Publicacion
};

export default class Core {
  getInstance(nombreClase: string) {
    const Clase = clasesDisponibles[nombreClase];
    if (Clase) {
      return new Clase();
    } else {
      throw new Error(`Clase '${nombreClase}' no encontrada`);
    }
  }
}
