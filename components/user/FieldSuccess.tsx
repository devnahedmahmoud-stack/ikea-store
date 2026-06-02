import { cn } from '@/lib/utils';

type fieldSuccessProps = {
    id: string;
    message: string;
    className?:string,
    icon?: React.ReactNode
}
const FieldSuccess = ({id, message, className, icon }: fieldSuccessProps) => {
  return (
    <p id={id} className={cn("text-sm text-green-700", className)}>
      {icon && <span className="mr-2">{icon}</span>}
      {message}
    </p>
  )
}

export default FieldSuccess