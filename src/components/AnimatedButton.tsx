type AnimatedButtonProps = {
  children: string;
  onClick?: () => void
  layoutProp?: string
  stackSelected?: string
  padding: string;
  
}



export default function AnimatedButton({ children, onClick, layoutProp, stackSelected, padding}: AnimatedButtonProps) {

  const isSelected = stackSelected === layoutProp && layoutProp;

  return (
    <div 
      className={`fancy ${padding} ${isSelected ? 'is-selected' : ''}`}
      onClick={onClick}
    >
      <button className={`text-[0.9rem] absolute inset-0 z-10`}>
        {children}
      </button>
    </div>
  );
}


