const AWS = require("aws-sdk");

// Configurando o SSM para usar o LocalStack
const ssm = new AWS.SSM({
  endpoint: "http://localhost:4566", // Endpoint do LocalStack
  region: "us-east-1", // Região que você definiu
  accessKeyId: "test", // Credenciais fictícias para usar localmente
  secretAccessKey: "test",
});

// Exemplo de uso: criar um parâmetro no SSM
const putParameter = async () => {
  const params = {
    Name: "/my/parameter",
    Value: "test-value",
    Type: "String",
  };

  try {
    const result = await ssm.putParameter(params).promise();
    console.log("Parâmetro criado:", result);
  } catch (err) {
    console.error("Erro ao criar parâmetro:", err);
  }
};

// Exemplo de uso: buscar um parâmetro no SSM
const getParameter = async () => {
  const params = {
    Name: "/my/parameter",
  };

  try {
    const result = await ssm.getParameter(params).promise();
    console.log("Parâmetro recuperado:", result.Parameter);
  } catch (err) {
    console.error("Erro ao recuperar parâmetro:", err);
  }
};

putParameter();
getParameter();
