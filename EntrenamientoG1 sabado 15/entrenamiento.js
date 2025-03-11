// Iniciar el quiz después de obtener el nombre del estudiante
function startQuiz() {
    let studentName = document.getElementById("studentNameInput").value;
    if (studentName === "") {
        alert("Por favor ingresa tu nombre.");
        return;
    }

    // Almacenar el nombre del estudiante
    localStorage.setItem('studentName', studentName);

    // Reiniciar la página y ocultar la pantalla de bienvenida
    document.getElementById("studentName").style.display = "none";
    document.getElementById("quizQuestions").style.display = "block";
}

// Verificar las respuestas del quiz
function checkAnswers() {
    let score = 0;

    // HTML Questions
    if (document.querySelector('input[name="html_q1"]:checked')?.value === 'b') score++;
    if (document.querySelector('input[name="html_q2"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="html_q3"]:checked')?.value === 'a') score++;

    // CSS Questions
    if (document.querySelector('input[name="css_q1"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="css_q2"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="css_q3"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="css_q4"]:checked')?.value === 'b') score++;
    if (document.querySelector('input[name="css_q5"]:checked')?.value === 'a') score++;

    // JavaScript Questions
    if (document.querySelector('input[name="js_q1"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="js_q2"]:checked')?.value === 'd') score++;
    if (document.querySelector('input[name="js_q3"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="js_q4"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="js_q5"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="js_q6"]:checked')?.value === 'a') score++;
    if (document.querySelector('input[name="js_q7"]:checked')?.value === 'a') score++;

    // Mostrar el resultado final
    let totalQuestions = 15; // Número total de preguntas
    let percentage = (score / totalQuestions) * 100;

    // Mostrar el resultado al estudiante
    let studentName = localStorage.getItem('studentName');
    document.getElementById('result').innerHTML = `<p>${studentName}, tu puntaje es: ${score} de ${totalQuestions} (${percentage}%)</p>`;
    
    // Bloquear el quiz para no poder realizarlo nuevamente
    document.querySelectorAll('input').forEach(input => input.disabled = true);
    document.querySelector("button").disabled = true;
}