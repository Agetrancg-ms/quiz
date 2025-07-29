"use client";
import { useState } from 'react';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setLoading(true);
    setEnviado(false);
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setEnviado(true);
        setForm({ nome: '', email: '', mensagem: '' });
      } else {
        setErro('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (err) {
      setErro('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-card text-card rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-4 text-theme">Contato</h1>
      <p className="mb-6">Tem dúvidas, sugestões ou quer falar conosco? Preencha o formulário abaixo:</p>
      {enviado ? (
        <div className="p-4 bg-green-100 text-green-800 rounded mb-4">Mensagem enviada com sucesso! Obrigado pelo contato.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="w-full p-2 border border-theme rounded-md bg-input text-input"
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-theme rounded-md bg-input text-input"
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={5}
              className="w-full p-2 border border-theme rounded-md bg-input text-input"
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
            />
          </div>
          {erro && <div className="p-4 bg-error text-error rounded mb-4">{erro}</div>}
          <button
            type="submit"
            className="w-full bg-button text-button py-2 px-4 rounded-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  );
}
