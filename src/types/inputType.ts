export type inputProps={
    label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  errorMessage?: any;
  value?: string
  name?: string
  onChange?: (date: any) => void;
}

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface buttonProps {
    label?: string;
    type?: ButtonType;
    className?: string;
    onClick?: () => void;
}