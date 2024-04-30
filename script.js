
const config = {
  hiddenLayers: [3], // Una capa oculta con 3 neuronas
  activation: 'sigmoid', // Función de activación sigmoidal
};

// Crear una nueva instancia de la red neuronal
const net = new brain.NeuralNetwork(config);

// Datos de entrenamiento
const trainingData = [
    { input: 
        { input1: 0.945, input2: 0.667, input3: 0.577 },
            output: { output: 0 } },
    { input:
        { input1: 0.564, input2: 0.718, input3: 0.091 },
        output: { output: 1 } },
    { input:
        { input1: 0.174, input2: 0.055, input3: 0.572 },
        output: { output: 1 } },
    { input:
        { input1: 0.998, input2: 0.560, input3: 0.140 },
        output: { output: 0 } },
    { input:
        { input1: 0.195, input2: 0.197, input3: 0.661 },
        output:{ output: 1 } },
    { input:
        { input1: 0.616, input2: 0.804, input3: 0.885 },
        output: { output: 0 } },
    { input:
        { input1: 0.304, input2: 0.447, input3: 0.246 },
        output: { output: 1 } },
    { input:
        { input1: 0.970, input2: 0.043, input3: 0.490 },
        output: { output: 0 } },
    { input:
        { input1: 0.521, input2: 0.736, input3: 0.712 },
        output: { output: 0 } },
    { input:
        { input1: 0.235, input2: 0.956, input3: 0.110 },
        output: { output: 0 } },
    { input:
        { input1: 0.589, input2: 0.626, input3: 0.221 },
        output: { output: 1 } },
    { input:
        { input1: 0.497, input2: 0.068, input3: 0.699 },
        output: { output: 1 } },
    { input:
        { input1: 0.014, input2: 0.837, input3: 0.785 },
        output: { output: 0 } },
    { input:
        { input1: 0.603, input2: 0.996, input3: 0.080 },
        output: { output: 0 } },
    { input:
        { input1: 0.395, input2: 0.969, input3: 0.534 },
        output: { output: 0 } },
    { input:
        { input1: 0.598, input2: 0.647, input3: 0.143 },
        output: { output: 0 } },
    { input:
        { input1: 0.031, input2: 0.671, input3: 0.526 },
        output: { output: 1 } }
];


// Entrenar la red neuronal
net.train(trainingData);

function predecirOutput(input1, input2, input3) {
    const output = net.run({ input1, input2, input3 }).output;
    return output > 0.7 ? 1 : 0;
}

function generarNumeros() {
    var numeros = [];
    for (var i = 0; i < 3; i++) {
    numeros.push((Math.random() * (1 - 0) + 0).toFixed(3));
    }
    document.getElementById('input1').value = numeros[0];
    document.getElementById('input2').value = numeros[1];
    document.getElementById('input3').value = numeros[2];

  // Calcular el output basado en la condición
    var output = (numeros[0] > 0.7 && numeros[1] > 0.7 && numeros[2] > 0.7) ? 1 : 0;

  // Predecir el output con la red neuronal
    var neuralPrediction = predecirOutput(numeros[0], numeros[1], numeros[2]);

  // Mostrar el output y la predicción en la interfaz
    document.getElementById('output').value = output;
    document.getElementById('prediction').value = neuralPrediction;

  // Crear una nueva fila en la tabla de resultados
    var table = document.getElementById('outputTable');
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = numeros[0];
    cell2.innerHTML = numeros[1];
    cell3.innerHTML = numeros[2];
    cell4.innerHTML = output;
    cell5.innerHTML = neuralPrediction;
    }
