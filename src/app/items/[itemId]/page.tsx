import Link from 'next/link';

export default function ItemPage({ params }: { params: { itemId: string } }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exemplo de Rota Dinâmica</h1>
      
      <p className="mb-2">Você está visualizando o item com ID:</p>
      <p className="font-mono p-4 bg-yellow-100 rounded mb-6">
        {params.itemId}
      </p>
      
      <div className="bg-orange-50 border border-orange-200 p-4 rounded mb-6">
        <h2 className="font-medium mb-2">Como funciona?</h2>
        <p className="mb-2">
          Esta página usa o recurso de <strong>Rotas Dinâmicas</strong> do Next.js, onde 
          <code className="bg-gray-100 px-1 rounded">[itemId]</code> no nome da pasta 
          significa um parâmetro dinâmico.
        </p>
        <p>
          O valor do parâmetro é automaticamente passado para o componente de página 
          através do objeto <code className="bg-gray-100 px-1 rounded">params</code>.
        </p>
      </div>
      
      <div className="flex gap-4 mb-8">
        <Link 
          href="/items/123" 
          className={`px-4 py-2 rounded-md ${params.itemId === '123' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
        >
          Item 123
        </Link>
        <Link 
          href="/items/abc" 
          className={`px-4 py-2 rounded-md ${params.itemId === 'abc' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
        >
          Item ABC
        </Link>
        <Link 
          href={`/items/${Date.now()}`} 
          className="px-4 py-2 rounded-md bg-gray-100"
        >
          Item Aleatório
        </Link>
      </div>
      
      <Link href="/" className="text-blue-600 hover:underline block">
        ← Voltar para Home
      </Link>
    </div>
  );
} 