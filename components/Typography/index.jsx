
const variants = {
  header1: {
    fontSize: '1.625rem',
    fontWeight: 700,
    lineHeight: '2.125rem',
  },
  header2: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: '2rem',
  },
  header3: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: '1.75rem',
  },
  header4: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: '1.625rem',
  },
  header5: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.5rem',
  },
  bodyXL: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.375rem',
  },
  bodyL: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
  bodyM: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: '1.125rem',
  },
  bodyS: {
    fontSize: '0.625rem',
    fontWeight: 400,
    lineHeight: '1rem',
  },
  button: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1.5rem',
  },
  link: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.5rem',
  },
  tabBar: {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: '0.875rem',
  },
  header1: {
    fontSize: '1.625rem',
    fontWeight: 700,
    lineHeight: '2.125rem',
  },
  
};

export function Typography ({variant, element, color = "", children, ...rest}) {
  const Tag = element || 'span';
  return <Tag style={variants[variant]} {...rest}>{children}</Tag>
}