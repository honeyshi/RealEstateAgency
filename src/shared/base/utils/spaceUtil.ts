type SizeType = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';
type BreakpointType = 'sm' | 'md' | 'lg' | 'xl';
type SpaceType = 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'mx' | 'my' | 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'px' | 'py';

export interface SpaceProps {
  m?: SizeType;
  mt?: SizeType;
  mb?: SizeType;
  ml?: SizeType;
  mr?: SizeType;
  mx?: SizeType;
  my?: SizeType;
  p?: SizeType;
  pt?: SizeType;
  pb?: SizeType;
  pl?: SizeType;
  pr?: SizeType;
  px?: SizeType;
  py?: SizeType;
  breakpoint?: BreakpointType;
  space?: SpaceType;
}

export function propsToSpace(props: SpaceProps) {
  const { m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py, breakpoint, space } = props;

  delete props.m;
  delete props.mt;
  delete props.mb;
  delete props.ml;
  delete props.mr;
  delete props.mx;
  delete props.my;
  delete props.p;
  delete props.pt;
  delete props.pb;
  delete props.pl;
  delete props.pr;
  delete props.px;
  delete props.py;
  delete props.breakpoint;
  delete props.space;

  return {
    [`m-${breakpoint != null && space === 'm' ? `${breakpoint}-` : ''}${m}`]: m != null,
    [`mt-${breakpoint != null && space === 'mt' ? `${breakpoint}-` : ''}${mt}`]: mt != null,
    [`mb-${breakpoint != null && space === 'mb' ? `${breakpoint}-` : ''}${mb}`]: mb != null,
    [`ml-${breakpoint != null && space === 'ml' ? `${breakpoint}-` : ''}${ml}`]: ml != null,
    [`mr-${breakpoint != null && space === 'mr' ? `${breakpoint}-` : ''}${mr}`]: mr != null,
    [`mx-${breakpoint != null && space === 'mx' ? `${breakpoint}-` : ''}${mx}`]: mx != null,
    [`my-${breakpoint != null && space === 'my' ? `${breakpoint}-` : ''}${my}`]: my != null,
    [`p-${breakpoint != null && space === 'p' ? `${breakpoint}-` : ''}${p}`]: p != null,
    [`pt-${breakpoint != null && space === 'pt' ? `${breakpoint}-` : ''}${pt}`]: pt != null,
    [`pb-${breakpoint != null && space === 'pb' ? `${breakpoint}-` : ''}${pb}`]: pb != null,
    [`pl-${breakpoint != null && space === 'pl' ? `${breakpoint}-` : ''}${pl}`]: pl != null,
    [`pr-${breakpoint != null && space === 'pr' ? `${breakpoint}-` : ''}${pr}`]: pr != null,
    [`px-${breakpoint != null && space === 'px' ? `${breakpoint}-` : ''}${px}`]: px != null,
    [`py-${breakpoint != null && space === 'py' ? `${breakpoint}-` : ''}${py}`]: py != null,
  };
}
