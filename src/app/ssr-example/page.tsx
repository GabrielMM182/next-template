import Link from "next/link";

async function getServerData() {
  // Simula um fetch de dados no servidor
  await new Promise(resolve => setTimeout(resolve, 500)); // Pequeno delay para simulação
  const time = new Date().toLocaleTimeString('pt-BR');
  return { serverTime: time };
}

export default async function SsrExamplePage() {
  // Este código executa no servidor a cada request
  const data = await getServerData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exemplo de SSR (Server-Side Rendering)</h1>
      <p className="mb-4">Estes dados foram buscados no servidor antes da renderização:</p>
      <p className="font-mono p-4 bg-gray-100 rounded mb-4">
        Hora do Servidor: {data.serverTime}
      </p>
      <p className="text-sm text-gray-600 mb-6">
        (Recarregue a página para ver a hora atualizada, buscada no lado do servidor)
      </p>
      
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mb-6">
        <h2 className="font-medium mb-2">Como funciona?</h2>
        <p>
          Esta página usa um componente <code className="bg-gray-100 px-1 rounded">async</code> que 
          aguarda dados antes de renderizar. O Next.js automaticamente trata componentes assíncronos 
          como Server Components, que são executados apenas no servidor.
        </p>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6">
        <h2 className="font-medium mb-2">Benefícios do SSR:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Melhor SEO, pois o conteúdo já está pronto para indexação</li>
          <li>Performance inicial melhor para o usuário (FCP mais rápido)</li>
          <li>Não expõe credenciais ou lógicas sensíveis ao cliente</li>
          <li>Redução de JavaScript enviado ao cliente</li>
        </ul>
      </div>
      
      <Link href="/" className="text-blue-600 hover:underline mt-4 block">
        ← Voltar para Home
      </Link>
    </div>
  );
} 