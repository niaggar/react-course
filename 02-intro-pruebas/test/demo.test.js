// Forma de agrupar pruebas dentro de un solo archivo
describe('Pruebas que son unicamente de practica', () => {
  test('Nombre de la pureba', () => {
    // La prueba falla si se da un error o si mediante el método expect no se cumple la condición
  })


  test('Otra prueba', () => {
    // Inicializacion
    const text = 'Hola mundo'
    
    // Estimulo
    const result = text.toUpperCase()
    
    // Observar el comportamiento
    expect(result).toBe('HOLA MUNDO')
  })
})
