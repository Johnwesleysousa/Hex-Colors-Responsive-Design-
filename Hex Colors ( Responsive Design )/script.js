function changeColors(){
    let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];

    let hexcode = '';

    for (let i = 0;i < 6; i++){
        let random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index]
    }

document.getElementById("hex-code").innerHTML = hexcode;

document.getElementsByTagName("body")[0].style.background = "#" + hexcode;

}






















// A função changeColors no JavaScript serve para alterar as cores de elementos HTML em uma página web. Esta função recebe como parâmetro os elementos que deseja alterar e as novas cores que deseja aplicar a eles.

// O funcionamento da função changeColors é simples: ela percorre a lista de elementos informados e aplica as cores especificadas a cada um deles. Isso pode ser útil para modificar a aparência de elementos específicos da página, como textos, botões, backgrounds, entre outros.

// Além disso, a função changeColors permite personalizar a experiência do usuário, criando uma identidade visual única para o site. Por exemplo, você pode mudar a cor de um botão quando o mouse passa por cima dele, tornando a interação mais dinâmica e atraente.

// Em resumo, a função changeColors no JavaScript é uma ferramenta poderosa para manipular o estilo dos elementos em uma página web, permitindo personalizar a aparência e melhorar a experiência do usuário.