'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          ...Object.fromEntries(formData.entries()),
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.message || 'Falha ao enviar a mensagem.');
      }

      setStatus('success');
      formElement.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Falha ao enviar a mensagem. Tente novamente mais tarde ou fale conosco diretamente.');
    }
  };

  return (
    <div className="p-40 bg-color-op-1 rounded-1">
      <h3>Fale Conosco</h3>
      <form onSubmit={sendEmail} name="contactForm" id="contact_form" className="form-border">
        <div className="visually-hidden" aria-hidden="true">
          <label htmlFor="contact-website">Não preencha este campo</label>
          <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="mb-4">
          <input type="text" name="name" id="name" className="form-control" placeholder="Seu Nome" required />
        </div>

        <div className="mb-4">
          <input type="email" name="email" id="email" className="form-control" placeholder="Seu E-mail" required />
        </div>

        <div className="mb-4">
          <input type="text" name="phone" id="phone" className="form-control" placeholder="Seu Telefone" required />
        </div>

        <div className="mb-4 mb20">
          <textarea name="message" id="message" className="form-control" placeholder="Sua Mensagem" required></textarea>
        </div>

        <div id='submit' className="mt20">
          <input
            type='submit'
            id='send_message'
            value={status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
            className="btn-main"
            disabled={status === 'sending'}
          />
        </div>

        {status === 'success' && (
          <div id="success_message" className='success' style={{ display: 'block' }}>
            Sua mensagem foi enviada com sucesso.
          </div>
        )}
        
        {status === 'error' && (
          <div id="error_message" className='error' style={{ display: 'block' }}>
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
