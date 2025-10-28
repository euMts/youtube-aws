import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = process.env.API_URL || 'https://api.example.com/test';
  
  try {
    console.log('Fazendo requisição para:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (compatible; API-Tester-Server/1.0)',
      },
    });

    console.log('Status da resposta:', response.status);
    
    if (!response.ok) {
      return NextResponse.json({ 
        error: `HTTP error! status: ${response.status} - ${response.statusText}`,
        status: response.status
      }, { status: response.status });
    }

    const data = await response.text();
    console.log('Dados recebidos:', data);
    
    return NextResponse.json({ 
      success: true,
      data: data,
      status: response.status,
      url: apiUrl
    });
    
  } catch (error) {
    console.error('Erro na requisição:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      url: apiUrl
    }, { status: 500 });
  }
}
