# PiedraPapelTijera
Practica HTML,CSS,JS

1. `const options = ["rock", "paper", "scissors"];`
   - Se declara un array llamado `options` que contiene las opciones válidas del juego: "rock" (piedra), "paper" (papel) y "scissors" (tijera).

2. `function play(userChoice) { ... }`
   - Esta es la función principal del juego que se ejecuta cuando el jugador selecciona una opción. Toma la opción elegida por el jugador como argumento.

3. `const computerChoice = getRandomChoice();`
   - Se llama a la función `getRandomChoice()` para obtener una opción aleatoria para la computadora.

4. `const result = getResult(userChoice, computerChoice);`
   - Se llama a la función `getResult()` para determinar el resultado del juego en base a las opciones elegidas por el jugador y la computadora.

5. `showMessage(result, userChoice, computerChoice);`
   - Se llama a la función `showMessage()` para mostrar el mensaje de resultado en la página, indicando qué opciones se eligieron y cuál fue el resultado del juego.

6. `function getRandomChoice() { ... }`
   - Esta función genera una opción aleatoria para la computadora. Utiliza `Math.random()` para generar un número aleatorio y lo mapea al índice de una opción en el array `options`.

7. `function getResult(userChoice, computerChoice) { ... }`
   - Esta función determina el resultado del juego en base a las opciones elegidas por el jugador y la computadora. Utiliza condiciones para verificar todas las posibles combinaciones de opciones y devuelve un mensaje de resultado correspondiente.

8. `function showMessage(result, userChoice, computerChoice) { ... }`
   - Esta función muestra el mensaje de resultado en la página. Actualiza el contenido del elemento con el id "message" para mostrar qué opciones se eligieron y cuál fue el resultado del juego.

9. `function updateScoreboard() { ... }`
   - Esta función actualiza el marcador en la página, mostrando los puntajes parciales del jugador y la computadora. Obtiene las referencias a los elementos correspondientes en el HTML y actualiza su contenido.

10. `function checkGameEnd() { ... }`
    - Esta función verifica si se alcanzó el límite de victorias para finalizar el juego. Si un jugador alcanza el límite, deshabilita los botones de opción para evitar más jugadas.

11. `function resetGame() { ... }`
    - Esta función reinicia el juego, restableciendo los puntajes y habilitando los botones de opción. También borra el mensaje de resultado y actualiza el marcador en la página.

12. `const buttons = document.querySelectorAll(".option");`
    - Obtiene todas las referencias a los elementos de botón de opción en el HTML utilizando `document.querySelectorAll()`. Los elementos tienen la clase CSS "option".

13. `buttons.forEach(function(button) { ... });`
    - Agrega un evento de escucha a cada botón de opción utilizando `forEach()`. Cuando se hace clic en un botón, se ejecuta la función proporcionada como argumento, que llama a la función `play()` con la opción correspondiente.
