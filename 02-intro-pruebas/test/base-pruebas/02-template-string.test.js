import { getSaludo } from '../../src/base-pruebas/02-template-string.js';


describe('Pruebas para 02-template-string', () => {

  test('getSaludo debe retornar Hola Juan', () => {
    const nombre = 'Juan';
    const saludo = getSaludo(nombre);

    expect(saludo).toBe('hola ' + nombre);
  });

});
