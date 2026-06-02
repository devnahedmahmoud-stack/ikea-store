import { cn } from '@/lib/utils';
import Link from 'next/link';

type fieldErrorProps = {
    id: string;
    error: string;
    className?:string,
    icon?: React.ReactNode,
    existAccount?:boolean
}
const FieldError = ({id, error, className, icon ,existAccount}: fieldErrorProps) => {
  return (
    <p id={id} className={cn("text-sm text-destructive", className)}>
      {icon && <span className="mr-2">{icon}</span>}
      {error}
{existAccount && <Link href={"/profile/login"} className='text-black underline'>
Login instead?
</Link>}
    </p>
  )
}

export default FieldError