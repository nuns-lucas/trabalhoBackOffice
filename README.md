# XABULA-LEGAL
# GuimarEyes - Sistema de Gestão de Ocorrências e Auditorias

O GuimarEyes é uma aplicação para reportar e gerenciar ocorrências em serviços de transporte público e infraestrutura, composta por três componentes principais:

- **Front-Office**: Site público com informações sobre o serviço
- **Back-Office**: Aplicação administrativa para gerenciamento interno
- **PWA**: Aplicação progressiva para dispositivos móveis

## Requisitos de Sistema

- Windows 10 64-bit: Pro, Enterprise, ou Education (Build 16299 ou posterior)
- 4GB de RAM no mínimo
- Virtualização habilitada na BIOS

## Instalação do Docker para Windows

1. Faça o download do [Docker Desktop para Windows](https://docs.docker.com/desktop/install/windows-install/)

2. Execute o instalador Docker Desktop Installer.exe

3. Siga as instruções do assistente de instalação, mantendo as configurações padrão:
   - Aceite os termos de serviço
   - Autorize o instalador quando solicitado

4. Ao finalizar a instalação, clique em "Close and restart" para reiniciar seu computador

5. Após reiniciar, o Docker Desktop será iniciado automaticamente. O ícone do Docker aparecerá na barra de tarefas, indicando que o Docker está em execução

6. Verifique se a instalação foi bem-sucedida abrindo um terminal e executando:

```
docker --version docker-compose --version
```

## Configuração do Projeto

### 1. Clone o repositório
``` git
git clone https://github.com/nuns-lucas/trabalhoBackOffice.git 
cd trabalhoBackOffice
```

### 2. Configurar variáveis de ambiente para Firebase

#### Para o Back-Office

1. Crie um arquivo `.env` na pasta `back-office/` com o seguinte conteúdo:

```
VITE_FIREBASE_API_KEY=your_api_key 
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com 
VITE_FIREBASE_PROJECT_ID=your_project_id 
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com 
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id 
VITE_FIREBASE_APP_ID=your_app_id
```

#### Para a PWA

1. Crie um arquivo `.env` na pasta `pwa/` com o seguinte conteúdo:

```
VUE_APP_FIREBASE_API_KEY=your_api_key 
VUE_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com 
VUE_APP_FIREBASE_PROJECT_ID=your_project_id 
VUE_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com 
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id 
VUE_APP_FIREBASE_APP_ID=your_app_id
```

### Como obter as credenciais do Firebase

1. Acesse o [Console do Firebase](https://console.firebase.google.com/)
2. Crie um novo projeto ou selecione um existente
3. No painel lateral, clique em "Configurações do projeto" (ícone de engrenagem)
4. Na aba "Geral", role para baixo até a seção "Seus aplicativos"
5. Clique no botão "</>" para adicionar uma aplicação web
6. Dê um nome ao app e registre-o
7. Copie os valores de configuração para os arquivos `.env`

## Construir e executar com Docker

### Executar a aplicação

1. No diretório raiz do projeto, execute:

```
docker-compose up --build

```

2. Aguarde até que todas as imagens sejam construídas e os contêineres sejam iniciados

3. Acesse a aplicação através dos seguintes URLs:
   - Front-Office: http://localhost:8080/front-office/
   - Back-Office: http://localhost:8080/back-office/
   - PWA: http://localhost:8080/pwa/

### Parar a aplicação

Para interromper a execução da aplicação, pressione `Ctrl+C` no terminal onde o docker-compose está sendo executado, ou execute:

``` 
docker-compose down
```


## Solução de Problemas

### Erro na porta 8080
Se houver erro indicando que a porta 8080 já está em uso, modifique a porta no arquivo `docker-compose.yml`:

```yaml
services:
  web:
    ports:
      - "8081:80"  # Altere de 8080 para 8081 ou outra porta disponível
```

## Problemas com permissão de arquivo
Se ocorrer problemas de permissão, execute o Docker com privilégios de administrador.

Docker não inicia
Verifique se a virtualização está habilitada na BIOS do seu computador.