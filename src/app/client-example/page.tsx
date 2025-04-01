import Link from "next/link";
import { CounterButton } from "@/components/CounterButton";

export default function ClientExamplePage() {
  // Esta página é um Server Component por padrão
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exemplo de Client Components</h1>
      
      <p className="mb-6">
        Esta página é um <strong>Server Component</strong> por padrão, mas inclui um componente cliente interativo abaixo:
      </p>
      
      {/* O componente CounterButton lida com seu próprio estado e interatividade */}
      <CounterButton />
      
      <div className="bg-green-50 border border-green-200 p-4 rounded mt-8 mb-6">
        <h2 className="font-medium mb-2">Como funciona?</h2>
        <p className="mb-2">
          O <code className="bg-gray-100 px-1 rounded">CounterButton</code> é marcado com a diretiva{" "}
          <code className="bg-gray-100 px-1 rounded">"use client"</code>, tornando-o um Client Component.
        </p>
        <p>
          Isso significa que ele é renderizado inicialmente no servidor (hydration), mas depois 
          funciona inteiramente no navegador, permitindo interatividade.
        </p>
      </div>
      
      <div className="bg-purple-50 border border-purple-200 p-4 rounded mb-8">
        <h2 className="font-medium mb-2">Benefícios do Client + Server Components:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Componentes de servidor: rápidos, leves, SEO-friendly</li>
          <li>Componentes cliente: interatividade rica quando necessário</li>
          <li>Zustand permite compartilhar estado entre componentes cliente</li>
          <li>Abordagem "mix-and-match" otimiza para cada caso de uso</li>
        </ul>
      </div>
      
      <Link href="/" className="text-blue-600 hover:underline block">
        ← Voltar para Home
      </Link>
    </div>
  );
} 