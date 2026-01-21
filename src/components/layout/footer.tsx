

export function Footer() {
    return (
        <footer className="bg-card border-t border-border pt-16 pb-8 mt-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 max-w-[320px]">
                        <div className="flex items-center h-8 mb-6">
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
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            The world's most private, secure, and anonymous crypto card platform.
                            Banking without the bank.
                        </p>
                    </div>

                    <div className="justify-center">
                        <h4 className="font-semibold mb-4 text-foreground">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
                            <li><a href="#how-it-works" className="hover:text-accent transition-colors">How it words</a></li>
                            <li><a href="#pricing" className="hover:text-accent transition-colors">Card Options</a></li>
                            <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
