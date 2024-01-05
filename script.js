// inputs de adição de itens
const itemInput = document.getElementById('listItemInput');
const itemAdd = document.getElementById('listAddInput');
const itemClearList = document.getElementById('listClearListInput');

// seção de adição de itens
const listItems = document.getElementById('listItems');

// array com os itens da lista
const itemArray = [];

// setando funções
itemAdd.addEventListener('click', addItem);
itemClearList.addEventListener('click', () => listItems.innerText = '');
itemInput.oninput = () => {
    if(itemInput.value != '') {
        itemAdd.removeAttribute('disabled');
    } else {
        itemAdd.setAttribute('disabled', 'disabled');
    }
}

function addItem() {
    // criando elementos
    itemConteiner = document.createElement('div');
    p = document.createElement('p');
    removeButton = document.createElement('button');

    // pegando o valor do input text preenchido
    content = itemInput.value;

    // adicionando o conteúdo ao array
    itemArray.push(content);

    // pegando a sua posição
    lastIndex = itemArray.lastIndexOf(content);

    // setando atributos
    itemConteiner.setAttribute('data-itemTitle', lastIndex);
    removeButton.innerText = 'X';
    removeButton.setAttribute('data-itemRemover', lastIndex);
    itemAdd.setAttribute('disabled', 'disabled');

    // adicionando conteúdo a tag P
    p.innerText = content;

    // adicionando elementos ao contêiner de item
    listItems.appendChild(itemConteiner);

    // setando funções´
    removeButton.onclick = () => removeItem(listItems);

    // preenchendo o contêiner
    itemConteiner.appendChild(p);
    itemConteiner.appendChild(removeButton);

    // limpa o input text para ser preenchido novamente
    itemInput.value = '';
}

function removeItem(parentConteiner) {
    // childs localizados
    firstChild = parentConteiner.lastChild;
    secondChild = parentConteiner.lastChild.lastChild;

    // atributos pegos
    firstChildAttr = firstChild.getAttribute('data-itemTitle');
    secondChildAttr = secondChild.getAttribute('data-itemRemover');

    // comparação dos tributos
    if(firstChildAttr === secondChildAttr) {
        parentRemover = parentConteiner;
        childRemoved = firstChild;
        parentRemover.removeChild(childRemoved);
    }
}