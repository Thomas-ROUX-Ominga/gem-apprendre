interface ImageSlotProps {
  placeholder?: string
  className?: string
  style?: React.CSSProperties
}

export default function ImageSlot({ placeholder = 'Photo à venir', className, style }: ImageSlotProps) {
  return (
    <div
      className={className}
      style={{
        background: 'linear-gradient(135deg, var(--paper-soft) 0%, var(--paper-deep) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'inherit',
        color: 'var(--ink-300)',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: '14px',
        textAlign: 'center',
        padding: '24px',
        ...style,
      }}
    >
      {placeholder}
    </div>
  )
}
