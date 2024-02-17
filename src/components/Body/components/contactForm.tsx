'use client';

import { Input } from '@/components/input/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeSimple, MapPin, PaperPlaneTilt } from '@phosphor-icons/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../Button/Button';
import style from './contactForm.module.css';

const country = [
  { value: 'brasil', label: 'Brasil' },
  { value: 'estados-unidos', label: 'Estados Unidos' },
  { value: 'japao', label: 'Japão' },
];

const state = [
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'sp', label: 'São Paulo' },
];

const city = [
  { value: 'belohorizonte', label: 'Belo Horizonte' },
  { value: 'guarulhos', label: 'Guarulhos' },
];

const contactForm = z.object({
  email: z
    .string()
    .email({ message: 'E-mail é invalido' })
    .min(1, 'Campo obrigatório'),
  country: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    { required_error: 'Campo obrigatório' }
  ),
  state: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    { required_error: 'Campo obrigatório' }
  ),
  city: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    { required_error: 'Campo obrigatório' }
  ),
});

export type ContactForm = z.infer<typeof contactForm>;

export function ContactForm() {
  const methods = useForm<ContactForm>({ resolver: zodResolver(contactForm) });

  function handleContactForm(data: ContactForm) {
    console.log(data);
  }

  return (
    <div className={style.contactForm}>
      <div className={style.descripton}>
        <h2>
          Para <span>empresa</span>?
        </h2>
        <p>Entre em contato conosco.</p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleContactForm)}>
          <div>
            <Input
              id="email"
              label="E-mail"
              icon={EnvelopeSimple}
              type="text"
              errors={methods.formState.errors}
            />
          </div>
          <div>
            <Input
              label="Pais"
              icon={MapPin}
              type="select"
              options={country}
              id="country"
              errors={methods.formState.errors}
            />
            <Input
              label="Estado"
              icon={MapPin}
              type="select"
              options={state}
              id="state"
              errors={methods.formState.errors}
            />
            <Input
              label="Cidade"
              icon={MapPin}
              type="select"
              options={city}
              id="city"
              errors={methods.formState.errors}
            />
          </div>
          <Button type="submit" title="Enviar" icon={PaperPlaneTilt} />
        </form>
      </FormProvider>
    </div>
  );
}
