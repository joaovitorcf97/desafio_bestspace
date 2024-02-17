'use client';

import { IconProps } from '@phosphor-icons/react';
import {
  Controller,
  FieldErrors,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import style from './input.module.css';

export interface InputProps {
  id: string;
  label: string;
  type: 'text' | 'select';
  icon: React.ForwardRefExoticComponent<IconProps>;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
  errors: FieldErrors<FieldValues>;
}

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: any) => ({
    ...provided,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: '0 0 0 1px transparent',
  }),
  menu: (provided: any) => ({
    ...provided,
    background: '#0e0f16',
    color: 'white',
  }),
  option: (provided: any) => ({
    ...provided,
    background: '#0e0f16',
    color: 'white',
    ':hover': {
      background: '#c8fe08',
      color: '#0e0f16',
    },
  }),
  singleValue: (provided: any) => ({
    color: '#fff',
  }),
  valueContainer: (provided: any) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
};

export function Input({
  id,
  icon: Icon,
  label,
  type,
  options,
  errors,
}: InputProps) {
  const { register } = useFormContext();

  return (
    <div className={style.input_container}>
      <label>{label}</label>
      <div className={style.input}>
        <Icon size={24} />
        {type === 'text' ? (
          <input id={id} {...register(id)} placeholder="E-mail" />
        ) : (
          <Controller
            {...register(id)}
            render={({ field }) => (
              <Select
                id={id}
                {...field}
                options={options}
                styles={customStyles}
                placeholder="Selecione"
              />
            )}
          />
        )}
      </div>

      {errors[id] && (
        <div className={style.message_error}>
          <TextFieldError error={errors[id]?.message?.toString()} />
        </div>
      )}
    </div>
  );
}

function TextFieldError({ error }: { error?: string }) {
  return error ? <span>{error}</span> : null;
}
