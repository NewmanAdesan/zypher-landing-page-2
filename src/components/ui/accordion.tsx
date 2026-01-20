"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
    openItem: string | undefined
    setOpenItem: (value: string | undefined) => void
    type: "single" | "multiple"
    collapsible?: boolean
}>({
    openItem: undefined,
    setOpenItem: () => { },
    type: "single",
    collapsible: true,
})

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div"> & { type?: "single" | "multiple"; collapsible?: boolean; defaultValue?: string }
>(({ className, type = "single", collapsible = true, defaultValue, children, ...props }, ref) => {
    const [openItem, setOpenItem] = React.useState<string | undefined>(defaultValue)

    const handleSetOpenItem = (value: string | undefined) => {
        if (openItem === value && collapsible) {
            setOpenItem(undefined)
        } else {
            setOpenItem(value)
        }
    }

    return (
        <AccordionContext.Provider value={{ openItem, setOpenItem: handleSetOpenItem, type, collapsible }}>
            <div ref={ref} className={cn("", className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div"> & { value: string }
>(({ className, value, children, ...props }, ref) => {
    return (
        <AccordionItemContext.Provider value={{ value }}>
            <div ref={ref} className={cn("border-b", className)} data-value={value} {...props}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<"button">
>(({ className, children, ...props }, ref) => {

    // Need to find the parent AccordionItem value. A simplified approach:
    // In a real radix implementation this is handled via context. 
    // Here we'll require a bit of a hack or context nesting.
    // actually, let's wrap AccordionItem in a context provider for its value.

    // NOTE: To properly implement this matching the shadcn API without radix, we should check parent Item value
    // But since we can't easily traverse up without another context, let's assume the user of this component
    // interacts correctly or we add a context to Item.

    return (
        <AccordionTriggerInternal ref={ref} className={className} {...props}>
            {children}
        </AccordionTriggerInternal>
    )
})
AccordionTrigger.displayName = "AccordionTrigger"

// Helper to access Item context
const AccordionItemContext = React.createContext<{ value: string }>({ value: "" })



const AccordionTriggerInternal = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<"button">
>(({ className, children, ...props }, ref) => {
    const { openItem, setOpenItem } = React.useContext(AccordionContext)
    const { value } = React.useContext(AccordionItemContext)
    const isOpen = openItem === value

    return (
        <div className="flex">
            <button
                ref={ref}
                onClick={() => setOpenItem(value)}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                data-state={isOpen ? "open" : "closed"}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>
    )
})

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
    const { openItem } = React.useContext(AccordionContext)
    const { value } = React.useContext(AccordionItemContext)
    const isOpen = openItem === value

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden text-sm transition-all"
                >
                    <div ref={ref} className={cn("pb-4 pt-0", className)} {...props}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
