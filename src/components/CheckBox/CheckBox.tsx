import { Control, FieldValues, Path, useController } from 'react-hook-form';
import * as S from './elements';
import { HTMLInputProps } from 'types';

export interface FormCheckboxProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, 'name' | 'defaultValue'> {
  name: Path<T>;
  label?: string;
  control: Control<T, any>;
  variant?: 'error' | 'default';
}

interface Props {
  variant?: string;
  typeM?: string;
}

export const CheckBox = <T extends FieldValues = any>({
  variant,
  name,
  control,
  ...props
}: FormCheckboxProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: false as any,
  });

  if (error) {
    return (
      <>
        <S.CheckBox
          {...props}
          variant='alert'
          type='checkbox'
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          checked={value}
        />
      </>
    );
  }

  return (
    <>
      <S.CheckBox
        {...props}
        variant={variant}
        type='checkbox'
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
        checked={value}
      />
    </>
  );
};
