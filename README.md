# Para quem irá fazer alterações neste código

Passo 1 -

`git clone https://github.com/Sir-Aguiar/point.git`

Passo 2 -

Antes mesmo de realizar as suas alterações, garanta de criar uma branch da master, e lá faça todas as alterações

`git branch <nome descritivo da alteração a ser feita>`

Passo 3 -

A cada vez que sentir a necessidade de realizar um commit, faça-o ele ficará registrado em sua brench que depois será convergido à branch master

`git commit -m "<NOME>"`

Passo 4 -

Quando todas as alterações já estiverem prontas e as funcionalidades que você estava trabalhando implementadas, então envie os commits desta branch

`git push -u origin <nome descritivo da alteração a ser feita>`

# Configurando o Firestore no seu ambiente

Passo 1 -

Crie na raíz do seu projeto um arquivo `.env.local`

Passo 2 -

Insira neste arquivo as credenciais de acesso ao banco