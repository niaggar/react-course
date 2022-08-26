import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas para 05-funciones', () => {
  test('validacion de getUser', () => {
    const user = getUser();
    
    expect(user).toEqual({
      uid: 'ABC123',
      username: 'El_Papi1502'
    });
  })

  test('validacion de getUsuarioActivo', () => {
    const user = getUsuarioActivo('El_Papi1502');
    
    expect(user).toEqual({
      uid: 'ABC567',
      username: 'El_Papi1502'
    });
  })
})
