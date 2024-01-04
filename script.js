// inputs de adição de itens
const itemInput = document.getElementById('listItemInput');
const itemAdd = document.getElementById('listAddInput');

// seção de adição de itens
const listItems = document.getElementById('listItems');

// array com os itens da lista
const itemArray = [];

// setando funções
itemAdd.addEventListener('click', addItem);

function addItem() {
    // criando elementos
    itemConteiner = document.createElement('div');
    checkBoxButton = document.createElement('input');
    p = document.createElement('p');
    editButton = document.createElement('input');
    removeButton = document.createElement('input');

    // pegando o valor do input text preenchido
    content = itemInput.value;

    // adicionando o conteúdo ao array
    itemArray.push(content);

    // pegando a sua posição
    lastIndex = itemArray.lastIndexOf(content);

    // setando atributos
    itemConteiner.setAttribute('data-itemTitle', lastIndex);
    checkBoxButton.setAttribute('type', 'checkbox');
    p.setAttribute('data-itemContent', lastIndex);
    p.setAttribute('contentEditable', 'false');
    editButton.setAttribute('type', 'button');
    editButton.setAttribute('value', 'editar');
    editButton.setAttribute('data-itemEdit', lastIndex);
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('value', 'remover');
    removeButton.setAttribute('data-itemRemover', lastIndex);

    // adicionando conteúdo a tag P
    p.innerText = content;

    // adicionando elementos ao contêiner de item
    listItems.appendChild(itemConteiner);

    // setando funções´
    removeButton.onclick = () => removeItem(listItems);
    editButton.onclick = () => editItem(listItems);

    // preenchendo o contêiner
    itemConteiner.appendChild(checkBoxButton);
    itemConteiner.appendChild(p);
    itemConteiner.appendChild(editButton);
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

function editItem(parentConteiner) {
    // childs localizados
    firstChild = parentConteiner.lastChild;
    secondChild = parentConteiner.lastChild.children[1];

    // atributos pegos
    firstChildAttr = firstChild.getAttribute('data-itemTitle');
    secondChildAttr = secondChild.getAttribute('data-itemContent');

    // comparação dos tributos
    if(firstChildAttr === secondChildAttr) {
        if(secondChild.getAttribute('contentEditable') === 'false') {
            secondChild.setAttribute('contentEditable', 'true');
        } else {
            secondChild.setAttribute('contentEditable', 'false');
        }
    }
}