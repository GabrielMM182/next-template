import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Hello World!</h1>
      <p className="text-lg mb-8 text-red-600">
        Bem-vindo ao template Next.js com App Router, Server Components, e mais.
      </p>

      <div className="grid gap-6 mb-8">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Componentes e Recursos</h2>
          <ul className="space-y-2 mb-4">
            <li>✅ Next.js 14 com App Router</li>
            <li>✅ TypeScript com tipagem completa</li>
            <li>✅ Tailwind CSS para estilização</li>
            <li>✅ Shadcn UI para componentes</li>
            <li>✅ Zustand para gerenciamento de estado</li>
            <li>✅ React Query para requisições e cache</li>
            <li>✅ React Hook Form e Zod para formulários</li>
          </ul>
          
          <div className="flex gap-4">
            <Button asChild>
              <Link href="https://nextjs.org/docs">Documentação Next.js</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://ui.shadcn.com/">Componentes shadcn/ui</Link>
            </Button>
          </div>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Exemplos de Recursos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link 
              href="/ssr-example" 
              className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-medium text-lg">SSR Example</h3>
              <p className="text-gray-600">Demonstração de Server-Side Rendering</p>
            </Link>
            <Link 
              href="/client-example"
              className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-medium text-lg">Client Components</h3>
              <p className="text-gray-600">Interatividade com Client Components</p>
            </Link>
            <Link 
              href="/items/123"
              className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-medium text-lg">Item 123</h3>
              <p className="text-gray-600">Exemplo de rota dinâmica</p>
            </Link>
            <Link 
              href="/items/abc"
              className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-medium text-lg">Item ABC</h3>
              <p className="text-gray-600">Outro exemplo de rota dinâmica</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 