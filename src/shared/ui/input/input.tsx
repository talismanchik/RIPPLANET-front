import {ComponentPropsWithoutRef, forwardRef} from 'react'
import s from './input.module.scss'
import {Icon} from "../icon/icon.tsx";
import {Typography} from "../typography/typography.tsx";

export type InputProps = {
    label?: string
    clearField?: () => void
    error?: string
    placeholder?: string
    variant?: 'eyeDecoration' | 'searchDecoration' | 'withoutDecoration'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            className,
            clearField,
            error,
            variant = 'withoutDecoration',
            placeholder,
            ...rest
        },
        ref
    ) => {
        // const [closedEye, setClosedEye] = useState(true)

        /*const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e)
            onValueChange?.(e.currentTarget.value)
        }*/

        return (
            <div className={s.container}>
                {label && <Typography as='div' variant={'body2'} className={s.label}>{label}</Typography>}
                < div className={`${s.root} ${className}`}>
                    <input
                        className={`${s.input} ${s[variant]} ${error ? 's.error!!!' : ''}`}
                        placeholder={placeholder}
                        name={rest.name}
                        /*onChange={onChangeHandler}*/
                        ref={ref}
                        /*type={variant === 'eyeDecoration' && closedEye ? 'password' : 'text'}*/
                        /*value={value}*/
                        {...rest}
                    />
                    {/*{variant === 'eyeDecoration' && (
                        <button
                            className={s.eyeSection}
                            disabled={rest.disabled}
                            onClick={() => {
                                setClosedEye(prev => !prev)
                            }}
                             type={'button'}
                        >
                            {closedEye ? (
                                <Icon height={'20'} iconId={'eye_off_outline'} width={'20'} />
                            ) : (
                                <Icon height={'20'} iconId={'eye_outline'} width={'20'} />
                            )}
                        </button>
                    )}*/}

                    {variant === 'searchDecoration' && (
                        <button className={s.searchSection} disabled={rest.disabled} type={'button'}>
                            <Icon height={'35'} iconId={'search'} width={'35'}/>
                        </button>
                    )}
                </div>

                {/* {error && (
                    <span className={s.errorCaption}>
                        {error}
                    </span>
                )}*/}
            </div>
        )
    }
)
