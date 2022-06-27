import './Container.scss';

export default function Container({ children, maxWidth = '100%' }) {
  return (
    <div className="Container" style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  );
}
