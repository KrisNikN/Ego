import React from "react";
import * as S from "./elements";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { HTMLInputProps } from "types";

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   variant?: string;
// }

export interface FormTextInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  label?: string;
  control: Control<T, any>;
  variant?: string;
}

export const FormInput = <T extends FieldValues = any>({
  placeholder,
  variant,
  name,
  control,
  ...props
}: FormTextInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "" as any
  });

  if (error) {
    return (
      <>
        <S.FormInput
          {...props}
          type={props.type || "text"}
          variant='alert'
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
        />
      </>
    );
  }

  return (
    <>
      <S.FormInput
        {...props}
        type={props.type || "text"}
        variant={variant}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
      />
    </>
  );
};
