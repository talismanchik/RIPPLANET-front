import {List, Root, Trigger} from "@radix-ui/react-tabs";
import {Typography} from "../typography/typography.tsx";

import s from './tabSwitcher.module.scss'

type Props = {
    className?: string
    items: TabItem[]
    label?: string
    onValueChange: (value: string) => void
    value: null | string
}

export const  TabSwitcher = ({ className, items, label, onValueChange, value }: Props) => {

    const itemMarkup = items.map((item, key) => {
        return (
            <Trigger className={s.TabsTrigger} disabled={item.disabled} key={key} value={item.value}>
                <Typography variant={'body1'}>{item.title}</Typography>
            </Trigger>
        )
    })

    return (
        <Typography as='div' className={`${s.tabSwitcherContainer} ${className}`} variant={'body2'}>
            {label}
            <Root defaultValue={'0'} onValueChange={onValueChange} value={value ?? items[1].value}>
                <List className={s.TabsList}>{itemMarkup}</List>
            </Root>
        </Typography>
    )
}

export type TabItem = {
    disabled?: boolean
    title: string
    value: string
}
