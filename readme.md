# Week 2 - Challenge 2

## strictEquals function

Escribe en un módulo propio, una función llamada strictEquals(a, b) que devuelva el mismo valor que a === b. Tu implementación no puede usar los operadores === ni !==.

Testea la función desde otro fichero con este set de pruebas:

Dada la función strictEquals
Cuando se comparan <A> y <B>
Entonces el resultado será <Result>

    
    ┌─────────┬─────────┬───────┬────────┐
    │ (index) │    a    │   b   │ result │
    ├─────────┼─────────┼───────┼────────┤
    │    0    │    1    │   1   │  true  │
    │    1    │   NaN   │  NaN  │ false  │
    │    2    │    0    │  -0   │  true  │
    │    3    │   -0    │   0   │  true  │
    │    4    │    1    │  '1'  │ false  │
    │    5    │  true   │ false │ false  │
    │    6    │  false  │ false │  true  │
    │    7    │ 'Water' │ 'Oil' │ false  │
    └─────────┴─────────┴───────┴────────┘ 
    
Crea un repo como siempre, con los mismos hook husky que anteriormente

Creamos proyecto incluido ESLint (airbnb) y prettier
Creamos el repo, protegemos la rama y añadimos husky
Creamos la rama de trabajo:
Mergeamos con PR
