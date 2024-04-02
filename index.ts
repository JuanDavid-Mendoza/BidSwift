import Core from "./core/main";

const core = new Core();

try {
  const recaudo = core.getInstance('Recaudo');
  recaudo.recibirPago();
} catch (error) {
  console.log(error);
}
try {
  const inventario = core.getInstance('Inventario');
  inventario.actualizarInventario();
} catch (error) {
  console.log(error);
}
try {
  const despacho = core.getInstance('Despacho');
  despacho.hacerEnvio();
} catch (error) {
  console.log(error);
}
try {
  const publicacion = core.getInstance('Publicacion');
  publicacion.generarPublicacion();
} catch (error) {
  console.log(error);
}