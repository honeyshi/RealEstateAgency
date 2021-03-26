export interface ColorProps {
  text?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'body'
    | 'muted'
    | 'white'
    | 'black-50'
    | 'white-50'
    | 'accent';
  bg?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'white'
    | 'transparent'
    | 'accent';
}

export function propsToColor(props: ColorProps) {
  const { bg, text } = props;

  delete props.bg;
  delete props.text;

  return {
    [`text-${text}`]: text != null,
    [`bg-${bg}`]: bg != null,
  };
}
