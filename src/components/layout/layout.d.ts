export interface flexibleComponentProps {
  className?: string;
}

export interface layoutProps extends flexibleComponentProps {
  children: React.ReactNode;
}
