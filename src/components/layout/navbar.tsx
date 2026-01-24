import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Card Options", href: "#card-options" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-[92%] overflow-hidden xxs:w-[94%] xs2:w-[96%] xs:w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
                <div className="container mx-auto px-3 sm:px-4 md:px-8 max-w-7xl h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center h-8">
                        <img
                            src="/Light-Theme-Zypher-Logo.png"
                            alt="Zypher Logo"
                            className="h-full w-auto block dark:hidden"
                        />
                        <img
                            src="/Dark-theme-zypher-logo.png"
                            alt="Zypher Logo"
                            className="h-full w-auto hidden dark:block"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Button variant="ghost" size="sm">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.zypher.cards/dashboard/cards"
                                >Log in</a>
                            </Button>
                            <Button size="sm" className="hover:bg-accent/90 bg-metallic text-[#1a1a1a]">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.zypher.cards/dashboard/cards"
                                >Get Started</a>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-2 sm:gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {/* <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border bg-background"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-foreground py-2 hover:text-metallic transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <Button variant="outline" className="w-full">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.zypher.cards/dashboard/cards"
                                    >Log in</a>
                                </Button>
                                <Button className="hover:bg-accent/90 bg-metallic text-[#1a1a1a]">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.zypher.cards/dashboard/cards"
                                    >Get Started</a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}
            </nav>

            {/* Mobile Menu Backdrop & Drawer */}
            <div className={cn(
                "fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-all duration-700 ease-in-out",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )} onClick={() => setIsOpen(false)} />

            <div className={cn(
                "fixed top-0 right-0 z-70 h-full w-[85%] max-w-sm bg-[#0F0F0F] border-l border-white/10 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col p-4 gap-2.5">
                    {/* Header */}
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-white font-bold text-lg">Zypher Cards</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-foreground py-1.5 hover:text-metallic transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex flex-col gap-3 mt-6">
                        <Button variant="outline" className="w-full">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.zypher.cards/dashboard/cards"
                            >Log in</a>
                        </Button>
                        <Button className="hover:bg-accent/90 bg-metallic text-[#1a1a1a]">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.zypher.cards/dashboard/cards"
                            >Get Started</a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
